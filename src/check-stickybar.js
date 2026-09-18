// Replays the real event sequence against the real page script, with a DOM stub that
// captures listeners so they can be fired in a chosen order. Exists because the filter
// panel resizing the sticky bar made the bar hide itself, and that is not reachable
// from check-render.js.
const fs=require('fs'), path=require('path'), assert=require('assert');
const page=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');

function harness(){
  const scrollFns=[], ros=[], clicks={};
  const cls=new Set();
  const bar={classList:{add:c=>cls.add(c),remove:c=>cls.delete(c),
                        toggle:(c,v)=>{v?cls.add(c):cls.delete(c)},contains:c=>cls.has(c)}};
  // masthead scrolled well out of view, so the bar counts as pinned
  const masthead={getBoundingClientRect:()=>({bottom:-400})};
  const els={};
  const el=id=>els[id] ||= {id,innerHTML:'',textContent:'',hidden:false,dataset:{},
        addEventListener(t,f){ if(t==='click') clicks[id]=f; },
        setAttribute(){},closest:()=>null,
        classList:{add(){},remove(){},toggle(){},contains:()=>false},
        querySelector:()=>null};
  global.document={getElementById:el,querySelectorAll:()=>[],addEventListener(){},
    querySelector:s=>s==='.controls'?bar:s==='.masthead'?masthead:{classList:bar.classList},
    body:{classList:{toggle(){}}}};
  global.window={scrollY:0,innerWidth:390,scrollTo(){},print(){},
    addEventListener(t,f){ if(t==='scroll') scrollFns.push(f); },
    matchMedia:()=>({matches:true,addEventListener(){}}),   // mobile
    requestAnimationFrame:f=>f()};
  global.getComputedStyle=()=>({top:'0px'});
  global.ResizeObserver=class{ constructor(cb){ ros.push(cb); } observe(){} };
  let store={};
  global.localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v}};

  const src=page.split('<script>')[1].split('</script>')[0];
  eval(src);
  return {
    hidden:()=>cls.has('hide'),
    scrollTo(y){ global.window.scrollY=y; scrollFns.forEach(f=>f()); },
    click(id){ if(clicks[id]) clicks[id]({target:{closest:()=>null},currentTarget:el(id)}); },
    resize(){ ros.forEach(cb=>cb()); },
    _clicks:clicks, _ros:ros, _scrollFns:scrollFns,
  };
}

let n=0;
const ok=(label,cond)=>{ n++; assert.ok(cond,label); console.log('  ok  '+label); };

// Put the bar in a known, visible, pinned state: scroll down (which hides it), then
// nudge back up (which shows it). Starting from 0 would itself read as one huge flick.
function settled(){
  const h=harness();
  h.scrollTo(500);
  h.scrollTo(490);
  assert.ok(!h.hidden(), 'precondition: bar visible before the case under test');
  return h;
}

let h=harness();
h.scrollTo(500);
ok('hides on a downward scroll', h.hidden());
h.scrollTo(490);
ok('returns on an upward scroll', !h.hidden());

// the reported bug: the filter panel grows the bar, the browser corrects the scroll
// position to keep the page steady, and that correction must not read as a flick
h=settled();
h.click('filterstoggle');
h.scrollTo(670);
ok('opening the filter panel leaves the bar alone', !h.hidden());

// same shape when the party chips are rebuilt for another municipality
h=settled();
h.click('filterstoggle');
h.scrollTo(670);
h.scrollTo(500);
ok('and again after it settles', !h.hidden());

// the backstop path, for height changes with no click behind them
h=settled();
h.resize();
h.scrollTo(670);
ok('a bare resize of the bar leaves it alone', !h.hidden());

// the suppression must not be permanent
h=settled();
h.click('filterstoggle');
h.scrollTo(670);
const t=Date.now(); while(Date.now()-t<450);   // let the settle window lapse
h.scrollTo(900);
ok('a genuine scroll still hides it once the window lapses', h.hidden());

console.log(`\n${n} checks passed`);
