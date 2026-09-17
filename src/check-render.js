const fs=require('fs'), path=require('path');
const PAGE=path.join(__dirname,'..','index.html');
const page=fs.readFileSync(PAGE,'utf8');
const realIds=new Set([...page.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
const els={};
const missing=[];
function el(id){
  if(!realIds.has(id)){ missing.push(id); return null; }   // mimic the browser
  return els[id] ||= {id,innerHTML:'',textContent:'',hidden:false,dataset:{},
                      addEventListener(){},setAttribute(){},closest:()=>null};
}
global.document={getElementById:el,querySelectorAll:()=>[],addEventListener(){},
                 body:{classList:{toggle(){}}}};
global.window={scrollTo(){},print(){},scrollY:0,addEventListener(){},matchMedia:()=>({matches:false})};
let store={};
global.localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v}};
const src=fs.readFileSync(PAGE,'utf8').split('<script>')[1].split('</script>')[0];
let err=null;
try{ eval(src); }catch(e){ err=e; }
console.log('ids referenced but NOT in the HTML:', missing.length?[...new Set(missing)]:'none');
console.log('script threw:', err? (err.name+': '+err.message) : 'no');
console.log('roster rendered:', (els.roster?.innerHTML||'').length, 'chars');
console.log('jtabs rendered:', (els.jtabs?.innerHTML||'').match(/class="jtab"/g)?.length||0, 'tabs');
console.log('glance rendered:', (els.glance?.innerHTML||'').length, 'chars');
console.log('card rendered:', (els.cardbody?.innerHTML||'').length, 'chars');
console.log('days:', els.days?.textContent);
