import React, { useEffect } from "react";
const data = {
  items: [
    {
      index: 1,
      type: 1,
      wallet1: 27893,
      wallet2: 14900,
      wallet3: 14545,
      fullName: "Gene Olsen",
      email: "barry@hawkins.bg"
    },
    {
      index: 2,
      type: 4,
      wallet1: 28656,
      wallet2: 32787,
      wallet3: 44260,
      fullName: "Sandra Wu",
      email: "gwendolyn@coley.am"
    },
    {
      index: 3,
      type: 3,
      wallet1: 5612,
      wallet2: 5159,
      wallet3: 21182,
      fullName: "Lloyd Boyd",
      email: "nancy@mcintosh.lt"
    },
    {
      index: 4,
      type: 1,
      wallet1: 2090,
      wallet2: 14692,
      wallet3: 35327,
      fullName: "Steven Barbour",
      email: "sidney@nance.th"
    },
    {
      index: 5,
      type: 2,
      wallet1: 17370,
      wallet2: 49722,
      wallet3: 48215,
      fullName: "Mary Grossman",
      email: "caroline@mcmillan.dz"
    },
    {
      index: 6,
      type: 0,
      wallet1: 7039,
      wallet2: 49778,
      wallet3: 20617,
      fullName: "Peter Lin",
      email: "roger@sparks.cn"
    },
    {
      index: 7,
      type: 3,
      wallet1: 31052,
      wallet2: 27095,
      wallet3: 26097,
      fullName: "Lucille Love",
      email: "julian@burgess.gm"
    },
    {
      index: 8,
      type: 3,
      wallet1: 42344,
      wallet2: 49793,
      wallet3: 7976,
      fullName: "Benjamin Teague",
      email: "greg@harmon.by"
    },
    {
      index: 9,
      type: 2,
      wallet1: 27977,
      wallet2: 16499,
      wallet3: 44578,
      fullName: "Christina Yang",
      email: "courtney@mack.cd"
    },
    {
      index: 10,
      type: 0,
      wallet1: 37789,
      wallet2: 15866,
      wallet3: 23054,
      fullName: "Lester Hobbs",
      email: "donna@harris.cc"
    },
    {
      index: 11,
      type: 4,
      wallet1: 48332,
      wallet2: 12385,
      wallet3: 44619,
      fullName: "Veronica Casey",
      email: "christina@warren.at"
    },
    {
      index: 12,
      type: 0,
      wallet1: 28474,
      wallet2: 17685,
      wallet3: 13796,
      fullName: "Alice Wiggins",
      email: "evan@byrd.va"
    },
    {
      index: 13,
      type: 1,
      wallet1: 15379,
      wallet2: 9801,
      wallet3: 9058,
      fullName: "Aaron Scarborough",
      email: "ralph@sullivan.td"
    },
    {
      index: 14,
      type: 0,
      wallet1: 49537,
      wallet2: 46559,
      wallet3: 5959,
      fullName: "Brenda Knight",
      email: "karen@morse.je"
    },
    {
      index: 15,
      type: 3,
      wallet1: 13643,
      wallet2: 11516,
      wallet3: 11324,
      fullName: "Shelley Chen",
      email: "clara@barton.ps"
    },
    {
      index: 16,
      type: 1,
      wallet1: 10796,
      wallet2: 8471,
      wallet3: 47108,
      fullName: "Jose Hill",
      email: "claire@o.dk"
    },
    {
      index: 17,
      type: 3,
      wallet1: 30610,
      wallet2: 45645,
      wallet3: 41320,
      fullName: "Lewis Upchurch",
      email: "gina@alexander.ke"
    },
    {
      index: 18,
      type: 2,
      wallet1: 11603,
      wallet2: 1968,
      wallet3: 2856,
      fullName: "Teresa Currie",
      email: "joanna@o.np"
    },
    {
      index: 19,
      type: 3,
      wallet1: 40364,
      wallet2: 47988,
      wallet3: 34498,
      fullName: "Melinda Saunders",
      email: "megan@song.mm"
    },
    {
      index: 20,
      type: 1,
      wallet1: 22076,
      wallet2: 12172,
      wallet3: 23146,
      fullName: "Tony Fischer",
      email: "vicki@gay.mil"
    },
    {
      index: 21,
      type: 2,
      wallet1: 13162,
      wallet2: 17694,
      wallet3: 44710,
      fullName: "Warren Allison",
      email: "harvey@walter.fo"
    },
    {
      index: 22,
      type: 3,
      wallet1: 49256,
      wallet2: 49416,
      wallet3: 43492,
      fullName: "Priscilla Fletcher",
      email: "benjamin@shaffer.ru"
    },
    {
      index: 23,
      type: 1,
      wallet1: 27081,
      wallet2: 37122,
      wallet3: 35259,
      fullName: "Courtney Riddle",
      email: "elsie@jones.ba"
    },
    {
      index: 24,
      type: 3,
      wallet1: 35037,
      wallet2: 13904,
      wallet3: 15781,
      fullName: "Cecil Newton",
      email: "lynn@lawrence.ug"
    },
    {
      index: 25,
      type: 2,
      wallet1: 9071,
      wallet2: 28991,
      wallet3: 9279,
      fullName: "Neal Manning",
      email: "marianne@francis.bn"
    },
    {
      index: 26,
      type: 2,
      wallet1: 2568,
      wallet2: 47549,
      wallet3: 40698,
      fullName: "Claire Schwartz",
      email: "ben@heller.gw"
    },
    {
      index: 27,
      type: 1,
      wallet1: 1528,
      wallet2: 37527,
      wallet3: 37932,
      fullName: "Neal Kinney",
      email: "miriam@dunn.to"
    },
    {
      index: 28,
      type: 3,
      wallet1: 15511,
      wallet2: 24643,
      wallet3: 43832,
      fullName: "Don Hamrick",
      email: "tracey@barton.br"
    },
    {
      index: 29,
      type: 1,
      wallet1: 8206,
      wallet2: 49447,
      wallet3: 41896,
      fullName: "Jill Schwartz",
      email: "charlene@carey.mk"
    },
    {
      index: 30,
      type: 3,
      wallet1: 47713,
      wallet2: 36983,
      wallet3: 23676,
      fullName: "Janet Moore",
      email: "cynthia@chang.cm"
    },
    {
      index: 31,
      type: 1,
      wallet1: 14083,
      wallet2: 39794,
      wallet3: 417,
      fullName: "Ann Briggs",
      email: "darlene@hanson.de"
    },
    {
      index: 32,
      type: 2,
      wallet1: 26169,
      wallet2: 3775,
      wallet3: 35297,
      fullName: "Barbara Wu",
      email: "jeanette@jennings.st"
    },
    {
      index: 33,
      type: 4,
      wallet1: 41685,
      wallet2: 10438,
      wallet3: 1396,
      fullName: "Leo Fletcher",
      email: "cheryl@blackwell.bz"
    },
    {
      index: 34,
      type: 0,
      wallet1: 11415,
      wallet2: 10516,
      wallet3: 37014,
      fullName: "Pauline Barton",
      email: "marlene@foster.et"
    },
    {
      index: 35,
      type: 1,
      wallet1: 44002,
      wallet2: 22960,
      wallet3: 23748,
      fullName: "Randy Chan",
      email: "keith@cherry.tt"
    },
    {
      index: 36,
      type: 4,
      wallet1: 22309,
      wallet2: 31685,
      wallet3: 43304,
      fullName: "Janice Graves",
      email: "rhonda@fernandez.ye"
    },
    {
      index: 37,
      type: 2,
      wallet1: 47988,
      wallet2: 35841,
      wallet3: 40616,
      fullName: "Teresa Burke",
      email: "billie@kearney.cl"
    },
    {
      index: 38,
      type: 0,
      wallet1: 49098,
      wallet2: 17585,
      wallet3: 23714,
      fullName: "Florence Floyd",
      email: "clifford@yates.org"
    },
    {
      index: 39,
      type: 0,
      wallet1: 29433,
      wallet2: 46901,
      wallet3: 41503,
      fullName: "Elaine Montgomery",
      email: "carolyn@norman.fj"
    },
    {
      index: 40,
      type: 2,
      wallet1: 28070,
      wallet2: 41748,
      wallet3: 47081,
      fullName: "Lorraine Green",
      email: "sherri@may.pk"
    },
    {
      index: 41,
      type: 4,
      wallet1: 29875,
      wallet2: 2446,
      wallet3: 18504,
      fullName: "Bill Jones",
      email: "veronica@park.ky"
    },
    {
      index: 42,
      type: 2,
      wallet1: 15947,
      wallet2: 49853,
      wallet3: 23776,
      fullName: "Rhonda Weeks",
      email: "catherine@wolfe.ae"
    },
    {
      index: 43,
      type: 0,
      wallet1: 19118,
      wallet2: 27479,
      wallet3: 308,
      fullName: "Zachary Chung",
      email: "erica@stevens.je"
    },
    {
      index: 44,
      type: 4,
      wallet1: 49231,
      wallet2: 13345,
      wallet3: 8076,
      fullName: "Thelma Ellis",
      email: "beth@burnett.af"
    },
    {
      index: 45,
      type: 2,
      wallet1: 25747,
      wallet2: 1579,
      wallet3: 3713,
      fullName: "Harvey Heath",
      email: "luis@kirby.as"
    },
    {
      index: 46,
      type: 4,
      wallet1: 7955,
      wallet2: 9302,
      wallet3: 296,
      fullName: "Clifford Manning",
      email: "katherine@willis.gf"
    },
    {
      index: 47,
      type: 4,
      wallet1: 11605,
      wallet2: 34475,
      wallet3: 29168,
      fullName: "Danny Briggs",
      email: "johnny@spivey.cl"
    },
    {
      index: 48,
      type: 1,
      wallet1: 1451,
      wallet2: 20613,
      wallet3: 1412,
      fullName: "Ashley Palmer",
      email: "clyde@link.ru"
    },
    {
      index: 49,
      type: 0,
      wallet1: 35301,
      wallet2: 40818,
      wallet3: 8314,
      fullName: "Stacy Weiss",
      email: "jean@katz.bg"
    },
    {
      index: 50,
      type: 1,
      wallet1: 34278,
      wallet2: 30034,
      wallet3: 15601,
      fullName: "Faye Lane",
      email: "keith@chandler.mh"
    },
    {
      index: 51,
      type: 2,
      wallet1: 37317,
      wallet2: 39439,
      wallet3: 16694,
      fullName: "Dan Boykin",
      email: "marshall@manning.mh"
    },
    {
      index: 52,
      type: 4,
      wallet1: 31152,
      wallet2: 44447,
      wallet3: 49554,
      fullName: "Carrie Blum",
      email: "melinda@scott.nf"
    },
    {
      index: 53,
      type: 2,
      wallet1: 18149,
      wallet2: 25594,
      wallet3: 5632,
      fullName: "Heidi Starr",
      email: "nina@love.fi"
    },
    {
      index: 54,
      type: 1,
      wallet1: 9557,
      wallet2: 9341,
      wallet3: 34068,
      fullName: "Curtis McKenzie",
      email: "shirley@craig.tv"
    },
    {
      index: 55,
      type: 4,
      wallet1: 1726,
      wallet2: 25973,
      wallet3: 31809,
      fullName: "Lester Dillon",
      email: "gwendolyn@caldwell.yt"
    },
    {
      index: 56,
      type: 1,
      wallet1: 48082,
      wallet2: 9479,
      wallet3: 27798,
      fullName: "Beth Gould",
      email: "nina@schultz.me"
    },
    {
      index: 57,
      type: 2,
      wallet1: 31344,
      wallet2: 21400,
      wallet3: 7033,
      fullName: "Florence Bowling",
      email: "ethel@whitehead.mq"
    },
    {
      index: 58,
      type: 0,
      wallet1: 12685,
      wallet2: 1825,
      wallet3: 30157,
      fullName: "Chris Johnston",
      email: "alice@hines.al"
    },
    {
      index: 59,
      type: 3,
      wallet1: 49145,
      wallet2: 45090,
      wallet3: 33765,
      fullName: "Pauline Melton",
      email: "kathy@connolly.um"
    },
    {
      index: 60,
      type: 2,
      wallet1: 9842,
      wallet2: 44796,
      wallet3: 42891,
      fullName: "Ted Bowers",
      email: "laurence@burke.pl"
    },
    {
      index: 61,
      type: 2,
      wallet1: 20056,
      wallet2: 21010,
      wallet3: 11392,
      fullName: "Vivian Walter",
      email: "barbara@braun.cx"
    },
    {
      index: 62,
      type: 2,
      wallet1: 26571,
      wallet2: 46448,
      wallet3: 21402,
      fullName: "Diana Eason",
      email: "julian@dickerson.th"
    },
    {
      index: 63,
      type: 3,
      wallet1: 47144,
      wallet2: 6711,
      wallet3: 46111,
      fullName: "Kent Sanchez",
      email: "bernard@sharma.am"
    },
    {
      index: 64,
      type: 2,
      wallet1: 10853,
      wallet2: 6630,
      wallet3: 47749,
      fullName: "Thomas Durham",
      email: "joel@mann.me"
    },
    {
      index: 65,
      type: 2,
      wallet1: 42850,
      wallet2: 27373,
      wallet3: 32004,
      fullName: "Amy Rubin",
      email: "harriet@katz.la"
    },
    {
      index: 66,
      type: 0,
      wallet1: 5273,
      wallet2: 42874,
      wallet3: 4443,
      fullName: "Harold McLean",
      email: "nathan@locklear.ie"
    },
    {
      index: 67,
      type: 2,
      wallet1: 37603,
      wallet2: 17405,
      wallet3: 4557,
      fullName: "Brenda Hendrix",
      email: "gilbert@brandt.py"
    },
    {
      index: 68,
      type: 2,
      wallet1: 1607,
      wallet2: 44148,
      wallet3: 3293,
      fullName: "Glenda Nixon",
      email: "tim@mckay.na"
    },
    {
      index: 69,
      type: 2,
      wallet1: 48144,
      wallet2: 10832,
      wallet3: 46119,
      fullName: "Alfred Brock",
      email: "marvin@kang.tg"
    },
    {
      index: 70,
      type: 0,
      wallet1: 22652,
      wallet2: 19632,
      wallet3: 33694,
      fullName: "Geoffrey Barton",
      email: "robyn@cooke.eg"
    },
    {
      index: 71,
      type: 0,
      wallet1: 43428,
      wallet2: 16868,
      wallet3: 48274,
      fullName: "Willie Boyette",
      email: "warren@boykin.dk"
    },
    {
      index: 72,
      type: 4,
      wallet1: 33320,
      wallet2: 46789,
      wallet3: 29130,
      fullName: "Nancy McKnight",
      email: "thelma@hendrix.me"
    },
    {
      index: 73,
      type: 2,
      wallet1: 9936,
      wallet2: 7631,
      wallet3: 3857,
      fullName: "Brian Reilly",
      email: "carlos@morgan.lv"
    },
    {
      index: 74,
      type: 3,
      wallet1: 46177,
      wallet2: 45994,
      wallet3: 49708,
      fullName: "Benjamin Sharp",
      email: "regina@hayes.bg"
    },
    {
      index: 75,
      type: 2,
      wallet1: 25114,
      wallet2: 29925,
      wallet3: 43701,
      fullName: "Teresa Norman",
      email: "steven@wolf.fj"
    },
    {
      index: 76,
      type: 2,
      wallet1: 11138,
      wallet2: 46101,
      wallet3: 41338,
      fullName: "Janice Rowland",
      email: "joel@singh.qa"
    },
    {
      index: 77,
      type: 1,
      wallet1: 3968,
      wallet2: 40395,
      wallet3: 43257,
      fullName: "Kimberly Godfrey",
      email: "kimberly@levine.al"
    },
    {
      index: 78,
      type: 2,
      wallet1: 20073,
      wallet2: 4772,
      wallet3: 4642,
      fullName: "Jonathan Godfrey",
      email: "nicholas@kemp.gn"
    },
    {
      index: 79,
      type: 1,
      wallet1: 27429,
      wallet2: 2588,
      wallet3: 34798,
      fullName: "Penny Sullivan",
      email: "don@pridgen.uy"
    },
    {
      index: 80,
      type: 2,
      wallet1: 47444,
      wallet2: 19629,
      wallet3: 47860,
      fullName: "Carole Carey",
      email: "joel@mcnamara.nz"
    },
    {
      index: 81,
      type: 0,
      wallet1: 28401,
      wallet2: 41507,
      wallet3: 27485,
      fullName: "Melanie Beck",
      email: "gary@bolton.us"
    },
    {
      index: 82,
      type: 1,
      wallet1: 34603,
      wallet2: 11447,
      wallet3: 11611,
      fullName: "Heather Fink",
      email: "clyde@vaughn.ki"
    },
    {
      index: 83,
      type: 1,
      wallet1: 11669,
      wallet2: 34765,
      wallet3: 7512,
      fullName: "Christina Hartman",
      email: "bobby@whitehead.st"
    },
    {
      index: 84,
      type: 0,
      wallet1: 5380,
      wallet2: 21164,
      wallet3: 37870,
      fullName: "Rita Henderson",
      email: "bradley@grossman.cc"
    },
    {
      index: 85,
      type: 4,
      wallet1: 38410,
      wallet2: 9090,
      wallet3: 18984,
      fullName: "Raymond Sutherland",
      email: "allan@burnette.ai"
    },
    {
      index: 86,
      type: 3,
      wallet1: 27417,
      wallet2: 45592,
      wallet3: 17338,
      fullName: "Lloyd Levine",
      email: "carolyn@conrad.tg"
    },
    {
      index: 87,
      type: 2,
      wallet1: 36682,
      wallet2: 27018,
      wallet3: 21033,
      fullName: "Bernice Liu",
      email: "nina@bender.ch"
    },
    {
      index: 88,
      type: 0,
      wallet1: 12150,
      wallet2: 22298,
      wallet3: 47124,
      fullName: "Willie Beatty",
      email: "jean@duke.jo"
    },
    {
      index: 89,
      type: 0,
      wallet1: 30312,
      wallet2: 30924,
      wallet3: 42133,
      fullName: "Eddie Weiner",
      email: "wesley@coble.ad"
    },
    {
      index: 90,
      type: 4,
      wallet1: 22147,
      wallet2: 7532,
      wallet3: 9150,
      fullName: "Jeanette Sutton",
      email: "jean@chen.ve"
    },
    {
      index: 91,
      type: 4,
      wallet1: 27043,
      wallet2: 22350,
      wallet3: 28506,
      fullName: "Glen Carver",
      email: "danielle@weiss.ml"
    },
    {
      index: 92,
      type: 0,
      wallet1: 2801,
      wallet2: 39559,
      wallet3: 11753,
      fullName: "Hazel Gould",
      email: "douglas@aycock.zw"
    },
    {
      index: 93,
      type: 4,
      wallet1: 44622,
      wallet2: 17044,
      wallet3: 45721,
      fullName: "Dennis French",
      email: "mary@cates.bn"
    },
    {
      index: 94,
      type: 3,
      wallet1: 29631,
      wallet2: 22018,
      wallet3: 42811,
      fullName: "Tamara Case",
      email: "eileen@davidson.ht"
    },
    {
      index: 95,
      type: 1,
      wallet1: 46445,
      wallet2: 6259,
      wallet3: 17196,
      fullName: "Thelma Robertson",
      email: "luis@honeycutt.gm"
    },
    {
      index: 96,
      type: 2,
      wallet1: 49838,
      wallet2: 21178,
      wallet3: 18943,
      fullName: "Teresa Riley",
      email: "wesley@mccall.gw"
    },
    {
      index: 97,
      type: 0,
      wallet1: 27184,
      wallet2: 38583,
      wallet3: 2053,
      fullName: "Heidi Marks",
      email: "joel@davidson.to"
    },
    {
      index: 98,
      type: 2,
      wallet1: 14562,
      wallet2: 22700,
      wallet3: 41544,
      fullName: "Gene Poole",
      email: "betsy@reilly.nr"
    },
    {
      index: 99,
      type: 1,
      wallet1: 13888,
      wallet2: 15758,
      wallet3: 34172,
      fullName: "Jeanette Walter",
      email: "diana@mclean.lc"
    },
    {
      index: 100,
      type: 1,
      wallet1: 1110,
      wallet2: 45121,
      wallet3: 15253,
      fullName: "Marvin Waters",
      email: "glen@roth.ye"
    },
    {
      index: 101,
      type: 2,
      wallet1: 10443,
      wallet2: 43846,
      wallet3: 6085,
      fullName: "Lester Pridgen",
      email: "lee@blum.pk"
    },
    {
      index: 102,
      type: 4,
      wallet1: 4152,
      wallet2: 32270,
      wallet3: 15196,
      fullName: "Julia Gill",
      email: "allan@mckay.tz"
    },
    {
      index: 103,
      type: 0,
      wallet1: 34812,
      wallet2: 46310,
      wallet3: 5282,
      fullName: "William Carlson",
      email: "harry@mccarthy.nl"
    },
    {
      index: 104,
      type: 0,
      wallet1: 49799,
      wallet2: 23790,
      wallet3: 16370,
      fullName: "Brett Wolf",
      email: "christina@mcintyre.tt"
    },
    {
      index: 105,
      type: 2,
      wallet1: 31620,
      wallet2: 37893,
      wallet3: 26000,
      fullName: "Dan Cox",
      email: "theodore@diaz.la"
    },
    {
      index: 106,
      type: 1,
      wallet1: 1791,
      wallet2: 21105,
      wallet3: 15763,
      fullName: "Veronica Murphy",
      email: "james@pope.id"
    },
    {
      index: 107,
      type: 3,
      wallet1: 13184,
      wallet2: 27530,
      wallet3: 46046,
      fullName: "Janice Nguyen",
      email: "heidi@martin.um"
    },
    {
      index: 108,
      type: 4,
      wallet1: 2538,
      wallet2: 12495,
      wallet3: 11160,
      fullName: "Rebecca Daniel",
      email: "ruth@solomon.jo"
    },
    {
      index: 109,
      type: 1,
      wallet1: 43726,
      wallet2: 20639,
      wallet3: 13589,
      fullName: "Rita Schultz",
      email: "jason@king.bl"
    },
    {
      index: 110,
      type: 0,
      wallet1: 46887,
      wallet2: 36586,
      wallet3: 31084,
      fullName: "Matthew Kent",
      email: "nina@schwartz.mw"
    },
    {
      index: 111,
      type: 1,
      wallet1: 32290,
      wallet2: 23412,
      wallet3: 4226,
      fullName: "Kathy Sanchez",
      email: "norman@mcintosh.sg"
    },
    {
      index: 112,
      type: 3,
      wallet1: 20745,
      wallet2: 8318,
      wallet3: 7655,
      fullName: "Peggy Proctor",
      email: "frances@glover.zm"
    },
    {
      index: 113,
      type: 3,
      wallet1: 34003,
      wallet2: 42730,
      wallet3: 38865,
      fullName: "Leigh Willis",
      email: "gloria@hinson.bl"
    },
    {
      index: 114,
      type: 4,
      wallet1: 42463,
      wallet2: 36776,
      wallet3: 47082,
      fullName: "Gladys Butler",
      email: "marguerite@braswell.gov"
    },
    {
      index: 115,
      type: 0,
      wallet1: 13167,
      wallet2: 23741,
      wallet3: 39794,
      fullName: "Jackie Woods",
      email: "kathleen@floyd.ss"
    },
    {
      index: 116,
      type: 4,
      wallet1: 48329,
      wallet2: 49297,
      wallet3: 5195,
      fullName: "Stephanie Nelson",
      email: "stephanie@casey.ua"
    },
    {
      index: 117,
      type: 0,
      wallet1: 13152,
      wallet2: 43397,
      wallet3: 19636,
      fullName: "Harvey Branch",
      email: "hugh@savage.gy"
    },
    {
      index: 118,
      type: 1,
      wallet1: 26398,
      wallet2: 22021,
      wallet3: 17502,
      fullName: "Martha Duke",
      email: "judith@garrison.al"
    },
    {
      index: 119,
      type: 0,
      wallet1: 11479,
      wallet2: 36985,
      wallet3: 23927,
      fullName: "Annie Callahan",
      email: "cynthia@freeman.ps"
    },
    {
      index: 120,
      type: 3,
      wallet1: 24247,
      wallet2: 43991,
      wallet3: 9054,
      fullName: "Cecil Melton",
      email: "christine@bolton.pk"
    },
    {
      index: 121,
      type: 2,
      wallet1: 18681,
      wallet2: 22209,
      wallet3: 2068,
      fullName: "Hugh Hirsch",
      email: "doris@watson.fk"
    },
    {
      index: 122,
      type: 0,
      wallet1: 9355,
      wallet2: 43000,
      wallet3: 15529,
      fullName: "Audrey Barton",
      email: "bobby@humphrey.td"
    },
    {
      index: 123,
      type: 0,
      wallet1: 13225,
      wallet2: 14950,
      wallet3: 34582,
      fullName: "Peggy Moss",
      email: "harry@cooper.pm"
    },
    {
      index: 124,
      type: 4,
      wallet1: 38738,
      wallet2: 35105,
      wallet3: 913,
      fullName: "Benjamin Spivey",
      email: "leslie@olson.zw"
    },
    {
      index: 125,
      type: 0,
      wallet1: 42552,
      wallet2: 19653,
      wallet3: 11896,
      fullName: "Keith Lam",
      email: "troy@parsons.bl"
    },
    {
      index: 126,
      type: 2,
      wallet1: 29411,
      wallet2: 41416,
      wallet3: 48431,
      fullName: "Michele Brady",
      email: "franklin@walters.lc"
    },
    {
      index: 127,
      type: 4,
      wallet1: 11295,
      wallet2: 7406,
      wallet3: 36275,
      fullName: "Curtis Schultz",
      email: "ronald@cook.gg"
    },
    {
      index: 128,
      type: 2,
      wallet1: 8325,
      wallet2: 41897,
      wallet3: 2953,
      fullName: "Mary Teague",
      email: "gayle@bender.hk"
    },
    {
      index: 129,
      type: 2,
      wallet1: 39282,
      wallet2: 4864,
      wallet3: 14564,
      fullName: "Juan Craven",
      email: "ross@cowan.uz"
    },
    {
      index: 130,
      type: 4,
      wallet1: 47057,
      wallet2: 31385,
      wallet3: 41018,
      fullName: "Kent Henry",
      email: "leigh@watts.mt"
    },
    {
      index: 131,
      type: 4,
      wallet1: 36331,
      wallet2: 15760,
      wallet3: 15419,
      fullName: "Patsy Scarborough",
      email: "regina@robinson.mf"
    },
    {
      index: 132,
      type: 1,
      wallet1: 18761,
      wallet2: 44098,
      wallet3: 34044,
      fullName: "Kurt Carey",
      email: "danny@goldman.km"
    },
    {
      index: 133,
      type: 3,
      wallet1: 35855,
      wallet2: 46502,
      wallet3: 2004,
      fullName: "Leroy Hardy",
      email: "ian@lehman.sy"
    },
    {
      index: 134,
      type: 3,
      wallet1: 12890,
      wallet2: 30818,
      wallet3: 47287,
      fullName: "Lester Jordan",
      email: "james@cash.ee"
    },
    {
      index: 135,
      type: 0,
      wallet1: 43196,
      wallet2: 46475,
      wallet3: 14338,
      fullName: "Jonathan Watkins",
      email: "monica@glover.dm"
    },
    {
      index: 136,
      type: 2,
      wallet1: 41940,
      wallet2: 22096,
      wallet3: 27821,
      fullName: "Jeanne Coley",
      email: "sherry@coley.fm"
    },
    {
      index: 137,
      type: 2,
      wallet1: 41648,
      wallet2: 49163,
      wallet3: 43813,
      fullName: "Peter Knowles",
      email: "phyllis@singleton.mw"
    },
    {
      index: 138,
      type: 1,
      wallet1: 41288,
      wallet2: 35326,
      wallet3: 44520,
      fullName: "Jordan Roth",
      email: "gretchen@hansen.bo"
    },
    {
      index: 139,
      type: 1,
      wallet1: 32092,
      wallet2: 38870,
      wallet3: 41106,
      fullName: "Renee Hewitt",
      email: "maria@lehman.cd"
    },
    {
      index: 140,
      type: 1,
      wallet1: 27771,
      wallet2: 44280,
      wallet3: 42041,
      fullName: "Natalie Hawley",
      email: "claire@petersen.mg"
    },
    {
      index: 141,
      type: 3,
      wallet1: 48448,
      wallet2: 27018,
      wallet3: 11515,
      fullName: "Colleen Weinstein",
      email: "tamara@dunn.eg"
    },
    {
      index: 142,
      type: 2,
      wallet1: 27112,
      wallet2: 46212,
      wallet3: 30771,
      fullName: "Ronnie Blalock",
      email: "susan@allison.au"
    },
    {
      index: 143,
      type: 4,
      wallet1: 6721,
      wallet2: 27339,
      wallet3: 46609,
      fullName: "Stephen Crabtree",
      email: "carolyn@townsend.tw"
    },
    {
      index: 144,
      type: 4,
      wallet1: 21320,
      wallet2: 29903,
      wallet3: 2227,
      fullName: "Eileen Ritchie",
      email: "philip@cross.ye"
    },
    {
      index: 145,
      type: 3,
      wallet1: 12178,
      wallet2: 2322,
      wallet3: 11250,
      fullName: "Jason Bunn",
      email: "vincent@langston.sm"
    },
    {
      index: 146,
      type: 0,
      wallet1: 16056,
      wallet2: 42063,
      wallet3: 42012,
      fullName: "Sue Locklear",
      email: "karen@dougherty.gb"
    },
    {
      index: 147,
      type: 4,
      wallet1: 23582,
      wallet2: 7871,
      wallet3: 3015,
      fullName: "Erin Yates",
      email: "margaret@davis.bi"
    },
    {
      index: 148,
      type: 3,
      wallet1: 23358,
      wallet2: 23115,
      wallet3: 18509,
      fullName: "Courtney Bolton",
      email: "jordan@proctor.tn"
    },
    {
      index: 149,
      type: 0,
      wallet1: 36264,
      wallet2: 48357,
      wallet3: 37724,
      fullName: "Terry Ball",
      email: "jordan@lopez.to"
    },
    {
      index: 150,
      type: 0,
      wallet1: 28751,
      wallet2: 11597,
      wallet3: 6503,
      fullName: "Gladys Miles",
      email: "leslie@mangum.wf"
    }
  ]
};
export const Store = React.createContext();
const API_URL = "http://www.mocky.io/v2/5d889c8a3300002c0ed7da42";
const initialState = {
  items: [],
  type:[]
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_ITEMS":
      return {...state, items: action.payload||[] };
    case "SELECTED_TYPE":
      return {...state, type: action.payload||[] };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  async function fetchData() {
    const response=await fetch(API_URL);
    return response
  }
  useEffect(() => {
    // const data = fetchData();
    dispatch({ type: "LOAD_ITEMS", payload: data.items });
  }, []);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
