// Districts that cover any part of the seven cities in the municipal guide, from Elections BC's 2023
// redistribution. West Vancouver-Capilano takes in part of the District of North Vancouver and
// Oak Bay-Gordon Head part of the City of Victoria, which is why they are here.
const JGROUPS=[
  ["Vancouver",["Vancouver-Fraserview","Vancouver-Hastings","Vancouver-Kensington","Vancouver-Langara",
    "Vancouver-Little Mountain","Vancouver-Point Grey","Vancouver-Quilchena","Vancouver-Renfrew",
    "Vancouver-South Granville","Vancouver-Strathcona","Vancouver-West End","Vancouver-Yaletown"]],
  ["Richmond",["Richmond-Bridgeport","Richmond Centre","Richmond-Queensborough","Richmond-Steveston"]],
  ["Delta",["Delta North","Delta South"]],
  ["North Vancouver (City and District)",["North Vancouver-Lonsdale","North Vancouver-Seymour","West Vancouver-Capilano"]],
  ["Victoria",["Victoria-Beacon Hill","Victoria-Swan Lake","Oak Bay-Gordon Head"]],
  ["Nanaimo",["Nanaimo-Gabriola Island","Nanaimo-Lantzville"]]
];
const JORDER=JGROUPS.flatMap(g=>g[1]);
const SHORT={};

const DATES=[["Voting day","Saturday 24 October, 8am to 8pm"],["Advance voting","Dates to follow from Elections BC"]];
const J={};
for(const j of JORDER) J[j]={seats:{MLA:1}, blurb:[], dates:DATES,
  link:"https://elections.bc.ca/", vote:"https://mydistrict.elections.bc.ca/"};

// Colours for the parties expected on the ballot; names to be matched to Elections BC's list at nomination close.
const SLOT={"BC NDP":"--h3","Conservative Party of BC":"--h0","BC Green Party":"--h4","Independent":"--hind"};
const PNOTE={};

const ALL=M.map(r=>({j:r[0], race:"MLA", party:r[1], name:r[2], inc:r[3], bio:"", url:r[4]}));

// dev note: record and promise notes not started for this election
const R={}, P={}, SEARCHED=[];

// Read by shared/guide.js.
const STORE="bcballot2026.provincial";
const RACES=["MLA"];
const RACE_LABEL={};
const RACE_TITLE={};
function raceNote(){ return ""; }
const ELECTION_DAY="2026-10-24", VOTING_DAY="Saturday 24 October 2026";
const PROVISIONAL_UNTIL=null;
const CARD_NOTE="Check Elections BC for the final candidate list in your district before voting.";
const NO_ROWS="Candidates are not listed yet. They appear here once nominations close with Elections BC.";
