// Runs the chooser countdown at fixed dates and checks what each card says.
const fs=require('fs'), path=require('path'), assert=require('assert');
const page=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const src=page.split('<script>')[1].split('</script>')[0];
const RealDate=Date;
function at(iso){
  const els={};
  global.document={getElementById:id=>els[id] ||= {innerHTML:'',hidden:true}};
  global.Date=class extends RealDate{ constructor(...a){ super(...(a.length?a:[iso])); } };
  eval(src);
  global.Date=RealDate;
  return {m:els['cd-municipal'].innerHTML, p:els['cd-provincial'].innerHTML};
}
let r=at('2026-10-01T12:00:00');
assert.match(r.m,/<b>16<\/b> days until voting day/); assert.match(r.m,/starts in 2 days/);
assert.match(r.p,/<b>23<\/b> days/); assert.match(r.p,/opens in 15 days/);
r=at('2026-10-06T09:00:00');
assert.match(r.m,/under way/); assert.match(r.p,/opens in 10 days/);
r=at('2026-10-16T09:00:00');
assert.match(r.m,/<b>1<\/b> day until/); assert.doesNotMatch(r.m,/Advance/); assert.match(r.p,/open today/);
r=at('2026-10-21T20:00:00'); assert.match(r.p,/open today/);
r=at('2026-10-22T09:00:00'); assert.match(r.p,/has ended/);
r=at('2026-10-17T09:00:00'); assert.match(r.m,/Today/);
r=at('2026-10-24T09:00:00'); assert.match(r.p,/Today/); assert.match(r.m,/was held on Saturday 17 October/);
r=at('2026-10-25T09:00:00'); assert.match(r.p,/was held on Saturday 24 October/);
console.log('chooser countdown: all checks passed');
