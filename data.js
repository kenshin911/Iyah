/**
 * ====================================================================
 * DATA.JS — RELATIONSHIP DATA & CONFIGURATION FOR IYAH & NASH
 * ====================================================================
 * 
 * Hi Nash! You can edit EVERYTHING in this file:
 * - Replace photo paths with your real photos (save them in assets/photos/)
 * - Edit captions, dates, and Taglish notes
 * - Add or modify quiz questions
 * - Paste your final letter into `finalLetter`
 * 
 * Everything updates automatically on the website.
 */

const RELATIONSHIP_DATA = {
  // Couple Info
  recipientName: "Iyah",
  senderName: "Nash",
  monthsaryCount: "19th",
  relationshipLength: "1 year and 7 months",
  
  // Music Settings (Volume from 0.0 to 1.0 — 0.15 is super soft & comfortable)
  musicSettings: {
    audioPath: "assets/music/bgm1.mp3",
    volume: 0.15
  },
  
  // Timeline Milestones
  timeline: {
    metDate: "November 2, 2024",
    metLocation: "MOA Seaside Roblox game",
    officialDate: "February 2, 2025",
    firstIRLDate: "December 7, 2025",
    visitStartDate: "May 28, 2026",
    visitEndDate: "June 2, 2026"
  },

  // LAYER 1: HOW IT STARTED (ROBLOX GENESIS)
  chapter1: {
    tag: "LAYER 01",
    date: "November 2, 2024",
    title: "How It All Started",
    subtitle: "The Genesis: MOA Seaside Roblox",
    note: "So... this whole thing started because of Roblox. 😭",
    photos: [
      {
        path: "assets/photos/roblox1.png",
        caption: "November 2, 2024 — Wala me makita na pic natin non sa MOA Seaside nung first meet natin e kaya yan nalang."
      },
      {
        path: "assets/photos/roblox2.png",
        caption: "Swipe or click to view another memory ♡"
      }
    ],
    photoPath: "assets/photos/roblox1.png",
    photoCaption: "November 2, 2024 — Wala me makita na pic natin non sa MOA Seaside nung first meet natin e kaya yan nalang.",
    bodyText: [
      "November 2, 2024.",
      "Out of all the places in the universe, sa Roblox pa talaga tayo nagtagpo HAHAHA.",
      "No dramatic movie opening, no fancy background music — just two blocky avatars running around MOA Seaside Roblox.",
      "Grabe, if someone told me back then that the person I met in a random Roblox game would become my favorite person in the entire world, hindi talaga ako maniniwala."
    ],
    quoteTag: "— November 2, 2024"
  },

  // LAYER 2: "YOU LIKED ME FIRST" (CASE FILE & META AI DOSSIER)
  chapter2: {
    tag: "LAYER 02",
    caseTitle: "CASE FILE #0202: 'YOU LIKED ME FIRST LOVE WAG MO NA DENY HAHAHAHA'",
    classification: "CONFIDENTIAL / STRICTLY PERSONAL",
    subject: "Iyah",
    investigator: "Nash",
    verdict: "GUILTY AS CHARGED 😭",
    dossierNotes: [
      {
        label: "SUSPECTED ACTIVITY",
        content: "Catching genuine feelings for ME way earlier than admitted."
      },
      {
        label: "THE INCIDENT / EVIDENCE",
        content: "A very curious consultation with Meta AI asking what to do if you caught feelings for a friend while still healing from past trauma HAHAHAHA."
      },
      {
        label: "THE PLOT TWIST",
        content: "I didn't even know during that time. I only found out AFTER WE WERE ALREADY IN A RELATIONSHIP because I had access to your account HAHAHA!"
      }
    ],
    reconstructionNote: "⚠️ Playful Reconstruction (No fake screenshots here, just pure facts!)",
    punchline: "Case closed, Love. You liked me first. Tanggapin mo na HAHAHA 😭❤️",
    tagline: "And honestly? I'm so grateful you did."
  },

  // LAYER 3: FIRST TIME SEEING EACH OTHER IRL
  chapter3: {
    tag: "LAYER 03",
    date: "December 7, 2025",
    title: "First Time Seeing You In Real Life",
    subtitle: "When the screen finally became real.",
    photoPath: "assets/photos/first_irl.jpg",
    polaroidCaption: "December 7, 2025 — first meet pero wala us pic so yan nalang.",
    thoughts: [
      "okay this is the first time na ive seen u irl and i was shocked.",
      "i was so so so shocked on how beautiful you looked that day as in and i cant believe my eyes.",
      "like le is get napapa isip tuloy ako that time na 'is this really happening?' HAHAHA.",
      "And after the very first time na seeing you irl I just immediately wanted to see you again ASAP HAHAHAHA."
    ]
  },

  // LAYER 4: THE SIX-DAY SCRAPBOOK (May 28 – June 2, 2026)
  // Emotional Centerpiece — The Cavite Visit
  sixDayScrapbook: {
    tag: "LAYER 04",
    title: "The Six Unforgettable Days",
    dateRange: "May 28, 2026 – June 2, 2026",
    intro: "You traveled all the way from Laoag, Ilocos Norte to Cavite for my graduation. Those six days were genuinely among the best days of my life.",
    pages: [
      {
        id: "day1",
        tabTitle: "Day 1: Arrival",
        headline: "She's Finally Here",
        date: "May 28, 2026",
        media: [
          {
            type: "image",
            path: "assets/photos/arrival.jpg",
            caption: "Laoag to Manila to Cavite. You were finally in front of me."
          },
          {
            type: "video",
            path: "assets/videos/arrival.mp4",
            caption: "Swipe or tap to watch our arrival video ♡"
          }
        ],
        photoPath: "assets/photos/arrival.jpg",
        photoCaption: "Laoag to Manila to Cavite. You were finally in front of me.",
        description: "You arrived in Manila and I picked you up, and then we went home together na and it was the first time I got to introduce someone to my family as my girlfriend. That feeling was unmatched HAHAHAHA."
      },
      {
        id: "day2",
        tabTitle: "School & Grad",
        headline: "Graduation Prep & School",
        date: "May 2026",
        media: [
          {
            type: "image",
            path: "assets/photos/school.jpg",
            caption: "Wala us maayos na pic nung Grad sayanggg huhuhu."
          },
          {
            type: "video",
            path: "assets/videos/school.mp4",
            caption: "CUTEE MO HEREEE ♡"
          }
        ],
        photoPath: "assets/photos/school.jpg",
        photoCaption: "Holding hands walking to get graduation tickets.",
        description: "Grad day and was the best day ever since ive been wishing non na makasama kita sa graduation ko and i didnt think of it na mangyayari pala talaga sya."
      },
      {
        id: "day3",
        tabTitle: "3. Mall & Squishies",
        headline: "Mall Day, Squishies & Groceries",
        date: "May 2026",
        media: [
          {
            type: "image",
            path: "assets/photos/mall.jpg",
            caption: "Buying you squishies & doing mundane grocery runs."
          },
          {
            type: "video",
            path: "assets/videos/mall.mp4",
            caption: "Mall memories part 1 ♡"
          },
          {
            type: "video",
            path: "assets/videos/mall2.mp4",
            caption: "Mall memories part 2 ♡"
          }
        ],
        photoPath: "assets/photos/mall.jpg",
        photoCaption: "Buying you squishies & doing mundane grocery runs.",
        description: "First going out with someone i love sa mall AHHAHAHA and it was great we didnt have a picture together kaya yan nilagay ko HAHAHAAHAH wtf is dat face boi. We also bought squishies and did some grocery runs together. It was simple, but it felt like a dream."
      },
      {
        id: "day4",
        tabTitle: "4. Food Park Date",
        headline: "Motorcycle Ride & Food Park Date",
        date: "May 2026",
        media: [
          {
            type: "image",
            path: "assets/photos/foodpark.jpg",
            caption: "Eating together at the food park boi"
          },
          {
            type: "video",
            path: "assets/videos/foodpark.mp4",
            caption: "Food park memories part 1 ♡"
          },
          {
            type: "video",
            path: "assets/videos/foodpark2.mp4",
            caption: "Food park memories part 2 ♡"
          },
          {
            type: "video",
            path: "assets/videos/foodpark3.mp4",
            caption: "Food park memories part 3 ♡"
          },
          {
            type: "video",
            path: "assets/videos/foodpark4.mp4",
            caption: "Food park memories part 4 ♡"
          },
          {
            type: "video",
            path: "assets/videos/foodpark5.mp4",
            caption: "Food park memories part 5 ♡"
          }
        ],
        photoPath: "assets/photos/foodpark.jpg",
        photoCaption: "Riding together near Dabilan / Hermosa Dabilan.",
        description: "We ride a motorcycle together to a food park near Davilan It wasn't some fancy, expensive restaurant but it was just us, eating together and feeling the breeze. But somehow, that became one of my most cherished memories nung nagpunta ka here."
      },
      {
        id: "day5",
        tabTitle: "Adobo Lab",
        headline: "Cooking Your Favorite Adobo",
        date: "June 2026",
        isAdoboGame: true,
        photoCaption: "The official AdoboNash™ certified kitchen.",
        description: "Before you left, I cooked your favorite Adobo. Seeing you enjoy it made my heart so full."
      },
      {
        id: "day6",
        tabTitle: "Quiet Reflection",
        headline: "Living In The Moment & Offcam Clips",
        date: "June 2, 2026",
        media: [
          {
            type: "image",
            path: "assets/photos/offcam.jpg",
            caption: "Offcam candid memories ♡"
          },
          {
            type: "image",
            path: "assets/photos/offcam2.jpg",
            caption: "Living in the moment with you ♡"
          },
          {
            type: "video",
            path: "assets/videos/offcam.mp4",
            caption: "Offcam video clip 1 ♡"
          },
          {
            type: "video",
            path: "assets/videos/offcam2.mp4",
            caption: "Offcam video clip 2 ♡"
          },
          {
            type: "video",
            path: "assets/videos/offcam3.mp4",
            caption: "Offcam video clip 3 ♡"
          },
          {
            type: "video",
            path: "assets/videos/offcam4.mp4",
            caption: "Offcam video clip 4 ♡"
          },
          {
            type: "video",
            path: "assets/videos/offcam5.mp4",
            caption: "Offcam video clip 5 ♡"
          }
        ],
        photoPath: "assets/photos/offcam.jpg",
        photoCaption: "Living in the moment instead of behind a lens.",
        description: "Na realize natin na we didnt take as many photos or videos as we could nung magkasam us pero i really think na i dont regret it kasi we were so busyyy actually living the moment nung magkasama tayo and that was enough for me maybe next time well have more photos and videos but for now im just happy na we were able to enjoy each other without worrying about capturing every single moment."
      }
    ]
  },

  // INTERACTIVE ADOBO COOKING MINI-STEP
  adoboMission: {
    title: "FINAL MISSION: Feed Iyah Before She Leaves 🍗",
    instruction: "Tap each ingredient to drop it into Nash's cooking pan:",
    ingredients: [
      { id: "chicken", name: "Chicken / Meat", icon: "🍗" },
      { id: "garlic", name: "Fresh Garlic & Onions", icon: "🧄" },
      { id: "toyo_suka", name: "Toyo + Suka + Paminta", icon: "🍶" },
      { id: "bayleaf", name: "Laurel Leaves & Pagmamahal", icon: "🌿" }
    ],
    successTitle: "ADOBONASH™ IS SERVED!",
    successBadge: "✨ 100% IYAH APPROVED ✨",
    successMessage: "Lu is to na ang adobo ni IYAHBELLS"
  },

  // LAYER 5: MINI-GAME ("HOW WELL DO YOU KNOW US?")
  quiz: {
    tag: "LAYER 05",
    title: "How Well Do You Know Us? ",
    subtitle: "A totally serious, highly scientific relationship test (no pressure boi).",
    questions: [
      {
        id: 1,
        question: "Where did Nash and Iyah first cross paths?",
        options: [
          "Somewhere fancy in BGC",
          "MOA Seaside Roblox ",
          "A random coffee shop",
          "Sa school cafeteria"
        ],
        correctIndex: 1,
        correctComment: "CORRECT 😭 BOI akala ko naman nakalimutan mo na",
        wrongComment: "Love nakakatampo dimo na alam kung saan tayo nag first meet?"
      },
      {
        id: 2,
        question: "When did we first meet in that Roblox game?",
        options: [
          "November 2, 2024",
          "December 25, 2024",
          "February 14, 2025",
          "May 28, 2026"
        ],
        correctIndex: 0,
        correctComment: "November 2, 2024! Tama Imposible naman na makalimutan mo yon ♡",
        wrongComment: "Hoy! November 2, 2024 pano mo naman nakalimutan yon."
      },
      {
        id: 3,
        question: "When did we officially become a couple?",
        options: [
          "January 1, 2025",
          "February 2, 2025",
          "December 7, 2025",
          "November 2, 2024"
        ],
        correctIndex: 1,
        correctComment: "Tama kajan dahil jan meron kang kiss",
        wrongComment: "LALA mo boi bat di mo alam."
      },
      {
        id: 4,
        question: "Who liked who first? (Be completely honest...)",
        options: [
          "Nash obviously",
          "Iyah (Meta AI has the receipts 🕵️)",
          "It was completely simultaneous",
          "Si Hello Kitty"
        ],
        correctIndex: 1,
        correctComment: "TAMA BOI WAG MO DIN IDENY",
        wrongComment: "Denial ka pa boi Na-confirm na sa Meta AI Convo nyo HAHAHA"
      },
      {
        id: 5,
        question: "What is Iyah's absolute favorite Sanrio character?",
        options: [
          "Cinnamoroll",
          "Kuromi",
          "Hello Kitty 🎀",
          "Pompompurin"
        ],
        correctIndex: 2,
        correctComment: "Hello Kitty forever syempre pero kung out of sanrio characters, Strawberry Shortcake is your ultimate fave HAHAHAHA",
        wrongComment: "Hello Kitty kaya (Kahit minsan parang Kuromi ka pag galit HAHAHA)."
      },
      {
        id: 6,
        question: "When did Nash first see Iyah in real life (and got starstruck) 😩?",
        options: [
          "December 7, 2025",
          "May 28, 2026",
          "November 2, 2024",
          "June 2, 2026"
        ],
        correctIndex: 0,
        correctComment: "December 7, 2025 Stunned and starstruck talaga ako frfrfrfr boi.",
        wrongComment: "DIMO NA ALAM BOII"
      },
      {
        id: 7,
        question: "Where did we go for our memorable motorcycle date during your Cavite visit?",
        options: [
          "Fine dining in Tagaytay",
          "Food park in Davilan",
          "Drive-thru fast food",
          "Cinema date"
        ],
        correctIndex: 1,
        correctComment: "ALAM ko naman na alam mo pa kaya like ka sakin 👍.",
        wrongComment: "dina tanda kinalimutan mo na kagad 😒"
      },
      {
        id: 8,
        question: "What special dish did Nash cook for Iyah before she headed back home?",
        options: [
          "Sinigang",
          "Adobo 🍗",
          "Spaghetti",
          "Fried chicken"
        ],
        correctIndex: 1,
        correctComment: "ADOBONGNASHHHHH",
        wrongComment: "Adobo talaga boi."
      }
    ]
  },

  // LAYER 6: OUR REAL STORY (Honesty, Vulnerability, Apology & Pride)
  chapter6: {
    tag: "LAYER 06",
    title: "Our Imperfect, Beautiful Story",
    sections: [
      {
        heading: "Not Every Page Was Perfect",
        text: "Our story naman wasn't a fairy tale with zero bad days we argue naman and we overthink parehas we get stubborn and sometimes syempre things get heated and we have moments na we almost lost each other pero what matters most naman for me is Kahit na may mga ganong bagay na nangyayari satin we still go bacl to each other arms and that is what matter"
      },
      {
        heading: "Things I Want to Apologize For",
        text: "I want to sincerely say sorry for the times im stubborn and hard to handle or even fail to listen carefully sa mga sinasabi mo for overthinking for falling short on little things u asked me to like yung mga times na nakaka tulog me and yung mga times na nakakatulog ako while watching and dikopa inaadmit and just reason of something para ma avoid yung arguement and ik that wasn't the right way to handle things and slowly im learning naman to be better and transparent sayo everyday"
      },
      {
        heading: "Thank You for Your Patience",
        text: "and love rn things have been tough Lalo na with my job hunt and still not passing/getting a job Lalo na sa mga recent interviews ko it weighs on me because i want so badly to give u the world and spoil u but thank u for being patient with me and understanding my situation and staying by myside syempre and also pala i dont plan on staying stuck sa gantong situation im pushing forward to build a stable future para sakin and sayo and also sa family ko"
      },
      {
        heading: "I Am So Incredibly Proud of You",
        text: "love youve been through so much this last month and yet ur still standing and it amaze me love every single day syempre seeing u rebuild urself na uli after what happen and make a comeback like ur going live na ulit  make up and stuff ur career Lalo na yung yesterday na shooting mo makes me so proud of u and i really love the goofy iyah the emotional and stubborn and yung mainit na ulo na iyah syempre yung vulnerable side mo na shinoshow mo sakin mga problem mo na dimo kaya sabihin sa iba kasi that part shows how much u trust me love"
      },
      {
        heading: "The Future I Dream Of",
        text: "MWell my dream naman wasn't fancy luxury its simple ngalang actually like coming home from a long day at work and unlocking the door and seeing u already there or sleeping with u waking up together eating meals together and finally syempre naman say goodnight not through a phonecall and travel i love travelling or just going out with uuu iloveyouuu lovelove"
      }
    ]
  },

  // LAYER 7: THE HANDWRITTEN LETTER & OUTRO
  letterSection: {
    tag: "LAYER 07",
    envelopeLabel: "For My Favorite Person In The World ♡",
    waxSealText: "N ♡ I",
    letterHeading: "To My Dearest Iyah,",
    letterBody: `HIIII LOVEEEEE

I js want to say to uu na HAPPY HAPPYY 19Monthsaryy heheheehe dang malapit na tayo mag 2 years parang nung nakraan 4months palang parang nag skip tayo ng 3 months HAHAHAHA i cant believe no kasi akala ko talaga we are gonna end things for good nung mga last na away natin nung July and nung nakaraan lang ngayong aug pero sana ma iwasan natin yung mga ganon sa mga incoming days / months or years pa i really want to be with u lovelove ik sometimes magulo Lalo na sa mga nangyayari satin pero sana we always try to comeback to each other love and also love i just want to say thank u kasi despite sa lahat ng nangyari nandito pa din us and somehow nalalagpasan pa din natin yung mga problems natin ik hindi naman perfect yung relationship natin and marami pa talaga tayong pagdadaanan but i hope na kahit gaano kahirap yung situation or kahit gaano tayo mag away minsan sana hindi natin agad piliin na mawala sa buhay ng isa't isa sana lagi natin subukan ayusin and intindihin yung isa't isa kasi at the end of the day love ikaw pa din naman yung gusto kong makasama i want more months and years with u lovelove more memories, more gala, more random moments, more tawanan and more everything with u. Thank u for being here love and thank u for staying kahit minsan alam kong hindi rin madali. I really appreciate u more than u know and kahit hindi ko palaging nasasabi or napapakita nang maayos i really really love u so much. Malapit na tayo mag 2 years love and i hope na this is just one of the many years na magsasama pa tayo. Sana we continue growing together and learning more about each other and learning how to love each other better. Happy happy 19Monthsaryy loveloveee and thank u for being part of my life. I LOVE UUUUU SOOO MUCHHH LOVEEEE and im always hoping na no matter what happens we always find our way back to each other.

And love, gusto ko rin malaman mo na kahit minsan sobrang gulo natin and may mga panahon na parehas tayong pagod, frustrated or nasasaktan, i still genuinely care about us and about what we have. Hindi ko naman ineexpect na magiging perfect tayo kasi alam ko naman na dalawang magkaibang tao tayo with different emotions, problems and ways of thinking, pero sana we continue learning how to understand each other better. Sana kapag may problem tayo, hindi agad natin isipin na katapusan na agad ng lahat. Sana maalala natin yung lahat ng pinagdaanan natin para makarating tayo dito and yung mga dahilan kung bakit tayo nagstay sa isa't isa. Kasi love, 19 months is not just 19 months of pagiging masaya lang, dumaan din tayo sa maraming bagay together and despite everything nandito pa rin tayo ngayon. I hope na habang tumatagal tayo mas maging mature tayo when it comes to handling our problems and misunderstandings. Hindi ko gusto na paulit ulit tayong masaktan dahil lang hindi natin naiintindihan yung isa't isa, kaya sana we always try our best to communicate and sabihin kung ano talaga yung nararamdaman natin instead na hayaan lang lumala yung lahat.

And love, thank u talaga for all the small things na ginagawa mo na baka hindi mo napapansin pero naaappreciate ko. Thank u for giving me memories na hindi ko makakalimutan and for being someone na naging malaking part ng buhay ko. Ang dami na nating memories together and honestly gusto ko pa dagdagan yun ng mas marami pa. I want more normal days with u, more random conversations, more calls, more tawanan sa mga walang kwentang bagay, more gala kapag kaya natin and more moments na tayo lang. Hindi ko kailangan na laging extraordinary yung lahat kasi kahit yung simpleng moments kasama ka, magiging special na rin sakin.

I hope na someday kapag tiningnan natin yung relationship natin from the beginning hanggang sa kung nasaan man tayo sa future, masasabi natin na kahit maraming times na naging mahirap, worth it na hindi tayo agad sumuko. I want us to look back and remember na dumaan tayo sa mga problems pero pinili pa rin natin ayusin and piliin yung isa't isa. Ik hindi natin alam kung ano exactly yung mangyayari sa future and marami pang pwedeng mangyari along the way, pero for now love gusto ko lang malaman mo na gusto pa rin kitang makasama. Gusto ko pa rin gumawa ng maraming memories with u and gusto ko pa rin makita kung hanggang saan tayo dadalhin ng relationship natin. Sana hindi tayo mapagod piliin ang isa't isa especially kapag hindi na madali. And if ever may times ulit na magulo tayo or may misunderstanding, sana maalala natin na parehas naman tayong nasa same relationship and hindi tayo magkalaban. Sana instead na trying to win against each other, we try to fix the problem together.

I know hindi magiging easy yung lahat and im sure magkakaroon pa tayo ng disagreements and problems in the future, pero sana every time na mangyari yun mas maging better tayo sa paghandle nito kaysa dati. I want us to grow individually pero at the same time grow together din. I want to see u achieve the things that u want in life and i want to be someone who supports u habang ginagawa mo yun. And i hope na kahit saan man tayo mapunta sa future, magkaroon pa rin tayo ng space sa buhay ng isa't isa. Thank u love for the 19 months, for the good days, even for the difficult days na may natutunan tayo, and for every memory na ginawa natin together. I know sometimes hindi ko nasasabi enough kung gaano kita kaappreciate pero i hope u know na im genuinely thankful na naging part ka ng life ko. So ayunnn happy happy happy 19Monthsaryyy ulit loveloveee hehehee malapit na talaga tayo mag 2 years and parang ang bilis lang talaga ng panahon HAHAHAHA. Sana marami pa tayong monthsary and anniversaries na macecelebrate together and marami pa tayong memories na gagawin. I LOVE U SOOO SOOO MUCHHH LOVEEEE and thank u for continuing to be here with me. No matter how messy things can get sometimes, im still hoping and wanting for us to work things out and continue choosing each other. Happy 19 monthsaryyy to us loveloveee and cheers to hopefully more months, more years, more memories, more growth, more love and more us!

Also loveee im alwayysss prouddd offff uuuuu and also love after everything that you've been through and all the struggles that you've faced before and even yung mga struggles na hanggang ngayon dala dala mo pa minsan, i just want u to know na nandito lang ako lagi for u. Hindi ko man always alam yung perfect words na sasabihin or kung paano ko maaayos yung mga problems na nararanasan mo, pero i want u to know na hindi mo kailangan harapin lahat mag isa. If ever pagod ka, malungkot ka, frustrated ka, or gusto mo lang ng someone na makikinig sayo, nandito ako love. U can always talk to me and tell me what's on your mind kahit gaano pa yan kabigat or kahit feeling mo maliit na bagay lang. I want to be someone na pwede mong sandalan kapag nahihirapan ka and someone na pwede mong takbuhan whenever u need someone. Ik marami ka nang pinagdaanan before and i know hindi lahat ng struggles madaling kalimutan or malagpasan agad, pero sana habang nandito ako sa buhay mo, maramdaman mo na may kasama ka. I might not be able to fix everything for u, pero i promise na as much as i can, i will always try to be there for u and support u. I want to see u heal, grow, achieve the things that u want and become happier, and i hope na kahit sa maliit na way lang, maging part ako ng journey na yon. Please always remember love na hindi ka alone, kasi nandito ako lagi para sayo loveloveee ♡`,

    outro: {
      headline: "19 Months & Counting",
      closingLines: [
        "19 months.",
        "1 year and 7 months.",
        "A random Roblox game.",
        "A lot of laughs, memories, and late-night calls.",
        "A few arguments, but countless reasons to stay.",
        "And somehow... we're still here, holding on tighter than ever.",
        "",
        "Happy 19th monthsary, Love Love.",
        "Araw-araw kitang pipiliin."
      ],
      signature: "— Nash ♡",
      date: "September 2026"
    }
  },

  // EASTER EGGS (Rage-bait, Hamster, Tiny Heart)
  easterEggs: {
    rageBait: {
      buttonLabel: "⚠️ DO NOT CLICK",
      alertMessage: "YOU GOT RAGE-BAITED 😭 HAHAHA! Love you boi ❤️"
    },
    hamster: {
      message: "🐹 'Bakit mo 'ko pinindot boi HAHAHA' — Hamster Easter Egg Found!"
    },
    tinyHeart: {
      message: "♡ 'I love you, boi. Sobrang sobra.' — Nash"
    },
    secretSticker: {
      message: "✨ 'If you're still clicking every single sticker... I knew you would HAHAHA.' ♡"
    }
  }
};
