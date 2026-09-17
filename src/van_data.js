const C = [
  // ---- MAYOR ----
  ["Mayor","ABC Vancouver","Ken Sim",1,"Incumbent mayor since 2022, elected with 51% of the vote. Co-founder of Nurse Next Door and Rosemary Rocksalt.","https://abcvancouver.ca/"],
  ["Mayor","Green","Pete Fry",0,"City councillor since 2018. Son of former MP Hedy Fry. The Greens' first mayoral candidate since 1996.","https://petefry.ca/"],
  ["Mayor","Vancouver Liberals","Kareem Allam",0,"Founded the Vancouver Liberals in 2025. Former chief of staff to Mayor Ken Sim and a political consultant.","https://www.vancouverliberals.com/meet_kareem_allam"],
  ["Mayor","TEAM","Colleen Hardwick",0,"City councillor 2018 to 2022, elected with the NPA. TEAM's mayoral candidate in 2022.","https://www.voteteam.ca/"],
  ["Mayor","Vote Vancouver","Rebecca Bligh",0,"City councillor since 2018. Elected with the NPA, joined ABC, expelled from ABC in February 2025, then founded Vote Vancouver.","https://www.votevancouver.ca/"],
  ["Mayor","Bright Future Vancouver","Muhammad Ahmad",0,"Communications strategist and chair of the strategic advisory board at Alpharay Consulting.","https://www.brightfuturevancouver.ca/muhammad-ahmad"],
  ["Mayor","Independent","Scott Gilbert",0,"Running on Downtown Eastside conditions, safer streets and city spending.","http://draintheswamp.ca/"],
  ["Mayor","Independent","Amauri Caliman",0,"",""],

  // ---- COUNCIL ----
  ["Council","ABC Vancouver","Lisa Dominato",1,"Councillor since 2018, first with the NPA. Former school trustee.",""],
  ["Council","ABC Vancouver","Sarah Kirby-Yung",1,"Councillor since 2018, first with the NPA. Former park board commissioner.","http://abcvancouver.ca/"],
  ["Council","ABC Vancouver","Mike Klassen",1,"Councillor since 2022.","https://mikeklassen.ca/"],
  ["Council","ABC Vancouver","Peter Meiszner",1,"Councillor since 2022. Former journalist.",""],
  ["Council","ABC Vancouver","Lenny Zhou",1,"Councillor since 2022.",""],
  ["Council","ABC Vancouver","Joyce Gillespie",0,"",""],
  ["Council","ABC Vancouver","David Grewal",0,"",""],
  ["Council","ABC Vancouver","Lorraine Lowe",0,"",""],
  ["Council","ABC Vancouver","Arezo Zarrabian",0,"",""],

  ["Council","Vancouver Liberals","John Coupar",0,"Park board commissioner 2011 to 2022 with the NPA, and its 2022 mayoral candidate. BC Conservative candidate in Vancouver-Little Mountain in 2024.","https://www.vancouverliberals.com/john_coupar"],
  ["Council","Vancouver Liberals","Moira Stilwell",0,"Former BC Liberal MLA and provincial cabinet minister. Physician.","https://www.vancouverliberals.com/moira_stilwell"],
  ["Council","Vancouver Liberals","Victoria Jung",0,"Vancouver School Board trustee since 2022, elected with ABC.",""],
  ["Council","Vancouver Liberals","Armor Valor",0,"Entrepreneur, Hospital Employees Union member and Langara College board member. Ran for council with OneCity previously.","https://www.vancouverliberals.com/armor_valor"],
  ["Council","Vancouver Liberals","Devin Clemens",0,"Graduate program manager at UBC.","https://www.vancouverliberals.com/devin_clemens"],
  ["Council","Vancouver Liberals","Jessica Walton",0,"Political strategist and government copywriter.","https://www.vancouverliberals.com/jessica_walton"],
  ["Council","Vancouver Liberals","Michael Wu",0,"Entrepreneur and RCMP auxiliary constable. BC Conservative candidate in Burnaby North in 2024.","https://www.vancouverliberals.com/michael_wu"],

  ["Council","Vote Vancouver","Rebecca Hasdell",0,"Public health scientist at the BC Centre for Disease Control and UBC adjunct professor.","https://www.votevancouver.ca/rebecca-hasdell"],
  ["Council","Vote Vancouver","John Boychuk",0,"Co-chair of the Vancouver Pride Society and a small business owner.","https://www.votevancouver.ca/candidates"],
  ["Council","Vote Vancouver","Keerit Jutla",0,"Lawyer and CEO of Invicta Metals.","https://www.votevancouver.ca/keerit-jutla"],
  ["Council","Vote Vancouver","Geoff Teoli",0,"Entrepreneur and former Vancouver film commissioner.",""],
  ["Council","Vote Vancouver","Steve Jedreicich",0,"Development and acquisitions specialist.","https://www.votevancouver.ca/steve-jedreicich"],
  ["Council","Vote Vancouver","Bhavna Solecki",0,"Scientific researcher and seniors' advocate.","https://www.votevancouver.ca/bhavna-solecki"],

  ["Council","TEAM","Amanda Boggan",0,"Former president of the Downtown Eastside Neighbourhood Council.",""],
  ["Council","TEAM","Charles Kelly",0,"UN Human Settlements advisor and pub owner.",""],
  ["Council","TEAM","Kathleen Larsen",0,"Vancouver Heritage Foundation director. TEAM park board candidate in 2022.","https://www.voteteam.ca/"],
  ["Council","TEAM","Patrick Sauriol",0,"Digital entrepreneur and former executive director of DigiBC.",""],
  ["Council","TEAM","Jonathan Weisman",0,"Lawyer.",""],
  ["Council","TEAM","Josh Gordon",0,"",""],
  ["Council","TEAM","Raj Mundra",0,"",""],

  ["Council","OneCity","Lucy Maloney",1,"Councillor since the 2025 by-election. Lawyer and safe streets advocate.","https://www.onecityvancouver.ca/people/lucy-maloney"],
  ["Council","OneCity","Frances Bula",0,"Civic affairs journalist who covered Vancouver city hall for decades.",""],
  ["Council","OneCity","Iona Bonamis",0,"Transportation planner with the City of Vancouver.","https://www.onecityvancouver.ca/people/iona-bonamis-tosiewing"],
  ["Council","OneCity","Jarrett Hagglund",0,"Managing director of the Co-operative Housing Federation of BC.","https://www.onecityvancouver.ca/people/jarrett-hagglund"],
  ["Council","OneCity","Caitlin Stockwell",0,"Indigenous rights lawyer.","http://onecityvancouver.ca/people/caitlin-stockwell"],

  ["Council","COPE","Sean Orr",1,"Councillor since the 2025 by-election. Housing activist and journalist.",""],
  ["Council","COPE","Devyani Singh",0,"Climate scientist and researcher.",""],
  ["Council","COPE","Chloe Leslie",0,"Works in food redistribution non-profits.","https://www.votecope.ca/council"],
  ["Council","COPE","Solomon Yi-Kieran",0,"Public transit activist.",""],

  ["Council","Green","Camil Dumont",0,"Park board commissioner 2018 to 2022, and a former chair.",""],
  ["Council","Green","Bridget Burns",0,"National field manager for the Green Party of Canada.","https://votebridgetburns.ca/"],
  ["Council","Green","Annette Reilly",0,"Green candidate in the 2025 council by-election.","https://www.annettereilly.ca/"],
  ["Council","Green","Stephanie Smith",0,"Housing, labour and social justice activist.","https://votestephanie.ca/"],

  ["Council","Bright Future Vancouver","Judith Kasiama",0,"Founder of Colour the Trails and a community advocate. Lists residency in Burnaby.",""],
  ["Council","Bright Future Vancouver","Bilal Khan",0,"Housing and homelessness advocate. Lists residency in Richmond.",""],
  ["Council","Bright Future Vancouver","Mohadeseh Gharib P. Arasi",0,"Community advocate and entrepreneur. Lists residency in North Vancouver.",""],
  ["Council","Bright Future Vancouver","Ibrahima Cisse",0,"Entrepreneur and community builder. Lists residency in Port Moody.",""],
  ["Council","Bright Future Vancouver","Andy Lin",0,"Business founder and community advocate.",""],
  ["Council","Bright Future Vancouver","Yadwinder Mangat",0,"Realtor and former Vancouver cab driver.",""],

  ["Council","TrueBlue Vancouver","Naomi Chocyk",0,"People's Party of Canada candidate in Vancouver Granville in 2019 and a BC Libertarian candidate in 2020. Also running for school board.","https://naomichocyk.com/"],
  ["Council","Affordable Housing","Eric Redmond",0,"","https://www.affordablehousingvancouver.ca/"],

  ["Council","Independent","Guy Dubé",0,"",""],
  ["Council","Independent","John Jones",0,"","https://johnjonesvancouver.netlify.app/"],
  ["Council","Independent","Rollergirl",0,"Running under a single legal name.",""],
  ["Council","Independent","Noi Soudarack",0,"",""],
  ["Council","Independent","Parris J. Williams",0,"","http://voteparris.com/"],
  ["Council","Independent","Job Zhao",0,"",""],

  // ---- PARK BOARD ----
  ["Park Board","ABC Vancouver","Jas Virdi",1,"Commissioner since 2022. One of the ABC commissioners who stayed with the party through the abolition fight.",""],
  ["Park Board","ABC Vancouver","Jay Bailey",0,"",""],
  ["Park Board","ABC Vancouver","Cheryl Grant",0,"",""],
  ["Park Board","ABC Vancouver","Christian Kyle",0,"",""],
  ["Park Board","ABC Vancouver","Stephen Molnar",0,"",""],
  ["Park Board","ABC Vancouver","Chris Qiu",0,"",""],
  ["Park Board","ABC Vancouver","Marie Rogers",0,"",""],

  ["Park Board","Vancouver Liberals","Scott Jensen",1,"Commissioner since 2022. Elected with ABC, quit the party in 2023 over the abolition plan, joined the Vancouver Liberals in January 2026.","https://www.vancouverliberals.com/scott_jensen"],
  ["Park Board","Vancouver Liberals","Tricia Barker",0,"Commissioner 2018 to 2022 with the NPA. Personal trainer.","https://www.vancouverliberals.com/tricia_barker"],
  ["Park Board","Vancouver Liberals","Amir Bajehkian",0,"Flight data analyst and civic engagement advocate.","https://www.vancouverliberals.com/amir_bajehkian"],
  ["Park Board","Vancouver Liberals","Shayla Bird",0,"Educator and public historian.","https://www.vancouverliberals.com/shayla_bird"],
  ["Park Board","Vancouver Liberals","Amanda Bains",0,"Community leader.","https://www.vancouverliberals.com/amanda_bains"],
  ["Park Board","Vancouver Liberals","Mark Halyk",0,"",""],

  ["Park Board","Green","Tom Digby",1,"Commissioner since 2022 and current chair of the park board. Led the opposition to abolition.","https://tomdigby.ca/"],
  ["Park Board","Green","Breanne Smart",0,"Chef and athlete.",""],
  ["Park Board","Green","Spencer Van Vloten",0,"Writer and accessibility advocate, founder of the Vancouver Community Inclusion Fest.","https://spencervancity.ca/"],

  ["Park Board","TEAM","Mayeli Alvarez",0,"","https://www.voteteam.ca/candidates-2026/mayeli-alvarez-for-park-board"],
  ["Park Board","TEAM","Jon Girard",0,"Campaigning on saving the Vancouver Aquatic Centre pool.","https://saveourvacpool.ca/"],
  ["Park Board","TEAM","Allan Fawley",0,"",""],
  ["Park Board","TEAM","Wah Gee",0,"",""],
  ["Park Board","TEAM","Alex Tkach",0,"",""],

  ["Park Board","Independent Parks Party","Michael Robert Caditz",0,"Authorized representative of the Independent Parks Party.",""],
  ["Park Board","Independent Parks Party","Niknaz Alemi",0,"","https://www.parksparty.vote/"],
  ["Park Board","Independent Parks Party","Brynja Marshall",0,"","https://parksparty.vote/"],
  ["Park Board","Independent Parks Party","Cam Rothery",0,"",""],
  ["Park Board","Independent Parks Party","Leonard Vanderstar",0,"Lists residency in Smithers.",""],

  ["Park Board","COPE","T'uy't'tanat Cease Wyss",0,"Ethnobotanist, artist and Squamish knowledge keeper.",""],
  ["Park Board","COPE","Sacia Burton",0,"Co-director of the BC Poverty Reduction Coalition.",""],
  ["Park Board","COPE","Jamie Han",0,"Youth organizer.",""],
  ["Park Board","COPE","Tamiko Suzuki",0,"Healthcare worker and environmental activist.",""],

  ["Park Board","OneCity","John Irwin",0,"Park board commissioner 2018 to 2022.","https://www.onecityvancouver.ca/people/John-Irwin"],
  ["Park Board","OneCity","Dominic Denofrio",0,"Constituency advisor with the BC NDP.","https://www.onecityvancouver.ca/people/dominic-denofrio"],
  ["Park Board","OneCity","Tyler Petersen",0,"Biologist and labour activist.","https://www.onecityvancouver.ca/people/tyler-petersen"],

  ["Park Board","Vote Vancouver","Summit Wannamaker",0,"Wildland firefighter.","https://www.votevancouver.ca/summit-wannamaker"],
  ["Park Board","Vote Vancouver","Stephen Menon",0,"Product development leader and Qmunity board member.",""]
];