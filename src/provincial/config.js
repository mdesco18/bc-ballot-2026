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

const DATES=[["Voting day","Saturday 24 October, 8am to 8pm"],["Advance voting","Friday 16 to Wednesday 21 October, 8am to 8pm"],
  ["Vote by mail","Request a package by Sunday 18 October. Elections BC must receive it by 8pm on 24 October."],
  ["District electoral office","Vote at any office in BC until 4pm on 24 October."],["Nominations close","Saturday 3 October, 1pm"]];
const J={};
for(const j of JORDER) J[j]={seats:{MLA:1}, blurb:[], dates:DATES,
  link:"https://elections.bc.ca/2026-provincial-election/candidate-list/", vote:"https://mydistrict.elections.bc.ca/",
  more:["https://bcballot.ca/ridings/"+j.toLowerCase().replace(/ /g,"-")+"/","More on this district at bcballot.ca"]};
J["Vancouver-Strathcona"].blurb=["The seat is vacant: Joan Phillip (BC NDP) died on 28 August 2026."];

// Party names as Elections BC spells them on the final candidate list.
const SLOT={"BC NDP":"--h3","Conservative Party":"--h0","BC Green Party":"--h4","OneBC":"--h5","CentreBC":"--h2",
  "Communist Party of BC":"--h6","CWP":"--h7","Libertarian":"--h8","Independent":"--hind","Unaffiliated":"--hind"};
// Party notes current to 6 October 2026, from Canadian Press reports, party releases and Elections BC.
const PNOTE={
  "BC NDP":"Governing party since 2017, led by Premier David Eby, who called this election on 22 September. Pledges a temporary 10-cent cut to the provincial fuel tax with a regulated maximum pump price. Also pledges higher income tax above $190,405 and a new bracket above $1 million to fund health care, and a tax on unsold condominiums. Runs 92 candidates.",
  "Conservative Party":"Official opposition. Interim leader Lorne Doerkson replaced Kerry-Lynne Findlay, who resigned on 20 September. Pledges no new or higher taxes and doubling LNG production by 2032. Also pledges to remove the PST on Canadian alcohol during the trade war and to repeal SOGI in schools. Runs candidates in all 93 districts.",
  "BC Green Party":"Led by Emily Lowan since September 2025. Held two seats and chose in 2026 not to renew its accord with the NDP. Pledges a tax on wealth over $50 million, which it estimates raises $22.2 billion in year one. Also pledges 26,000 non-market homes a year, free child care by 2031, and proportional representation. Runs 73 candidates.",
  "CentreBC":"Founded in March 2025 by former BC United MLA Karin Kirkpatrick. Elenore Sturko became leader on 22 September 2026, after seven of its eight MLAs rejoined the Conservatives. Sturko calls it a home for liberals. Its website lists policy areas still in development. Runs 35 candidates, including former Green leader Andrew Weaver.",
  "OneBC":"Founded in June 2025 after the Conservatives removed Dallas Brodie from caucus. Brodie is interim leader. Its platform lists a 25% income tax cut in every bracket and a 2% PST cut. It also lists ending DRIPA and UNDRIP and removing SOGI 123 from classrooms. Runs 33 candidates.",
  "Communist Party of BC":"Founded in 1924. Leader Robert Crooks is running in Vancouver-Strathcona. The party runs four candidates.",
  "CWP":"CanWest Party, a Richmond-based party founded in 2026 and led by Wei Ping Chen. The ballot shows its abbreviation. It runs two candidates, both in Richmond.",
  "Libertarian":"British Columbia Libertarian Party, founded in 1986. Leader Alex Joehl is running in Langley-Abbotsford. The party runs four candidates.",
  "Unaffiliated":"Neither endorsed by a party nor registered as independent. The ballot shows the name only."
};
// Each party's own campaign page, linked after its note. The Communist Party and CWP have none we could find.
const PLINK={"BC NDP":"https://www.bcndp.ca/action-for-you","Conservative Party":"https://conservativebc.ca/plan/",
  "BC Green Party":"https://bcgreens.ca/our-plan/","CentreBC":"https://www.centrebc.ca/our-policy/","OneBC":"https://1bc.ca/",
  "Libertarian":"https://www.libertarian.bc.ca/platform/"};

const ALL=M.map(r=>({j:r[0], race:"MLA", party:r[1], name:r[2], inc:r[3], bio:r[5]||"", url:r[4]}));


// Read by shared/guide.js.
const STORE="bcballot2026.provincial";
const RACES=["MLA"];
const RACE_LABEL={};
const RACE_TITLE={};
function raceNote(){ return ""; }
const ELECTION_DAY="2026-10-24", VOTING_DAY="Saturday 24 October 2026";
const PROVISIONAL_UNTIL="2026-10-03T20:00:00Z";   // 1pm Pacific, 3 Oct
const CARD_NOTE="Candidate lists are current to 6 October 2026, from Elections BC's final list; check your district on Elections BC before voting.";
const NO_ROWS="No candidates are listed for this district.";
const SIT_LABEL="Sitting MLA, not yet nominated", JURIS_LABEL="Outside the province's power";
