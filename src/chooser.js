// Countdown on each chooser card. Provincial dates are Elections BC's; municipal advance dates
// differ by city (see each city's panel in municipal/config.js), so only the first day is used.
(function(){
  const now=new Date(), pad=n=>String(n).padStart(2,"0");
  const today=now.getFullYear()+"-"+pad(now.getMonth()+1)+"-"+pad(now.getDate());
  const daysTo=s=>{ const [y,m,d]=s.split("-").map(Number); return Math.ceil((new Date(y,m-1,d)-now)/86400000); };
  const plural=n=>n===1?"day":"days";
  const E=[
    {id:"cd-municipal", day:"2026-10-17", label:"Saturday 17 October 2026", advFrom:"2026-10-03", advTo:"2026-10-15",
     before:n=>`Advance voting starts in ${n} ${plural(n)} in some cities. Dates differ by city.`,
     during:"Advance voting is under way in some cities. Dates differ by city.", after:""},
    {id:"cd-provincial", day:"2026-10-24", label:"Saturday 24 October 2026", advFrom:"2026-10-16", advTo:"2026-10-21",
     before:n=>`Advance voting opens in ${n} ${plural(n)}: 16 to 21 October, 8am to 8pm.`,
     during:"Advance voting is open today, 8am to 8pm, until 21 October.", after:"Advance voting has ended."}
  ];
  for(const e of E){
    const el=document.getElementById(e.id);
    if(!el) continue;
    const d=daysTo(e.day);
    let main, adv="";
    if(d>0){
      main=`<b>${d}</b> ${plural(d)} until voting day`;
      adv = today<e.advFrom ? e.before(daysTo(e.advFrom)) : today<=e.advTo ? e.during : e.after;
    }
    else if(d===0) main="<b>Today</b> voting places are open 8am to 8pm";
    else main="This election was held on "+e.label+".";
    el.innerHTML=main+(adv?`<span class="cadv">${adv}</span>`:"");
    el.hidden=false;
  }
})();
