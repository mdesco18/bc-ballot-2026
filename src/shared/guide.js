// Shared rendering engine. Each page's config.js defines the election-specific constants it reads.
const KEY=STORE+".marks";
let marks=new Set();
try{ const r=localStorage.getItem(KEY); if(r) marks=new Set(JSON.parse(r)); }catch(e){}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify([...marks])); }catch(e){} }

let filtersOpen=true;
try{ const v=localStorage.getItem(STORE+".filters");
     filtersOpen = v===null ? ((window.innerWidth||1024)>640) : v==="1"; }catch(e){ filtersOpen=true; }
const state={j:JORDER[0], race:"all", party:null, q:"", onlyMarked:false};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const slot=p=>SLOT[p] || "--hind";

// jurisdiction picker: tabs for a handful, a grouped native select when there are too many for tabs
document.getElementById("jtabs").innerHTML = JGROUPS
  ? `<select class="jselect" aria-label="Choose your electoral district">${JGROUPS.map(([g,js])=>
      `<optgroup label="${esc(g)}">${js.map(j=>`<option value="${esc(j)}"${j===state.j?" selected":""}>${esc(SHORT[j]||j)}</option>`).join("")}</optgroup>`).join("")}</select>`
  : JORDER.map(j=>
  `<button type="button" class="jtab" data-j="${esc(j)}" aria-pressed="${j===state.j}" aria-current="${j===state.j?"page":"false"}">${esc(SHORT[j]||j)}</button>`).join("");

function rowsFor(j){ return ALL.filter(c=>c.j===j); }
function partiesFor(j){
  const seen=[];
  for(const c of rowsFor(j)) if(!seen.includes(c.party)) seen.push(c.party);
  return seen.filter(p=>p!=="Independent").concat(seen.includes("Independent")?["Independent"]:[]);
}
function racesFor(j){ return RACES.filter(r=>rowsFor(j).some(c=>c.race===r)); }

function renderGlance(){
  const m=J[state.j], rows=rowsFor(state.j);
  const cells = racesFor(state.j).map(r=>{
    const n=rows.filter(c=>c.race===r).length, s=m.seats[r];
    return `<div class="gcell"><div class="t-lab">${esc(RACE_LABEL[r]||r)}</div><div class="t-num">${n}</div><div class="t-sub">${s===1?"1 seat &middot; vote for 1":s+" seats &middot; vote for up to "+s}</div></div>`;
  }).join("");
  const shortlisted = [...marks].filter(k=>k.startsWith(state.j+"|")).length;
  document.getElementById("glance").innerHTML =
    `<div class="glance-top">${cells}<div class="gcell"><div class="t-lab">Your shortlist</div><div class="t-num" id="markcount">${shortlisted}</div><div class="t-sub">marked here</div></div></div>
     <div class="glance-body">${m.blurb.map(p=>`<p>${esc(p)}</p>`).join("")}
       <div class="dates">${m.dates.map(d=>`<div><b>${esc(d[0])}</b>${esc(d[1])}</div>`).join("")}</div>
       <p style="margin-top:12px;font-size:13px"><a href="${esc(m.link)}" target="_blank" rel="noopener">Official candidate list &rarr;</a> &nbsp;&nbsp; <a href="${esc(m.vote)}" target="_blank" rel="noopener">Register and find your voting place &rarr;</a></p>
     </div>`;
}

function syncFilters(){
  const p=document.getElementById("filterpanel"), b=document.getElementById("filterstoggle");
  if(!p||!b) return;
  p.hidden=!filtersOpen;
  b.setAttribute("aria-expanded", String(filtersOpen));
  const active=(state.party?1:0)+(state.onlyMarked?1:0);
  b.textContent = active ? "Filters ("+active+")" : "Filters";
  b.setAttribute("aria-pressed", String(active>0));
}
function renderControls(){
  document.querySelectorAll("#raceseg button").forEach(b=>{
    const r=b.dataset.race;
    b.hidden = r!=="all" && !racesFor(state.j).includes(r);
    b.setAttribute("aria-pressed", String(r===state.race));
  });
  document.getElementById("parties").innerHTML = partiesFor(state.j).map(p=>
    `<button type="button" class="pchip" data-party="${esc(p)}" aria-pressed="${p===state.party}" style="--pc:var(${slot(p)})"><span class="dot"></span>${esc(p)}</button>`).join("");
}

function renderRoster(){
  const rows=rowsFor(state.j), out=[];
  for(const race of racesFor(state.j)){
    const inRace=rows.filter(c=>c.race===race);
    const s=J[state.j].seats[race];
    const title = RACE_TITLE[race]||race;
    const rn = raceNote(state.j,race), note = rn ? `<p class="racenote">${esc(rn)}</p>` : "";
    out.push(`<div class="racehead" data-race="${esc(race)}"><h2>${esc(title)}</h2><div class="rmeta">${s===1?"1 seat &middot; vote for 1":s+" seats &middot; vote for up to "+s} &middot; ${inRace.length} candidates<span class="rmark" data-seats="${s}" hidden></span></div>${note}</div>`);
    for(const p of partiesFor(state.j)){
      const list=inRace.filter(c=>c.party===p);
      if(!list.length) continue;
      out.push(`<div class="pgroup" data-race="${esc(race)}" data-party="${esc(p)}" style="--pc:var(${slot(p)})">
        <h3><span class="bar"></span>${esc(p)} <span class="cnt">${list.length}</span></h3>
        ${PNOTE[p]?`<p class="pnote">${esc(PNOTE[p])}</p>`:""}
        ${disclosure(state.j+"|party|"+p)}
        <ul class="cands">${list.map(card).join("")}</ul></div>`);
    }
  }
  document.getElementById("roster").innerHTML=out.join("");
}

const ETYPE={financial:{n:"Financial interest",c:"--h6"},election:{n:"Election finance",c:"--h3"},
             conduct:{n:"Conduct in office",c:"--h5"},record:{n:"Record",c:"--h10"},cleared:{n:"Cleared",c:"--h4"}};
const PSTAT={kept:{n:"Kept",c:"--h4"},partial:{n:"Partly kept",c:"--h3"},broken:{n:"Broken",c:"--h6"},
             note:{n:"Read this first",c:"--h10"},costed:{n:"Funding named",c:"--h4"},
             nocost:{n:"No costs published",c:"--h3"},noplatform:{n:"No platform found",c:"--hind"},
             backed:{n:"Backed by an existing program",c:"--h4"},
             reversed:{n:"Reversed",c:"--h6"},jurisdiction:{n:"Outside council's power",c:"--h0"},
             costing:{n:"Costing questioned",c:"--h3"}};
const SEARCHED_SET=new Set(SEARCHED);

function entryHtml(e){
  const t=ETYPE[e.type]||ETYPE.record;
  return `<div class="entry">
    <div class="etags"><span class="etype" style="--et:var(${t.c})">${esc(t.n)}</span>
      <span class="elabel">${esc(e.label)}</span><span class="edate">${esc(e.date)}</span></div>
    <div class="etext">${esc(e.text)}</div>
    ${e.url?`<div class="esrc"><a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.src)} &rarr;</a></div>`:""}
  </div>`;
}
function promiseHtml(p){
  const s=PSTAT[p.status]||PSTAT.kept;
  return `<div class="entry">
    <div class="etags"><span class="pstat" style="--ps:var(${s.c})">${esc(s.n)}</span></div>
    <div class="etext">${esc(p.text)}</div>
    ${p.url?`<div class="esrc"><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.src)} &rarr;</a></div>`:""}
  </div>`;
}
function disclosure(key){
  const rec=R[key]||[], pro=P[key]||[];
  if(!rec.length && !pro.length) return SEARCHED_SET.has(key) ? `<div class="nosearch">Searched, nothing adverse found</div>` : "";
  const bits=[];
  if(rec.length) bits.push(rec.length+(rec.length===1?" record entry":" record entries"));
  if(pro.length) bits.push(pro.length+(pro.length===1?" promise":" promises"));
  const proSorted=pro.slice().sort((a,b)=>(a.status==="note"?-1:0)-(b.status==="note"?-1:0));
  const body =
    (rec.length?`<div class="subhead">Record</div>${rec.map(entryHtml).join("")}`:"") +
    (proSorted.length?`<div class="subhead">Promises</div>${proSorted.map(promiseHtml).join("")}`:"");
  return `<details class="rec"><summary><span class="chev">&#9656;</span>${esc(bits.join(" \u00b7 "))}</summary>
    <div class="recbody">${body}</div></details>`;
}

function card(c){
  const id=c.j+"|"+c.race+"|"+c.name;
  return `<li class="cand" data-id="${esc(id)}" data-search="${esc((c.name+" "+c.party).toLowerCase())}">
    <button type="button" class="mark" aria-pressed="${marks.has(id)}" aria-label="Shortlist ${esc(c.name)}">&#10003;</button>
    <div>
      <div class="nm">${esc(c.name)}</div>
      <div class="row2">
        <span class="tag">${esc(c.party)}</span>
        ${c.inc===1?`<span class="inc">Incumbent</span>`:""}
        ${c.inc===2?`<span class="sit">Sitting councillor</span>`:""}
        ${c.url?`<a class="lnk" href="${esc(c.url)}" target="_blank" rel="noopener">campaign page &rarr;</a>`:""}
      </div>
      ${c.bio?`<div class="bio">${esc(c.bio)}</div>`:""}
      ${disclosure(c.j+"|"+c.race+"|"+c.name)}
    </div></li>`;
}

// Marked-vs-seats, per race. renderCard() has warned about over-voting since launch, but only
// once the print view is open, which is after the choices are made. Same arithmetic, shown while
// the choice is being made.
function syncSeatCounts(){
  document.querySelectorAll(".racehead").forEach(h=>{
    const el=h.querySelector(".rmark"); if(!el) return;
    const seats=+el.dataset.seats;
    const n=[...marks].filter(k=>k.startsWith(state.j+"|"+h.dataset.race+"|")).length;
    el.hidden = n===0;
    el.classList.toggle("over", n>seats);
    el.textContent = n>seats ? ` \u00b7 ${n} marked, drop ${n-seats}` : ` \u00b7 ${n} marked`;
  });
}

// The print sheet covers every municipality, so this counts all marks, not just this tab's.
// Counted through ALL so a mark left behind by a withdrawn candidate is not advertised.
function syncPrintCount(){
  const pb=document.getElementById("printbtn"); if(!pb) return;
  const n=ALL.filter(c=>marks.has(c.j+"|"+c.race+"|"+c.name)).length;
  pb.textContent = n ? `Print shortlist (${n})` : "Print shortlist";
}

// A search only looks inside the current tab, so a name on another ballot reads as "no matches".
// The City and District of North Vancouver are separate ballots that people mix up, which is
// exactly when this bites. Party is left out of the count because the jump clears it.
function showEmpty(visible){
  const em=document.getElementById("empty"); if(!em) return;
  em.hidden = visible>0;
  if(visible>0) return;
  if(!rowsFor(state.j).length){ em.textContent=NO_ROWS; return; }
  let hint="";
  if(state.q){
    const others=JORDER.filter(j=>j!==state.j).map(j=>{
      const n=ALL.filter(c=>c.j===j
        && (state.race==="all" || c.race===state.race)
        && (c.name+" "+c.party).toLowerCase().includes(state.q)
        && (!state.onlyMarked || marks.has(c.j+"|"+c.race+"|"+c.name))).length;
      return n ? {j,n} : null;
    }).filter(Boolean);
    if(others.length) hint=`<span class="elsewhere">Found on another ballot: ${others.map(o=>
      `<button type="button" class="mini jump" data-j="${esc(o.j)}">${o.n} in ${esc(SHORT[o.j]||o.j)}</button>`).join("")}</span>`;
  }
  em.innerHTML = "No candidates match those filters." + hint;
}

function applyFilters(){
  let visible=0;
  document.querySelectorAll("li.cand").forEach(li=>{
    const g=li.closest(".pgroup");
    let ok=true;
    if(state.race!=="all" && g.dataset.race!==state.race) ok=false;
    if(ok && state.party && g.dataset.party!==state.party) ok=false;
    if(ok && state.q && !li.dataset.search.includes(state.q)) ok=false;
    if(ok && state.onlyMarked && !marks.has(li.dataset.id)) ok=false;
    li.classList.toggle("hide",!ok);
    if(ok) visible++;
  });
  document.querySelectorAll(".pgroup").forEach(g=>{ g.hidden = !g.querySelector("li.cand:not(.hide)"); });
  document.querySelectorAll(".racehead").forEach(h=>{
    h.hidden = ![...document.querySelectorAll(`.pgroup[data-race="${h.dataset.race}"]`)].some(g=>!g.hidden);
  });
  showEmpty(visible);
  const rc=document.getElementById("resultcount");
  if(rc) rc.textContent = visible+(visible===1?" candidate":" candidates")+" shown in "+state.j;
  const mc=document.getElementById("markcount");
  if(mc) mc.textContent=[...marks].filter(k=>k.startsWith(state.j+"|")).length;
  syncSeatCounts();
  syncPrintCount();
  document.querySelectorAll(".section[data-juris]").forEach(s=>{ s.hidden = s.dataset.juris!==state.j; });
  syncFilters();
  renderCard();
}

function allDetails(){ return [...document.querySelectorAll("#roster details.rec")]; }
function renderAll(){ renderGlance(); renderControls(); renderRoster(); applyFilters(); }

function selectJuris(j){
  barSettle();
  state.j=j; state.party=null;
  if(!racesFor(state.j).includes(state.race)) state.race="all";
  const sel=document.querySelector("#jtabs select"); if(sel) sel.value=state.j;
  document.querySelectorAll(".jtab").forEach(x=>{const s=x.dataset.j===state.j;x.setAttribute("aria-pressed",String(s));x.setAttribute("aria-current",s?"page":"false");});
  renderAll();
  window.scrollTo({top:0,behavior:"instant"});
}
document.getElementById("jtabs").addEventListener("click",e=>{
  const b=e.target.closest(".jtab"); if(!b) return;
  selectJuris(b.dataset.j);
});
document.getElementById("jtabs").addEventListener("change",e=>selectJuris(e.target.value));
document.getElementById("raceseg").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  state.race=b.dataset.race;
  document.querySelectorAll("#raceseg button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
  applyFilters();
});
document.getElementById("parties").addEventListener("click",e=>{
  const b=e.target.closest(".pchip"); if(!b) return;
  state.party = state.party===b.dataset.party ? null : b.dataset.party;
  document.querySelectorAll(".pchip").forEach(x=>x.setAttribute("aria-pressed",String(x.dataset.party===state.party)));
  applyFilters();
});
document.getElementById("q").addEventListener("input",e=>{ state.q=e.target.value.trim().toLowerCase(); applyFilters(); });
document.getElementById("onlymarked").addEventListener("click",e=>{
  state.onlyMarked=!state.onlyMarked;
  e.currentTarget.setAttribute("aria-pressed",String(state.onlyMarked));
  applyFilters();
});
// Marks are the only thing a reader creates here, they live in localStorage alone, and there is
// no undo. So the first click arms, the second clears. It disarms itself after a few seconds.
(function(){
  const cb=document.getElementById("clearmarks"); if(!cb) return;
  const LABEL="Clear marks here";
  let armed=null;
  function disarm(){ clearTimeout(armed); armed=null; cb.textContent=LABEL; cb.classList.remove("arm"); }
  cb.addEventListener("click",()=>{
    if(!armed){
      cb.textContent="Click again to clear";
      cb.classList.add("arm");
      armed=setTimeout(disarm,4000);
      return;
    }
    disarm();
    [...marks].filter(k=>k.startsWith(state.j+"|")).forEach(k=>marks.delete(k));
    save();
    document.querySelectorAll(".mark").forEach(m=>m.setAttribute("aria-pressed","false"));
    applyFilters();
  });
})();

document.getElementById("empty").addEventListener("click",e=>{
  const b=e.target.closest(".jump"); if(!b) return;
  selectJuris(b.dataset.j);
});
document.getElementById("roster").addEventListener("click",e=>{
  const b=e.target.closest(".mark"); if(!b) return;
  const id=b.closest("li.cand").dataset.id;
  if(marks.has(id)) marks.delete(id); else marks.add(id);
  b.setAttribute("aria-pressed",String(marks.has(id)));
  save(); applyFilters();
});

const MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];
function today(){ const d=new Date(); return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; }

function renderCard(){
  const body=document.getElementById("cardbody");
  if(!body) return;
  const picked=ALL.filter(c=>marks.has(c.j+"|"+c.race+"|"+c.name));
  if(!picked.length){
    body.innerHTML=`<p class="cardempty">Nothing marked yet. Tick the box beside a candidate and they will appear here, ready to print and take with you.</p>
      <p class="cardfoot">Your marks are stored in this browser only and are never sent anywhere. Nobody else can see who you picked.</p>`;
    return;
  }
  const out=[];
  out.push(`<div class="cardmeta">Prepared ${esc(today())} &middot; voting day ${esc(VOTING_DAY)}</div>`);
  for(const j of JORDER){
    const inJ=picked.filter(c=>c.j===j);
    if(!inJ.length) continue;
    out.push(`<div class="cj"><h3>${esc(j)}</h3>
      <div class="cjdates">${J[j].dates.map(d=>esc(d[0])+": "+esc(d[1])).join(" &middot; ")}</div>`);
    for(const race of racesFor(j)){
      const list=inJ.filter(c=>c.race===race);
      if(!list.length) continue;
      const s=J[j].seats[race];
      const title = RACE_TITLE[race]||race;
      const over = list.length > s;
      out.push(`<div class="cr">
        <div class="crh">${esc(title)} &middot; ${s===1?"vote for 1":"vote for up to "+s} &middot; you marked ${list.length}</div>
        <ul>${list.map(c=>`<li><span class="box"></span><span class="cn">${esc(c.name)}</span> <span class="cp">${esc(c.party)}</span></li>`).join("")}</ul>
        ${over?`<p class="warn">You have marked ${list.length} names for ${s} ${s===1?"seat":"seats"}. A ballot with too many marks in one race has that race discounted, so drop ${list.length-s} before you vote.</p>`:""}
      </div>`);
    }
    out.push(`</div>`);
  }
  out.push(`<p class="cardfoot">Your marks are stored in this browser only and are never sent anywhere. Nobody else can see who you picked. ${esc(CARD_NOTE)}</p>`);
  body.innerHTML=out.join("");
}

function showCard(on){
  document.getElementById("ballotcard").hidden = !on;
  document.body.classList.toggle("showcard", on);
  if(on){ renderCard(); window.scrollTo({top:0,behavior:"instant"}); }
}
// Anything that changes the height of the sticky bar calls this first. The browser corrects
// the scroll position to keep the page steady, and that correction is delivered as an ordinary
// scroll event. Scroll events run before resize-observer callbacks in the rendering loop, so
// the observer below cannot catch it in time: the caller has to say so up front.
let barSettle = ()=>{};
function on(id,fn){ const el=document.getElementById(id); if(el) el.addEventListener("click",fn); }
on("printbtn",()=>showCard(true));
on("backbtn",()=>showCard(false));
on("doprint",()=>{ try{ window.print(); }catch(e){} });
on("filterstoggle",()=>{
  filtersOpen=!filtersOpen;
  try{ localStorage.setItem(STORE+".filters", filtersOpen?"1":"0"); }catch(e){}
  barSettle();
  syncFilters();
});
// footer/in-page links point at collapsed sections; open the target before the browser scrolls to it
document.addEventListener("click",e=>{
  const a=e.target.closest('a[href^="#"]'); if(!a) return;
  const t=document.getElementById(a.getAttribute("href").slice(1));
  if(t && t.tagName==="DETAILS") t.open=true;
});

on("expandbtn",()=>allDetails().forEach(d=>{ d.open=true; }));
on("collapsebtn",()=>allDetails().forEach(d=>{ d.open=false; }));
(function(){
  const bar=document.querySelector(".controls");
  if(!bar) return;
  const raf = (window.requestAnimationFrame || (f=>f())).bind(window);
  // Auto-hide is a small-screen affordance: on a desktop viewport the bar just stays pinned.
  // 820px is the page's breakpoint. Re-checked on every scroll so a resize can't strand it hidden.
  const narrow = window.matchMedia && window.matchMedia("(max-width:820px)");
  // Only auto-hide once the bar is actually pinned. While it still sits in normal flow
  // there is nothing to win by sliding it away. Measured off the masthead's bottom edge
  // rather than the bar itself, because the bar carries a transform while hidden and its
  // own rect would then always read as pinned.
  const above = document.querySelector(".masthead");
  const topInset = (typeof getComputedStyle === "function" && parseFloat(getComputedStyle(bar).top)) || 0;
  function pinned(){
    if(!above || !above.getBoundingClientRect) return true;
    return above.getBoundingClientRect().bottom <= topInset;
  }
  let last=window.scrollY||0, queued=false, hidden=false, settleUntil=0;
  function setHidden(v){ if(v===hidden) return; hidden=v; bar.classList.toggle("hide", v); }
  function update(){
    const y=window.scrollY||0, d=y-last;
    // The bar changing its own height moves the page under the reader, and the browser
    // corrects the scroll position to compensate. That correction arrives as a scroll event
    // and reads exactly like a downward flick, so the bar would hide itself. Ignore scrolls
    // for a moment after any resize of the bar: opening the filter panel, switching to a
    // municipality with a different party-chip count, or rotating the phone.
    if(Date.now() < settleUntil){ last=y; queued=false; return; }
    if(!narrow || !narrow.matches) setHidden(false);
    else if(!pinned()) setHidden(false);
    else if(d>6) setHidden(true);
    else if(d<-6) setHidden(false);
    last=y; queued=false;
  }
  window.addEventListener("scroll",()=>{ if(!queued){ queued=true; raf(update); } },{passive:true});
  barSettle = ()=>{ last=window.scrollY||0; settleUntil=Date.now()+400; };
  // Backstop for height changes with no click behind them: rotating the phone, a font
  // swap landing, the result-count text rewrapping.
  if(typeof ResizeObserver === "function") new ResizeObserver(barSettle).observe(bar);
  if(narrow && narrow.addEventListener) narrow.addEventListener("change",()=>{ if(!narrow.matches) setHidden(false); });
})();
const toTop=document.getElementById("totop");
if(toTop){
  const smooth=!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  on("totop",()=>window.scrollTo({top:0,behavior:smooth?"smooth":"auto"}));
  const showHide=()=>{ toTop.hidden = (window.scrollY||0) < 600; };
  window.addEventListener("scroll", showHide, {passive:true});
  showHide();
}

(function(){
  const n=document.getElementById("days"), l=document.getElementById("dayslabel");
  if(!n||!l) return;
  const [y,m,dd]=ELECTION_DAY.split("-").map(Number);
  const d=Math.ceil((new Date(y,m-1,dd)-new Date())/86400000);
  if(d>0){ n.hidden=false; n.textContent=d; l.textContent=(d===1?"day":"days")+" until voting day"; }
  else if(d===0){ n.hidden=false; n.textContent="Today"; l.textContent="voting places are open 8am to 8pm"; }
  else { n.hidden=true; l.textContent="This election was held on "+VOTING_DAY+". The results are not on this page."; }
  const pv=document.getElementById("provisional");
  if(pv) pv.hidden = !!PROVISIONAL_UNTIL && new Date() >= new Date(PROVISIONAL_UNTIL);
})();
renderAll();
