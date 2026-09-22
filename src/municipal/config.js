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

// Read by shared/guide.js.
const STORE="bcballot2026";
const RACES=["Mayor","Council","Park Board","School"];
const RACE_LABEL={School:"School board"};
const RACE_TITLE={School:"School Board"};
function raceNote(j,race){ return race==="School" ? J[j].schoolNote+" Incumbency is not marked in this race." : ""; }
const JGROUPS=null;
const ELECTION_DAY="2026-10-17", VOTING_DAY="Saturday 17 October 2026";
const PROVISIONAL_UNTIL="2026-09-18T23:00:00Z";   // 4pm Pacific, 18 Sept
const CARD_NOTE="Candidate lists are current to 18 September 2026; check your municipality's own page before voting.";
const NO_ROWS="No candidates are listed for this municipality.";
