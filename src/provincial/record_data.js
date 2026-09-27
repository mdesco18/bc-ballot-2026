// R = record entries, P = promise entries, keyed "District|MLA|Name". Same rules as municipal/record_data.js.
// Researched 27 September 2026 against sitting MLAs; re-check each name once nominations close.
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
  "Vancouver-South Granville|MLA|Brenda Bailey":[
    { type:"record", label:"Reported", date:"February 2026",
      text:"Global News reported that the provincial deficit under Finance Minister Bailey stood at a forecast $11.2 billion for the fiscal year ending March 2026, and that the premier's deputy minister described the deficit as unsustainable in a briefing. The Globe and Mail reported the same figure ahead of Budget 2026.",
      src:"Global News; The Globe and Mail", url:"https://globalnews.ca/news/11668687/bc-deficit-unsustainable-budget-day/" }
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
  "Richmond Centre|MLA|Hon Chan":[
    { type:"conduct", label:"Filed", date:"26 March 2026",
      text:"Chan was charged with assault, assault by choking and uttering threats over an alleged 12 January 2024 incident. A special prosecutor was appointed on 27 June 2025. Interim Conservative leader Trevor Halford removed him from caucus, stating that any allegations of domestic violence are taken seriously. No court finding has been made.",
      src:"Global News", url:"https://globalnews.ca/news/11747468/bc-conservative-mla-removed-caucus-serious-charges/" },
    { type:"election", label:"Finding", date:"17 February 2026",
      text:"Elections BC found that Chan's financial agent accepted a prohibited contribution when the campaign auditor did not charge for services, and imposed a $200 penalty. Elections BC stated the candidate gained no advantage, the campaign cooperated, and there was no deliberate attempt to circumvent the Act.",
      src:"Elections BC", url:"https://elections.bc.ca/docs/amp/Enforcement-Notice-Chan-2026.pdf" },
    { type:"conduct", label:"Filed", date:"1 September 2026",
      text:"Chan pleaded not guilty through counsel on 27 August 2026, elected trial by jury and waived a preliminary inquiry. He said in March 2026 he would not resign because everyone is innocent until proven guilty.",
      src:"Global News", url:"https://globalnews.ca/news/12043840/bc-mla-hon-chan-not-guilty-plea-alleged-intimate-partner-violence/" }
  ],
  "Richmond-Steveston|MLA|Kelly Greene":[
    { type:"record", label:"Reported", date:"24 July 2026",
      text:"As Minister of Emergency Management and Climate Readiness, Greene published a statement that she was disappointed by FortisBC's decision to expand the Tilbury LNG facility, citing safety concerns. Premier Eby said he helped draft the statement and supported her advocacy.",
      src:"Canadian Press via National Newswatch", url:"https://nationalnewswatch.com/2026/07/28/eby-defends-ministers-criticism-on-lng-expansion-citing-big-tent" }
  ],
  "Delta North|MLA|Ravi Kahlon":[
    { type:"cleared", label:"Cleared", date:"14 August 2019",
      text:"Acting Conflict of Interest Commissioner Lynn Smith found that Kahlon was neither in a conflict of interest nor in an apparent conflict of interest over his work on the Select Standing Committee on Crown Corporations, which reviewed ride-hailing, while his father held a Victoria taxi licence. The opinion stated that Kahlon's finances were completely separate from his father's and that he had no financial interest in the taxi industry.",
      src:"Conflict of Interest Commissioner", url:"https://coibc.ca/wp-content/uploads/2019/08/Whether-Ravi-Kahlon-MLA-Delta-North-was-in-a-conflict-or-apparent-conflict-of-interest-in-relation-to-duties-as-member-of-Select-Standing-Committee-on-Crown-Corporations-1.pdf" },
    { type:"financial", label:"Raised, no finding", date:"25 September 2024",
      text:"The BC Conservatives asked the Registrar of Lobbyists to investigate a potential conflict between Kahlon, then Housing Minister, and Core Firm, a consulting firm co-founded by his sister, after Kahlon publicly praised its client Renewal Development. Kahlon said he had no contact with the company and that the complaint had no merit. No decision by the registrar was located.",
      src:"Delta Optimist", url:"https://www.delta-optimist.com/highlights/bc-housing-minister-faces-questions-about-sisters-consulting-client-9573495" }
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
  "West Vancouver-Capilano|MLA|Lynne Block":[
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
  "Vancouver-South Granville|MLA|Brenda Bailey":[
    { status:"partial",
      text:"Bailey signed the BC Nurses' Union 2024 candidate pledge to support minimum nurse-to-patient staffing ratios in all care settings. BCNU reported in March 2026 that the first hospital phase was 81 per cent activated, with long-term care and community settings still to come.",
      src:"BC Nurses' Union", url:"https://www.bcnu.org/news-and-events/news/2026/minimum-nurse-patient-ratios-focus-bc-nurses-conference" }
  ],
  "Delta North|MLA|Ravi Kahlon":[
    { status:"partial",
      text:"As Housing Minister, Kahlon launched BC Builds on 13 February 2024 with $950 million and $2 billion in low-cost financing to deliver lower-cost rental homes for middle-income households, with a stated goal of 8,000 to 10,000 homes over five years. As of 2 June 2026 the province reported more than 5,600 homes delivered or underway and ground broken on 4,000 units. Kahlon left the housing portfolio in November 2024.",
      src:"BC Gov News", url:"https://news.gov.bc.ca/releases/2026HMA0028-000639" }
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
  "Vancouver-Fraserview|MLA|George Chow",
  "Victoria-Swan Lake|MLA|Nina Krieger",
  "Victoria-Beacon Hill|MLA|Grace Lore",
  "Richmond-Queensborough|MLA|Steve Kooner",
  "Vancouver-Yaletown|MLA|Terry Yung"
];
