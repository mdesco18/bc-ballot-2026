// Drives the real page functions against the real candidate data.
// check-render.js proves the script runs; this proves two of its decisions are right.
const fs=require('fs'), path=require('path'), assert=require('assert');
const page=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');

const els={};
const el=id=>els[id] ||= {id,innerHTML:'',textContent:'',hidden:false,dataset:{},
                          addEventListener(){},setAttribute(){},closest:()=>null};
global.document={getElementById:el,querySelectorAll:()=>[],addEventListener(){},
                 querySelector:()=>({classList:{add(){},remove(){},toggle(){},contains:()=>false}}),
                 body:{classList:{toggle(){}}}};
global.window={scrollTo(){},print(){},scrollY:0,innerWidth:1280,addEventListener(){},
               matchMedia:()=>({matches:false}),requestAnimationFrame:f=>f()};
let store={};
global.localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v}};

const src=page.split('<script>')[1].split('</script>')[0];
// sloppy-mode eval leaks the page's own function declarations into this scope,
// so reach them through T rather than redeclaring the same names.
eval(src+'\n;globalThis.T={showEmpty,syncPrintCount,state,marks,ALL};');
const T=globalThis.T, state=T.state, marks=T.marks;

let n=0;
const ok=(label,cond)=>{ n++; assert.ok(cond,label); console.log('  ok  '+label); };

// --- the Print button counts every ballot, and ignores marks with no candidate behind them
marks.clear();
marks.add('Vancouver|Mayor|Ken Sim');
marks.add('Richmond|Mayor|Kash Heed');
T.syncPrintCount();
ok('print button counts marks across municipalities', el('printbtn').textContent==='Print shortlist (2)');
marks.add('Vancouver|Mayor|Someone Who Withdrew');
T.syncPrintCount();
ok('print button ignores a mark with no candidate', el('printbtn').textContent==='Print shortlist (2)');
marks.clear(); T.syncPrintCount();
ok('print button drops the count at zero', el('printbtn').textContent==='Print shortlist');

// --- a search that matches only another ballot says so, and offers the jump
Object.assign(state,{j:'Vancouver',race:'all',party:null,q:'kash heed',onlyMarked:false});
T.showEmpty(0);
ok('names the other ballot',      /1 in Richmond/.test(el('empty').innerHTML));
ok('offers a jump to it',         /data-j="Richmond"/.test(el('empty').innerHTML));

state.q='zzzznotacandidate';
T.showEmpty(0);
ok('stays quiet when nothing matches anywhere', !/elsewhere/.test(el('empty').innerHTML));

// the hint must agree with the active race filter, or the jump lands on an empty list again
state.q='kash heed'; state.race='Council';
T.showEmpty(0);
ok('respects the race filter', !/elsewhere/.test(el('empty').innerHTML));

state.race='Mayor';
T.showEmpty(0);
ok('finds it again under the matching race', /1 in Richmond/.test(el('empty').innerHTML));

// a hit on the current ballot is not advertised as being elsewhere
Object.assign(state,{j:'Richmond',race:'all',q:'kash heed'});
T.showEmpty(0);
ok('does not point at the tab you are already on', !/in Richmond/.test(el('empty').innerHTML));

console.log(`\n${n} checks passed`);
