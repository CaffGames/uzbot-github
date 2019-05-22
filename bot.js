require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();
const snek = require('snekfetch');
const fetch = require('node-fetch');
const randomPuppy = require('random-puppy');

var movieInt;
var movie = ["LWqUupcF7A0", "uwrNwd0_Ug4", "o0G7FL93Hu4", "_TY6kJ3KfT4", "siWDiZhbBek", "7ZsGOyWWj6k", "VsewNIhWwJg", "wz4ewxLCTOE",
"XVccZkiyH-o", "y51ZNsBXpwg", "2R2zzdjfXl4", "XjIZCdWSA-I", "s28m79VkWYI", "eJ1du32NUV8", "mySnCk1uXUM", "dHRFwB_brrw", "e8si-7tY1VI",
"nof2KwWV32o", "Zp3K48ojImw", "DkuYJiyKbrQ", "ubBxPqCDFk4", "ubBxPqCDFk4", "O1MeI-S70Ag", "HbTf_dYogeg", "5QDKX5ExXqM", "K0cu4rZoTSw", 
"kwAtbc0rYZc", "Kf4hN9s1nic", "nJWuLqpSYqM", "Gl2s_DRtPDo", "Wbreg7yMxSk", "dUNHmyb6oVM", "VenkCoKuOxo", "ye5HlqJtYKA", "ZtrGw-oahDk", 
"P3-OklovCg0", "2rFcZ1xGbeU", "CR0UlM1y7do", "nkzbMcREj1s", "zB2uW7hFs1I", "l7E0kTvARsA", "3zxasmxPMro", "3M7g6DPUWK0", "Ssu2nOTMjYM",
"U6ITU1LHzvk", "mDmLJ8LHYTA", "E-Jx9yZugrg", "89vivDEChc", "WNh5LIwPKyk", "_azpWSFEL_Y", "GibI7qM0tYk", "Wz-vegualMg", "KEoGrbKAyKE",
"51dfpYSDz5M", "oOjCXIPpMeo", "N09ygrKKNJE", "fOdBtRzYf5Q", "Tumix4dDDKk", "sz0JhqCGqP0", "vIlJuP5ipH0", "BDFsrztIs8c", "6gggODjnI6Y",
"G2ZRuxCyapc", "nVNRUoLt7EI", "f0GtzlklbGI", "Uao5vyTpyzc"]; 
var musicInt;
var music = [""];
var arabInt;
var tvInt;
var tv = ["https://www.youtube.com/watch?v=4xEH43Dmm4I", "https://www.youtube.com/watch?v=73Yfuu9Nmjw", "https://www.youtube.com/watch?v=ZiKaFiikhL8", "https://www.youtube.com/watch?v=oWLwsIXPN8o",
"https://www.youtube.com/watch?v=gMmjuVtNlBk", "https://www.youtube.com/watch?v=BX5IeuLlovc", "https://www.youtube.com/watch?v=9jstuGMumK0", "https://www.youtube.com/watch?v=vU5dU8upwwE",
"https://www.youtube.com/watch?v=UJtahHyWx2U", "https://www.youtube.com/watch?v=-lg5YjLdQ5E", "https://www.youtube.com/watch?v=LykyDhERSEU", "https://www.youtube.com/watch?v=wc2sHygF40k",
"https://www.youtube.com/watch?v=E1o8SYZcvgs", "https://www.youtube.com/watch?v=7u_h2pyaeu8", "https://www.youtube.com/watch?v=L0nQCRmDaQw", "https://www.youtube.com/watch?v=_2Ydlhkm_0s",
"https://www.youtube.com/watch?v=oahsGcq_x-g", "https://www.youtube.com/watch?v=a67t_kv5TCc", "https://www.youtube.com/watch?v=lTecJA4W5EE", "https://www.youtube.com/watch?v=VOICuaneyVM",
"https://www.youtube.com/watch?v=AiZKTvyJz3U", "https://www.youtube.com/watch?v=ziWRBhXV8Sw", "https://www.youtube.com/watch?v=M-9qxhuoD0Q", "https://www.youtube.com/watch?v=D2_rvOfblKc", 
"https://www.youtube.com/watch?v=C9iLXPwttqA", "https://www.youtube.com/watch?v=uSz69zaHwwo", "https://www.youtube.com/watch?v=xVPNvUzHRT8", "https://www.youtube.com/watch?v=PHrIbQaoEjs",
"https://www.youtube.com/watch?v=lYHotmmuarg", "https://www.youtube.com/watch?v=TCuyQU3Uy3Y", "https://www.youtube.com/watch?v=Vc7xaa3WeZQ", "https://www.youtube.com/watch?v=yhjT0CkQ-gc",
"https://www.youtube.com/watch?v=j3p1bV45lZ0", "https://www.youtube.com/watch?v=Rx9d7Pj4qlc", "https://www.youtube.com/watch?v=vlWtSGEeXe0", "https://www.youtube.com/watch?v=wDYpplZEgBk",
"https://www.youtube.com/watch?v=tuMDMF-1-HE", "https://www.youtube.com/watch?v=RMU-_r9GilY", "https://www.youtube.com/watch?v=dLxq9pcNnFE", "https://www.youtube.com/watch?v=Bd2AdASx63c",
"https://www.youtube.com/watch?v=xlavcSONoDw", "https://www.youtube.com/watch?v=-HTFvI63ggI", "https://www.youtube.com/watch?v=amfxTI5-xPQ", "https://www.youtube.com/watch?v=dVSG1W04fq8",
"https://www.youtube.com/watch?v=y02sp2EtB74", "https://www.youtube.com/watch?v=XrabmKgGS9k", "https://www.youtube.com/watch?v=U86R5IqPTlk", "https://www.youtube.com/watch?v=LgdiG_lUfA4",
"https://www.youtube.com/watch?v=eM-JCphjM_M", "https://www.youtube.com/watch?v=v4_QB-_w80k"];
var randWords = require('random-words');
var titleLength;
var words = ["nigga", "free", "HD", "sexy", "download", "fart", "cartoon", "funny", "vine", "instagram", "comedy",
"anime", "dub", "shawarma", "chipmunks", "song", "lol", "random", "porn", "troll", "trollface", "prank", "fortnite", "4K", 
, "obama", "nokia","lole", "emoji", "pubg", "install", "cheap", "rice", "hentai", "flash game", "online", "24/7", "turtle", "bruh", "penis",
	     "cringe", "bro", "buzzfeed", "popular", "movie", "English", "ringtone", 
"ring ring", "100%", "now", "George Bush", "apk", "mp4", "exe", "HQ", "no jailbreak", "telephone", "quran", "bible", "hack", "V-Bucks",
"Soundtrack", "spongebob", "annoying orange", "Dan Bull", "compilation", "4G", "3G", "4G LTE", "peter griffin", "ninja", "XXX", 
"epic", "cool", "full movie", "no scam", "divorce", "homo", "2016", "2020", "2019", "2012", "2091", "2003", "2010", "2017", "144p", "rap",
"tech support", "Darius72", "ape", "jahseh",  "Fallout 76", "jahcoin", "generate", "free key", "windows", "microsoft", "bruh moment", "lole", "NickGurr45", 
"toilet", "pornography", "240p", "installation", "gamer", "ape", "milk", "Chinese", "Wish.com", "21 you stupid", "oh nigga you gay",
"ironic", "irony", ".rar",  "jailbreak", "foreskin",
"goat", "banned", "legal", "illegal", "legit", "actually free", "real copy", "Kinemaster", "funny ape", "peanut", "homosexual", "accordion",
"ping", "nigga troll", "Free Shipping", "amazon prime", "best deal", "only $20", "epic", "clown", "who",
"musical", "songs", "full album", "frick", "niggas", "Ram Ranch Full Collection", "semen", "butthole", "nigga toilet", "insta", "facebook", "twitter",
"sub 4 sub", "like", "comment", "looooool", "mfw", "mfw (my face when)", "endgame", "Thanos",
"dies", "film", "iOS", "iPhone X",
"no spoilers", "review", "animated", "parody", "satire", "irony 100%", "shrek", ".avi", ".wav", ".jpg"];
var arab = ["رمضان","هندوستان", "أوباما", "باكستان", "سلحفاة فارسية", "ਮਾਈਕਰੋਸੌਫਟ", "ਭਾਰਤ", "ਮਜ਼ਾਕੀਆ", "ਨਿਗਲ", "ਧੱਫੜ", "harambe", "ਜੰਜੀਰ", "ਟੋਲ", "ਪੰਜਾਬੀ", "ਪਾਕਿਸਤਾਨ ਦੀ ਧੱਕੇ", "ਪਰਿਵਾਰ 420", 
"ਤਕਨੀਕੀ ਸਮਰਥਨ", "ਕਾਮੇਡੀ","ਵਾਇਰਸ", "ਕੰਪਿਊਟਰ", "ਮੁਫ਼ਤ ਡਾਊਨਲੋਡ", "ਵਿਸ਼ਨੂੰ", "ਉਰਦੂ", "ਓਬਾਮਾ",  "دعم تقني", "مضحك", "حرام", "قضيب","سعودي", "ضرطة", "نيغا", "براز الانسان", "إسرائيل", "بول", 
"نوكيا", "مغني الراب", "سودان", "الدوري العربي", "دين الاسلام", "الله", "مايكروسوفت", "صدام", "هههه", "هههههههه", "هههههههههههههههههههه", "الهند", "قطع رأسه", "ماعز",
 "برتقالى مزعج", "صهيوني", "البنجابية", "فلسطين حرة", "كوميديا", "مفعم بالحيوية", "كارتون كويتي", "هجاء", "سخرية", "البنجابية", "ايفون", "2000 ريال", "تأخير", "حرب", "ضرطة", 
 "الأمير السعودي", "القطري", "Afghan", "iran turtle", "the great punjabi comedy show", "Isrealis", "palestine", "Kurdistan", "Somaliland", "bangla", "delhi", "UAE", "sudan",
"hindustan", "iraq", "farsi", "amazon.co.in",  "ramadan", "hamood", "india", "arab", "Masameer", "Bangladesh", "Azerbaijan", "hindi",  "hindu",  "Turkmenistan", "Yemen", 
"Vimto", "allah", "kaaba", "block 13",  "arabia", "bangla", "delhi", "UAE",  "morocco",  "pakistan", "tajikistan",  "zionist", "punjabi", "saudi", "kuwaiti",  "tajikistan", "urdu",
"tajik", "مزاحیہ", "پاکستان", "بھارت شیطانی", "مدرس صالح", "الحمام", "انفجار", "twin tower", "saudi", "chant", "medicine", "stoning", "live ISIS stream", "yemen GDP",
	   "big iran moustache", "mudenseti", "nane", "zibade", "bruh turtle", "war song", "sad arabian", "arabian nights", "hookah", "ak47", "against islam",
	   "বিষ্ঠা", "baba", "alisha", "underage marriage", "marriage", "prearranged marriage", "beating", "sharia", "dark skin", "sun", "bahrian", "consent", 
	   "bangla", "palestinians", "lizard man israeli", "pray to allah", "hamood habibi", "nigga poop", "uzbekistan", "kyrgyz", "fake israel",
	   "fasting", "ramadan fast", "ramadan ape", "iran missile", "oil saudi", "$1 trillion saudi invest", "karim yakarim", "كريم وكريم",
	   "epic rap battles of allah", "stani", "arab squat toilet"]; 
var rus = ["vodka", "russia", "yugoslavia", "soviet", "putin", "vladmir", "iran deal", "водка", "СССР", "Stalin", "chernobyl", "ruble", "ukraina", "slav", "armenia", "azerbaijan",
	  "squat", "gopnik", "gulag", "internet closed", "Жопа", "adidas", "cold war", "missile", "nuclear bomb", "capitalist pig", "srbija", "USSR",
	  "comrade", "комраде", "ushanka", "russia winter", "ww2", "communism", "capitalist pig", "supply and demand", "mafia", "putin funny", "elect", "navalny", "kavkaz",
	  "georgia", "sakartvelo", "armenia genocide real", "azeri", "dardubala", "დარდუბალა", "ramishvili", "ass", "mail-order wife", "russian bombshell", "landmine border", "angry bear",
	  "putin riding bear", "KGB", "punch fag", "FSB", "smoke", "government", "russia hack", "hack sony", "gay", "ukraine", "belarus", "tajik ssr", "AYE", "drag race", "illegal", 
	  "putin vs isis", "bitcoin mine", "investment venezuela", "pachansky", "Zhmysheno", "gopnik vaping", "serb attack", "kill turk", "grandpa smash america ipad", "tarrif america", "rennk",
	  "winne the pooh", "russian dub", "russian edition", "iraq war", "mongolia is slav", "kazakhstan", "radioactive", "nuclear reactor explosion" ,"[REDACTED]", "смешной",
	  "туалет", "ниггер", "пердеть", "славянский", "хреновый трах", "Албания", "косово", "косово је србија", "тролл", "ტროლის სახე პრეზიდენტი", "არაყი", "მიხილ საკაშვილი", "ტუალეტი", "геиик", "путин",
	  "trade deal", ".ru", ".rs", "croatian ustashe", "karadzic", "drink water serb", "serb", "montenegro", "kill bosnia", "CS:GO", "minecraft russian hack", "mc khovanskiy", "free steam key", "only 20 ruble",
	  "steam key cheap", "cs:go knife", "free skin", "ak47", "kalashnikov", "iran", "banned game", "nintendo of russia", "largest country", "siberia", "snow", "village", "dagestan", "Bloodbath Kavkaz", "Bloodbath Kavkaz full download"];
var esp = [];
var asia = ["fried rice", "cat", "china"];
var euro = [];
var us = ["oil", "hamburger", "ronald mcdonald", "grilling", "beer", "alabama", "abortion", "redneck", "cousin", "incest", "tea", "1/32 native american", "orange man", "trump lol",
	 "libtard rekt", "broh", "getto", "nigga", "homo", "LGBT", "god hates fags", "alcoholism", "Jimmy Fallon", "comedian", "free movie ticket", "$3.99 on sale", "DVD bluray", "comcast",
	 "seinfeld", "funny movies", "gasoline", "car crash", "surgery", "nigga doctor", "bomb", "obama", "mobamba", "president", "clinton president girl", "rights", "burger king", "fish mcbite",
	 "may may", "meemee", "trump baby balloon", ".co.uk.", "import tax", "amazon prime best deal", "$$$", "scotland", "america", "american", "freedom", "cuck", "boomer", "doomer", "zoomer", "jew media", "zion control government",
	 "bomb pakistan", "iran missile deal", "kim jong un", "trump jong un", "north korea", "capitalism", "communist bad", "commie", "kill commie", "trade war", "britain", "illegal butterknife", "liscence", "police", "beating", "prison shower", "shower rape",
	 "hurricane", "puerto rico next state", "rated M", "bernie", "cartoon", "pistol", "school shooting", "funny monkey", "cringe baby", "landfill", "brit", "crisps", "bro", "football", "pigskin", "bacon", "wendy's burder funny twitter", "porno american", "big money",
	 "mcdonald employment", "call now", "free consultation", "youtube unblocker", "adblock", "lower class", "funny nigga ghetto", "vodka america", "pancake", "abraham lincoln", "omg george washington come alive???", "poop",
	 "shit on toilet", "lawnmower", "uwu", "california", "gold miner", "native maerican", "1/16 cherokee", "inbred", "crooked teeth", "highest GDP", "missile codes", "twitter", "amy scheumer funny", "comedy show", "live on tv", "informercial",
	 "syrup", "gay", "speak english", "english dub", "for free", "free download", "VPN", "advertisement", "best buy"];

var title = [];
var completeTitle;
var titleInt;
var i = 0;
var i2 = 0;
var responses = ["Yes", "No", "Maybe", "Ask Allah Later", "Ask Muhammed Instead", "Go Away", "Probably", "If You Believe in Allah, It Will Happen", "Probably", "Hopefully", "Eventually",
"Please Refer to Quran", "Are you Zionist?", "You stupit", "Allah does not consent", "Allah likes this", "Allah approved", "Possibly", "Insert 25c to Continue", "I don't feel like it",
"Stop being degenerate, Allah doesn't like.", "Shut up", "Try Harder", "Free Palestine", "Ask Saudi Prince", "It'll happen soon", "Allah is angry, try later", "You are infidel",
"nigga", "bruh", "Stop reading bible", "You will be beheaded", "Ask goat", "Women cannot ask", "I want an offering first", "Hell yeah nigga", "dude that's haram", "Yeah", "Nah",
"Yes bro", "It's happening", "Wish granted by Allah", "Allah is busy"];
var responseInt;
var danbull = ["https://www.youtube.com/watch?v=h_wUdzVZD3o", "https://www.youtube.com/watch?v=8slWBUSdGBE", "https://www.youtube.com/watch?v=Pa5Ti_tR0hE", "https://www.youtube.com/watch?v=szXAh0fDnrA",
"https://www.youtube.com/watch?v=rkfVkC_Xprk", "https://www.youtube.com/watch?v=ZZujisNZuw0", "https://www.youtube.com/watch?v=ZZujisNZuw0", "https://www.youtube.com/watch?v=vZG_s7eHrGc",
"https://www.youtube.com/watch?v=5237hmNkCms", "https://www.youtube.com/watch?v=tY0a-d67drE", "https://www.youtube.com/watch?v=Y_xhwcO31Fo", "https://www.youtube.com/watch?v=y1K818C7wm4",
"https://www.youtube.com/watch?v=OEUSl96MkoY", "https://www.youtube.com/watch?v=p0DtB4GMUfA", "https://www.youtube.com/watch?v=9tm7TktS55Y", "https://www.youtube.com/watch?v=LkvlHE5QA-Y",
"https://www.youtube.com/watch?v=MqnnuvVSLqY", "https://www.youtube.com/watch?v=MqnnuvVSLqY", "https://www.youtube.com/watch?v=6cV_YnETtec", "https://www.youtube.com/watch?v=gKyTrLRJPnM",
"https://www.youtube.com/watch?v=w_a7_pygtNA", "https://www.youtube.com/watch?v=vvKUfY7neYw", "https://www.youtube.com/watch?v=v1o4l6SPS60", "https://www.youtube.com/watch?v=9hBKQwaHHwU"];
var danInt;
var toby = ["https://www.youtube.com/watch?v=zzKFbUxYJys", "https://www.youtube.com/watch?v=eN7dYDYfvVg", "https://www.youtube.com/watch?v=uVTfszppJl8", "https://www.youtube.com/watch?v=kKrtbUinWOU",
"https://www.youtube.com/watch?v=Mmdc9RIhmOI", "https://www.youtube.com/watch?v=WteF0j5gYGk", "https://www.youtube.com/watch?v=upxzaVMhw8k", "https://www.youtube.com/watch?v=wmxUMcqGGTw",
"https://www.youtube.com/watch?v=6TXWzlT02_s", "https://www.youtube.com/watch?v=K0zyjs3i76s", "https://www.youtube.com/watch?v=yxH0r2Z8ce4", "https://www.youtube.com/watch?v=pfsRxTjNGvo",
"https://www.youtube.com/watch?v=XkdJIct_LdM", "https://www.youtube.com/watch?v=G4_T1g_CR9k", "https://www.youtube.com/watch?v=leSvUKji4CE", "https://www.youtube.com/watch?v=PG2w6N6GCsU",
"https://www.youtube.com/watch?v=ba14uJFvqMs", "https://www.youtube.com/watch?v=Q1pfDquA65c", "https://www.youtube.com/watch?v=5RFxUrNcZ1Q", "https://www.youtube.com/watch?v=RjAar9pRxRw"];
var tobyInt;
var hamood = ["https://www.youtube.com/watch?v=PQeD0VA7UA0", "https://www.youtube.com/watch?v=u8LPD6W0PZw", "https://www.youtube.com/watch?v=u8LPD6W0PZw", "https://www.youtube.com/watch?v=5xngr3SwjJw",
"https://www.youtube.com/watch?v=zwrIOsmu184", "https://www.youtube.com/watch?v=2r9pqf7OMCM", "https://www.youtube.com/watch?v=Ks7vGHSI9yM", "https://www.youtube.com/watch?v=MxpUvqdffZs",
"https://www.youtube.com/watch?v=nHthkNZQjbU", "https://www.youtube.com/watch?v=QrgXFdgaz6Y", "https://www.youtube.com/watch?v=Rp6a6GfDjlU"];
var hamoodInt;
var scale;
var subject;
var status = "";
var funnyVid = ["https://www.youtube.com/watch?v=8PADgvHeRjk", "https://twitter.com/xoxiok/status/1104619107792576512?s=20", "https://www.youtube.com/watch?v=YCvuCbRsU2Q", "https://www.youtube.com/watch?v=-VZYdogoZvs",
"https://www.youtube.com/watch?v=aFu6BGIfllY", "https://www.youtube.com/watch?v=GpWPsWKJCGw", "https://youtu.be/fGGJeYoYpyQ", "https://youtu.be/2MIHpf3_TzE", "https://youtu.be/gyhJBoWAoyY",
"https://www.instagram.com/p/Bw4WMsXAZ6L/?utm_source=ig_web_copy_link", "https://www.instagram.com/p/Bw334rVnqlM/?utm_source=ig_web_copy_link", "https://www.youtube.com/watch?v=n3I5I0bGxDA",
"https://youtu.be/biUwIqFr4FM", "https://youtu.be/vnp3db8WEZc", "https://cdn.discordapp.com/attachments/560788290551152643/572127941534810216/video37.mov", "https://cdn.discordapp.com/attachments/560788290551152643/572127941534810216/video37.mov",
"https://www.youtube.com/watch?v=WzWV4i6ay10", "https://cdn.discordapp.com/attachments/560788290551152643/571807554141814804/59426289_429270874568340_8887420796008637510_n.mp4", "https://cdn.discordapp.com/attachments/560788290551152643/571696392150712341/59242760_2263847233882280_6883723971414458368_n.mp4",
"https://www.youtube.com/watch?v=d73h1_6nP9U", "https://cdn.discordapp.com/attachments/560788290551152643/571378264237670419/videoplayback_17.mp4", "https://www.dropbox.com/s/k80n3ln5mx0pqx6/random%20sfx%20pack.rar?dl=0", "https://youtu.be/1ToEp4x1FOA",
"https://youtu.be/F5sHI5bjDbU", "https://youtu.be/bWTSJfbqVGU", "https://www.youtube.com/watch?v=AHLCBcGSkMs", "https://www.youtube.com/watch?v=EBsBafZan5M", "https://www.youtube.com/watch?v=YCvuCbRsU2Q",
"https://www.youtube.com/watch?v=qw-tfv48UyA", "https://youtu.be/ZdXpHhR6o4w", "https://youtu.be/O6sPMBRO2d4", "https://youtu.be/tbqieBm--0I", "https://twitter.com/RakanRui/status/1119850812577058816?s=09",
"https://youtu.be/hOnqmWNJ150", "https://www.youtube.com/watch?v=9yDoOzvI3Xc", "https://www.youtube.com/watch?v=HIDi07qQNZk", "https://youtu.be/iJCO5v2Lli8", "https://youtu.be/Nqj0qivLJb8", 
"https://www.youtube.com/watch?v=Xrwy4bNg9Ho", "https://youtu.be/F5ysnt-Bycs", "https://www.youtube.com/watch?v=nUHKOgHgQc4", "https://www.youtube.com/watch?v=bTK2W4b51d8", "https://www.youtube.com/watch?v=kJQctr94leU"];
var funnyInt;
var troll = ["https://cdn.discordapp.com/attachments/557265635114090525/577274948465197066/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275034847019029/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275105856454656/emote.png",
"https://cdn.discordapp.com/attachments/557265635114090525/577275237339627530/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275610787872771/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275688416182311/emote.png",
"https://cdn.discordapp.com/attachments/557265635114090525/577275808037470212/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275881446178816/emote.png", "https://cdn.discordapp.com/attachments/557265635114090525/577275959498113034/emote.png",
"https://cdn.discordapp.com/attachments/557265635114090525/577276175475539981/emote.png", "https://media1.tenor.com/images/5e0021dce6226d67bce5b2af6d20a37d/tenor.gif?itemid=3530316", "https://i.ytimg.com/vi/7SdUB6Va7AY/maxresdefault.jpg",
"https://i.ebayimg.com/images/g/Dv0AAOSwl9BWL6v9/s-l300.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXn2JY75kyTgoOtMCJvtxx0G6OdZ3fohKV0UN2sS3FsbC9EPLu", "https://thumbs.dreamstime.com/z/trollface-dark-spectacled-internet-troll-d-illustration-laughing-isolated-53719224.jpg",
"https://image.shutterstock.com/image-illustration/laughing-internet-troll-head-3d-450w-528857095.jpg", "https://files.gamebanana.com/img/ico/sprays/5391d4e8edb05.gif", "https://pics.me.me/troll-face-14350384.png"];
var toast = ["https://media.discordapp.net/attachments/577835516993732630/580736414174543873/tile000.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736416267632641/tile001.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736418360459304/tile002.png", 
	    "https://media.discordapp.net/attachments/577835516993732630/580736420180787210/tile003.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736422131138561/tile004.png",
	    "https://media.discordapp.net/attachments/577835516993732630/580736424287141914/tile005.png"];
var trollInt;
var dariusInt;
var darius = ["kys", "who", "literally who", "jew", "nigger", "whojew", "retard", "okbr", "fag", "obkrfag", "whofag", "newwho", 
	   "clown", "speak up", "i don't speak who", "what are you saying", "who clown", "newfag", "i don't speak who", "i don't understand",
	  "soy face", "kill yourself", "autist", "NIGGER", "cuck", "trolled", "owned", "ez", "lol", "dumbass", "clown nigger", "loli", "hentai",
	  "ew", "who?", "?", "stupid"];
var stanInt;
var stan = ["uz", "af", "ka", "ta", "pa", "ir", "kyr", "turk", "ghan", "zakh", "ijiki", "meni", "gyz", "ki", "ha", 
	    "ya", "hindu", "urdu", "leha", "huna", "hir", "vat", "serbe", "dage", "gole", "bal", "ochi", "lore", 
	    "bash", "kor", "oto", "tar", "gil", "git", "si", "kara", "kal", "pak", "gobu", "nuri", "dzor", "bu", "elbi",
	    "sha", "hri", "arabi", "gor", "je", "kohi", "lez", "gi", "qa", "baili", "za", "buli", "kabuli", "dard", "ban", "tu",
	    "who", "balti", "ghar", "balor", "as", "ore", "dihi", "fr", "ang", "bay", "nig", "wa", "zir"];

client.on("ready", () => {
  console.log("tajikistan nigga fart");
  client.user.setActivity('-uz help for commands | Currently in ' + client.guilds.size + ' servers');
});

client.on("message", message => {
  if (message.author.bot) return;
  // The process.env.PREFIX is your bot's prefix in this case.
  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  // This is the usual argument parsing we love to use.
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //const arabres = snekfetch.get('https://www.reddit.com/r/arabfunny/top/.json?sort=new&limit=500')
  //const arabpost = arabres.body.data.children.filter(arabpost => arabpost.data.preview)

  // And our 2 real basic commands!
  if (command === 'bruh') {
    message.channel.send('bruh moment');
  }
	
if (command === 'darius72') {
				completeTitle = "";
				title = [];
    				var min = 0;
				var max = darius.length;
				var min1 = 1;
				var max1 = 10;
				var dariusInt2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
				for (i = 0; i < dariusInt2;){
				dariusInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(darius[dariusInt]);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				message.channel.send(completeTitle);
				console.log(completeTitle);
  }
	
	if (command === 'stan') {
				completeTitle = "";
				title = [];
    				var min = 3;
				var max = 25;
				var min1 = 1;
				var max1 = 10;
				var stanInt2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
				for (i = 0; i < stanInt2;){
				stanInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(stan[stanInt]);
			 	console.log(title);
			 	i++;
				}
				title.push("stan");
				completeTitle = title.join(" ");
				completeTitle.charAt(0).toUpperCase();
				message.channel.send(completeTitle);
				console.log(completeTitle);
  }
  
  if (command == 'movie' || command == 'film') {
	  var minimum = 0;
	  var maximum = movie.length;
	  movieInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("bruh we watching movie number " + movieInt);
        message.channel.send("Baba, I have found a nice movie for us the in the VHS collection! " + "\n" + "https://www.youtube.com/watch?v=" + movie[movieInt]);
    }
	if(command === 'title')
	{
		title = [];
		completeTitle = "";
		titleInt = 0;
		let titleLength = args[0];
		var lang = 0;
		i = 0;
		i2 = 0;
		console.log("the length of this string is: " + titleLength);
		if(args[0] === null || args[0] === undefined){
			 console.log("YOU FORGOT THE FUNNY!");
			 message.channel.send('YOU FORGOT THE FUNNY!');
		}else if(titleLength >= 31){
			message.channel.send("Yo that's kind of cringe, make it shorter");
		}else if(args[0] != undefined && args[1] === undefined){
			message.channel.send({embed: {
					color: 0x0099b5,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "You gotta choose a language from these choices",
					fields: [
						{
						name: "Available Options",
						value: "Arab (arab, arabic, ar)" + "\n" + "Russian/Slavic (rus, russian, slav)" + "\n" + "Asia (as, asia, asian)" + 
						"\n" + "Spanish (es, spanish)" + "\n" + "Euro/European (eu, euro, european)"+ "\n" + "English (en, us, america)" + "\n" + "More coming soon maybe idk"
						},
					],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: Allah doesn't like you if you eat during fasting"
						}
			}
			});
		}else if(args[1] === "ar" || args[1] === "arab" || args[1] === "arabic")
				{
				console.log(words.length);
				words = words.concat(arab);
				var min = 0;
				var max = words.length - 1;
				console.log("arabic had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (arab.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}else if(args[1] === "ru" || args[1] === "russian" || args[1] === "slav")
				{
				console.log(words.length);
				words = words.concat(rus);
				var min = 0;
				var max = words.length - 1;
				console.log("arabic had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (rus.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}
			else if(args[1] === "en" || args[1] === "us" || args[1] === "american")
				{
				console.log(words.length);
				words = words.concat(us);
				var min = 0;
				var max = words.length - 1;
				console.log("english had been added to the string bro");
				for (i = 0; i < titleLength;){
			 	titleInt = Math.floor(Math.random() * (max - min + 1)) + min;
			 	title.push(words[titleInt]);
			 	console.log("There's only " + (titleLength - (i + 1)) + " words left");
			 	console.log(title.length);
			 	console.log(title);
			 	i++;
				}
				completeTitle = title.join(" ");
				console.log(words.length);
				message.channel.send(completeTitle);
				console.log(completeTitle);
				for(i2 = (us.length); i2 > 0;)
				{
					words.pop();
					i2--;
				}
			}
			
	}
		if(command === 'help')
		{
			if(args[0] == null || args[0] == undefined){
						message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "Choose a section first",
						value: "We had to divide this shit to make it readable (-uz help [section])"
					},
					{
						name: "General Fun Stuff [fun]",
						value: "Fun commands that aren't necessarily arabfunny/worldfunny related"
					},
					{
						name: "Arabfunny/Worldfunny [arab, world]",
						value: "Funny commands originally intended for arabfunny/worldfunny"
					},
					{
						name: "Other [other]",
						value: "Other misc. commands"
					},
					{
						name: "Economy",
						value: "Coming soon..."
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: I love you"
						}
						}});
			}
			else if (args[0] == "fun"){
					message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "General Fun Stuff",
						value: "epic funny command for all"
					},
					{
						name: "askallah [question (no limit)]",
						value: "Ask allah your important questions"
					},
					{
						name: "troll",
						value: "pull up a funny trollface"
					},
					{
						name: "danbull",
						value: "funny dan bull rapper song for gaming"
					},
					{
						name: "tobuscus, toby",
						value: "funny tobygames nugget in a biscuit song"
					},
					{
						name: "funnymeter [question (30 word limit)]",
						value: "ranks a funny on it's funnyness"
					},
					{
						name: "ironymeter [question (30 word limit)]",
						value: "use this to check if it's an irony or not"
					},
					{
						name: "stan",
						value: "create epic funny stani country"
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: South Sudan is fake"
						}
						}});
			}
			else if (args[0] == "arab" || args[0] == "world"){
					message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "Arabfunny/Worldfunny Stuff",
						value: "funny arabic command"
					},
					{
						name: "title [number of words (up to 30)] [language]",
						value: "Generate a funny title for arab something else that is not arab",
						value: "EXAMPLE: -uz title 20 ru"
					},
					{
						name: "movie, film",
						value: "funny movie for cinemas"
					},
					{
						name: "tv",
						value: "go through baba's vcr recordings"
					},
					{
						name: "lol, source, funny",
						value: "funny lol random XD source for arabfunny video"
					},
					{
						name: "music",
						value: "songs for dance at UN meeting"
					},
					{
						name: "darius72",
						value: "kys okbr whojew newfag"
					},
					{
						name: "hamood",
						value: "hamood habibi hamood hamood habibi"
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: South Sudan is fake"
						}
						}});
			}else if (args[0] == "other"){
					message.channel.send({embed: {
					color: 0x1eb35a,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "UzBot Commands for Newbies, Losers, and Zionists",
					fields: [{
						name: "Other Stuff",
						value: "idk what this is"
					},
					{
						name: "bruh",
						value: "bruh moment",
					},
					{
						name: "maketoast",
						value: "toast for dinner"
					},
					{
						name: "info",
						value: "new updates and new for arab"
					},
					{
						name: "help",
						value: "for zion who don't know"
					},
					{
						name: "invite",
						value: "free uzbot 4 u server"
					},
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: South Sudan is fake"
						}
						}});
			}
		}
		if(command === 'info')
		{
			message.channel.send({embed: {
					color: 0x0099b5,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "Yo whats up this is UzBot",
					fields: [{
						name: "Verison",
						value: "Current UzBot Version: Urgench (0.6.0)" + "\n" + "Current Status: Beta"
					},
					{
						name: "Creators",
						value: "Created by CaffeineMeme and onjah_69"
					},
					{
						name: "News and Updates",
						value: "New Commands Added:" + "\n" + "troll" + "\n" + "funny/lol/source" + "\n" + "funnymeter" + "\n" + "ironymeter" + "\n" + "askallah" + "\n" + "danbull"+ "\n" + "toby/tobuscus" + "\n" + "hamood" + "\n" + "tv/show"
						+ "Updated title output stuff" + "\n" + "Removed music for a bit"
						
					},
					{ 
						name: "Special Thanks to:",
						value: "Calaz" + "\n" + "muslim jesus" + "\n" + "Dabbing🅱️eter666" + "\n" + "and T r a z"
						
					}
				],
						footer: 
						{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: I used to be called Uzghamenzakhijikyzstan but that was a retarded name"
						}
			}	
			});
		}
		if(command === 'askallah')
		{
			var minimum = 0;
			var maximum = responses.length;
			if(args[0] === null || args[0] === undefined)
			{
				message.channel.send("You need to ask a question, stupit");
			}else if(args[0] != undefined){
				responseInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
				console.log("i am allah i say response " + responseInt);
				message.channel.send("**Allah says: **" + "\n" + responses[responseInt]);
			}
		}
		if(command === 'arabfunny')
		{
			var minimum = 0;
			var maximum = 100;
			fetch("https://www.reddit.com/r/arabfunny/new.json?limit=100")
  			.then(response => response.json())
  			.then(response => {
			arabInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			console.log(arabInt);
    			console.log("https://www.reddit.com" + response.data.children[arabInt].data.permalink);
			message.channel.send("https://www.reddit.com" + response.data.children[arabInt].data.permalink);
  			});
		}
		if(command === 'worldfunny')
		{
			var minimum = 0;
			var maximum = 50;
			fetch("https://www.reddit.com/r/worldfunnies/new.json?limit=100")
  			.then(response => response.json())
  			.then(response => {
			arabInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			console.log(arabInt);
    			console.log("https://www.reddit.com" + response.data.children[arabInt].data.permalink);
			message.channel.send("https://www.reddit.com" + response.data.children[arabInt].data.permalink);
  			});
		}
		if(command === 'tv' || command === 'show')
		{
		var minimum = 0;
		var maximum = tv.length - 1;
		tvInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("arab tv channel #" + tvInt);
        message.channel.send("Finally, some good shit's on TV " + "\n" + tv[tvInt]);
		}
		if(command === 'funny', command === 'lol')
		{
		var minimum = 0;
		var maximum = funnyVid.length - 1;
		funnyInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("source vid number " + funnyInt);
        message.channel.send("Finally, some good shit's on TV " + "\n" + funnyVid[funnyInt]);
		}
		if(command === 'troll')
		{
		var minimum = 0;
		var maximum = troll.length - 1;
		trollInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("dan bull number " + trollInt);
        message.channel.send("lol " + "\n" + troll[trollInt]);
		}
		if(command === 'toby' || command === 'tobuscus')
		{
		var minimum = 0;
		var maximum = toby.length - 1;
		tobyInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("dan bull number " + tobyInt);
        message.channel.send("chicken nugget biscuit nugget in a biscuit " + "\n" + toby[tobyInt]);
		}
		if(command === 'danbull')
		{
		var minimum = 0;
		var maximum = danbull.length - 1;
		danInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("dan bull number " + danInt);
        message.channel.send("Bro i found a good dan bull music " + "\n" + danbull[danInt]);
		}
		if(command === 'hamood')
		{
		var minimum = 0;
		var maximum = hamood.length - 1;
		hamoodInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		console.log("dan bull number " + hamoodInt);
        message.channel.send("hamood funny lol 2019 240p arabic animation " + "\n" + hamood[hamoodInt]);
		}
		if(command === 'funnymeter')
		{	
			if(args.length > 20){
				message.channel.send("nigga that's too long");
			}else{
			var minimum = 0;
			var maximum = 110;
			scale = responseInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			subject = args.join(" ");
			if(scale < 21){
				status = "BRO CRINGE";
			}
			else if(scale > 21 && scale < 41){
				status = "Unfunny";
			}
			else if(scale > 41 && scale < 61){
				status = "bro that's kind of a funny";
			}
			else if(scale > 61 && scale < 81){
				status = "lole";
			}
			else if(scale > 81 && scale < 101){
				status = "BRO THAT FUNNY";
			}
			else if(scale > 101){
				status = "FUNNY METER BROKE";
			}

			message.channel.send({embed: {
					color: 0xce1126,
					author: {
						name: "",
						icon_url: client.user.avatarURL
					},
					title: "UzBot Official FunnyMeter",
					fields: [
					{
						name: "Subject:",
						value: subject
						
					},
					{
						name: "Funny Rating:",
						value: scale + "/100"
						
					},
					{
						name: "Status:",
						value: status
						
					}],
					footer: 
					{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: Israel is fucking fake"
					}
			}
			});
		}
		}
		if(command === 'ironymeter')
		{
			if(args.length > 20){
				message.channel.send("nigga that's too long");
			}else{
			var minimum = 0;
			var maximum = 110;
			scale = responseInt = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			subject = args.join(" ");
			if(scale < 21){
				status = "not irony, didn't laugh";
			}
			else if(scale > 21 && scale < 41){
				status = "bro that bad irony";
			}
			else if(scale > 41 && scale < 61){
				status = "bok that's a good irony";
			}
			else if(scale > 61 && scale < 81){
				status = "lole ironic";
			}
			else if(scale > 81 && scale < 101){
				status = "IRONY";
			}
			else if(scale > 101){
				status = "IRONY METER BROKE";
			}

			message.channel.send({embed: {
					color: 0xffffff,
					author: {
						name: "",
						icon_url: client.user.avatarURL
					},
					title: "UzBot Official IronyMeter",
					fields: [
					{
						name: "Subject:",
						value: subject
						
					},
					{
						name: "Irony Rating:",
						value: scale + "/100"
						
					},
					{
						name: "Status:",
						value: status
						
					}],
					footer: 
					{
							icon_url: client.user.avatarURL,
							text: "Fun Fact: Irony = Funny"
					}
			}
			});
		}
		}
});

client.login(process.env.TOKEN);
