
const SLOT = {
  "ABC Vancouver":"--h0","Vancouver Liberals":"--h1","Vote Vancouver":"--h2","TEAM":"--h3",
  "Green":"--h4","OneCity":"--h5","COPE":"--h6","Bright Future Vancouver":"--h7",
  "TrueBlue Vancouver":"--h8","Independent Parks Party":"--h9","Affordable Housing":"--h10",
  "Advance Richmond":"--h0","Richmond Strong":"--h1","ONE Richmond":"--h2","Action Richmond":"--h3",
  "RITE Richmond":"--h4","Richmond Citizens' Association":"--h5","Richmond Forward":"--h6",
  "We Are Richmond":"--h7","Common Sense Alliance":"--h8","Richmond United":"--h11","Conservative":"--h12",
  "Achieving for Delta":"--h0","One Delta":"--h2","Delta First":"--h3",
  "REAL Nanaimo":"--h6","Victoria For All":"--h5",
  "Empower":"--h13","Richmond Education Party":"--h9",
  "Independent":"--hind"
};

const PNOTE = {
  "ABC Vancouver":"Governing party since 2022, led by Mayor Ken Sim. Campaigning on a property tax freeze, the lowest violent crime rate in 23 years, encampment removal, more police and mental health nurses, road and community centre investment, longer bar and restaurant hours, and fewer permitting barriers.",
  "Vancouver Liberals":"Founded in 2025 by Kareem Allam, Sim's former chief of staff, and describing itself as a big-tent party. Proposes hiring 400 unionized front-line staff, scrapping Vancouver's separate building code for the BC Building Code, cancelling an $800 million second city hall, cracking down on Bitcoin ATMs and money laundering, and a referendum on a ward system.",
  "Vote Vancouver":"Founded by Rebecca Bligh after ABC expelled her in February 2025. Four platform pillars: housing, economy, transportation and public services.",
  "Green":"Green Party of Vancouver. Pete Fry is their first mayoral candidate in 30 years. Campaigning on faster housing approvals and more housing choice, Canadian-built construction, and using city purchasing power for BC lumber and local supply chains.",
  "OneCity":"Left party, holds one council seat through Lucy Maloney's 2025 by-election win. Running ReLight Vancouver on street lighting and safer public space, Connect Vancouver on neighbourhood transportation choice, and a Labour Day manifesto of five commitments to working families. Not running a mayoral candidate.",
  "COPE":"Coalition of Progressive Electors, Vancouver's oldest civic left party, holds one council seat through Sean Orr. Campaigning on affordability, public education, and parks, community centres and public services. Withdrew from the mayoral race on 2 September.",
  "TEAM":"TEAM for a Livable Vancouver. Colleen Hardwick's party, running on livability, public safety, affordability and a more participatory approach to city planning and development.",
  "Bright Future Vancouver":"New party led by Muhammad Ahmad, pitched at shift workers, trades, renters and small business. Its Blueprint has five pillars: rent-to-own housing equity, fare-free transit for residents with a UBC SkyTrain extension, night-shift childcare and treatment-first crisis response, 21-day permits, and a 2% fair share surcharge.",
  "Independent Parks Party":"Single-issue park board party, a project of the Association for the Promotion of Science in Governance, a BC non-profit. Authorized by candidate Michael Robert Caditz.",
  "TrueBlue Vancouver":"New right-wing party running on cutting property taxes and civic staffing, city control of public safety, parental rights and local sovereignty.",
  "Affordable Housing":"One-candidate party registered under the name Affordable Housing.",
  "Richmond Strong":"Alexa Loo's slate. Loo is a sitting councillor seeking the mayor's chair.",
  "Richmond Forward":"Rob Howard's slate, registered as the Richmond Forward Voters Society.",
  "Action Richmond":"Mei Kang's slate.",
  "We Are Richmond":"Dickens Cheung's slate.",
  "RITE Richmond":"Richmond's established progressive slate. It holds three of the eight sitting council seats and is running council candidates only.",
  "Richmond Citizens' Association":"Council-only slate, running five candidates and no mayoral candidate.",
  "ONE Richmond":"Holds two sitting council seats, but is running a single council candidate this time and no mayoral candidate.",
  "Advance Richmond":"Registered as the Advance Richmond Community Association. Council-only slate, the largest in the race with seven candidates.",
  "Conservative":"Registered as the Conservative Electors Association. Council-only slate of five.",
  "Common Sense Alliance":"Council-only slate of three, including former Steveston-Richmond East MP Kenny Chiu.",
  "Richmond United":"Council-only slate of two, including sitting councillor Andy Hobbs.",
  "Achieving for Delta":"Mayor George Harvie's slate, which has governed Delta since 2018.",
  "One Delta":"Councillor Dylan Kruger's slate, running a full six-candidate council team behind his mayoral bid.",
  "Delta First":"Melissa Granum's slate, running three council candidates.",
  "REAL Nanaimo":"The only slate in the Nanaimo race, with mayoral candidate Anne-Marie Dryden and seven council candidates. Every other candidate runs as an independent.",
  "Victoria For All":"The only slate on Victoria's council ballot, running two candidates. Everyone else, in both races, runs as an independent.",
  "Independent":"Candidates running with no slate or party affiliation."
};

const J = {
  "Vancouver": {
    seats:{Mayor:1, Council:10, "Park Board":7, School:9}, schoolNote:"Vancouver School Board (SD39). All nine seats are elected by Vancouver voters.",
    blurb:["Ken Sim's ABC Vancouver swept all three bodies in 2022 and is defending them against a field that has grown two new parties since. 130 candidates are running for 27 seats across four ballots.",
           "Vancouver is the only city here with a separately elected park board, and the only one with plebiscite questions on the ballot."],
    dates:[["Advance voting","3, 7, 10 and 13 October, 8am to 8pm"],["Voting day","Saturday 17 October, 8am to 8pm"],["Voting places","Any of 85 places citywide, vote-anywhere"],["By mail","Apply by noon on 5 October"]],
    link:"https://vancouver.ca/your-government/2026-candidate-information.aspx", vote:"https://vancouver.ca/election/2026/where-to-vote.aspx"
  },
  "Richmond": {
    seats:{Mayor:1, Council:8, School:7}, schoolNote:"Richmond Board of Education (SD38). All seven seats are elected by Richmond voters.",
    blurb:["Malcolm Brodie, mayor since 2001, is not running. The first open mayor's race in Richmond in 25 years drew eight candidates, two of them sitting councillors.",
           "The council race is the busiest in the province outside Vancouver: 55 candidates for eight seats, spread across eleven slates and fourteen independents."],
    dates:[["Advance voting","3, 7, 8, 9 and 10 October"],["Voting day","Saturday 17 October"],["By mail","Applications open to 17 October"]],
    link:"https://www.richmond.ca/city-hall/elections/candidateslist.htm", vote:"https://www.richmond.ca/city-hall/elections.htm"
  },
  "Delta": {
    seats:{Mayor:1, Council:6, School:7}, schoolNote:"Delta Board of Education (SD37). All seven seats are elected by Delta voters.",
    blurb:["Mayor George Harvie seeks a third term against Dylan Kruger, a sitting councillor running with his own slate, and Delta First's Melissa Granum.",
           "Delta is the most slate-organized council race here: fifteen of the twenty candidates carry a slate label."],
    dates:[["Advance voting","3, 6 and 7 October"],["Voting day","Saturday 17 October"]],
    link:"https://www.delta.ca/elections/candidates", vote:"https://www.delta.ca/city-hall/municipal-information/elections"
  },
  "City of North Vancouver": {
    seats:{Mayor:1, Council:6, School:3}, schoolNote:"North Vancouver Board of Education (SD44), shared with the District. City voters elect three of the seven seats.",
    blurb:["Mayor Linda Buchanan seeks a third term against three challengers. All six sitting councillors are running again.",
           "No slates: every candidate in both races runs as an independent."],
    dates:[["Advance voting","7, 10, 13, 14 and 15 October at City Hall"],["Voting day","Saturday 17 October"],["By mail","Ballots must arrive by 8pm on 17 October"]],
    link:"https://www.cnv.org/City-Hall/General-Local-Election/2026-General-Local-Election", vote:"https://www.cnv.org/City-Hall/General-Local-Election/2026-General-Local-Election"
  },
  "District of North Vancouver": {
    seats:{Mayor:1, Council:6, School:4}, schoolNote:"North Vancouver Board of Education (SD44), shared with the City. District voters elect four of the seven seats.",
    blurb:["Mayor Mike Little seeks a third term against four challengers. Six incumbent councillors are running in a field of fifteen.",
           "As in the City, no slates are registered: everyone runs as an independent."],
    dates:[["Voting day","Saturday 17 October"],["Advance voting","Check dnv.org for dates and places"]],
    link:"https://www.dnv.org/government-administration/2026-general-local-election", vote:"https://www.dnv.org/government-administration/2026-general-local-election"
  },
  "Victoria": {
    seats:{Mayor:1, Council:8, School:2}, schoolNote:"Greater Victoria Board of Education (SD61), shared with neighbouring municipalities. Victoria voters elect two trustees.",
    blurb:["Mayor Marianne Alto seeks a second term in an eight-way race. Seven of the eight sitting councillors are running again; Chris Coleman is not.",
           "Victoria's politics run on independents. Only two of the 21 council candidates carry a slate label, and none of the mayoral candidates do."],
    dates:[["Advance voting","7 October at the Victoria Conference Centre; 13, 14 and 15 October at Crystal Garden"],["Voting day","Saturday 17 October"],["By mail","Ballots must arrive by 8pm on 17 October"]],
    link:"https://www.victoria.ca/city-government/elections", vote:"https://www.victoria.ca/city-government/elections"
  },
  "Nanaimo": {
    seats:{Mayor:1, Council:8, School:9}, schoolNote:"Nanaimo-Ladysmith Board of Education (SD68). Nine seats and eleven candidates.",
    blurb:["Mayor Leonard Krog seeks a third term. Forty candidates are running for eight council seats, seven of them sitting councillors; Tyler Brown is not running again.",
           "REAL Nanaimo is the only slate, with a mayoral candidate and seven council candidates. Everyone else runs as an independent."],
    dates:[["Advance voting","7 and 14 October"],["Voting day","Saturday 17 October"],["By mail","Apply by 4pm on 16 October"]],
    link:"https://www.nanaimo.ca/your-government/elections", vote:"https://www.nanaimo.ca/your-government/elections"
  }
};

const JORDER = ["Vancouver","Richmond","Delta","City of North Vancouver","District of North Vancouver","Victoria","Nanaimo"];
const SHORT = {"City of North Vancouver":"North Van (City)","District of North Vancouver":"North Van (District)"};

// merge: Vancouver rows use [race,party,name,incumbent,bio,url]; X rows use [juris,race,party,name,inc,url]
const ALL = [];
for (const c of C) ALL.push({j:"Vancouver", race:c[0], party:c[1], name:c[2], inc:c[3], bio:c[4], url:c[5]});
for (const r of X) ALL.push({j:r[0], race:r[1], party:r[2], name:r[3], inc:r[4], bio:"", url:r[5]});
for (const r of S) ALL.push({j:r[0], race:r[1], party:r[2], name:r[3], inc:r[4], bio:"", url:r[5]});

const KEY="bcballot2026.marks";
let marks=new Set();
try{ const r=localStorage.getItem(KEY); if(r) marks=new Set(JSON.parse(r)); }catch(e){}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify([...marks])); }catch(e){} }

let filtersOpen=true;
try{ const v=localStorage.getItem("bcballot2026.filters");
     filtersOpen = v===null ? ((window.innerWidth||1024)>640) : v==="1"; }catch(e){ filtersOpen=true; }
const state={j:"Vancouver", race:"all", party:null, q:"", onlyMarked:false};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const slot=p=>SLOT[p] || "--hind";

// jurisdiction tabs
document.getElementById("jtabs").innerHTML = JORDER.map(j=>
  `<button type="button" class="jtab" data-j="${esc(j)}" aria-pressed="${j===state.j}" aria-current="${j===state.j?"page":"false"}">${esc(SHORT[j]||j)}</button>`).join("");

function rowsFor(j){ return ALL.filter(c=>c.j===j); }
function partiesFor(j){
  const seen=[];
  for(const c of rowsFor(j)) if(!seen.includes(c.party)) seen.push(c.party);
  return seen.filter(p=>p!=="Independent").concat(seen.includes("Independent")?["Independent"]:[]);
}
function racesFor(j){ return ["Mayor","Council","Park Board","School"].filter(r=>rowsFor(j).some(c=>c.race===r)); }

function renderGlance(){
  const m=J[state.j], rows=rowsFor(state.j);
  const cells = racesFor(state.j).map(r=>{
    const n=rows.filter(c=>c.race===r).length, s=m.seats[r];
    return `<div class="gcell"><div class="t-lab">${esc(r==="School"?"School board":r)}</div><div class="t-num">${n}</div><div class="t-sub">${s===1?"1 seat &middot; vote for 1":s+" seats &middot; vote for up to "+s}</div></div>`;
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
    const title = race==="School" ? "School Board" : race;
    const note = race==="School" ? `<p class="racenote">${esc(J[state.j].schoolNote)} Incumbency is not marked in this race.</p>` : "";
    out.push(`<div class="racehead" data-race="${esc(race)}"><h2>${esc(title)}</h2><div class="rmeta">${s===1?"1 seat &middot; vote for 1":s+" seats &middot; vote for up to "+s} &middot; ${inRace.length} candidates</div>${note}</div>`);
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
  document.getElementById("empty").hidden = visible>0;
  const rc=document.getElementById("resultcount");
  if(rc) rc.textContent = visible+(visible===1?" candidate":" candidates")+" shown in "+state.j;
  const mc=document.getElementById("markcount");
  if(mc) mc.textContent=[...marks].filter(k=>k.startsWith(state.j+"|")).length;
  document.querySelectorAll(".section[data-juris]").forEach(s=>{ s.hidden = s.dataset.juris!==state.j; });
  syncFilters();
  renderCard();
}

function allDetails(){ return [...document.querySelectorAll("#roster details.rec")]; }
function renderAll(){ renderGlance(); renderControls(); renderRoster(); applyFilters(); }

document.getElementById("jtabs").addEventListener("click",e=>{
  const b=e.target.closest(".jtab"); if(!b) return;
  state.j=b.dataset.j; state.party=null;
  if(!racesFor(state.j).includes(state.race)) state.race="all";
  document.querySelectorAll(".jtab").forEach(x=>{const s=x.dataset.j===state.j;x.setAttribute("aria-pressed",String(s));x.setAttribute("aria-current",s?"page":"false");});
  renderAll();
  window.scrollTo({top:0,behavior:"instant"});
});
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
document.getElementById("clearmarks").addEventListener("click",()=>{
  [...marks].filter(k=>k.startsWith(state.j+"|")).forEach(k=>marks.delete(k));
  save();
  document.querySelectorAll(".mark").forEach(m=>m.setAttribute("aria-pressed","false"));
  applyFilters();
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
  out.push(`<div class="cardmeta">Prepared ${esc(today())} &middot; voting day Saturday 17 October 2026</div>`);
  for(const j of JORDER){
    const inJ=picked.filter(c=>c.j===j);
    if(!inJ.length) continue;
    out.push(`<div class="cj"><h3>${esc(j)}</h3>
      <div class="cjdates">${J[j].dates.map(d=>esc(d[0])+": "+esc(d[1])).join(" &middot; ")}</div>`);
    for(const race of racesFor(j)){
      const list=inJ.filter(c=>c.race===race);
      if(!list.length) continue;
      const s=J[j].seats[race];
      const title = race==="School" ? "School Board" : race;
      const over = list.length > s;
      out.push(`<div class="cr">
        <div class="crh">${esc(title)} &middot; ${s===1?"vote for 1":"vote for up to "+s} &middot; you marked ${list.length}</div>
        <ul>${list.map(c=>`<li><span class="box"></span><span class="cn">${esc(c.name)}</span> <span class="cp">${esc(c.party)}</span></li>`).join("")}</ul>
        ${over?`<p class="warn">You have marked ${list.length} names for ${s} ${s===1?"seat":"seats"}. A ballot with too many marks in one race has that race discounted, so drop ${list.length-s} before you vote.</p>`:""}
      </div>`);
    }
    out.push(`</div>`);
  }
  out.push(`<p class="cardfoot">Your marks are stored in this browser only and are never sent anywhere. Nobody else can see who you picked. Candidate lists are current to 17 September 2026; check your municipality's own page before voting.</p>`);
  body.innerHTML=out.join("");
}

function showCard(on){
  document.getElementById("ballotcard").hidden = !on;
  document.body.classList.toggle("showcard", on);
  if(on){ renderCard(); window.scrollTo({top:0,behavior:"instant"}); }
}
function on(id,fn){ const el=document.getElementById(id); if(el) el.addEventListener("click",fn); }
on("printbtn",()=>showCard(true));
on("backbtn",()=>showCard(false));
on("doprint",()=>{ try{ window.print(); }catch(e){} });
on("filterstoggle",()=>{
  filtersOpen=!filtersOpen;
  try{ localStorage.setItem("bcballot2026.filters", filtersOpen?"1":"0"); }catch(e){}
  syncFilters();
});
on("expandbtn",()=>allDetails().forEach(d=>{ d.open=true; }));
on("collapsebtn",()=>allDetails().forEach(d=>{ d.open=false; }));
(function(){
  const bar=document.querySelector(".controls");
  if(!bar) return;
  const raf = (window.requestAnimationFrame || (f=>f())).bind(window);
  let last=window.scrollY||0, queued=false, hidden=false;
  function setHidden(v){ if(v===hidden) return; hidden=v; bar.classList.toggle("hide", v); }
  function update(){
    const y=window.scrollY||0, d=y-last;
    if(y<140) setHidden(false);
    else if(d>6) setHidden(true);
    else if(d<-6) setHidden(false);
    last=y; queued=false;
  }
  window.addEventListener("scroll",()=>{ if(!queued){ queued=true; raf(update); } },{passive:true});
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
  const d=Math.ceil((new Date(2026,9,17)-new Date())/86400000);
  if(d>0){ n.hidden=false; n.textContent=d; l.textContent=(d===1?"day":"days")+" until voting day"; }
  else if(d===0){ n.hidden=false; n.textContent="Today"; l.textContent="voting places are open 8am to 8pm"; }
  else { n.hidden=true; l.textContent="This election was held on Saturday 17 October 2026. The results are not on this page."; }
  const pv=document.getElementById("provisional");
  if(pv) pv.hidden = new Date() >= new Date("2026-09-18T23:00:00Z");   // 4pm Pacific, 18 Sept
})();
renderAll();
