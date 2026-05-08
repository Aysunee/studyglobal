export interface Country {
  slug: string;
  name: string;
  flag: string;
  eyebrow: string;
  heroText: string;
  region: "europe" | "north-america" | "asia";
  premium: boolean;
  metrics: { value: string; label: string }[];
  benefits: { title: string; text: string }[];
  universities: { title: string; text: string }[];
  costs: { title: string; text: string }[];
  heroPoints: string[];
  ctaTitle: string;
  ctaText: string;
  image: string;
}

export const countries: Country[] = [
  // 1. İngiltere
  {
    slug: "ingiltere",
    name: "İngiltere",
    flag: "\u{1F1EC}\u{1F1E7}",
    eyebrow: "Birle\u015Fik Krall\u0131k",
    heroText:
      "\u0130ngiltere, k\u00F6kl\u00FC \u00FCniversiteleri, k\u0131sa program s\u00FCreleri ve y\u00FCksek akademik prestiji ile her y\u0131l binlerce T\u00FCrk \u00F6\u011Frencinin ilk tercihi. Oxford ve Cambridge gibi d\u00FCnya devleri ile 142 \u00FCniversite aras\u0131ndan se\u00E7im yap\u0131n.",
    region: "europe",
    premium: true,
    metrics: [
      { value: "142", label: "\u00DCniversite" },
      { value: "3 Y\u0131l", label: "Lisans S\u00FCresi" },
      { value: "1 Y\u0131l", label: "Y\u00FCksek Lisans" },
      { value: "2 Y\u0131l", label: "Graduate Route Vizesi" },
    ],
    benefits: [
      {
        title: "K\u0131sa Program S\u00FCresi",
        text: "Lisans 3 y\u0131l, y\u00FCksek lisans 1 y\u0131l. Di\u011Fer \u00FClkelere g\u00F6re hem zaman hem maliyet tasarrufu.",
      },
      {
        title: "Akademik Prestij",
        text: "D\u00FCnya s\u0131ralamalar\u0131nda ilk 10\u2019da 4 \u0130ngiliz \u00FCniversitesi. Oxford, Cambridge, Imperial, UCL.",
      },
      {
        title: "Graduate Route",
        text: "Mezuniyet sonras\u0131 2 y\u0131l (doktora 3 y\u0131l) \u00E7al\u0131\u015Fma vizesi. \u0130ngiltere\u2019de kariyer yapma imkan\u0131.",
      },
      {
        title: "K\u00FCresel Tan\u0131n\u0131rl\u0131k",
        text: "\u0130ngiliz diplomalar\u0131 d\u00FCnya genelinde en y\u00FCksek tan\u0131n\u0131rl\u0131\u011Fa sahip. Global kariyer i\u00E7in g\u00FC\u00E7l\u00FC temel.",
      },
    ],
    universities: [
      {
        title: "University of Oxford",
        text: "D\u00FCnyan\u0131n en eski \u0130ngilizce e\u011Fitim veren \u00FCniversitesi. T\u00FCm alanlarda d\u00FCnya zirvesi.",
      },
      {
        title: "University of Cambridge",
        text: "800 y\u0131ll\u0131k tarihi, 100+ Nobel \u00F6d\u00FCll\u00FC mezun. Bilim, m\u00FChendislik ve be\u015Feri bilimlerde zirve.",
      },
      {
        title: "Imperial College London",
        text: "Bilim, m\u00FChendislik, t\u0131p ve i\u015Fletme odakl\u0131. D\u00FCnya s\u0131ralamalar\u0131nda s\u00FCrekli ilk 10.",
      },
      {
        title: "UCL",
        text: "Londra\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitesi. Mimarl\u0131k, e\u011Fitim ve sosyal bilimler alanlar\u0131nda d\u00FCnya lideri.",
      },
      {
        title: "University of Edinburgh",
        text: "\u0130sko\u00E7ya\u2019n\u0131n ba\u015Fkentinde. AI, veri bilimi ve t\u0131p alanlar\u0131nda g\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma \u00FCniversitesi.",
      },
      {
        title: "LSE",
        text: "Ekonomi, siyaset ve sosyal bilimler alan\u0131nda d\u00FCnyan\u0131n en iyi \u00FCniversitelerinden.",
      },
    ],
    costs: [
      {
        title: "Lisans \u00DCcreti",
        text: "Uluslararas\u0131 \u00F6\u011Frenciler: \u00A315.000-\u00A338.000/y\u0131l. T\u0131p programlar\u0131 \u00A338.000+ olabilir.",
      },
      {
        title: "Y\u00FCksek Lisans",
        text: "\u00A312.000-\u00A335.000 (1 y\u0131l toplam). MBA programlar\u0131 \u00A340.000+ olabilir.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u00A31.000-\u00A31.500/ay. Londra d\u0131\u015F\u0131nda daha uygun. Vize i\u00E7in \u00A31.334/ay kan\u0131tlanmal\u0131.",
      },
      {
        title: "Chevening Bursu",
        text: "\u0130ngiliz h\u00FCk\u00FCmetinin tam bursu: e\u011Fitim \u00FCcreti, ya\u015Fam giderleri, u\u00E7ak bileti dahil. T\u00FCrkiye\u2019den ba\u015Fvuru a\u00E7\u0131k.",
      },
    ],
    heroPoints: [
      "UCAS Yetkili Merkez",
      "3 Y\u0131l Lisans",
      "Graduate Route 2 Y\u0131l Vize",
    ],
    ctaTitle:
      "\u0130ngiltere\u2019de e\u011Fitim hayalinizi ger\u00E7e\u011Fe d\u00F6n\u00FC\u015Ft\u00FCr\u00FCn",
    ctaText:
      "Study Global UCAS yetkili merkezi olarak ba\u015Fvuru s\u00FCrecinizin her a\u015Famas\u0131nda yan\u0131n\u0131zday\u0131z. Dan\u0131\u015Fmanl\u0131k hizmetimiz \u00FCcretsizdir.",
    image: "/assets/countries/uk.jpg",
  },

  // 2. İskoçya
  {
    slug: "iskocya",
    name: "\u0130sko\u00E7ya",
    flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
    eyebrow: "Birle\u015Fik Krall\u0131k",
    heroText:
      "\u0130sko\u00E7ya, 19 y\u00FCksek \u00F6\u011Fretim kurumunu b\u00FCnyesinde bar\u0131nd\u0131rarak aralar\u0131ndan se\u00E7im yapabilmenize f\u0131rsat tan\u0131maktad\u0131r. \u0130sko\u00E7 \u00FCniversiteleri \u0130ngiltere genelinde en y\u00FCksek \u00F6\u011Frenci memnuniyetine sahip kurumlard\u0131r.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "19", label: "\u00DCniversite" },
      { value: "1 Saat", label: "Londra\u2019ya U\u00E7u\u015F" },
      { value: "90 dk", label: "Paris\u2019e U\u00E7u\u015F" },
      { value: "7", label: "Ana \u015Eehir" },
    ],
    benefits: [
      {
        title: "Ara\u015Ft\u0131rma G\u00FCc\u00FC",
        text: "MRI taray\u0131c\u0131s\u0131 ve laparoskopik cerrahi gibi \u00E7\u0131\u011F\u0131r a\u00E7an bulu\u015Flar \u0130sko\u00E7 \u00FCniversitelerindeki ara\u015Ft\u0131rmalardan do\u011Fmu\u015Ftur.",
      },
      {
        title: "\u00D6\u011Frenci Memnuniyeti",
        text: "\u0130sko\u00E7 \u00FCniversiteleri Birle\u015Fik Krall\u0131k genelinde en y\u00FCksek \u00F6\u011Frenci memnuniyet oranlar\u0131na sahiptir.",
      },
      {
        title: "Merkezi Konum",
        text: "Londra\u2019ya 1 saat, Paris\u2019e 90 dakika u\u00E7u\u015F mesafesinde. Avrupa\u2019n\u0131n merkezine kolay eri\u015Fim.",
      },
      {
        title: "K\u00FClt\u00FCr & Ya\u015Fam",
        text: "Galeri ve m\u00FCzelerin \u00E7o\u011Fu \u00FCcretsizdir. Zengin tarih, do\u011Fa ve canl\u0131 \u015Fehir hayat\u0131 bir arada.",
      },
    ],
    universities: [
      {
        title: "University of Edinburgh",
        text: "D\u00FCnya s\u0131ralamalar\u0131nda s\u00FCrekli \u00FCst s\u0131ralarda yer alan, ara\u015Ft\u0131rma odakl\u0131 k\u00F6kl\u00FC bir \u00FCniversite.",
      },
      {
        title: "University of St Andrews",
        text: "\u0130sko\u00E7ya\u2019n\u0131n en eski \u00FCniversitesi. K\u00FC\u00E7\u00FCk s\u0131n\u0131f yap\u0131s\u0131 ve g\u00FC\u00E7l\u00FC akademik gelenek.",
      },
      {
        title: "University of Glasgow",
        text: "1451 y\u0131l\u0131nda kurulan, m\u00FChendislik ve t\u0131p alanlar\u0131nda g\u00FC\u00E7l\u00FC bir ara\u015Ft\u0131rma \u00FCniversitesi.",
      },
      {
        title: "University of Aberdeen",
        text: "Enerji, \u00E7evre ve t\u0131p bilimlerinde uzmanla\u015Fm\u0131\u015F, 500 y\u0131l\u0131 a\u015Fk\u0131n ge\u00E7mi\u015Fe sahip kurum.",
      },
      {
        title: "University of Dundee",
        text: "Ya\u015Fam bilimleri ve tasar\u0131m alanlar\u0131nda \u0130sko\u00E7ya\u2019n\u0131n en yenilik\u00E7i \u00FCniversitelerinden biri.",
      },
      {
        title: "University of Stirling",
        text: "E\u011Fitim, spor bilimleri ve su k\u00FClt\u00FCr\u00FC alanlar\u0131nda uluslararas\u0131 tan\u0131n\u0131rl\u0131\u011Fa sahip.",
      },
    ],
    costs: [
      {
        title: "Edinburgh",
        text: "Ba\u015Fkent. Festival \u015Fehri, tarihi mimari ve canl\u0131 \u00F6\u011Frenci hayat\u0131.",
      },
      {
        title: "Glasgow",
        text: "\u0130sko\u00E7ya\u2019n\u0131n en b\u00FCy\u00FCk \u015Fehri. M\u00FCzik, sanat ve gece hayat\u0131yla \u00FCnl\u00FC.",
      },
      {
        title: "Aberdeen",
        text: "Enerji sekt\u00F6r\u00FCn\u00FCn merkezi. Kariyer odakl\u0131 \u00F6\u011Frenciler i\u00E7in g\u00FC\u00E7l\u00FC staj imkanlar\u0131.",
      },
      {
        title: "Dundee",
        text: "Oyun tasar\u0131m\u0131 ve biyomedikal ara\u015Ft\u0131rmalar\u0131n merkezi. Uygun ya\u015Fam maliyeti.",
      },
    ],
    heroPoints: [
      "19 \u00DCniversite",
      "En Y\u00FCksek \u00D6\u011Frenci Memnuniyeti",
      "Ara\u015Ft\u0131rma Odakl\u0131",
    ],
    ctaTitle:
      "\u0130sko\u00E7ya\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile \u0130sko\u00E7ya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m. Dan\u0131\u015Fmanl\u0131k hizmetimiz \u00FCcretsizdir.",
    image: "",
  },

  // 3. İrlanda
  {
    slug: "irlanda",
    name: "\u0130rlanda",
    flag: "\u{1F1EE}\u{1F1EA}",
    eyebrow: "Avrupa\u2019da E\u011Fitim",
    heroText:
      "\u0130rlanda, T\u00FCrk \u00F6\u011Frenciler aras\u0131nda en pop\u00FCler tercihlerden biri. Tarihi \u015Fehirler, e\u015Fsiz do\u011Fa manzaralar\u0131 ve y\u00FCksek kaliteli e\u011Fitim sunan \u0130rlanda, Avrupa\u2019n\u0131n bat\u0131 ucunda bir AB \u00FCyesi \u00FClke olarak \u00F6ne \u00E7\u0131k\u0131yor.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "35.000+", label: "Uluslararas\u0131 \u00D6\u011Frenci" },
      { value: "160", label: "\u00DClkeden \u00D6\u011Frenci" },
      {
        value: "%1",
        label: "D\u00FCnya Ara\u015Ft\u0131rma S\u0131ralamas\u0131",
      },
      { value: "Google", label: "Microsoft \u2022 Medtronic" },
    ],
    benefits: [
      {
        title: "\u0130ngilizce E\u011Fitim",
        text: "Avro b\u00F6lgesinde \u0130ngilizce e\u011Fitim veren tek \u00FClke. Dil bariyeri olmadan Avrupa deneyimi.",
      },
      {
        title: "Teknoloji Merkezi",
        text: "Google, Microsoft, Medtronic gibi dev \u015Firketlerin Avrupa merkezleri \u0130rlanda\u2019da. Staj ve kariyer f\u0131rsatlar\u0131.",
      },
      {
        title: "Ara\u015Ft\u0131rma Kalitesi",
        text: "\u0130rlanda \u00FCniversiteleri d\u00FCnya genelinde ara\u015Ft\u0131rma s\u0131ralamalar\u0131nda ilk %1\u2019de yer almaktad\u0131r.",
      },
      {
        title: "Dost Canl\u0131s\u0131 K\u00FClt\u00FCr",
        text: "Lonely Planet taraf\u0131ndan \u201Cd\u00FCnyan\u0131n en dost canl\u0131s\u0131 \u00FClkesi\u201D se\u00E7ilen \u0130rlanda, s\u0131cak bir ortam sunar.",
      },
    ],
    universities: [
      {
        title: "Trinity College Dublin",
        text: "1592 y\u0131l\u0131nda kurulan \u0130rlanda\u2019n\u0131n en prestijli \u00FCniversitesi. D\u00FCnya s\u0131ralamalar\u0131nda s\u00FCrekli \u00FCst s\u0131ralarda.",
      },
      {
        title: "University College Dublin",
        text: "\u0130rlanda\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitesi. \u0130\u015Fletme, m\u00FChendislik ve sa\u011Fl\u0131k bilimlerinde g\u00FC\u00E7l\u00FC programlar.",
      },
      {
        title: "University of Limerick",
        text: "Staj programlar\u0131 ve end\u00FCstri ba\u011Flant\u0131lar\u0131yla bilinen, kariyer odakl\u0131 bir \u00FCniversite.",
      },
      {
        title: "NUI Galway",
        text: "Bat\u0131 \u0130rlanda\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitesi. Deniz bilimleri ve biyomedikal m\u00FChendisli\u011Finde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Dublin City University",
        text: "Teknoloji, ileti\u015Fim ve i\u015Fletme alanlar\u0131nda yenilik\u00E7i programlar sunan modern bir \u00FCniversite.",
      },
      {
        title: "University College Cork",
        text: "G\u0131da bilimi, eczac\u0131l\u0131k ve \u00E7evre bilimleri alanlar\u0131nda uluslararas\u0131 tan\u0131n\u0131rl\u0131\u011Fa sahip.",
      },
    ],
    costs: [
      {
        title: "Lisans \u2014 Sanat & Be\u015Feri",
        text: "\u20AC10.000 \u2013 \u20AC16.500 / y\u0131l",
      },
      {
        title: "Lisans \u2014 M\u00FChendislik",
        text: "\u20AC10.000 \u2013 \u20AC21.600 / y\u0131l",
      },
      {
        title: "Lisans \u2014 T\u0131p",
        text: "\u20AC31.000 \u2013 \u20AC50.000 / y\u0131l",
      },
      {
        title: "Y. Lisans \u2014 Sanat & Be\u015Feri",
        text: "\u20AC10.500 \u2013 \u20AC20.000 / y\u0131l",
      },
    ],
    heroPoints: [
      "160 \u00DClkeden \u00D6\u011Frenci",
      "Avro B\u00F6lgesi",
      "\u0130ngilizce E\u011Fitim",
    ],
    ctaTitle:
      "\u0130rlanda\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile \u0130rlanda \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m. Dan\u0131\u015Fmanl\u0131k hizmetimiz \u00FCcretsizdir.",
    image: "/assets/countries/ireland.jpg",
  },

  // 4. Finlandiya
  {
    slug: "finlandiya",
    name: "Finlandiya",
    flag: "\u{1F1EB}\u{1F1EE}",
    eyebrow: "Kuzey Avrupa\u2019da E\u011Fitim",
    heroText:
      "Finlandiya, yenilik\u00E7i e\u011Fitim modeli ve y\u00FCksek ya\u015Fam kalitesiyle d\u00FCnya genelinde en \u00E7ok tercih edilen e\u011Fitim destinasyonlar\u0131ndan biridir. PISA s\u0131navlar\u0131nda s\u00FCrekli \u00FCst s\u0131ralarda yer alan Finlandiya, \u00F6\u011Frenci odakl\u0131 e\u011Fitim anlay\u0131\u015F\u0131yla \u00F6ne \u00E7\u0131kar.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "13", label: "\u00DCniversite" },
      { value: "22", label: "Uygulamal\u0131 Bilimler \u00DCni." },
      { value: "\u20AC6K-18K", label: "Y\u0131ll\u0131k \u00DCcret (YL)" },
      { value: "Top 3", label: "PISA S\u0131ralamas\u0131" },
    ],
    benefits: [
      {
        title: "Yenilik\u00E7i E\u011Fitim",
        text: "Finlandiya e\u011Fitim sistemi d\u00FCnyada en iyiler aras\u0131nda. \u00D6\u011Frenci merkezli, ara\u015Ft\u0131rma odakl\u0131 ve pratik uygulamalara dayal\u0131.",
      },
      {
        title: "G\u00FCvenli Ya\u015Fam",
        text: "D\u00FCnyan\u0131n en g\u00FCvenli \u00FClkelerinden biri. Temiz hava, d\u00FC\u015F\u00FCk su\u00E7 oran\u0131 ve y\u00FCksek ya\u015Fam standartlar\u0131.",
      },
      {
        title: "Teknoloji & \u0130novasyon",
        text: "Nokia\u2019n\u0131n anavatan\u0131. Startup ekosistemi, oyun geli\u015Ftirme (Supercell, Rovio) ve teknoloji alanlar\u0131nda g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130zni",
        text: "\u00D6\u011Frenciler e\u011Fitim s\u00FCresince haftada 25 saat \u00E7al\u0131\u015Fabilir. Mezuniyet sonras\u0131 i\u015F arama vizesi mevcuttur.",
      },
    ],
    universities: [
      {
        title: "University of Helsinki",
        text: "Finlandiya\u2019n\u0131n en eski ve en prestijli \u00FCniversitesi. D\u00FCnya s\u0131ralamalar\u0131nda ilk 100\u2019de. Ara\u015Ft\u0131rma odakl\u0131 geni\u015F program yelpazesi.",
      },
      {
        title: "Aalto University",
        text: "Teknoloji, i\u015Fletme ve sanat-tasar\u0131m alanlar\u0131n\u0131 birle\u015Ftiren yenilik\u00E7i \u00FCniversite. Startup ekosistemiyle g\u00FC\u00E7l\u00FC ba\u011Flant\u0131lar.",
      },
      {
        title: "Tampere University",
        text: "Teknoloji, sa\u011Fl\u0131k ve sosyal bilimler alanlar\u0131nda g\u00FC\u00E7l\u00FC. Finlandiya\u2019n\u0131n en b\u00FCy\u00FCk multidisipliner \u00FCniversitesi.",
      },
      {
        title: "University of Turku",
        text: "Biyobilimler, e\u011Fitim ve hukuk alanlar\u0131nda uluslararas\u0131 tan\u0131n\u0131rl\u0131\u011Fa sahip k\u00F6kl\u00FC \u00FCniversite.",
      },
      {
        title: "University of Oulu",
        text: "Bilgi teknolojileri, kablosuz ileti\u015Fim ve \u00E7evre m\u00FChendisli\u011Fi alanlar\u0131nda uzmanla\u015Fm\u0131\u015F.",
      },
      {
        title: "LUT University",
        text: "Enerji, \u00E7evre teknolojileri ve i\u015Fletme alanlar\u0131nda Finlandiya\u2019n\u0131n \u00F6nc\u00FC \u00FCniversitesi.",
      },
    ],
    costs: [
      {
        title: "Lisans Programlar\u0131",
        text: "Baz\u0131 programlar \u00FCcretsiz, \u00FCcretli programlarda \u20AC4.000 \u2013 \u20AC18.000 / y\u0131l aras\u0131nda de\u011Fi\u015Fir.",
      },
      {
        title: "Y\u00FCksek Lisans",
        text: "\u20AC6.000 \u2013 \u20AC18.000 / y\u0131l. Bir\u00E7ok \u00FCniversite e\u011Fitim \u00FCcreti muafiyeti veya burs sunmaktad\u0131r.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "Ayl\u0131k \u20AC700 \u2013 \u20AC1.200 (konaklama, yemek, ula\u015F\u0131m dahil). Helsinki d\u0131\u015F\u0131nda daha uygun.",
      },
      {
        title: "Burs \u0130mkanlar\u0131",
        text: "Finland Scholarship, \u00FCniversite burslar\u0131 ve Erasmus+ programlar\u0131 ile finansal destek m\u00FCmk\u00FCn.",
      },
    ],
    heroPoints: [
      "Yenilik\u00E7i E\u011Fitim Modeli",
      "Y\u00FCksek Ya\u015Fam Kalitesi",
      "G\u00FCvenli \u00DClke",
    ],
    ctaTitle:
      "Finlandiya\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Finlandiya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m. Dan\u0131\u015Fmanl\u0131k hizmetimiz \u00FCcretsizdir.",
    image: "/assets/countries/finland.jpg",
  },

  // 5. İsviçre
  {
    slug: "isvicre",
    name: "\u0130svi\u00E7re",
    flag: "\u{1F1E8}\u{1F1ED}",
    eyebrow: "Premium E\u011Fitim",
    heroText:
      "\u0130svi\u00E7re, i\u015Fletme, otelcilik ve ara\u015Ft\u0131rma alanlar\u0131nda d\u00FCnyan\u0131n en prestijli e\u011Fitim kurumlar\u0131na ev sahipli\u011Fi yapmaktad\u0131r. ETH Z\u00FCrich ve EPFL gibi \u00FCniversiteler d\u00FCnya s\u0131ralamalar\u0131nda s\u00FCrekli ilk 20\u2019de yer al\u0131r.",
    region: "europe",
    premium: true,
    metrics: [
      { value: "12", label: "\u00DCniversite" },
      { value: "Top 20", label: "ETH Z\u00FCrich & EPFL" },
      {
        value: "4 Dil",
        label:
          "Almanca \u2022 Frans\u0131zca \u2022 \u0130talyanca \u2022 Roman\u015F\u00E7a",
      },
      { value: "CHF 1K-30K", label: "Y\u0131ll\u0131k \u00DCcret" },
    ],
    benefits: [
      {
        title: "Akademik M\u00FCkemmellik",
        text: "ETH Z\u00FCrich ve EPFL d\u00FCnya s\u0131ralamalar\u0131nda s\u00FCrekli ilk 20\u2019de. Nobel \u00F6d\u00FCll\u00FC ara\u015Ft\u0131rmac\u0131lar yeti\u015Ftiren k\u00F6kl\u00FC gelenek.",
      },
      {
        title: "Otelcilik & \u0130\u015Fletme",
        text: "EHL, Les Roches ve Glion gibi okullarla otelcilik e\u011Fitiminde d\u00FCnya lideri. MBA programlar\u0131 da g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "\u00C7ok K\u00FClt\u00FCrl\u00FC Yap\u0131",
        text: "4 resmi dil, uluslararas\u0131 \u00F6\u011Frenci oran\u0131 ve BM, WHO gibi k\u00FCresel kurulu\u015Flar\u0131n merkezi.",
      },
      {
        title: "Kariyer F\u0131rsatlar\u0131",
        text: "Finans, ila\u00E7 ve teknoloji sekt\u00F6rlerinde g\u00FC\u00E7l\u00FC i\u015F piyasas\u0131. Nestl\u00E9, Novartis, UBS gibi dev \u015Firketler.",
      },
    ],
    universities: [
      {
        title: "ETH Z\u00FCrich",
        text: "D\u00FCnyan\u0131n en iyi teknik \u00FCniversitelerinden. Einstein\u2019\u0131n mezun oldu\u011Fu okul. M\u00FChendislik, bilim ve teknolojide zirve.",
      },
      {
        title: "EPFL",
        text: "Lozan\u2019da yer alan, m\u00FChendislik ve do\u011Fa bilimlerinde Avrupa\u2019n\u0131n en g\u00FC\u00E7l\u00FC kurumlar\u0131ndan biri.",
      },
      {
        title: "University of Zurich",
        text: "\u0130svi\u00E7re\u2019nin en b\u00FCy\u00FCk \u00FCniversitesi. T\u0131p, hukuk ve sosyal bilimler alanlar\u0131nda g\u00FC\u00E7l\u00FC programlar.",
      },
      {
        title: "EHL",
        text: "D\u00FCnyan\u0131n ilk ve en prestijli otelcilik okulu. L\u00FCks sekt\u00F6r ve hospitality y\u00F6netiminde k\u00FCresel lider.",
      },
      {
        title: "University of Geneva",
        text: "Uluslararas\u0131 ili\u015Fkiler ve hukuk alan\u0131nda g\u00FC\u00E7l\u00FC. BM ve uluslararas\u0131 kurulu\u015Flara yak\u0131nl\u0131k avantaj\u0131.",
      },
      {
        title: "University of Basel",
        text: "\u0130svi\u00E7re\u2019nin en eski \u00FCniversitesi. \u0130la\u00E7 ve ya\u015Fam bilimleri ara\u015Ft\u0131rmalar\u0131nda d\u00FCnya \u00E7ap\u0131nda tan\u0131n\u0131rl\u0131k.",
      },
    ],
    costs: [
      {
        title: "Devlet \u00DCniversiteleri",
        text: "CHF 1.000 \u2013 4.000 / y\u0131l. \u0130svi\u00E7re devlet \u00FCniversiteleri olduk\u00E7a uygun fiyatl\u0131 e\u011Fitim sunar.",
      },
      {
        title: "\u00D6zel \u00DCniversiteler",
        text: "CHF 15.000 \u2013 30.000 / y\u0131l. Otelcilik ve i\u015Fletme okullar\u0131 bu aral\u0131kta yer al\u0131r.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "CHF 1.500 \u2013 2.500 / ay. \u0130svi\u00E7re ya\u015Fam maliyeti y\u00FCksek ancak \u00F6\u011Frenci indirimleri mevcuttur.",
      },
      {
        title: "Burslar",
        text: "Swiss Government Excellence Scholarships, ETH burslar\u0131 ve \u00FCniversite bazl\u0131 destek programlar\u0131.",
      },
    ],
    heroPoints: [
      "D\u00FCnya Top 20 \u00DCniversiteler",
      "\u00C7ok Dilli Ortam",
      "Premium Kariyer A\u011F\u0131",
    ],
    ctaTitle:
      "\u0130svi\u00E7re\u2019de premium e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile \u0130svi\u00E7re \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/switzerland.jpg",
  },

  // 6. Avusturya
  {
    slug: "avusturya",
    name: "Avusturya",
    flag: "\u{1F1E6}\u{1F1F9}",
    eyebrow: "Avrupa\u2019n\u0131n Kalbi",
    heroText:
      "Avrupa\u2019n\u0131n merkezinde g\u00FC\u00E7l\u00FC akademik gelenek ve zengin k\u00FClt\u00FCrel ya\u015Fam. Viyana, d\u00FCnya genelinde en y\u00FCksek ya\u015Fam kalitesine sahip \u015Fehirlerden biri olarak \u00F6\u011Frencilere e\u015Fsiz bir deneyim sunuyor.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "22", label: "Devlet \u00DCniversitesi" },
      { value: "\u20AC726", label: "D\u00F6nem \u00DCcreti" },
      { value: "#1", label: "Viyana Ya\u015Fam Kalitesi" },
      { value: "Erasmus+", label: "Burs Deste\u011Fi" },
    ],
    benefits: [
      {
        title: "Uygun \u00DCcret",
        text: "Devlet \u00FCniversitelerinde d\u00F6nem \u00FCcreti sadece \u20AC726. AB d\u0131\u015F\u0131 \u00F6\u011Frenciler i\u00E7in \u20AC1.500/d\u00F6nem.",
      },
      {
        title: "Merkezi Konum",
        text: "Almanya, \u0130talya, \u0130svi\u00E7re ve \u00C7ekya\u2019ya kom\u015Fu. Avrupa\u2019y\u0131 ke\u015Ffetmek i\u00E7in ideal \u00FCs.",
      },
      {
        title: "K\u00FClt\u00FCr Ba\u015Fkenti",
        text: "Mozart, Freud ve Klimt\u2019in vatan\u0131. M\u00FCzik, sanat ve mimari alan\u0131nda benzersiz k\u00FClt\u00FCrel miras.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130mkan\u0131",
        text: "\u00D6\u011Frenciler haftada 20 saat \u00E7al\u0131\u015Fabilir. Mezuniyet sonras\u0131 12 ayl\u0131k i\u015F arama vizesi.",
      },
    ],
    universities: [
      {
        title: "Viyana \u00DCniversitesi",
        text: "1365\u2019te kurulan, Almanca konu\u015Fulan d\u00FCnyan\u0131n en eski \u00FCniversitesi. 15 Nobel \u00F6d\u00FCll\u00FC mezun.",
      },
      {
        title: "TU Wien",
        text: "Viyana Teknik \u00DCniversitesi. M\u00FChendislik, bilgisayar bilimi ve mimarl\u0131kta Avrupa\u2019n\u0131n g\u00FC\u00E7l\u00FC kurumlar\u0131ndan.",
      },
      {
        title: "Graz \u00DCniversitesi",
        text: "Avusturya\u2019n\u0131n ikinci b\u00FCy\u00FCk \u00FCniversitesi. Do\u011Fa bilimleri ve be\u015Feri bilimlerde g\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma.",
      },
      {
        title: "Innsbruck \u00DCniversitesi",
        text: "Alpler\u2019in kalbinde e\u011Fitim. Fizik, eczac\u0131l\u0131k ve spor bilimlerinde uluslararas\u0131 tan\u0131n\u0131rl\u0131k.",
      },
      {
        title: "WU Wien",
        text: "Viyana Ekonomi \u00DCniversitesi. \u0130\u015Fletme ve ekonomi alan\u0131nda Avrupa\u2019n\u0131n en b\u00FCy\u00FCk kurumlar\u0131ndan.",
      },
      {
        title: "Salzburg \u00DCniversitesi",
        text: "Mozart\u2019\u0131n do\u011Fdu\u011Fu \u015Fehirde e\u011Fitim. Hukuk, siyaset ve ileti\u015Fim bilimlerinde g\u00FC\u00E7l\u00FC.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "AB \u00F6\u011Frencileri: \u20AC726/d\u00F6nem. AB d\u0131\u015F\u0131 \u00F6\u011Frenciler: ~\u20AC1.500/d\u00F6nem. \u00D6zel \u00FCniversiteler daha y\u00FCksek.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC800 \u2013 \u20AC1.200/ay. Viyana\u2019da biraz daha y\u00FCksek, Graz ve Innsbruck\u2019ta daha uygun.",
      },
      {
        title: "Burslar",
        text: "OeAD burslar\u0131, Erasmus+ ve \u00FCniversite bazl\u0131 burs programlar\u0131 uluslararas\u0131 \u00F6\u011Frencilere a\u00E7\u0131k.",
      },
      {
        title: "\u00D6\u011Frenci \u0130ndirimleri",
        text: "Ula\u015F\u0131m, k\u00FClt\u00FCrel etkinlikler ve yemek i\u00E7in kapsaml\u0131 \u00F6\u011Frenci indirimleri. Semestarticket ile \u00FCcretsiz ula\u015F\u0131m.",
      },
    ],
    heroPoints: [
      "Uygun E\u011Fitim \u00DCcreti",
      "Avrupa Merkezi Konum",
      "Y\u00FCksek Ya\u015Fam Kalitesi",
    ],
    ctaTitle:
      "Avusturya\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Avusturya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "",
  },

  // 7. Belçika
  {
    slug: "belcika",
    name: "Bel\u00E7ika",
    flag: "\u{1F1E7}\u{1F1EA}",
    eyebrow: "AB\u2019nin Ba\u015Fkenti",
    heroText:
      "Avrupa Birli\u011Fi kurumlar\u0131n\u0131n merkezi Bel\u00E7ika, \u00E7ok dilli yap\u0131s\u0131 ve d\u00FCnya \u00E7ap\u0131nda tan\u0131nan \u00FCniversiteleriyle uluslararas\u0131 \u00F6\u011Frenciler i\u00E7in cazip bir e\u011Fitim destinasyonudur.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "11", label: "\u00DCniversite" },
      {
        value: "3 Dil",
        label: "Flamanca \u2022 Frans\u0131zca \u2022 Almanca",
      },
      { value: "\u20AC900-4.5K", label: "Y\u0131ll\u0131k \u00DCcret" },
      { value: "Top 50", label: "KU Leuven" },
    ],
    benefits: [
      {
        title: "AB Merkezi",
        text: "Avrupa Komisyonu, NATO ve bir\u00E7ok uluslararas\u0131 kurulu\u015Fun merkezi. Uluslararas\u0131 ili\u015Fkiler ve hukuk i\u00E7in ideal.",
      },
      {
        title: "\u00C7ok Dilli Yap\u0131",
        text: "Flamanca, Frans\u0131zca ve Almanca \u2014 \u00FC\u00E7 dilde e\u011Fitim imkan\u0131. \u0130ngilizce programlar da yayg\u0131n.",
      },
      {
        title: "Merkezi Konum",
        text: "Paris, Amsterdam, Londra ve K\u00F6ln\u2019e 2 saat tren mesafesi. Avrupa\u2019n\u0131n ortas\u0131nda ya\u015Fam.",
      },
      {
        title: "Ara\u015Ft\u0131rma G\u00FCc\u00FC",
        text: "KU Leuven d\u00FCnya s\u0131ralamalar\u0131nda ilk 50\u2019de. G\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma altyap\u0131s\u0131 ve end\u00FCstri ba\u011Flant\u0131lar\u0131.",
      },
    ],
    universities: [
      {
        title: "KU Leuven",
        text: "Bel\u00E7ika\u2019n\u0131n en y\u00FCksek s\u0131ralamal\u0131 \u00FCniversitesi. M\u00FChendislik, t\u0131p ve sosyal bilimlerde d\u00FCnya \u00E7ap\u0131nda.",
      },
      {
        title: "Ghent \u00DCniversitesi",
        text: "Biyoteknoloji, veterinerlik ve m\u00FChendislik alanlar\u0131nda g\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma \u00FCniversitesi.",
      },
      {
        title: "ULB (Br\u00FCksel)",
        text: "Frans\u0131zca e\u011Fitim veren prestijli \u00FCniversite. Siyaset, hukuk ve uluslararas\u0131 ili\u015Fkilerde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "VUB (Br\u00FCksel)",
        text: "Flamanca e\u011Fitim veren Br\u00FCksel \u00FCniversitesi. M\u00FChendislik ve do\u011Fa bilimlerinde g\u00FC\u00E7l\u00FC programlar.",
      },
      {
        title: "UCLouvain",
        text: "Frans\u0131zca konu\u015Fulan Bel\u00E7ika\u2019n\u0131n en k\u00F6kl\u00FC \u00FCniversitesi. T\u0131p ve hukuk alanlar\u0131nda tan\u0131n\u0131rl\u0131k.",
      },
      {
        title: "Antwerp \u00DCniversitesi",
        text: "\u0130\u015Fletme, ila\u00E7 bilimleri ve denizcilik alanlar\u0131nda uzmanla\u015Fm\u0131\u015F dinamik \u00FCniversite.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "AB d\u0131\u015F\u0131 \u00F6\u011Frenciler: \u20AC900 \u2013 \u20AC4.500/y\u0131l. Baz\u0131 y\u00FCksek lisans programlar\u0131 daha y\u00FCksek olabilir.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC800 \u2013 \u20AC1.100/ay. Br\u00FCksel biraz daha pahal\u0131, Leuven ve Ghent \u00F6\u011Frenci dostu fiyatlar sunar.",
      },
      {
        title: "Burslar",
        text: "VLIR-UOS burslar\u0131, Erasmus+ ve \u00FCniversite bazl\u0131 merit burslar\u0131 uluslararas\u0131 \u00F6\u011Frencilere a\u00E7\u0131k.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130zni",
        text: "\u00D6\u011Frenciler akademik y\u0131l i\u00E7inde haftada 20 saat, tatillerde tam zamanl\u0131 \u00E7al\u0131\u015Fabilir.",
      },
    ],
    heroPoints: ["AB Merkezi", "\u00C7ok Dilli Ortam", "Uygun \u00DCcretler"],
    ctaTitle:
      "Bel\u00E7ika\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Bel\u00E7ika \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "",
  },

  // 8. İspanya
  {
    slug: "ispanya",
    name: "\u0130spanya",
    flag: "\u{1F1EA}\u{1F1F8}",
    eyebrow: "G\u00FCney Avrupa",
    heroText:
      "\u0130spanya, i\u015Fletme, sosyal bilimler ve g\u00FCzel sanatlar alanlar\u0131nda g\u00FC\u00E7l\u00FC \u00FCniversiteleri, uygun ya\u015Fam maliyeti ve e\u015Fsiz k\u00FClt\u00FCrel deneyimiyle \u00F6\u011Frencilerin g\u00F6zdesi.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "83", label: "\u00DCniversite" },
      {
        value: "\u20AC750-3.5K",
        label: "Devlet \u00DCni. \u00DCcreti",
      },
      { value: "500M+", label: "\u0130spanyolca Konu\u015Fan" },
      { value: "Erasmus+", label: "#1 Hedef \u00DClke" },
    ],
    benefits: [
      {
        title: "Uygun Maliyet",
        text: "Devlet \u00FCniversitelerinde \u20AC750-\u20AC3.500/y\u0131l. Ya\u015Fam maliyeti Bat\u0131 Avrupa ortalamas\u0131n\u0131n alt\u0131nda.",
      },
      {
        title: "\u0130spanyolca",
        text: "D\u00FCnyan\u0131n en \u00E7ok konu\u015Fulan 2. dili. Kariyer i\u00E7in b\u00FCy\u00FCk avantaj \u2014 Latin Amerika pazarlar\u0131na a\u00E7\u0131l\u0131m.",
      },
      {
        title: "Ya\u015Fam Kalitesi",
        text: "Akdeniz iklimi, zengin mutfak k\u00FClt\u00FCr\u00FC, plajlar ve canl\u0131 sosyal ya\u015Fam. Avrupa\u2019n\u0131n en e\u011Flenceli \u00FClkesi.",
      },
      {
        title: "\u0130\u015Fletme E\u011Fitimi",
        text: "IE Business School, ESADE ve IESE d\u00FCnyan\u0131n en iyi i\u015Fletme okullar\u0131 aras\u0131nda yer al\u0131r.",
      },
    ],
    universities: [
      {
        title: "Barcelona \u00DCniversitesi",
        text: "\u0130spanya\u2019n\u0131n en y\u00FCksek s\u0131ralamal\u0131 \u00FCniversitesi. T\u0131p, hukuk ve be\u015Feri bilimlerde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Madrid Complutense",
        text: "\u0130spanya\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitesi. Geni\u015F program yelpazesi ve g\u00FC\u00E7l\u00FC kamp\u00FCs ya\u015Fam\u0131.",
      },
      {
        title: "Salamanca \u00DCniversitesi",
        text: "1218\u2019de kurulan, d\u00FCnyan\u0131n en eski \u00FCniversitelerinden. \u0130spanyolca dil e\u011Fitiminde d\u00FCnya lideri.",
      },
      {
        title: "IE Business School",
        text: "Madrid\u2019de yer alan, d\u00FCnya \u00E7ap\u0131nda tan\u0131nan i\u015Fletme okulu. MBA ve giri\u015Fimcilik programlar\u0131nda zirve.",
      },
      {
        title: "Pompeu Fabra (Barcelona)",
        text: "Gen\u00E7 ama h\u0131zla y\u00FCkselen \u00FCniversite. Ekonomi, ileti\u015Fim ve siyaset bilimlerinde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Valencia Polit\u00E9cnica",
        text: "M\u00FChendislik, mimarl\u0131k ve teknoloji alanlar\u0131nda \u0130spanya\u2019n\u0131n en g\u00FC\u00E7l\u00FC teknik \u00FCniversitelerinden.",
      },
    ],
    costs: [
      {
        title: "Devlet \u00DCniversiteleri",
        text: "\u20AC750 \u2013 \u20AC3.500/y\u0131l. B\u00F6lge ve programa g\u00F6re de\u011Fi\u015Fir. Katalonya biraz daha pahal\u0131.",
      },
      {
        title: "\u00D6zel \u00DCniversiteler",
        text: "\u20AC5.000 \u2013 \u20AC20.000/y\u0131l. \u0130\u015Fletme okullar\u0131 ve t\u0131p programlar\u0131 \u00FCst aral\u0131kta.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC700 \u2013 \u20AC1.100/ay. Madrid ve Barcelona d\u0131\u015F\u0131nda \u00E7ok daha uygun. \u00D6\u011Frenci yurtlar\u0131 mevcut.",
      },
      {
        title: "Burslar",
        text: "MAEC-AECID burslar\u0131, Erasmus+ ve \u00FCniversite bazl\u0131 burs programlar\u0131.",
      },
    ],
    heroPoints: [
      "Uygun Ya\u015Fam Maliyeti",
      "\u0130spanyolca \u00D6\u011Frenme",
      "Zengin K\u00FClt\u00FCr",
    ],
    ctaTitle:
      "\u0130spanya\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile \u0130spanya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/spain.jpg",
  },

  // 9. Japonya
  {
    slug: "japonya",
    name: "Japonya",
    flag: "\u{1F1EF}\u{1F1F5}",
    eyebrow: "Asya\u2019da E\u011Fitim",
    heroText:
      "Japonya, teknoloji, m\u00FChendislik ve k\u00FClt\u00FCrel deneyimi bir araya getiren benzersiz bir e\u011Fitim destinasyonu. D\u00FCnya s\u0131ralamalar\u0131nda \u00FCst s\u0131ralarda yer alan \u00FCniversiteler ve MEXT bursu ile tam burs imkan\u0131.",
    region: "asia",
    premium: true,
    metrics: [
      { value: "780+", label: "\u00DCniversite" },
      {
        value: "\u00A5535K",
        label: "Devlet \u00DCni. \u00DCcreti/Y\u0131l",
      },
      { value: "MEXT", label: "Tam Burs Program\u0131" },
      { value: "Top 30", label: "Tokyo \u00DCniversitesi" },
    ],
    benefits: [
      {
        title: "Teknoloji & \u0130novasyon",
        text: "Toyota, Sony, Nintendo, Honda \u2014 d\u00FCnyan\u0131n en inovatif \u015Firketlerinin anavatan\u0131. Robotik ve AI\u2019da d\u00FCnya lideri.",
      },
      {
        title: "MEXT Bursu",
        text: "Japon h\u00FCk\u00FCmetinin sundu\u011Fu tam burs: e\u011Fitim \u00FCcreti, ayl\u0131k maa\u015F, u\u00E7ak bileti ve sa\u011Fl\u0131k sigortas\u0131 dahil.",
      },
      {
        title: "G\u00FCvenli Ya\u015Fam",
        text: "D\u00FCnyan\u0131n en g\u00FCvenli \u00FClkelerinden. Disiplinli toplum yap\u0131s\u0131, d\u00FC\u015F\u00FCk su\u00E7 oran\u0131 ve m\u00FCkemmel toplu ta\u015F\u0131ma.",
      },
      {
        title: "K\u00FClt\u00FCrel Deneyim",
        text: "Gelenek ve modernli\u011Fin benzersiz birle\u015Fimi. Anime, manga, \u00E7ay seremonisi ve zen felsefesi.",
      },
    ],
    universities: [
      {
        title: "Tokyo \u00DCniversitesi (Todai)",
        text: "Japonya\u2019n\u0131n en prestijli \u00FCniversitesi. D\u00FCnya s\u0131ralamalar\u0131nda ilk 30. T\u00FCm alanlarda g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Kyoto \u00DCniversitesi",
        text: "Nobel \u00F6d\u00FCll\u00FC ara\u015Ft\u0131rmac\u0131lar yeti\u015Ftiren k\u00F6kl\u00FC kurum. Do\u011Fa bilimleri ve m\u00FChendislikte zirve.",
      },
      {
        title: "Osaka \u00DCniversitesi",
        text: "T\u0131p, m\u00FChendislik ve do\u011Fa bilimlerinde Japonya\u2019n\u0131n \u00FC\u00E7\u00FCnc\u00FC b\u00FCy\u00FCk ara\u015Ft\u0131rma \u00FCniversitesi.",
      },
      {
        title: "Tohoku \u00DCniversitesi",
        text: "Malzeme bilimi ve m\u00FChendislikte d\u00FCnya lideri. Uluslararas\u0131 \u00F6\u011Frenci dostu kamp\u00FCs.",
      },
      {
        title: "Waseda \u00DCniversitesi",
        text: "Tokyo\u2019nun en tan\u0131nan \u00F6zel \u00FCniversitesi. \u0130\u015Fletme, siyaset ve uluslararas\u0131 ili\u015Fkilerde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Keio \u00DCniversitesi",
        text: "Japonya\u2019n\u0131n en eski \u00F6zel \u00FCniversitesi. \u0130\u015Fletme, t\u0131p ve hukuk alanlar\u0131nda prestijli.",
      },
    ],
    costs: [
      {
        title: "Devlet \u00DCniversiteleri",
        text: "\u00A5535.800/y\u0131l (~\u20AC3.400). Giri\u015F \u00FCcreti \u00A5282.000 (tek seferlik). \u00D6zel \u00FCniversiteler daha y\u00FCksek.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u00A580.000 \u2013 \u00A5130.000/ay (~\u20AC500-800). Tokyo d\u0131\u015F\u0131nda daha uygun. \u00D6\u011Frenci yurtlar\u0131 mevcut.",
      },
      {
        title: "MEXT Bursu",
        text: "Tam burs: e\u011Fitim \u00FCcreti + ayl\u0131k \u00A5117.000-\u00A5145.000 + u\u00E7ak bileti. T\u00FCrk \u00F6\u011Frencilere a\u00E7\u0131k.",
      },
      {
        title: "JASSO Burslar\u0131",
        text: "K\u0131sa s\u00FCreli de\u011Fi\u015Fim ve ara\u015Ft\u0131rma burslar\u0131. Ayl\u0131k \u00A580.000 destek.",
      },
    ],
    heroPoints: [
      "MEXT Tam Burs",
      "Teknoloji Lideri",
      "Benzersiz K\u00FClt\u00FCr",
    ],
    ctaTitle:
      "Japonya\u2019da e\u011Fitim ve burs f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Japonya \u00FCniversitelerine ba\u015Fvuru ve MEXT bursu s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/japan.jpg",
  },

  // 10. Polonya
  {
    slug: "polonya",
    name: "Polonya",
    flag: "\u{1F1F5}\u{1F1F1}",
    eyebrow: "Do\u011Fu Avrupa",
    heroText:
      "Polonya, Avrupa\u2019da eri\u015Filebilir maliyet ve geni\u015F \u0130ngilizce program \u00E7e\u015Fitlili\u011Fi sunan pop\u00FCler e\u011Fitim destinasyonu. T\u0131p e\u011Fitimi i\u00E7in \u00F6zellikle T\u00FCrk \u00F6\u011Frenciler taraf\u0131ndan tercih edilmektedir.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "400+", label: "\u00DCniversite" },
      { value: "\u20AC2K-6K", label: "Y\u0131ll\u0131k \u00DCcret" },
      { value: "AB", label: "Diploma Denkli\u011Fi" },
      { value: "Erasmus+", label: "Burs Deste\u011Fi" },
    ],
    benefits: [
      {
        title: "Uygun Maliyet",
        text: "E\u011Fitim \u00FCcreti \u20AC2.000-\u20AC6.000/y\u0131l. Ya\u015Fam maliyeti Bat\u0131 Avrupa\u2019n\u0131n yar\u0131s\u0131 kadar.",
      },
      {
        title: "T\u0131p E\u011Fitimi",
        text: "\u0130ngilizce t\u0131p programlar\u0131 AB genelinde ge\u00E7erli diploma sunar. T\u00FCrk \u00F6\u011Frenciler taraf\u0131ndan yo\u011Fun tercih edilir.",
      },
      {
        title: "AB Diplomas\u0131",
        text: "AB \u00FCyesi olarak Polonya diplomalar\u0131 t\u00FCm Avrupa\u2019da tan\u0131n\u0131r. Mezuniyet sonras\u0131 AB\u2019de \u00E7al\u0131\u015Fma imkan\u0131.",
      },
      {
        title: "G\u00FCvenli Ortam",
        text: "D\u00FC\u015F\u00FCk su\u00E7 oran\u0131, \u00F6\u011Frenci dostu \u015Fehirler ve canl\u0131 gece hayat\u0131. Krakow Avrupa\u2019n\u0131n en g\u00FCzel \u015Fehirlerinden.",
      },
    ],
    universities: [
      {
        title: "Var\u015Fova \u00DCniversitesi",
        text: "Polonya\u2019n\u0131n en y\u00FCksek s\u0131ralamal\u0131 \u00FCniversitesi. Sosyal bilimler, hukuk ve ekonomi alanlar\u0131nda g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Jagiellonian \u00DCniversitesi",
        text: "1364\u2019te kurulan Avrupa\u2019n\u0131n en eski \u00FCniversitelerinden. Krakow\u2019da. T\u0131p ve hukuk alanlar\u0131nda prestijli.",
      },
      {
        title: "Wroclaw \u00DCniversitesi",
        text: "Do\u011Fa bilimleri ve be\u015Feri bilimlerde g\u00FC\u00E7l\u00FC. Wroclaw Avrupa K\u00FClt\u00FCr Ba\u015Fkenti se\u00E7ilmi\u015F canl\u0131 \u015Fehir.",
      },
      {
        title: "Var\u015Fova T\u0131p \u00DCniversitesi",
        text: "Polonya\u2019n\u0131n en b\u00FCy\u00FCk t\u0131p fak\u00FCltesi. \u0130ngilizce t\u0131p program\u0131 uluslararas\u0131 \u00F6\u011Frenciler aras\u0131nda pop\u00FCler.",
      },
      {
        title: "AGH Krakow",
        text: "M\u00FChendislik ve teknoloji alanlar\u0131nda Polonya\u2019n\u0131n en g\u00FC\u00E7l\u00FC teknik \u00FCniversitesi.",
      },
      {
        title: "Gdansk T\u0131p \u00DCniversitesi",
        text: "Balt\u0131k k\u0131y\u0131s\u0131nda t\u0131p e\u011Fitimi. \u0130ngilizce programlar\u0131 ile uluslararas\u0131 \u00F6\u011Frencilerin g\u00F6zdesi.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "\u20AC2.000 \u2013 \u20AC6.000/y\u0131l. T\u0131p programlar\u0131 \u20AC10.000-\u20AC14.000/y\u0131l aral\u0131\u011F\u0131nda.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC400 \u2013 \u20AC700/ay. Avrupa\u2019n\u0131n en uygun ya\u015Fam maliyetli \u00FClkelerinden biri.",
      },
      {
        title: "Erasmus+ Burslar\u0131",
        text: "AB de\u011Fi\u015Fim program\u0131 kapsam\u0131nda burs deste\u011Fi. Polonya h\u00FCk\u00FCmeti burslar\u0131 da mevcut.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130zni",
        text: "\u00D6\u011Frenciler tatil d\u00F6nemlerinde tam zamanl\u0131, e\u011Fitim d\u00F6neminde yar\u0131 zamanl\u0131 \u00E7al\u0131\u015Fabilir.",
      },
    ],
    heroPoints: [
      "Eri\u015Filebilir Maliyet",
      "\u0130ngilizce T\u0131p E\u011Fitimi",
      "AB \u00DCyesi",
    ],
    ctaTitle:
      "Polonya\u2019da uygun fiyatl\u0131 e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Polonya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "",
  },

  // 11. Çin
  {
    slug: "cin",
    name: "\u00C7in",
    flag: "\u{1F1E8}\u{1F1F3}",
    eyebrow: "Asya\u2019n\u0131n Y\u00FCkselen G\u00FCc\u00FC",
    heroText:
      "\u00C7in, global ticaret, teknoloji ve Asya odakl\u0131 kariyerler i\u00E7in g\u00FC\u00E7l\u00FC f\u0131rsatlar sunuyor. D\u00FCnyan\u0131n en h\u0131zl\u0131 b\u00FCy\u00FCyen ekonomisinde e\u011Fitim alarak gelece\u011Fin pazarlar\u0131na haz\u0131rlan\u0131n.",
    region: "asia",
    premium: false,
    metrics: [
      { value: "2.900+", label: "\u00DCniversite" },
      { value: "CNY 20-40K", label: "Y\u0131ll\u0131k \u00DCcret" },
      { value: "CSC", label: "Tam Burs Program\u0131" },
      { value: "Top 20", label: "Tsinghua & Peking" },
    ],
    benefits: [
      {
        title: "Ekonomik G\u00FC\u00E7",
        text: "D\u00FCnyan\u0131n 2. b\u00FCy\u00FCk ekonomisi. Alibaba, Huawei, Tencent gibi dev \u015Firketlerle staj ve kariyer f\u0131rsatlar\u0131.",
      },
      {
        title: "CSC Bursu",
        text: "\u00C7in h\u00FCk\u00FCmetinin tam bursu: e\u011Fitim \u00FCcreti, konaklama, ayl\u0131k maa\u015F ve sa\u011Fl\u0131k sigortas\u0131 dahil.",
      },
      {
        title: "Mandarin \u00D6\u011Frenme",
        text: "D\u00FCnyan\u0131n en \u00E7ok konu\u015Fulan dili. Mandarin bilgisi uluslararas\u0131 kariyerde b\u00FCy\u00FCk avantaj.",
      },
      {
        title: "Uygun Maliyet",
        text: "Ya\u015Fam maliyeti Avrupa ve ABD\u2019ye g\u00F6re \u00E7ok d\u00FC\u015F\u00FCk. E\u011Fitim \u00FCcretleri de olduk\u00E7a eri\u015Filebilir.",
      },
    ],
    universities: [
      {
        title: "Tsinghua \u00DCniversitesi",
        text: "Asya\u2019n\u0131n en iyi \u00FCniversitesi. M\u00FChendislik, bilgisayar bilimi ve i\u015Fletmede d\u00FCnya \u00E7ap\u0131nda tan\u0131n\u0131rl\u0131k.",
      },
      {
        title: "Peking \u00DCniversitesi",
        text: "\u00C7in\u2019in en k\u00F6kl\u00FC \u00FCniversitesi. Be\u015Feri bilimler, hukuk ve sosyal bilimlerde Asya\u2019n\u0131n zirvesi.",
      },
      {
        title: "Fudan \u00DCniversitesi",
        text: "\u015Eanghay\u2019da. \u0130\u015Fletme, t\u0131p ve uluslararas\u0131 ili\u015Fkiler alanlar\u0131nda g\u00FC\u00E7l\u00FC programlar.",
      },
      {
        title: "Zhejiang \u00DCniversitesi",
        text: "M\u00FChendislik ve teknoloji alanlar\u0131nda \u00C7in\u2019in en g\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma \u00FCniversitelerinden.",
      },
      {
        title: "Shanghai Jiao Tong",
        text: "M\u00FChendislik, i\u015Fletme ve t\u0131p alanlar\u0131nda d\u00FCnya s\u0131ralamalar\u0131nda \u00FCst s\u0131ralarda.",
      },
      {
        title: "Wuhan \u00DCniversitesi",
        text: "Uzay bilimleri, su kaynaklar\u0131 m\u00FChendisli\u011Fi ve hukuk alanlar\u0131nda uzmanla\u015Fm\u0131\u015F k\u00F6kl\u00FC kurum.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "CNY 20.000-40.000/y\u0131l (~\u20AC2.500-5.000). T\u0131p ve MBA programlar\u0131 daha y\u00FCksek olabilir.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "CNY 2.000-4.000/ay (~\u20AC250-500). Pekin ve \u015Eanghay d\u0131\u015F\u0131nda \u00E7ok daha uygun.",
      },
      {
        title: "CSC Bursu",
        text: "Tam burs: e\u011Fitim + konaklama + ayl\u0131k CNY 2.500-3.500 + sa\u011Fl\u0131k sigortas\u0131. T\u00FCrkiye\u2019den ba\u015Fvuru a\u00E7\u0131k.",
      },
      {
        title: "\u00DCniversite Burslar\u0131",
        text: "Bir\u00E7ok \u00FCniversite kendi burs programlar\u0131n\u0131 sunar. K\u0131smi ve tam burs se\u00E7enekleri mevcut.",
      },
    ],
    heroPoints: [
      "CSC Tam Burs",
      "Global Ticaret Merkezi",
      "Uygun Maliyet",
    ],
    ctaTitle:
      "\u00C7in\u2019de e\u011Fitim ve burs f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile \u00C7in \u00FCniversitelerine ba\u015Fvuru ve CSC bursu s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "",
  },

  // 12. Almanya
  {
    slug: "almanya",
    name: "Almanya",
    flag: "\u{1F1E9}\u{1F1EA}",
    eyebrow: "Avrupa\u2019n\u0131n G\u00FC\u00E7l\u00FC Ekonomisi",
    heroText:
      "Almanya, devlet \u00FCniversitelerinde \u00FCcretsiz e\u011Fitim imkan\u0131, g\u00FC\u00E7l\u00FC m\u00FChendislik programlar\u0131 ve Avrupa\u2019n\u0131n en b\u00FCy\u00FCk ekonomisinde kariyer f\u0131rsatlar\u0131 sunmaktad\u0131r.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "400+", label: "\u00DCniversite" },
      { value: "\u00DCcretsiz", label: "Devlet \u00DCniversiteleri" },
      { value: "\u20AC150-350", label: "D\u00F6nem Harc\u0131" },
      { value: "DAAD", label: "Burs Program\u0131" },
    ],
    benefits: [
      {
        title: "\u00DCcretsiz E\u011Fitim",
        text: "Devlet \u00FCniversitelerinde e\u011Fitim \u00FCcreti yok. Sadece \u20AC150-350 aras\u0131 d\u00F6nem harc\u0131 \u00F6denir.",
      },
      {
        title: "M\u00FChendislik G\u00FCc\u00FC",
        text: "BMW, Siemens, Bosch gibi dev \u015Firketlerin anavatan\u0131. M\u00FChendislik ve teknoloji e\u011Fitiminde d\u00FCnya lideri.",
      },
      {
        title: "\u0130ngilizce Programlar",
        text: "1.800\u2019den fazla \u0130ngilizce program. Almanca bilmeden de e\u011Fitime ba\u015Flamak m\u00FCmk\u00FCn.",
      },
      {
        title: "Mezuniyet Sonras\u0131",
        text: "18 ayl\u0131k i\u015F arama vizesi. Almanya\u2019da kal\u0131p kariyer yapma imkan\u0131 olduk\u00E7a y\u00FCksek.",
      },
    ],
    universities: [
      {
        title: "TU M\u00FCnchen",
        text: "Almanya\u2019n\u0131n en iyi teknik \u00FCniversitesi. M\u00FChendislik, bilgisayar bilimi ve do\u011Fa bilimlerinde d\u00FCnya \u00E7ap\u0131nda.",
      },
      {
        title: "Heidelberg \u00DCniversitesi",
        text: "Almanya\u2019n\u0131n en eski \u00FCniversitesi (1386). T\u0131p, do\u011Fa bilimleri ve be\u015Feri bilimlerde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Humboldt \u00DCniversitesi",
        text: "Berlin\u2019in k\u00F6kl\u00FC \u00FCniversitesi. 29 Nobel \u00F6d\u00FCll\u00FC mezun. Sosyal bilimler ve sanatta \u00F6nc\u00FC.",
      },
      {
        title: "LMU M\u00FCnchen",
        text: "Almanya\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitelerinden. Geni\u015F program yelpazesi ve g\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma altyap\u0131s\u0131.",
      },
      {
        title: "RWTH Aachen",
        text: "M\u00FChendislik ve teknoloji odakl\u0131. Avrupa\u2019n\u0131n en b\u00FCy\u00FCk teknik \u00FCniversitelerinden biri.",
      },
      {
        title: "FU Berlin",
        text: "Uluslararas\u0131 ili\u015Fkiler, siyaset bilimi ve Avrupa \u00E7al\u0131\u015Fmalar\u0131nda Berlin\u2019in g\u00FC\u00E7l\u00FC \u00FCniversitesi.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "Devlet \u00FCniversitelerinde \u00FCcretsiz. Sadece d\u00F6nem harc\u0131 \u20AC150-350. Baden-W\u00FCrttemberg eyaletinde \u20AC1.500/d\u00F6nem.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC850 \u2013 \u20AC1.200 / ay. Berlin, M\u00FCnih gibi b\u00FCy\u00FCk \u015Fehirlerde daha y\u00FCksek, k\u00FC\u00E7\u00FCk \u015Fehirlerde uygun.",
      },
      {
        title: "DAAD Burslar\u0131",
        text: "Alman Akademik De\u011Fi\u015Fim Servisi\u2019nin kapsaml\u0131 burs program\u0131. Ayl\u0131k \u20AC934 (YL) veya \u20AC1.200 (doktora).",
      },
      {
        title: "Erasmus+",
        text: "AB de\u011Fi\u015Fim program\u0131 ile Almanya\u2019da 1-2 d\u00F6nem e\u011Fitim alma f\u0131rsat\u0131. Ek burs deste\u011Fi mevcut.",
      },
    ],
    heroPoints: [
      "\u00DCcretsiz Devlet \u00DCniversitesi",
      "DAAD Burslar\u0131",
      "G\u00FC\u00E7l\u00FC \u0130\u015F Piyasas\u0131",
    ],
    ctaTitle:
      "Almanya\u2019da \u00FCcretsiz e\u011Fitim f\u0131rsat\u0131n\u0131 de\u011Ferlendirin",
    ctaText:
      "Study Global ile Almanya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/germany.jpg",
  },

  // 13. Kanada
  {
    slug: "kanada",
    name: "Kanada",
    flag: "\u{1F1E8}\u{1F1E6}",
    eyebrow: "Kuzey Amerika",
    heroText:
      "Kanada, \u00E7ok k\u00FClt\u00FCrl\u00FC kamp\u00FCsleri, y\u00FCksek ya\u015Fam kalitesi ve mezuniyet sonras\u0131 \u00E7al\u0131\u015Fma izni (PGWP) ile d\u00FCnyan\u0131n en pop\u00FCler e\u011Fitim destinasyonlar\u0131ndan biri.",
    region: "north-america",
    premium: true,
    metrics: [
      { value: "96", label: "\u00DCniversite" },
      { value: "CAD 20-50K", label: "Y\u0131ll\u0131k \u00DCcret" },
      { value: "3 Y\u0131l", label: "PGWP \u0130\u015F \u0130zni" },
      { value: "Top 30", label: "Toronto & UBC" },
    ],
    benefits: [
      {
        title: "PGWP \u0130\u015F \u0130zni",
        text: "Mezuniyet sonras\u0131 3 y\u0131la kadar \u00E7al\u0131\u015Fma izni. Kanada\u2019da kal\u0131c\u0131 oturma hakk\u0131 kazanma yolu.",
      },
      {
        title: "\u00C7ok K\u00FClt\u00FCrl\u00FC Toplum",
        text: "200\u2019den fazla etnik k\u00F6ken. D\u00FCnyan\u0131n en kapsay\u0131c\u0131 ve \u00E7ok k\u00FClt\u00FCrl\u00FC \u00FClkelerinden biri.",
      },
      {
        title: "G\u00FCvenli & Kaliteli",
        text: "D\u00FCnyan\u0131n en g\u00FCvenli ve en y\u00FCksek ya\u015Fam kalitesine sahip \u00FClkelerinden. Do\u011Fa ve \u015Fehir i\u00E7 i\u00E7e.",
      },
      {
        title: "\u0130ki Dilli Yap\u0131",
        text: "\u0130ngilizce ve Frans\u0131zca resmi diller. \u0130ki dilde e\u011Fitim ve kariyer imkan\u0131.",
      },
    ],
    universities: [
      {
        title: "University of Toronto",
        text: "Kanada\u2019n\u0131n en y\u00FCksek s\u0131ralamal\u0131 \u00FCniversitesi. T\u00FCm alanlarda d\u00FCnya \u00E7ap\u0131nda ara\u015Ft\u0131rma g\u00FCc\u00FC.",
      },
      {
        title: "UBC (Vancouver)",
        text: "Pasifik k\u0131y\u0131s\u0131nda, d\u00FCnyan\u0131n en g\u00FCzel kamp\u00FCslerinden. \u00C7evre bilimleri, m\u00FChendislik ve i\u015Fletmede g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "McGill (Montreal)",
        text: "Kanada\u2019n\u0131n \u201CHarvard\u201D\u0131. T\u0131p, hukuk ve m\u00FChendislik alanlar\u0131nda d\u00FCnya \u00E7ap\u0131nda tan\u0131n\u0131rl\u0131k.",
      },
      {
        title: "University of Waterloo",
        text: "Bilgisayar bilimi ve m\u00FChendislikte Kanada\u2019n\u0131n en g\u00FC\u00E7l\u00FC \u00FCniversitesi. Co-op programlar\u0131yla \u00FCnl\u00FC.",
      },
      {
        title: "University of Alberta",
        text: "AI ve makine \u00F6\u011Frenimi alanlar\u0131nda d\u00FCnya lideri. G\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma burslar\u0131.",
      },
      {
        title: "McMaster University",
        text: "T\u0131p e\u011Fitimi ve sa\u011Fl\u0131k bilimlerinde d\u00FCnya \u00E7ap\u0131nda tan\u0131nan yenilik\u00E7i \u00FCniversite.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "CAD $20.000-50.000/y\u0131l (~\u20AC13.000-33.000). Program ve \u00FCniversiteye g\u00F6re de\u011Fi\u015Fir.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "CAD $1.000-1.800/ay. Vancouver ve Toronto daha pahal\u0131, di\u011Fer \u015Fehirler uygun.",
      },
      {
        title: "Burslar",
        text: "Vanier Scholarships, \u00FCniversite merit burslar\u0131 ve eyalet bazl\u0131 destek programlar\u0131.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130zni",
        text: "E\u011Fitim s\u00FCresince haftada 20 saat \u00E7al\u0131\u015Fma hakk\u0131. Tatillerde tam zamanl\u0131.",
      },
    ],
    heroPoints: [
      "PGWP \u0130\u015F \u0130zni",
      "\u00C7ok K\u00FClt\u00FCrl\u00FC",
      "Y\u00FCksek Ya\u015Fam Kalitesi",
    ],
    ctaTitle:
      "Kanada\u2019da e\u011Fitim ve kariyer f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Kanada \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/canada.jpg",
  },

  // 14. Amerika
  {
    slug: "amerika",
    name: "Amerika",
    flag: "\u{1F1FA}\u{1F1F8}",
    eyebrow: "Kuzey Amerika",
    heroText:
      "Amerika, 4.000\u2019den fazla \u00FCniversitesi, burs se\u00E7enekleri, kamp\u00FCs deneyimi ve esnek akademik yap\u0131s\u0131yla d\u00FCnyan\u0131n en pop\u00FCler e\u011Fitim destinasyonu.",
    region: "north-america",
    premium: true,
    metrics: [
      { value: "4.000+", label: "\u00DCniversite" },
      { value: "$20-60K", label: "Y\u0131ll\u0131k \u00DCcret" },
      {
        value: "OPT",
        label: "Mezuniyet Sonras\u0131 \u0130\u015F",
      },
      { value: "Top 5", label: "MIT \u2022 Stanford \u2022 Harvard" },
    ],
    benefits: [
      {
        title: "Akademik \u00C7e\u015Fitlilik",
        text: "4.000+ \u00FCniversite, y\u00FCzlerce program. Liberal arts yap\u0131s\u0131 ile b\u00F6l\u00FCm de\u011Fi\u015Ftirme esnekli\u011Fi.",
      },
      {
        title: "Ara\u015Ft\u0131rma G\u00FCc\u00FC",
        text: "D\u00FCnya s\u0131ralamalar\u0131nda ilk 10\u2019un \u00E7o\u011Fu Amerikan \u00FCniversitesi. NASA, NIH ve Silicon Valley ba\u011Flant\u0131lar\u0131.",
      },
      {
        title: "Kamp\u00FCs Deneyimi",
        text: "Benzersiz kamp\u00FCs k\u00FClt\u00FCr\u00FC: spor, kul\u00FCpler, karde\u015Flik/k\u0131z karde\u015Flik gruplar\u0131 ve networking.",
      },
      {
        title: "OPT Program\u0131",
        text: "Mezuniyet sonras\u0131 1 y\u0131l (STEM alanlar\u0131nda 3 y\u0131l) i\u015F deneyimi kazanma hakk\u0131.",
      },
    ],
    universities: [
      {
        title: "MIT",
        text: "Teknoloji ve m\u00FChendislikte d\u00FCnyan\u0131n 1 numaras\u0131. Bilgisayar bilimi, AI ve giri\u015Fimcilikte zirve.",
      },
      {
        title: "Stanford University",
        text: "Silicon Valley\u2019nin kalbi. Google, Netflix ve Snapchat\u2019in kurucular\u0131 buradan mezun.",
      },
      {
        title: "Harvard University",
        text: "D\u00FCnyan\u0131n en prestijli \u00FCniversitesi. Hukuk, t\u0131p, i\u015Fletme ve kamu politikas\u0131nda tart\u0131\u015Fmas\u0131z lider.",
      },
      {
        title: "UCLA",
        text: "Kaliforniya\u2019n\u0131n en pop\u00FCler devlet \u00FCniversitesi. Film, t\u0131p ve m\u00FChendislikte g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "UC Berkeley",
        text: "Devlet \u00FCniversiteleri aras\u0131nda en y\u00FCksek s\u0131ralamal\u0131. Bilgisayar bilimi ve fizik alanlar\u0131nda d\u00FCnya lideri.",
      },
      {
        title: "Columbia University",
        text: "New York\u2019ta Ivy League \u00FCniversitesi. Gazetecilik, hukuk ve uluslararas\u0131 ili\u015Fkilerde g\u00FC\u00E7l\u00FC.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "$20.000-60.000/y\u0131l. Devlet \u00FCniversiteleri daha uygun, Ivy League okullar\u0131 \u00FCst aral\u0131kta.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "$1.000-2.500/ay. New York ve San Francisco pahal\u0131, g\u00FCney ve orta eyaletler uygun.",
      },
      {
        title: "Burslar",
        text: "Fulbright, \u00FCniversite merit burslar\u0131, need-based burslar ve atletik burslar. Geni\u015F se\u00E7enek.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130zni",
        text: "Kamp\u00FCste haftada 20 saat \u00E7al\u0131\u015Fma hakk\u0131. Mezuniyet sonras\u0131 OPT (1-3 y\u0131l i\u015F deneyimi).",
      },
    ],
    heroPoints: [
      "4.000+ \u00DCniversite",
      "Geni\u015F Burs Se\u00E7enekleri",
      "OPT \u0130\u015F Deneyimi",
    ],
    ctaTitle:
      "Amerika\u2019da e\u011Fitim hayalinizi ger\u00E7e\u011Fe d\u00F6n\u00FC\u015Ft\u00FCr\u00FCn",
    ctaText:
      "Study Global ile Amerika \u00FCniversitelerine ba\u015Fvuru ve burs s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/america.jpg",
  },

  // 15. Hollanda
  {
    slug: "hollanda",
    name: "Hollanda",
    flag: "\u{1F1F3}\u{1F1F1}",
    eyebrow: "Bat\u0131 Avrupa",
    heroText:
      "Hollanda, \u0130ngilizce lisans ve y\u00FCksek lisans programlar\u0131yla Avrupa\u2019da en pop\u00FCler e\u011Fitim rotalar\u0131ndan biri. Yenilik\u00E7i e\u011Fitim yakla\u015F\u0131m\u0131 ve g\u00FC\u00E7l\u00FC uluslararas\u0131 ba\u011Flant\u0131lar.",
    region: "europe",
    premium: false,
    metrics: [
      {
        value: "13",
        label: "Ara\u015Ft\u0131rma \u00DCniversitesi",
      },
      { value: "\u20AC8-20K", label: "Y\u0131ll\u0131k \u00DCcret" },
      { value: "2.100+", label: "\u0130ngilizce Program" },
      {
        value: "%95",
        label: "\u0130ngilizce Konu\u015Fma Oran\u0131",
      },
    ],
    benefits: [
      {
        title: "\u0130ngilizce E\u011Fitim",
        text: "2.100\u2019den fazla \u0130ngilizce program. Hollandaca bilmeden e\u011Fitime ba\u015Flamak m\u00FCmk\u00FCn. Halk %95 \u0130ngilizce konu\u015Fur.",
      },
      {
        title: "Yenilik\u00E7i Yakla\u015F\u0131m",
        text: "Problem tabanl\u0131 \u00F6\u011Frenme (PBL) metodu. Grup \u00E7al\u0131\u015Fmas\u0131 ve pratik uygulamalara dayal\u0131 e\u011Fitim.",
      },
      {
        title: "Merkezi Konum",
        text: "Londra, Paris, Br\u00FCksel ve K\u00F6ln\u2019e 2-3 saat. Avrupa\u2019n\u0131n merkezinde, kolay seyahat imkan\u0131.",
      },
      {
        title: "Orientation Year",
        text: "Mezuniyet sonras\u0131 1 y\u0131l i\u015F arama vizesi. Hollanda\u2019da kariyer yapma f\u0131rsat\u0131.",
      },
    ],
    universities: [
      {
        title: "University of Amsterdam",
        text: "Hollanda\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitesi. \u0130leti\u015Fim, sosyal bilimler ve i\u015Fletme alanlar\u0131nda d\u00FCnya \u00E7ap\u0131nda.",
      },
      {
        title: "TU Delft",
        text: "M\u00FChendislik ve teknolojide Avrupa\u2019n\u0131n en g\u00FC\u00E7l\u00FC \u00FCniversitelerinden. Mimarl\u0131k ve havac\u0131l\u0131kta zirve.",
      },
      {
        title: "Leiden University",
        text: "Hollanda\u2019n\u0131n en eski \u00FCniversitesi (1575). Hukuk, siyaset ve be\u015Feri bilimlerde g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Erasmus Rotterdam",
        text: "\u0130\u015Fletme ve ekonomi alan\u0131nda Avrupa\u2019n\u0131n en iyi \u00FCniversitelerinden. RSM d\u00FCnya \u00E7ap\u0131nda tan\u0131n\u0131r.",
      },
      {
        title: "Utrecht University",
        text: "Geni\u015F program yelpazesi, g\u00FC\u00E7l\u00FC ara\u015Ft\u0131rma altyap\u0131s\u0131 ve \u00F6\u011Frenci dostu \u015Fehir.",
      },
      {
        title: "Wageningen University",
        text: "Tar\u0131m, g\u0131da bilimi ve \u00E7evre alanlar\u0131nda d\u00FCnya 1 numaras\u0131.",
      },
    ],
    costs: [
      {
        title: "E\u011Fitim \u00DCcreti",
        text: "AB d\u0131\u015F\u0131 \u00F6\u011Frenciler: \u20AC8.000-\u20AC20.000/y\u0131l. T\u0131p ve MBA programlar\u0131 daha y\u00FCksek olabilir.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC800-\u20AC1.200/ay. Amsterdam daha pahal\u0131, Eindhoven ve Groningen daha uygun.",
      },
      {
        title: "Holland Scholarship",
        text: "AB d\u0131\u015F\u0131 \u00F6\u011Frencilere \u20AC5.000 burs. Bir\u00E7ok \u00FCniversitenin kendi burs programlar\u0131 da mevcut.",
      },
      {
        title: "\u00C7al\u0131\u015Fma \u0130zni",
        text: "\u00D6\u011Frenciler haftada 16 saat veya tam zamanl\u0131 (Haziran-A\u011Fustos) \u00E7al\u0131\u015Fabilir.",
      },
    ],
    heroPoints: [
      "2.100+ \u0130ngilizce Program",
      "Holland Scholarship",
      "Avrupa Ba\u011Flant\u0131lar\u0131",
    ],
    ctaTitle:
      "Hollanda\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile Hollanda \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/holland.jpg",
  },

  // 16. İtalya
  {
    slug: "italya",
    name: "\u0130talya",
    flag: "\u{1F1EE}\u{1F1F9}",
    eyebrow: "G\u00FCney Avrupa",
    heroText:
      "\u0130talya, tasar\u0131m, sanat, mimarl\u0131k ve i\u015Fletme alanlar\u0131nda g\u00FC\u00E7l\u00FC akademik k\u00FClt\u00FCr\u00FC, uygun e\u011Fitim \u00FCcretleri ve e\u015Fsiz ya\u015Fam deneyimiyle \u00F6ne \u00E7\u0131kar.",
    region: "europe",
    premium: false,
    metrics: [
      { value: "90+", label: "\u00DCniversite" },
      {
        value: "\u20AC900-4K",
        label: "Devlet \u00DCni. \u00DCcreti",
      },
      { value: "Bocconi", label: "D\u00FCnya Top \u0130\u015Fletme" },
      { value: "Polimi", label: "Tasar\u0131m #1" },
    ],
    benefits: [
      {
        title: "Tasar\u0131m & Moda",
        text: "Milano d\u00FCnya moda ba\u015Fkenti. Polimi tasar\u0131m alan\u0131nda d\u00FCnya 1 numaras\u0131. Gucci, Prada, Armani\u2019nin anavatan\u0131.",
      },
      {
        title: "Uygun \u00DCcretler",
        text: "Devlet \u00FCniversitelerinde \u20AC900-\u20AC4.000/y\u0131l. Gelire dayal\u0131 \u00FCcret sistemi ile daha da d\u00FC\u015F\u00FCk olabilir.",
      },
      {
        title: "K\u00FClt\u00FCrel Miras",
        text: "UNESCO D\u00FCnya Miras\u0131 listesinde en \u00E7ok esere sahip \u00FClke. Sanat, tarih ve mutfak cenneti.",
      },
      {
        title: "\u0130ngilizce Programlar",
        text: "\u00D6zellikle y\u00FCksek lisansta artan \u0130ngilizce program say\u0131s\u0131. Bocconi tamamen \u0130ngilizce e\u011Fitim sunar.",
      },
    ],
    universities: [
      {
        title: "Bocconi University",
        text: "Milano\u2019da. \u0130\u015Fletme ve ekonomi alan\u0131nda Avrupa\u2019n\u0131n en iyi \u00FCniversitelerinden. Tamamen \u0130ngilizce.",
      },
      {
        title: "Politecnico di Milano",
        text: "M\u00FChendislik, mimarl\u0131k ve tasar\u0131m alan\u0131nda \u0130talya\u2019n\u0131n en iyi teknik \u00FCniversitesi.",
      },
      {
        title: "Bologna \u00DCniversitesi",
        text: "D\u00FCnyan\u0131n en eski \u00FCniversitesi (1088). Hukuk, t\u0131p ve be\u015Feri bilimlerde k\u00F6kl\u00FC gelenek.",
      },
      {
        title: "Sapienza (Roma)",
        text: "Avrupa\u2019n\u0131n en b\u00FCy\u00FCk \u00FCniversitelerinden. Arkeoloji, fizik ve m\u00FChendislikte g\u00FC\u00E7l\u00FC.",
      },
      {
        title: "Politecnico di Torino",
        text: "Otomotiv m\u00FChendisli\u011Fi ve havac\u0131l\u0131kta \u0130talya\u2019n\u0131n g\u00FC\u00E7l\u00FC teknik \u00FCniversitesi. Fiat/Stellantis ba\u011Flant\u0131lar\u0131.",
      },
      {
        title: "Istituto Marangoni",
        text: "Moda tasar\u0131m\u0131 ve l\u00FCks marka y\u00F6netimi alan\u0131nda d\u00FCnyan\u0131n en prestijli okullar\u0131ndan.",
      },
    ],
    costs: [
      {
        title: "Devlet \u00DCniversiteleri",
        text: "\u20AC900-\u20AC4.000/y\u0131l. Gelire dayal\u0131 \u00FCcretlendirme (ISEE) ile d\u00FC\u015F\u00FCk gelirli \u00F6\u011Frencilere indirim.",
      },
      {
        title: "\u00D6zel \u00DCniversiteler",
        text: "\u20AC5.000-\u20AC25.000/y\u0131l. Bocconi ve tasar\u0131m okullar\u0131 \u00FCst aral\u0131kta.",
      },
      {
        title: "Ya\u015Fam Maliyeti",
        text: "\u20AC700-\u20AC1.100/ay. Milano en pahal\u0131, g\u00FCney \u0130talya \u00E7ok daha uygun.",
      },
      {
        title: "Burslar",
        text: "\u0130talya h\u00FCk\u00FCmeti burslar\u0131, DSU b\u00F6lgesel burslar ve \u00FCniversite merit burslar\u0131.",
      },
    ],
    heroPoints: [
      "Tasar\u0131m & Moda Merkezi",
      "Uygun \u00DCcretler",
      "Zengin K\u00FClt\u00FCr",
    ],
    ctaTitle:
      "\u0130talya\u2019da e\u011Fitim f\u0131rsatlar\u0131n\u0131 ke\u015Ffedin",
    ctaText:
      "Study Global ile \u0130talya \u00FCniversitelerine ba\u015Fvuru s\u00FCrecinizi birlikte planlayal\u0131m.",
    image: "/assets/countries/italy.jpg",
  },
];
