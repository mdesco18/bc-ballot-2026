
// R = record entries, P = promise entries, keyed "Jurisdiction|Race|Name" or "Jurisdiction|party|PartyName"
// type:  financial | election | conduct | record | cleared
// label: Finding | Filed | Reported | Cleared
// status (promises): kept | broken | partial | reversed | jurisdiction | costing

const OPEN_MEETINGS = {
  type:"conduct", label:"Finding", date:"August 2025",
  text:"Integrity Commissioner Lisa Southern found that Mayor Sim and six ABC councillors breached the Vancouver Charter's open-meeting rules. Over at least two matters, a turf field at Moberly Park and a climate justice charter, they agreed in private group chats and party meetings on the wording of amendments and how members would vote. The investigation followed a complaint by Green Coun. Pete Fry.",
  src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/ken-sim-integrity-commissioner-1.7617152"
};

const R = {
  // ---------------- VANCOUVER ----------------
  "Vancouver|Mayor|Ken Sim":[
    OPEN_MEETINGS,
    { type:"conduct", label:"Finding", date:"11 May 2026",
      text:"A second investigation found Sim breached the council code of conduct twice, by using a City Hall news conference and an official social media post to represent Coun. Sean Orr as antisemitic. The investigator called for a written apology. Council voted not to act on the findings: all six ABC members against, the other four in favour. Sim declared a conflict and did not vote.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/vancouver-mayor-ken-sim-no-sanctions-9.7222049" },
    { type:"cleared", label:"Cleared", date:"2024",
      text:"A review involving VPD professional standards, RCMP E Division and Abbotsford Police cleared Sim of an allegation that he drove after drinking during his first 100 days in office.",
      src:"Global News", url:"https://globalnews.ca/news/11029624/vancouver-mayor-ken-sim-police-cleared-of-baseless-dui-allegation" }
  ],
  "Vancouver|Council|Sarah Kirby-Yung":[OPEN_MEETINGS],
  "Vancouver|Council|Lisa Dominato":[OPEN_MEETINGS],
  "Vancouver|Council|Mike Klassen":[OPEN_MEETINGS],
  "Vancouver|Council|Peter Meiszner":[
    OPEN_MEETINGS,
    { type:"financial", label:"Raised, no finding", date:"2023\u20132024",
      text:"Meiszner moved the motion to review Vancouver's view protection guidelines. Council adopted it on 10 July 2024, removing 14 view cones and increasing the development capacity of sites beneath them. Before entering politics he published urbanYVR, a real estate and development news site. A resident raised conflict-of-interest concerns with the Integrity Commissioner over meetings he held with developers ahead of the motion. According to the Integrity Commissioner, Meiszner had sold urbanYVR more than a year before that inquiry. No finding of conflict was made against him. Unlike most entries here, the concerns were documented by the civic watchdog blog CityHallWatch rather than by a newsroom, which is why the label is weaker.",
      src:"The Tyee, on the view cone decision", url:"https://thetyee.ca/News/2024/07/18/Vancouver-Protected-View-Cones-Started-Melt/" }
  ],
  "Vancouver|Council|Lenny Zhou":[
    OPEN_MEETINGS,
    { type:"conduct", label:"Reported", date:"July 2024",
      text:"Zhou moved the 24 July 2024 motion that froze Integrity Commissioner Lisa Southern's power to report publicly on complaints, including investigations then pending against council members. After public backlash he moved to rescind it, saying he had heard “loud and clear from the residents of Vancouver that they do not want to see this amendment move forward.” Council recessed the special meeting and the freeze was dropped.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/vancouver-council-integrity-commissioner-1.7285897" }
  ],
  "Vancouver|Mayor|Rebecca Bligh":[
    Object.assign({}, OPEN_MEETINGS, {text: OPEN_MEETINGS.text + " Bligh was an ABC councillor at the time and was among those named."}),
    { type:"record", label:"Reported", date:"February 2025",
      text:"ABC expelled Bligh from its caucus. The party president said she was “not a core value fit.” Reporting linked the split to her objections to a hold on new supportive housing and her vote to keep the 2022 ban on natural gas heating in new detached homes. She sat as an independent for the rest of the term.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/bligh-kicked-out-of-abc-1.7460001" }
  ],
  "Vancouver|Mayor|Pete Fry":[
    { type:"record", label:"Reported", date:"2024–2025",
      text:"Fry lodged the complaint that led to the August 2025 open-meetings finding against the mayor and six ABC councillors.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/ken-sim-integrity-commissioner-1.7617152" }
  ],
  "Vancouver|Council|Sean Orr":[
    { type:"record", label:"Reported", date:"2025–2026",
      text:"Orr was the complainant in the code of conduct case that found the mayor had represented him as antisemitic. Council declined to impose the recommended sanction.",
      src:"The Tyee", url:"https://thetyee.ca/News/2026/06/03/Vancouver-Council-Mayor-Harassing-Councillor/" }
  ],
  "Vancouver|Mayor|Colleen Hardwick":[
    { type:"record", label:"Reported", date:"2022",
      text:"A CBC analysis of her 2018–2022 term found roughly 250 abstentions in two and a half years, about 150 more than the next closest councillor. Of 25 contested motions CBC examined, she was the only member to vote against or abstain on every one.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/vancouver-profiles-colleen-hardwick-team-2022-1.6603464" },
    { type:"cleared", label:"Finding", date:"2022",
      text:"Vancouver's integrity commissioner found that then-mayor Kennedy Stewart breached the code of conduct by publishing tweets about Hardwick that were untrue, concerning a motion she drafted on the 2030 Olympic bid. The finding was against Stewart, who is not a candidate.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/integrity-commissioner-vancouver-mayor-ruling-1.6516014" }
  ],
  "Vancouver|Mayor|Kareem Allam":[
    { type:"record", label:"Reported", date:"February 2023",
      text:"Allam left his post as Mayor Sim's chief of staff after roughly three months. Neither he nor the mayor's office gave a public reason. He is a political strategist and lobbyist and has been associated with Fairview Strategy since 2019.",
      src:"Business in Vancouver", url:"https://www.biv.com/news/economy-law-politics/vancouver-mayor-ken-sims-top-staffer-quits-8270477" },
    { type:"record", label:"Reported", date:"2022",
      text:"As ABC campaign manager he publicly apologized for a commitment he made about clearing the East Hastings encampment, saying “I made a strong statement.”",
      src:"Vancouver Is Awesome", url:"https://www.vancouverisawesome.com/local-news/ken-sims-former-chief-of-staff-apologizes-for-promise-related-to-east-hastings-encampment-kareem-allam-6960999" }
  ],

  // ---------------- RICHMOND ----------------
  "Richmond|Mayor|Kash Heed":[
    { type:"election", label:"Finding", date:"2010–2012",
      text:"Heed resigned as BC Solicitor General in April 2010 after a special prosecutor was appointed to examine his 2009 provincial campaign, over flyers attacking the NDP that did not disclose who paid for them. The prosecutor found Heed had nothing to do with the flyers and recommended charges against two campaign aides. Heed resigned from cabinet a second time after it emerged the special prosecutor's firm had donated to his campaign. He was later fined at least $8,000 for exceeding the 2009 spending limit, in a finding that he did not intentionally break the law.",
      src:"The Globe and Mail", url:"https://www.theglobeandmail.com/news/british-columbia/former-bc-solicitor-general-fined-at-least-8000-for-election-violations/article592737/" }
  ],

  // ---------------- DELTA ----------------
  "Delta|Mayor|George V. Harvie":[
    { type:"conduct", label:"Reported", date:"May 2024",
      text:"Delta council passed seven motions limiting the mayor's influence and removed him as Delta's director to Metro Vancouver, which ended his term as Metro Vancouver board chair on 1 July 2024. Council cited what it called his “regrettable actions” and a need to re-establish good governance.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/george-harvie-delta-mayor-metro-vancouver-chair-controversy-1.7218561" },
    { type:"record", label:"Reported", date:"December 2025",
      text:"Four councillors elected on Harvie's slate were told Achieving for Delta would not endorse them again. In a joint statement they said the decision was “aimed at silencing voices that have raised concerns about the mayor's pattern of reckless spending and increasingly erratic decision-making.” These are allegations by political opponents, not findings by any body.",
      src:"Delta Optimist", url:"https://www.delta-optimist.com/local-news/dylan-kruger-launches-mayoralty-bid-with-one-delta-12326729" }
  ],

  // ---------------- VICTORIA ----------------
  "Victoria|Council|Susan Kim":[
    { type:"conduct", label:"Finding", date:"2025",
      text:"An investigator found Kim inadvertently breached Victoria's code of conduct by signing an open letter titled “Stand with Palestine: Call on Political Leaders to End Their Complicity in Genocide” and by liking a related social media post. The complaint was submitted by Coun. Marianne Alto on behalf of a member of the public. Council sided with the investigator and imposed no sanctions; councillors were to receive training instead.",
      src:"Times Colonist", url:"https://www.timescolonist.com/local-news/victoria-council-sides-with-investigator-and-wont-sanction-kim-councillors-to-get-training-9149265" }
  ],
  "Victoria|Mayor|Marianne Alto":[
    { type:"record", label:"Reported", date:"2026",
      text:"Voters approved borrowing up to $168.9 million to replace Crystal Pool, with 58% in favour on a 21% turnout. Construction is set to begin in fall 2026. Alto cites the project, thousands of approved housing units and the Community Safety and Wellbeing Plan as her record.",
      src:"Times Colonist", url:"https://www.timescolonist.com/local-news/alto-makes-it-official-shes-running-again-for-victoria-mayor-12306817" }
  ],

  // ---------------- NANAIMO ----------------
  "Nanaimo|Mayor|Leonard Krog":[
    { type:"record", label:"Reported", date:"2024",
      text:"Nanaimo's mayor and councillors claimed $77,457 in expenses in 2024. Krog claimed the least of any member, $3,887.",
      src:"The Discourse", url:"https://thediscourse.ca/nanaimo/nanaimo-councillor-defends-conference-expenses" }
  ],

  // ---------------- DISTRICT OF NORTH VANCOUVER ----------------
  "District of North Vancouver|Council|Betty Forbes":[
    { type:"financial", label:"Filed, later dropped", date:"2019–2021",
      text:"Forbes was the district's only resident with an active complaint file about pigeons, concerning birds kept by her next-door neighbour. After her 2018 election she emailed councillors asking them to ban pigeon ownership, two days before the matter first reached council. The ban that passed affected only her neighbour. Eleven residents petitioned the BC Supreme Court to remove Forbes and Coun. Lisa Muri from office. Mayor Mike Little ordered an independent review by David Loukidelis, which returned 12 recommendations on conflict-of-interest training and ethics. Council repealed the ban. The court case was dropped and no finding of conflict was made against her.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/north-van-pigeons-betty-forbes-1.5964869" }
  ],
  "District of North Vancouver|Council|Lisa Muri":[
    { type:"financial", label:"Filed, later dropped", date:"2019–2021",
      text:"Muri was named alongside Coun. Betty Forbes in a BC Supreme Court petition by eleven residents seeking their removal from office over the district's pigeon ban. The petition was dropped and no finding was made against her. The independent review ordered by the mayor made recommendations on conflict-of-interest training rather than findings against individual members.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/north-vancouver-pigeon-feud-petition-1.5406046" }
  ],
  "District of North Vancouver|Mayor|Mike Little":[
    { type:"record", label:"Reported", date:"2019–2020",
      text:"Little ordered the independent review of council's conduct over the pigeon ban after CBC News provided emails showing a councillor had asked colleagues to pass it. Council later repealed the bylaw.",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/pigeon-investigation-report-north-van-2020-1.5468615" }
  ]
};

const P = {
  "Vancouver|Mayor|Ken Sim":[
    { status:"note", text:"This list is long because Sim is the only candidate on this page whose promises a news outlet audited. Daily Hive assessed all 93 of ABC's 2022 commitments on 16 September 2026. No comparable audit exists for any other incumbent here, so a shorter list elsewhere means nobody checked, not that the record is better.",
      src:"Daily Hive", url:"https://dailyhive.com/vancouver/ken-sim-2022-campaign-promises" },
    { status:"kept",    text:"Hire 100 new police officers. Target met." },
    { status:"kept",    text:"Adopt a citywide plan. Vancouver's first Official Development Plan was adopted in March 2026." },
    { status:"partial", text:"Hire 100 mental health nurses to pair with officers. About 50 workers with a range of specialized training were hired instead." },
    { status:"partial", text:"5,000 new childcare spaces. About 2,000 delivered, with 743 more approved." },
    { status:"partial", text:"Speed up permitting, the “3-3-3-1” pledge. Simple renovation permits hit the target, 92% inside three days; other categories still lag." },
    { status:"partial", text:"Tax restraint. Property taxes rose 22.1% across the four-year term, after ABC criticised the previous council's 25%. The 2025 increase was zero." },
    { status:"broken",  text:"Double co-op housing, about 6,000 units. 334 net new units were added." },
    { status:"broken",  text:"Plant 100,000 trees in four years. Net new trees from 2023 to 2025 totalled 257." },
    { status:"broken",  text:"Create a Night Mayor position. Never created." },
    { status:"reversed",text:"The park board. ABC ran in 2022 on fixing it rather than abolishing it, announced abolition in December 2023, then dropped the plan in July 2026 after the province shelved the enabling bill and three ABC commissioners quit the party." }
  ],
  "Vancouver|party|ABC Vancouver":[
    { status:"reversed",text:"Park board abolition. Announced December 2023, abandoned July 2026, and ABC is now running a full slate of commissioner candidates. Commissioner Laura Christensen, one of three who left the party over the plan, said “this is not what he campaigned on.”",
      src:"CBC News", url:"https://www.cbc.ca/news/canada/british-columbia/ken-sim-park-board-stays-9.7268871" }
  ],
  "Vancouver|party|Vancouver Liberals":[
    { status:"jurisdiction", text:"A ward system. The plan is a citizens' assembly and a possible plebiscite in 2030, with wards no earlier than 2034. Vancouver's electoral structure is set by the Vancouver Charter, which only the province can amend, so council cannot deliver this on its own.",
      src:"Vancouver Liberals", url:"https://www.vancouverliberals.com/issues" },
    { status:"costing", text:"Cancel the $800 million “Second City Hall” campus and redirect the money to parks and recreation. Analysts note that cancelling a capital project does not free an equivalent sum, because financing structures, timing and contractual obligations constrain what can be reallocated.",
      src:"CityHallWatch", url:"https://cityhallwatch.wordpress.com/2026/09/09/election-2026-getting-to-know-the-parties-vancouver-liberals-kareem-allam/" }
  ],
  "Vancouver|party|Bright Future Vancouver":[
    { status:"jurisdiction", text:"Fare-free transit for residents. Fares are set by TransLink and the Mayors' Council, with provincial oversight. A single city council cannot set them. Vancouver council's own step in December 2025 was to ask the mayor to write to the province advocating a pilot.",
      src:"City of Vancouver", url:"https://council.vancouver.ca/20251210/documents/cfscA7.pdf" },
    { status:"jurisdiction", text:"SkyTrain extension to UBC. The province took the lead on the Millennium Line UBC Extension from TransLink in 2022 and runs the planning and business case. Council can advocate and fund local works, not build it.",
      src:"TransLink", url:"https://www.translink.ca/plans-and-projects/projects/rapid-transit-projects/millennium-line-ubc-extension" }
  ]
};

// Candidates actively searched with nothing adverse found. Absence of this marker means not yet searched.
const SEARCHED = [
  "Richmond|Mayor|Alexa Loo","Richmond|Mayor|Rob Howard","Richmond|Mayor|Mei Kang","Richmond|Mayor|Dickens Cheung",
  "Richmond|Council|Carol Day","Richmond|Council|Laura Gillanders","Richmond|Council|Michael Wolfe","Richmond|Council|Andy Hobbs",
  "Delta|Mayor|Dylan Kruger","Delta|Mayor|Melissa Granum",
  "Victoria|Council|Marg Gardiner","Victoria|Council|Jeremy Caradonna","Victoria|Council|Matt Dell","Victoria|Council|Dave Thompson",
  "Nanaimo|Council|Paul Manly","Nanaimo|Council|Sheryl Armstrong","Nanaimo|Council|Ian Thorpe","Nanaimo|Council|Hilary Eastmure",
  "City of North Vancouver|Mayor|Linda Buchanan","City of North Vancouver|Mayor|Mike McGraw",
  "Vancouver|Council|Lucy Maloney","Vancouver|Council|John Coupar","Vancouver|Council|Moira Stilwell","Vancouver|Council|Michael Wu",
  "Vancouver|Park Board|Tom Digby","Vancouver|Park Board|Scott Jensen","Vancouver|Park Board|Jas Virdi"
];

Object.assign(P, {
  "Vancouver|party|Vote Vancouver":[
    { status:"nocost", text:"A published housing platform with nine commitments, including land trusts for public land, faster approvals, missing-middle housing on city land and replacing unsafe SROs. No dollar cost, funding source or timeline is attached to any of them.",
      src:"Vote Vancouver", url:"https://www.votevancouver.ca/housing" }
  ],
  "Vancouver|party|Green":[
    { status:"backed", text:"Fast-tracking housing in partnership with Build Canada Homes. The program is legislated, funded and already operating in BC. The Build Canada Homes Act received Royal Assent on 18 June 2026, a Canada\u2013BC partnership signed on 18 February 2026 committed $810 million to at least 700 shovel-ready supportive and transitional homes, and Build Canada Homes names municipalities as direct partners. BC's own DASH program is already delivering the standardized and prefabricated designs the Greens describe. A city can apply rather than wait for a deal to be struck.",
      src:"Prime Minister of Canada", url:"https://www.pm.gc.ca/en/news/news-releases/2026/06/18/canada-and-british-columbia-forge-new-partnership-accelerate" },
    { status:"nocost", text:"Housing and local-procurement commitments are published without dollar costs or funding sources." }
  ],
  "Vancouver|party|OneCity":[
    { status:"nocost", text:"Eleven platform areas are published, from housing and harm reduction to local democracy, each as a short statement. No costs or funding sources are disclosed.",
      src:"OneCity Vancouver", url:"https://www.onecityvancouver.ca/platform" }
  ],
  "Vancouver|party|COPE":[
    { status:"jurisdiction", text:"Free transit for under-18s and expanded service. Fares and service levels are set by TransLink and the Mayors' Council, not by Vancouver council alone.",
      src:"COPE", url:"https://www.votecope.ca/platform" },
    { status:"jurisdiction", text:"Ending the non-resident property owner vote and extending civic voting rights to permanent residents. Both require the province to amend the Vancouver Charter.",
      src:"COPE", url:"https://www.votecope.ca/platform" },
    { status:"costed", text:"Unusually for this ballot, one commitment names its funding mechanism: a mansion tax of 1% on assessed value above $5 million, to fund homelessness measures." }
  ],
  "Vancouver|party|TEAM":[
    { status:"nocost", text:"Positions are published across several policy pages covering livability, affordability, safety and planning, without costs or funding sources.",
      src:"TEAM", url:"https://www.voteteam.ca/our-positions-home-2026" }
  ],
  "Vancouver|party|TrueBlue Vancouver":[
    { status:"jurisdiction", text:"\u201cBetter schools and parental involvement\u201d sits with the school board and the province. City council has no authority over schools, curriculum or school policy.",
      src:"TrueBlue Vancouver", url:"https://truebluevancouver.com/" },
    { status:"nocost", text:"Ten priorities are published as headings, with a longer platform offered as a PDF. No costs appear alongside the priorities." }
  ],
  "Vancouver|party|ABC Vancouver":[
    { status:"nocost", text:"The 2026 platform is published as themes rather than costed items: a tax freeze for residents and businesses, more police and mental health nurses, core service investment and fewer permitting barriers.",
      src:"ABC Vancouver", url:"https://abcvancouver.ca/" }
  ],
  "Vancouver|party|Independent Parks Party":[
    { status:"noplatform", text:"No policy platform was found on the party's site, which carries organizational information and volunteer links only.",
      src:"Independent Parks Party", url:"https://parksparty.vote/" }
  ],
  "Vancouver|party|Affordable Housing":[
    { status:"noplatform", text:"No detailed platform was found beyond the party name and a single-page site." }
  ],
  "Delta|party|One Delta":[
    { status:"nocost", text:"A concrete and checkable pledge: no new taxes, levies or fees if elected. No costing is published showing how services and capital would be funded without them.",
      src:"Peace Arch News", url:"https://peacearchnews.com/2026/09/04/kruger-one-delta-promise-no-new-taxes-levies-or-fees-if-elected/" }
  ],
  "Delta|party|Delta First":[
    { status:"noplatform", text:"No platform published. Mayoral candidate Melissa Granum said the party would listen to residents before offering one.",
      src:"Peace Arch News", url:"https://peacearchnews.com/2026/03/11/delta-first-announces-mayor-council-candidates-ahead-of-fall-election/" }
  ],
  "Victoria|party|Victoria For All":[
    { status:"jurisdiction", text:"Free and expanded public transit. In Greater Victoria, fares, routes and service levels are set by the Victoria Regional Transit Commission under the BC Transit Act, whose members are appointed by the province. Victoria council does not control them.",
      src:"BC Transit", url:"https://www.bctransit.com/about/corporate/funding-and-governance/victoria-regional-transit-commission/" },
    { status:"nocost", text:"The platform covers public and co-operative housing, renter protections, community mental health, harm reduction, climate resilience and cultural space, without published costs.",
      src:"CHEK News", url:"https://cheknews.ca/victoria-for-all-launches-political-slate-ahead-of-october-municipal-election-1342211/" }
  ]
});
