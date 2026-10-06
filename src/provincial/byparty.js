// "Find a party": pick a party to see its summary, campaign link and party record, which districts
// it runs in, and jump to its candidate in any of them. Provincial only: many voters here choose a
// party first. Each roster party heading links here instead of repeating the note per district.
(function(){
  const box=document.getElementById("byparty"); if(!box) return;
  const chips=document.getElementById("bypchips"), out=document.getElementById("bypout");
  const count=p=>ALL.filter(c=>c.party===p).length;
  const last=["Independent","Unaffiliated"];
  const parties=[...new Set(ALL.map(c=>c.party))]
    .sort((a,b)=>(last.includes(a)-last.includes(b)) || count(b)-count(a));
  let sel=null;
  chips.innerHTML=parties.map(p=>
    `<button type="button" class="bychip" data-party="${esc(p)}" aria-pressed="false" style="--pc:var(${slot(p)})"><span class="dot"></span>${esc(p)}</button>`).join("");
  function render(){
    chips.querySelectorAll(".bychip").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.party===sel)));
    if(!sel){ out.hidden=true; out.innerHTML=""; return; }
    const has=JORDER.filter(j=>ALL.some(c=>c.j===j&&c.party===sel));
    const info=(PNOTE[sel]?`<p class="pnote">${esc(PNOTE[sel])}${PLINK[sel]?` <a href="${esc(PLINK[sel])}" target="_blank" rel="noopener">Campaign page &rarr;</a>`:""}</p>`:"")
      +disclosure("party|"+sel);
    out.innerHTML=info+`<p><strong>${esc(sel)}</strong> has ${has.length===JORDER.length?"a candidate in all":"candidates in "+has.length+" of the"} ${JORDER.length} districts in this guide. Select a district to see everyone running there.</p>`+
      JGROUPS.map(([g,js])=>`<h3>${esc(g)}</h3><ul>${js.map(j=>{
        const cs=ALL.filter(c=>c.j===j&&c.party===sel);
        return `<li><button type="button" class="bypj" data-j="${esc(j)}">${esc(j)}</button>`+
          (cs.length ? cs.map(c=>`<span>${esc(c.name)}${c.inc===1?` <span class="inc">Incumbent</span>`:""}</span>`).join("")
                     : `<span class="none">No candidate</span>`)+`</li>`;
      }).join("")}</ul>`).join("");
    out.hidden=false;
  }
  chips.addEventListener("click",e=>{
    const b=e.target.closest(".bychip"); if(!b) return;
    sel = sel===b.dataset.party ? null : b.dataset.party;
    render();
  });
  document.getElementById("roster").addEventListener("click",e=>{
    const b=e.target.closest(".aboutp"); if(!b) return;
    sel=b.dataset.party; render();
    box.scrollIntoView({block:"start"});
  });
  out.addEventListener("click",e=>{
    const b=e.target.closest(".bypj"); if(!b) return;
    selectJuris(b.dataset.j);
    const g=[...document.querySelectorAll("#roster .pgroup")].find(x=>x.dataset.party===sel);
    (g||document.getElementById("glance")).scrollIntoView({block:"start"});
  });
})();
