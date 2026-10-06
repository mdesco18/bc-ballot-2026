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

const DATES=[["Voting day","Saturday 24 October, 8am to 8pm"],["Advance voting","Friday 16 to Wednesday 21 October, 8am to 8pm"],["Nominations close","Saturday 3 October, 1pm"]];
const J={};
for(const j of JORDER) J[j]={seats:{MLA:1}, blurb:[], dates:DATES,
  link:"https://elections.bc.ca/2026-provincial-election/candidate-list/", vote:"https://mydistrict.elections.bc.ca/"};
J["Vancouver-Strathcona"].blurb=["The seat is vacant: Joan Phillip (BC NDP) died on 28 August 2026."];

// Party names as Elections BC spells them on the final candidate list.
const SLOT={"BC NDP":"--h3","Conservative Party":"--h0","BC Green Party":"--h4","OneBC":"--h5","CentreBC":"--h2",
  "Communist Party of BC":"--h6","CWP":"--h7","Libertarian":"--h8","Independent":"--hind","Unaffiliated":"--hind"};
const PNOTE={
  "BC NDP":"Governing party since 2017, led by Premier David Eby, who called this snap election on 22 September. Campaigning on a temporary 10-cent cut to the provincial fuel tax with a regulated maximum pump price, doubling critical mineral exports within five years, and a new tax on unsold condominiums.",
  "Conservative Party":"Official opposition. Led by interim leader Lorne Doerkson since Kerry-Lynne Findlay resigned on 20 September. Campaigning on no new or higher taxes, doubling LNG production by 2032, a second oil pipeline to the coast, and repealing the SOGI program in schools.",
  "BC Green Party":"Led by Emily Lowan since September 2025. Held two seats and ended its cooperation agreement with the NDP in February 2026. Lowan's priorities include a tax on the ultra-wealthy and proportional representation.",
  "CentreBC":"Founded in March 2025 by former BC United MLA Karin Kirkpatrick. Elenore Sturko became leader on 22 September 2026, after seven of its eight MLAs rejoined the Conservatives. Says it will focus on the economy, health care and public safety.",
  "OneBC":"Right-wing party founded in June 2025 after the Conservatives removed Dallas Brodie from caucus. Brodie is interim leader. The party campaigns against what it calls the \"reconciliation industry\".",
  "Communist Party of BC":"Founded in 1924. Leader Robert Crooks is running in Vancouver-Strathcona.",
  "CWP":"CanWest Party, a Richmond-based party founded in 2026 and led by Wei Ping Chen. The ballot shows its abbreviation.",
  "Libertarian":"British Columbia Libertarian Party, founded in 1986.",
  "Unaffiliated":"Neither endorsed by a party nor registered as independent. The ballot shows the name only."
};

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
