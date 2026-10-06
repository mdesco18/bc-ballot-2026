// R = record entries, P = promise entries, keyed "District|MLA|Name". Same rules as municipal/record_data.js.
// Sitting MLAs researched 27 September 2026; MLAs not running again were removed on 6 October. Other candidates researched 6 October 2026.
// type:  financial | election | conduct | record | cleared
// label: Finding | Filed | Reported | Raised, no finding | Cleared
// status (promises): kept | partial | broken | reversed

const R = {
  "Vancouver-Hastings|MLA|Niki Sharma":[
    { type:"record", label:"Reported", date:"21 September 2026",
      text:"CTV News reported that Sharma, as Attorney General, filed a civil suit in a California court against OpenAI over the Tumbler Ridge school shooting, alleging the company failed to alert police to the shooter's activity on ChatGPT. The case had not been decided.",
      src:"CTV News", url:"https://www.ctvnews.ca/vancouver/article/bc-sues-openai-over-deadly-tumbler-ridge-mass-shooting/" }
  ],
  "Vancouver-Kensington|MLA|Mable Elmore":[
    { type:"record", label:"Reported", date:"7 November 2018",
      text:"Global News reported that Elmore claimed the $61 daily MLA meal per diem while taking part in a welfare food challenge that asked her to live on $19 a week, and that she repaid about $200 in per diems. The outlet reported she broke no legislative rule.",
      src:"Global News", url:"https://globalnews.ca/news/4641969/bc-ndp-mla-mable-elmore-claims-per-diem-homelessness-challenge" }
  ],
  "Vancouver-Point Grey|MLA|David Eby":[
    { type:"cleared", label:"Cleared", date:"7 November 2018",
      text:"Conflict of Interest Commissioner Paul Fraser dismissed a BC Liberal complaint that Eby, then Attorney General, was in conflict for amending recall law while a recall effort was organizing in his riding. Fraser found the complaint was filed under the wrong act and was premature, and made no finding of conflict.",
      src:"Global News", url:"https://globalnews.ca/news/4640270/attorney-general-david-eby-cleared-conflict-commissioner-recall-legislation" }
  ],
  "Vancouver-Quilchena|MLA|Dallas Brodie":[
    { type:"conduct", label:"Reported", date:"7 March 2025",
      text:"Global News reported that BC Conservative leader John Rustad removed Brodie from the Conservative caucus after she mocked residential school survivor testimony on a podcast. Brodie said she had spoken the truth and would not back down. No body with jurisdiction made a finding.",
      src:"Global News", url:"https://globalnews.ca/news/11071997/dallas-brodie-booted-from-bc-conservatives-over-residential-school-comments/" },
    { type:"conduct", label:"Reported", date:"13 December 2025",
      text:"Global News reported that the OneBC board voted to remove Brodie as interim leader and from the party caucus, citing party documents that alleged agents acting under her direction tried to access party assets and databases without authorization. Brodie said she remained interim leader. CTV News reported on 22 December 2025 that she was back as leader after the removal. No body with jurisdiction made a finding.",
      src:"Global News; CTV News", url:"https://globalnews.ca/news/11577473/onebc-leader-dallas-brodie-removed/" },
    { type:"election", label:"Finding", date:"July 2026",
      text:"Elections BC declared a recall petition against Brodie unsuccessful. The proponent returned 3,663 signatures against 15,232 required, and Elections BC took no further action.",
      src:"Elections BC", url:"https://elections.bc.ca/news/vancouver-quilchena-recall-petition-unsuccessful/" },
    { type:"conduct", label:"Filed", date:"July 2026",
      text:"The Vancouver Sun reported that former chief of staff Tim Thielmann filed a wrongful dismissal claim against Brodie in B.C. Supreme Court on 23 July 2026, alleging dismissal without notice and false public statements. The Tyee reported that Brodie filed her own defamation claim against a former staffer in the same court in September 2026. Neither claim has been decided.",
      src:"Vancouver Sun (via Yahoo News); The Tyee", url:"https://ca.news.yahoo.com/dallas-brodies-former-chief-staff-220142146.html" }
  ],
  "Vancouver-Renfrew|MLA|Adrian Dix":[
    { type:"record", label:"Reported", date:"1999",
      text:"The Tyee and The Globe and Mail reported that Dix, as chief of staff to Premier Glen Clark in 1999, backdated a memo to protect Clark during the casino licence controversy, and left the job over it. Dix acknowledged the memo was a mistake and apologized. No body with jurisdiction made a finding against Dix.",
      src:"The Tyee; The Globe and Mail", url:"https://thetyee.ca/News/2011/04/20/MemoMistake/" },
    { type:"record", label:"Reported", date:"17 March 2025",
      text:"Global News reported that Dix, as Energy Minister, directed the B.C. Utilities Commission to apply BC Hydro rate increases of 3.75 per cent in April 2025 and April 2026, citing the capital plan, Site C costs, drought and inflation.",
      src:"Global News", url:"https://globalnews.ca/news/11085319/bc-hydro-rate-increase" }
  ],
  "Vancouver-West End|MLA|Spencer Chandra Herbert":[
    { type:"record", label:"Reported", date:"28 May 2026",
      text:"The Canadian Press reported that Chandra Herbert, as Minister of Indigenous Relations and Reconciliation, held back the Kitselas Treaty Act from a vote in the spring 2026 session, saying members needed more time for debate and that the government would consult further with neighbouring First Nations before the fall.",
      src:"The Canadian Press (via CKPG Today)", url:"https://ckpgtoday.ca/2026/05/28/a-first-nation-treaty-decades-in-making-faces-further-delays-says-b-c-minister/" }
  ],
  "Richmond-Bridgeport|MLA|Teresa Wat":[
    { type:"record", label:"Reported", date:"26 August 2026",
      text:"Wat left the Conservative caucus to sit as an independent. She said leader Kerry-Lynne Findlay had questioned her loyalty to Canada in a group chat and had not apologized. Findlay said she had apologized privately. No investigation or finding was made.",
      src:"Canadian Press via CFJC Today", url:"https://cfjctoday.com/2026/08/26/cp-newsalert-teresa-wat-quits-b-c-conservatives-over-distasteful-findlay-remarks/" },
    { type:"record", label:"Reported", date:"22 September 2026",
      text:"Wat rejoined the Conservative caucus on the day the snap election was called, together with Peter Milobar and five other former CentreBC MLAs. She had joined Milobar's new party on 11 September 2026.",
      src:"Sitka Media", url:"https://www.sitkamedia.ca/breaking-milobar-some-mlas-leave-centrebc-to-rejoin-bc-conservatives/" },
    { type:"record", label:"Reported", date:"30 July 2024",
      text:"Wat crossed the floor from BC United to the Conservative Party of BC before the 2024 election. She said the Conservatives were best placed to defeat the NDP.",
      src:"CKPG Today", url:"https://ckpgtoday.ca/2024/07/30/political-juggernaut-another-bc-united-mla-crosses-the-floor-to-conservatives/" }
  ],
  "Delta South|MLA|Ian Paton":[
    { type:"record", label:"Reported", date:"2 September 2026",
      text:"The Globe and Mail reported that RCMP questioned Paton for an hour about his allegation that Conservative leader Kerry-Lynne Findlay's chief of staff offered him a two-year agriculture adviser job worth about $122,000 a year if he resigned his seat so Findlay could run. Findlay denied the allegation. No charges were reported and no finding was made against Paton, who was the complainant.",
      src:"The Globe and Mail", url:"https://www.theglobeandmail.com/canada/article-bc-mla-ian-paton-questioned-by-mounties-over-allegation-conservatives/" },
    { type:"record", label:"Reported", date:"24 August 2026",
      text:"Paton left the BC Conservative caucus to sit as an independent, citing Findlay's staff purges and messaging, and said he would form a new party with Peter Milobar. In July 2026 he had declined a request to give up his seat for Findlay and resigned as her Lower Mainland lieutenant.",
      src:"Black Press Media", url:"https://todayinbc.com/2026/08/24/ian-paton-leaves-b-c-conservatives-plans-to-form-new-party/" },
    { type:"record", label:"Reported", date:"18 September 2026",
      text:"Paton was one of eight MLAs, including Milobar, Sturko, Banman, Bird, Warbus, Wat and Wilson, confirmed as CentreBC members when Milobar became that party's leader.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/livestory/british-columbia-politics-independents-bc-centre-conservatives-9.7350118" },
    { type:"record", label:"Reported", date:"22 September 2026",
      text:"After the election call, Paton rejoined the BC Conservatives under interim leader Lorne Doerkson and announced he would run again in Delta South. Seven CentreBC MLAs returned that day, leaving Elenore Sturko as the party's only incumbent.",
      src:"Delta Optimist", url:"https://www.delta-optimist.com/local-news/paton-seeking-re-election-with-bc-conservatives-12814586" }
  ],
  "North Vancouver-Lonsdale|MLA|Bowinn Ma":[
    { type:"record", label:"Reported", date:"28 May 2025",
      text:"Bill 15, the Infrastructure Projects Act carried by Ma as Infrastructure Minister, passed third reading 47 to 46 on the Speaker's tiebreaking vote. All Conservative, Green and independent MLAs voted against it, and First Nations leaders, the Union of BC Municipalities and environmental groups opposed it.",
      src:"The Canadian Press via Times Colonist", url:"https://www.timescolonist.com/national-business/bill-fast-tracking-infrastructure-projects-passes-as-speaker-raj-chouhan-breaks-tie-10729709" },
    { type:"record", label:"Reported", date:"29 May 2025",
      text:"Ma said the government made an error in not adequately consulting First Nations before introducing Bill 15 and committed to wider consultation when developing its regulations.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/b-c-minister-says-government-erred-in-not-consulting-first-nations-on-legislation-1.7536257" }
  ],
  "North Vancouver-Seymour|MLA|Lynne Block":[
    { type:"record", label:"Reported", date:"29 July 2026",
      text:"Block was one of three Conservative MLAs who declined a request to resign their seats so leader Kerry-Lynne Findlay could run in a byelection. Block said she considered the request and declined because she loved the job and knew her riding well.",
      src:"Black Press Media", url:"https://todayinbc.com/2026/07/31/b-c-conservative-leader-talks-future-plans-but-first-needs-a-seat/" },
    { type:"record", label:"Reported", date:"26 September 2026",
      text:"The BC Conservatives moved Block to run in North Vancouver-Seymour, held by NDP MLA Susie Chant, so that former leadership finalist Caroline Elliott could run in West Vancouver-Capilano.",
      src:"The Canadian Press via Lethbridge Herald", url:"https://lethbridgeherald.com/news/national-news/2026/09/26/former-b-c-conservative-leadership-candidate-caroline-elliott-will-run-in-election/" }
  ],
  "Nanaimo-Gabriola Island|MLA|Sheila Malcolmson":[
    { type:"record", label:"Reported", date:"1 November 2021",
      text:"As Minister of Mental Health and Addictions, Malcolmson announced B.C.'s application to Health Canada for an exemption to decriminalize possession of small amounts of illicit drugs, calling addiction a public health issue, not a criminal one. The Canadian Press reported in April 2024 that Premier Eby asked Health Canada to recriminalize public drug use after months of backlash. No finding against Malcolmson was made.",
      src:"BC Gov News; Canadian Press via CBC", url:"https://www.cbc.ca/news/canada/british-columbia/bc-decriminalization-reversal-under-review-1.7188534" }
  ],
  "Nanaimo-Lantzville|MLA|George Anderson":[
    { type:"record", label:"Reported", date:"9 April 2026",
      text:"Anderson sponsored private member's Bill M216, the Professional Reliance Act, which would have required local governments to accept technical reports from licensed professionals without staff review. After the Union of BC Municipalities raised safety and liability concerns, Anderson asked the committee to stop considering the bill; the Housing Minister said the province would do further work on its principles. No adverse finding was made.",
      src:"CHLY 101.7 FM; BC Gov News", url:"https://www.chly.ca/local-news/2025/11/28/ubcm-has-red-flags-over-bill-m216-that-would-fast-track-housing-in-british-columbia" }
  ],
  "North Vancouver-Seymour|MLA|Ben Holt":[
    { type:"conduct", label:"Finding", date:"2 February 2023",
      text:"Holt pleaded guilty to three counts of mischief and one count of breaching bail conditions over Save Old Growth traffic blockades in Burnaby, Vancouver and the North Shore in 2022. He apologized in court and said his civil disobedience was over. A provincial court judge imposed a 60-day conditional sentence with house arrest and a curfew, then six months of probation.",
      src:"Burnaby Now (via Squamish Chief); Castanet", url:"https://squamishchief.com/highlights/lower-mainland-anti-logging-protester-sentenced-to-house-arrest-curfew-6477186" }
  ],
  "Delta South|MLA|Jim McMurtry":[
    { type:"conduct", label:"Filed", date:"28 July 2026",
      text:"Maple Ridge News reported that the Abbotsford school district fired McMurtry in February 2023 over 2021 classroom remarks on residential school deaths and other alleged misconduct, which he disputes. His union declined to take the grievance to arbitration, and the Labour Relations Board upheld that decision. In July 2026 he petitioned B.C. Supreme Court to review the board's decision. No tribunal has ruled on whether the dismissal was justified.",
      src:"Maple Ridge News", url:"https://www.mapleridgenews.com/2026/07/28/court-petition-filed-on-behalf-of-teacher-fired-for-residential-school-comments-in-abbotsford/" }
  ],
  "Oak Bay-Gordon Head|MLA|Andrew Weaver":[
    { type:"record", label:"Reported", date:"29 May 2017",
      text:"Global News reported that Weaver, as BC Green leader, agreed to support a BC NDP minority government on confidence and budget votes without joining cabinet.",
      src:"Global News", url:"https://globalnews.ca/news/3486794/b-c-green-party-leader-andrew-weaver-agrees-to-support-john-horgans-ndp/" },
    { type:"record", label:"Reported", date:"15 January 2020",
      text:"CBC News reported that Weaver left the Green caucus to sit as an independent MLA, citing family health problems. He said he still supported the minority government.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/andrew-weaver-green-party-bc-independent-1.5427746" },
    { type:"record", label:"Reported", date:"13 July 2024",
      text:"CBC News reported that Weaver criticized Premier Eby and said he was considering aligning with Conservative leader John Rustad before the 2024 election.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/andrew-weaver-shows-support-bc-conservatives-1.7262839" }
  ],
};

const P = {
  "Vancouver-Hastings|MLA|Niki Sharma":[
    { status:"partial",
      text:"In August 2025 Sharma said B.C. would file an appeal of the Cowichan Tribes Aboriginal title ruling and seek a stay. By March 2026 the Globe and Mail reported that all parties had filed applications to appeal but the appeal process was stalled because the trial's final order had not been issued.",
      src:"Globe and Mail", url:"https://www.theglobeandmail.com/canada/article-months-after-bc-supreme-courts-landmark-ruling-on-aboriginal-title/" }
  ],
  "Vancouver-Point Grey|MLA|David Eby":[
    { status:"broken",
      text:"Eby's 2024 campaign promised a $1,000 per household grocery rebate. In February 2025 Finance Minister Brenda Bailey put the rebate on hold and Eby said tariff threats had changed the economic conditions under which it was proposed.",
      src:"Global News", url:"https://globalnews.ca/news/11019879/eby-grocery-rebate-trump" },
    { status:"partial",
      text:"In September 2024 Eby pledged Mental Health Act changes and secure involuntary care facilities, starting at Maple Ridge and Surrey Pretrial. In July 2026 he announced a 72 bed Prince George centre and a 60 bed Surrey centre, with beds opening from December 2027 through 2028.",
      src:"Chilliwack Progress", url:"https://theprogress.com/2026/07/10/new-involuntary-care-facilities-to-be-opened-in-surrey-and-prince-george/" },
    { status:"reversed",
      text:"In a December 2025 year end interview Eby said \"we're not seeking an election here\" and that British Columbians did not want one. On 22 September 2026 he called a snap election for 24 October 2026, citing the U.S. trade war.",
      src:"Global News", url:"https://globalnews.ca/news/12068590/bc-david-eby-snap-election-2026/" }
  ],
  "Vancouver-Renfrew|MLA|Adrian Dix":[
    { status:"partial",
      text:"Dix signed the BC Nurses' Union 2024 candidate pledge to support minimum nurse-to-patient staffing ratios in all care settings. BCNU reported in March 2026 that the first hospital phase was 81 per cent activated, with long-term care and community settings still to come.",
      src:"BC Nurses' Union", url:"https://www.bcnu.org/news-and-events/campaigns-and-initiatives/past-campaigns/2024-provincial-election/candidate-pledge-signees" }
  ],
  "North Vancouver-Lonsdale|MLA|Bowinn Ma":[
    { status:"partial",
      text:"On 1 October 2024 Ma pledged a bus rapid transit line from Park Royal to Metrotown with construction starting in 2025 and planning for a later light rail or SkyTrain upgrade. TransLink instead began construction of an R2 RapidBus extension on that corridor in April 2026 and launched the service in September 2026, while full bus rapid transit remained in planning.",
      src:"TransLink (pledge reported by Global News, 1 October 2024)", url:"https://www.translink.ca/news/2026/april/translink%20fast-tracks%20major%20rapidbus%20expansion%20from%20north%20shore%20to%20metrotown" }
  ],
  "Oak Bay-Gordon Head|MLA|Diana Gibson":[
    { status:"partial",
      text:"At a 9 October 2024 campaign announcement Gibson said: \"We will redevelop Oak Bay Lodge, with a priority on health services for seniors, including primary care.\" As of September 2026 Island Health and the hospital district signed a two-year planning agreement, but the province committed no capital or operating funding and no project was approved.",
      src:"Times Colonist; Oak Bay News", url:"https://www.timescolonist.com/local-news/ndp-promises-care-for-seniors-on-oak-bay-lodge-site-9638956" }
  ],
  "Nanaimo-Gabriola Island|MLA|Sheila Malcolmson":[
    { status:"kept",
      text:"In September 2024 Malcolmson told CBC the federal Canada Disability Benefit would top up provincial benefits and would not be clawed back. The province formalized the exemption on 20 June 2025.",
      src:"CBC; BC Gov News", url:"https://www.cbc.ca/news/canada/british-columbia/benefit-cuts-deter-people-with-disabilities-from-having-relationships-1.7315553" },
    { status:"kept",
      text:"In September 2024 Malcolmson told CBC the rule reducing disability assistance for couples was not the right rule and her ministry hoped to tackle it. On 13 November 2025 the ministry announced the couples clawback would end 1 December 2025.",
      src:"BC Gov News", url:"https://news.gov.bc.ca/releases/2025SDPR0017-001110" }
  ],
};

// Searched with nothing adverse found and no promise with a checkable status.
const SEARCHED = [
  "Vancouver-Langara|MLA|Sunita Dhir",
  "Vancouver-Little Mountain|MLA|Christine Boyle",
  "North Vancouver-Seymour|MLA|Susie Chant",
  "Victoria-Swan Lake|MLA|Nina Krieger",
  "Victoria-Beacon Hill|MLA|Grace Lore",
  "Richmond-Queensborough|MLA|Steve Kooner",
  "Vancouver-Yaletown|MLA|Terry Yung",
  "Vancouver-Fraserview|MLA|Francoise Raunet",
  "Vancouver-Fraserview|MLA|Deep Sandhu",
  "Vancouver-Fraserview|MLA|Aman Singh",
  "Vancouver-Hastings|MLA|Christian Bosio",
  "Vancouver-Hastings|MLA|Kimball Cariou",
  "Vancouver-Hastings|MLA|Kyra Philbert",
  "Vancouver-Hastings|MLA|Phyllis Tang",
  "Vancouver-Kensington|MLA|Adam Hawk",
  "Vancouver-Kensington|MLA|Aron Lageri",
  "Vancouver-Langara|MLA|John Atoyebi",
  "Vancouver-Langara|MLA|Jaime Stein",
  "Vancouver-Little Mountain|MLA|Alex Muir",
  "Vancouver-Point Grey|MLA|Michael Davis",
  "Vancouver-Point Grey|MLA|Alex McMillan",
  "Vancouver-Point Grey|MLA|Beatrice Sharpe",
  "Vancouver-Quilchena|MLA|Carson Binda",
  "Vancouver-Quilchena|MLA|Douglas Courtemanche",
  "Vancouver-Quilchena|MLA|Petra Kuret",
  "Vancouver-Quilchena|MLA|Callista Ryan",
  "Vancouver-Renfrew|MLA|Rebecca Haber",
  "Vancouver-Renfrew|MLA|Tom Ikonomou",
  "Vancouver-Renfrew|MLA|Lisa Prescott",
  "Vancouver-South Granville|MLA|Maria J Cruz",
  "Vancouver-South Granville|MLA|Lara Honrado",
  "Vancouver-South Granville|MLA|Lisa Phillips",
  "Vancouver-South Granville|MLA|Colin Smith",
  "Vancouver-South Granville|MLA|Salvatore Vetro",
  "Vancouver-Strathcona|MLA|Amanda Burrows",
  "Vancouver-Strathcona|MLA|Jordan Zheng McIntosh",
  "Vancouver-Strathcona|MLA|Tanya Webking",
  "Vancouver-West End|MLA|Scott MacDonald",
  "Vancouver-West End|MLA|Dion Weisner",
  "Vancouver-Yaletown|MLA|Sam Chandola",
  "Vancouver-Yaletown|MLA|Margareta Dovgal",
  "Richmond-Bridgeport|MLA|Linda Li",
  "Richmond Centre|MLA|Lawrence Chen",
  "Richmond Centre|MLA|Calvin Dang",
  "Richmond Centre|MLA|Sacha Peter",
  "Richmond Centre|MLA|Henry Yao",
  "Richmond-Queensborough|MLA|Luc Burns",
  "Richmond-Queensborough|MLA|Dhar Grewal",
  "Richmond-Steveston|MLA|Bruce Kong",
  "Richmond-Steveston|MLA|Barry Wosk",
  "Richmond-Steveston|MLA|Gordon Zhang",
  "Delta North|MLA|Monica Mohan",
  "Delta North|MLA|Kuldeep Rangi",
  "Delta North|MLA|Todd Schierling",
  "Delta South|MLA|Skadi Green",
  "Delta South|MLA|Jason McCormick",
  "North Vancouver-Lonsdale|MLA|Trevor Withers",
  "North Vancouver-Seymour|MLA|Lori Climenhaga",
  "North Vancouver-Seymour|MLA|Frederick Thiele",
  "West Vancouver-Capilano|MLA|Honieh Barzegari",
  "West Vancouver-Capilano|MLA|Naomi Chocyk",
  "West Vancouver-Capilano|MLA|Caroline Elliott",
  "Victoria-Beacon Hill|MLA|Joachim Agou",
  "Victoria-Beacon Hill|MLA|Rajinder S. Sahota",
  "Victoria-Swan Lake|MLA|Carolyn Howe",
  "Victoria-Swan Lake|MLA|Tim Taylor",
  "Oak Bay-Gordon Head|MLA|Andrew Appleton",
  "Oak Bay-Gordon Head|MLA|Stan Sipos",
  "Nanaimo-Gabriola Island|MLA|Mark MacDonald",
  "Nanaimo-Gabriola Island|MLA|Anna Mary McKenzie",
  "Nanaimo-Lantzville|MLA|Kelsey Pringle",
  "Nanaimo-Lantzville|MLA|Pepper Saltman",
  "West Vancouver-Capilano|MLA|Arwa Shurab",
  "Vancouver-Strathcona|MLA|Robert Crooks"
];
