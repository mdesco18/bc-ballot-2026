// M = MLA candidates: [district, party, name, incumbent, url, bio]. Roles and re-election intentions as reported by 27 September 2026.
// Only nominations Elections BC has accepted, from its candidate report
// (https://www.elections.bc.ca/docs/fin/GE-2026-10-24-Candidate-Website-Report.PDF). Current to 27 September 2026.
// Nominations close 1pm Saturday 3 October; the full list is loaded after that.
// Until then each district also lists its sitting MLA (inc 2), per the Legislative Assembly members list,
// whether or not that person is running again. Vancouver-Strathcona is vacant.
const M=[
["Vancouver-Fraserview","BC NDP","George Chow",2,"","Parliamentary Secretary for the Downtown Eastside and Chinatown. Running again."],
["Vancouver-Kensington","BC NDP","Mable Elmore",2,"","Deputy Speaker. Running again."],
["Vancouver-Langara","BC NDP","Sunita Dhir",2,"","Parliamentary Secretary for International Credentials. Running again."],
["Vancouver-Little Mountain","BC NDP","Christine Boyle",2,"","Minister of Housing and Municipal Affairs. Running again."],
["Vancouver-Point Grey","BC NDP","David Eby",2,"","Premier. Running again."],
["Vancouver-Quilchena","OneBC","Dallas Brodie",2,"","OneBC interim leader. Elected as a Conservative in 2024. Running again."],
["Vancouver-South Granville","BC NDP","Brenda Bailey",2,"","Minister of Jobs since August 2026, Minister of Finance before that. Not running again."],
["Vancouver-Yaletown","BC NDP","Terry Yung",2,"","Minister of State for Community Safety and Integrated Services. Has not said whether he is running again."],
["Richmond-Bridgeport","Conservative Party of BC","Teresa Wat",2,"","Elected as a Conservative in 2024, sat as an independent and then with CentreBC from August 2026, and rejoined the Conservative caucus on 22 September. Running again."],
["Richmond Centre","Independent","Hon Chan",2,"","Elected as a Conservative in 2024, removed from caucus in March 2026. Has not said whether he is running again."],
["Richmond-Queensborough","Conservative Party of BC","Steve Kooner",2,"","Opposition critic for Attorney General. Running again."],
["Richmond-Steveston","BC NDP","Kelly Greene",2,"","Minister of Emergency Management and Climate Readiness. Not running again."],
["Delta North","BC NDP","Ravi Kahlon",2,"","Minister of Health since August 2026. Not running again."],
["Delta South","Conservative Party of BC","Ian Paton",2,"","Elected as a Conservative in 2024, sat as an independent and then with CentreBC from August 2026, and rejoined the Conservative caucus on 22 September. Running again."],
["North Vancouver-Seymour","BC NDP","Susie Chant",2,"","Parliamentary Secretary for Seniors' Services and Long-Term Care. Running again."],
["West Vancouver-Capilano","Conservative Party of BC","Lynne Block",2,"","Opposition critic for Education. Running again in North Vancouver-Seymour, not in this district."],
["Victoria-Beacon Hill","BC NDP","Grace Lore",2,"","Minister without Portfolio. Running again."],
["Victoria-Swan Lake","BC NDP","Nina Krieger",2,"","Minister of Public Safety and Solicitor General. Running again."],
["Oak Bay-Gordon Head","BC NDP","Diana Gibson",2,"","Minister of Citizens' Services. Running again."],
["Nanaimo-Gabriola Island","BC NDP","Sheila Malcolmson",2,"","Minister of Social Development and Poverty Reduction. Running again."],
["Nanaimo-Lantzville","BC NDP","George Anderson",2,"","Parliamentary Secretary for Energy and Climate Solutions. Running again."],
["Delta North","No affiliation listed","Monica Mohan",0,""],
["North Vancouver-Lonsdale","BC NDP","Bowinn Ma",1,"","Minister of Infrastructure."],
["Vancouver-Hastings","BC NDP","Niki Sharma",1,"","Attorney General and Deputy Premier."],
["Vancouver-Renfrew","BC NDP","Adrian Dix",1,"","Minister of Energy and Climate Solutions."],
["Vancouver-West End","BC NDP","Spencer Chandra Herbert",1,"","Minister of Indigenous Relations and Reconciliation."],
];
