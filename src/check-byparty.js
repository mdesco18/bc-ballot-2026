// Clicks each "Find a party" chip on the provincial page and checks the district list it shows.
const fs=require('fs'), path=require('path'), assert=require('assert');
const page=fs.readFileSync(path.join(__dirname,'..','provincial','index.html'),'utf8');
const els={}, handlers={};
const el=id=>els[id] ||= {id,innerHTML:'',textContent:'',hidden:false,dataset:{},value:'',
  addEventListener(t,f){ (handlers[id+':'+t] ||= []).push(f); },setAttribute(){},querySelectorAll:()=>[],
  scrollIntoView(){},closest:()=>null};
global.document={getElementById:el,querySelectorAll:()=>[],addEventListener(){},querySelector:()=>null,
  body:{classList:{toggle(){}}}};
global.window={scrollTo(){},print(){},scrollY:0,innerWidth:1280,addEventListener(){},matchMedia:()=>({matches:false}),requestAnimationFrame:f=>f()};
global.localStorage={getItem:()=>null,setItem(){}};
eval(page.split('<script>')[1].split('</script>')[0].replace(/^const (\w+)=/gm,'var $1=').replace(/^let (\w+)=/gm,'var $1='));
// The fake target matches only the selector the handler under test looks for.
const SEL={bypchips:'.bychip',bypout:'.bypj',roster:'.aboutp'};
const click=(id,dataset)=>handlers[id+':click'].forEach(f=>f({target:{closest:s=>s===SEL[id]?{dataset}:null}}));
for(const p of [...new Set(ALL.map(c=>c.party))]){
  click('bypchips',{party:p});
  const html=els.bypout.innerHTML, has=JORDER.filter(j=>ALL.some(c=>c.j===j&&c.party===p));
  assert.strictEqual(els.bypout.hidden,false,p);
  if(PNOTE[p]) assert.ok(html.includes('class="pnote"'),p+' note');
  if(PLINK[p]) assert.ok(html.includes(PLINK[p]),p+' campaign link');
  assert.ok(html.includes(has.length===JORDER.length?'a candidate in all 26':`candidates in ${has.length} of the 26`),p);
  assert.strictEqual((html.match(/No candidate/g)||[]).length, JORDER.length-has.length, p);
  for(const c of ALL.filter(c=>c.party===p)) assert.ok(html.includes(c.name.replace(/&/g,'&amp;')),c.name);
  click('bypchips',{party:p});
  assert.strictEqual(els.bypout.hidden,true,p+' toggles off');
}
assert.ok(els.roster.innerHTML.includes('class="aboutp"') && !els.roster.innerHTML.includes('class="pnote"'),'roster links to the panel instead of repeating notes');
click('roster',{party:'CentreBC'});
assert.ok(els.bypout.innerHTML.includes('CentreBC</strong> has candidates'),'About this party opens the panel');
click('bypchips',{party:'BC Green Party'});
click('bypout',{j:'Delta South'});
assert.strictEqual(state.j,'Delta South');
console.log('find a party: all checks passed');
