export interface ServiceSection {
  type: "benefits" | "dark-benefits" | "spotlights" | "steps";
  eyebrow: string;
  title: string;
  items: { title: string; text: string }[];
}

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  heroText: string;
  heroPoints: string[];
  metrics: { value: string; label: string }[];
  sections: ServiceSection[];
  ctaTitle: string;
  ctaText: string;
}

export const services: Service[] = [
  // 1. ingiltere-basvuru
  {
    slug: "ingiltere-basvuru",
    title: "İngiltere Üniversitelerine Başvuru",
    eyebrow: "İngiltere'de Eğitim",
    heroText:
      "İngiltere Üniversitelerine başvuru için ücretsiz danışmanlık hizmeti alın. Lisans ve Yüksek Lisans bölümlerine nasıl başvurulduğu, son başvuru tarihleri ve dosya hazırlığı gibi birçok konuda yanınızdayız.",
    heroPoints: ["UCAS Yetkili Merkez", "142 Üniversite", "Ücretsiz Hizmet"],
    metrics: [
      { value: "142", label: "Üniversite" },
      { value: "5", label: "UCAS Tercih Hakkı" },
      { value: "3 Yıl", label: "Lisans Süresi" },
      { value: "1 Yıl", label: "Yüksek Lisans" },
    ],
    sections: [
      {
        type: "steps",
        eyebrow: "Lisans Başvurusu",
        title: "UCAS Üzerinden Lisans Başvuru Süreci",
        items: [
          {
            title: "UCAS Hesabı Oluşturma",
            text: "UCAS web sitesi üzerinden hesabınızı oluşturun. En fazla 5 üniversite ve bölüm tercihi yapabilirsiniz.",
          },
          {
            title: "Personal Statement Yazımı",
            text: "Kendinizi, akademik hedeflerinizi ve motivasyonunuzu anlatan kişisel beyanınızı hazırlayın. Tüm tercihleriniz için tek bir Personal Statement yazılır.",
          },
          {
            title: "Referans Mektubu",
            text: "Okulunuzdan bir öğretmen veya danışmandan akademik referans mektubu alın. UCAS sistemi üzerinden yüklenir.",
          },
          {
            title: "Başvuru Gönderimi",
            text: "Tüm belgelerinizi tamamladıktan sonra başvurunuzu son tarihe kadar gönderin. Sonuçlar UCAS Track üzerinden takip edilir.",
          },
        ],
      },
      {
        type: "dark-benefits",
        eyebrow: "Yüksek Lisans",
        title: "Yüksek Lisans Başvuru Süreci",
        items: [
          {
            title: "Doğrudan Başvuru",
            text: "Yüksek lisans başvuruları UCAS yerine doğrudan üniversitenin kendi portalı üzerinden yapılır.",
          },
          {
            title: "Research Proposal",
            text: "Araştırma bazlı programlar için araştırma önerinizi hazırlamanız gerekir. Danışmanlarımız bu süreçte size yardımcı olur.",
          },
          {
            title: "Akademik Transkript",
            text: "Lisans eğitiminize ait not dökümü ve diploma İngilizce tercümesiyle birlikte sunulmalıdır.",
          },
          {
            title: "İngilizce Yeterlilik",
            text: "IELTS (minimum 6.0-7.0) veya eşdeğer İngilizce sınav sonucu gereklidir. Bazı okullar kendi sınavlarını kabul eder.",
          },
        ],
      },
      {
        type: "spotlights",
        eyebrow: "Takvim",
        title: "Başvuru Takvimi",
        items: [
          {
            title: "15 Ekim",
            text: "Oxford, Cambridge ve tıp/diş hekimliği/veterinerlik programları için son başvuru tarihi (18:00 UK saati).",
          },
          {
            title: "31 Ocak",
            text: "Çoğu lisans programı için UCAS son başvuru tarihi. Avrupa ve uluslararası öğrenciler dahil.",
          },
          {
            title: "30 Haziran",
            text: "Son başvuru tarihi. Bu tarihten sonra yapılan başvurular otomatik olarak Clearing sürecine yönlendirilir.",
          },
        ],
      },
      {
        type: "benefits",
        eyebrow: "Belgeler",
        title: "Gerekli Başvuru Belgeleri",
        items: [
          {
            title: "Transkript & Diploma",
            text: "Lise veya lisans not dökümü ve diploma, İngilizce tercümeli ve noter onaylı.",
          },
          {
            title: "Personal Statement",
            text: "Akademik motivasyonunuzu ve hedeflerinizi anlatan 4.000 karakterlik kişisel beyan.",
          },
          {
            title: "Referans Mektubu",
            text: "Akademik referansınız — öğretmen veya akademisyenden alınmış değerlendirme mektubu.",
          },
          {
            title: "IELTS / OET Sonucu",
            text: "İngilizce yeterlilik belgesi. Program ve üniversiteye göre minimum puan gereksinimleri değişir.",
          },
        ],
      },
    ],
    ctaTitle: "İngiltere üniversitelerine başvurunuzu birlikte planlayalım",
    ctaText:
      "Study Global danışmanları UCAS sürecinden belge hazırlığına kadar tüm aşamalarda yanınızda. Danışmanlık hizmetimiz ücretsizdir.",
  },

  // 2. iskocya-egitim
  {
    slug: "iskocya-egitim",
    title: "İskoçya'da Üniversite Eğitimi",
    eyebrow: "Birleşik Krallık",
    heroText:
      "İskoçya, 19 yüksek öğretim kurumunu bünyesinde barındırarak aralarından seçim yapabilmenize fırsat tanımaktadır. İskoç üniversiteleri İngiltere genelinde en yüksek öğrenci memnuniyetine sahip kurumlardır.",
    heroPoints: [
      "19 Üniversite",
      "En Yüksek Öğrenci Memnuniyeti",
      "Araştırma Odaklı",
    ],
    metrics: [
      { value: "19", label: "Üniversite" },
      { value: "1 Saat", label: "Londra'ya Uçuş" },
      { value: "90 dk", label: "Paris'e Uçuş" },
      { value: "7", label: "Ana Şehir" },
    ],
    sections: [
      {
        type: "benefits",
        eyebrow: "Neden İskoçya?",
        title: "İskoçya'da Eğitimin Avantajları",
        items: [
          {
            title: "Araştırma Gücü",
            text: "MRI tarayıcısı ve laparoskopik cerrahi gibi çığır açan buluşlar İskoç üniversitelerindeki araştırmalardan doğmuştur.",
          },
          {
            title: "Öğrenci Memnuniyeti",
            text: "İskoç üniversiteleri Birleşik Krallık genelinde en yüksek öğrenci memnuniyet oranlarına sahiptir.",
          },
          {
            title: "Merkezi Konum",
            text: "Londra'ya 1 saat, Paris'e 90 dakika uçuş mesafesinde. Avrupa'nın merkezine kolay erişim.",
          },
          {
            title: "Kültür & Yaşam",
            text: "Galeri ve müzelerin çoğu ücretsizdir. Zengin tarih, doğa ve canlı şehir hayatı bir arada.",
          },
        ],
      },
      {
        type: "spotlights",
        eyebrow: "Üniversiteler",
        title: "Öne Çıkan İskoç Üniversiteleri",
        items: [
          {
            title: "University of Edinburgh",
            text: "Dünya sıralamalarında sürekli üst sıralarda yer alan, araştırma odaklı köklü bir üniversite.",
          },
          {
            title: "University of St Andrews",
            text: "İskoçya'nın en eski üniversitesi. Küçük sınıf yapısı ve güçlü akademik gelenek.",
          },
          {
            title: "University of Glasgow",
            text: "1451 yılında kurulan, mühendislik ve tıp alanlarında güçlü bir araştırma üniversitesi.",
          },
          {
            title: "University of Aberdeen",
            text: "Enerji, çevre ve tıp bilimlerinde uzmanlaşmış, 500 yılı aşkın geçmişe sahip kurum.",
          },
          {
            title: "University of Dundee",
            text: "Yaşam bilimleri ve tasarım alanlarında İskoçya'nın en yenilikçi üniversitelerinden biri.",
          },
          {
            title: "University of Stirling",
            text: "Eğitim, spor bilimleri ve su kültürü alanlarında uluslararası tanınırlığa sahip.",
          },
        ],
      },
      {
        type: "dark-benefits",
        eyebrow: "Şehirler",
        title: "İskoçya'da Yaşam",
        items: [
          {
            title: "Edinburgh",
            text: "Başkent. Festival şehri, tarihi mimari ve canlı öğrenci hayatı.",
          },
          {
            title: "Glasgow",
            text: "İskoçya'nın en büyük şehri. Müzik, sanat ve gece hayatıyla ünlü.",
          },
          {
            title: "Aberdeen",
            text: "Enerji sektörünün merkezi. Kariyer odaklı öğrenciler için güçlü staj imkanları.",
          },
          {
            title: "Dundee",
            text: "Oyun tasarımı ve biyomedikal araştırmaların merkezi. Uygun yaşam maliyeti.",
          },
        ],
      },
      {
        type: "spotlights",
        eyebrow: "Burslar",
        title: "İskoçya'da Burs Fırsatları",
        items: [
          {
            title: "Chevening Scholarships",
            text: "İngiltere hükümetinin prestijli burs programı. Yüksek lisans öğrencilerine tam burs.",
          },
          {
            title: "Saltire Scholarships",
            text: "İskoçya hükümetinin uluslararası öğrencilere sunduğu burs. Teknoloji, yaratıcı endüstriler ve sağlık alanları.",
          },
          {
            title: "Commonwealth Scholarships",
            text: "Commonwealth ülkeleri vatandaşlarına yönelik kapsamlı burs programı.",
          },
        ],
      },
    ],
    ctaTitle: "İskoçya'da eğitim fırsatlarını keşfedin",
    ctaText:
      "Study Global ile İskoçya üniversitelerine başvuru sürecinizi birlikte planlayalım. Danışmanlık hizmetimiz ücretsizdir.",
  },

  // 3. irlanda-egitim
  {
    slug: "irlanda-egitim",
    title: "İrlanda'da Üniversite Eğitimi",
    eyebrow: "Avrupa'da Eğitim",
    heroText:
      "İrlanda, Türk öğrenciler arasında en popüler tercihlerden biri. Tarihi şehirler, eşsiz doğa manzaraları ve yüksek kaliteli eğitim sunan İrlanda, Avrupa'nın batı ucunda bir AB üyesi ülke olarak öne çıkıyor.",
    heroPoints: ["160 Ülkeden Öğrenci", "Avro Bölgesi", "İngilizce Eğitim"],
    metrics: [
      { value: "35.000+", label: "Uluslararası Öğrenci" },
      { value: "160", label: "Ülkeden Öğrenci" },
      { value: "%1", label: "Dünya Araştırma Sıralaması" },
      { value: "Google", label: "Microsoft \u2022 Medtronic" },
    ],
    sections: [
      {
        type: "benefits",
        eyebrow: "Neden İrlanda?",
        title: "İrlanda'da Eğitimin Avantajları",
        items: [
          {
            title: "İngilizce Eğitim",
            text: "Avro bölgesinde İngilizce eğitim veren tek ülke. Dil bariyeri olmadan Avrupa deneyimi.",
          },
          {
            title: "Teknoloji Merkezi",
            text: "Google, Microsoft, Medtronic gibi dev şirketlerin Avrupa merkezleri İrlanda'da. Staj ve kariyer fırsatları.",
          },
          {
            title: "Araştırma Kalitesi",
            text: "İrlanda üniversiteleri dünya genelinde araştırma sıralamalarında ilk %1'de yer almaktadır.",
          },
          {
            title: "Dost Canlısı Kültür",
            text: "Lonely Planet tarafından \"dünyanın en dost canlısı ülkesi\" seçilen İrlanda, sıcak bir ortam sunar.",
          },
        ],
      },
      {
        type: "dark-benefits",
        eyebrow: "Ücretler",
        title: "Eğitim Maliyetleri",
        items: [
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
          {
            title: "Y. Lisans \u2014 \u0130\u015Fletme",
            text: "\u20AC10.500 \u2013 \u20AC30.000 / y\u0131l",
          },
          {
            title: "Y. Lisans \u2014 T\u0131p",
            text: "\u20AC12.000 \u2013 \u20AC52.000 / y\u0131l",
          },
        ],
      },
      {
        type: "spotlights",
        eyebrow: "Üniversiteler",
        title: "Öne Çıkan İrlanda Üniversiteleri",
        items: [
          {
            title: "Trinity College Dublin",
            text: "1592 yılında kurulan İrlanda'nın en prestijli üniversitesi. Dünya sıralamalarında sürekli üst sıralarda.",
          },
          {
            title: "University College Dublin",
            text: "İrlanda'nın en büyük üniversitesi. İşletme, mühendislik ve sağlık bilimlerinde güçlü programlar.",
          },
          {
            title: "University of Limerick",
            text: "Staj programları ve endüstri bağlantılarıyla bilinen, kariyer odaklı bir üniversite.",
          },
          {
            title: "NUI Galway",
            text: "Batı İrlanda'nın en büyük üniversitesi. Deniz bilimleri ve biyomedikal mühendisliğinde güçlü.",
          },
          {
            title: "Dublin City University",
            text: "Teknoloji, iletişim ve işletme alanlarında yenilikçi programlar sunan modern bir üniversite.",
          },
          {
            title: "University College Cork",
            text: "Gıda bilimi, eczacılık ve çevre bilimleri alanlarında uluslararası tanınırlığa sahip.",
          },
        ],
      },
    ],
    ctaTitle: "İrlanda'da eğitim fırsatlarını keşfedin",
    ctaText:
      "Study Global ile İrlanda üniversitelerine başvuru sürecinizi birlikte planlayalım. Danışmanlık hizmetimiz ücretsizdir.",
  },

  // 4. basvuru-belgeleri
  {
    slug: "basvuru-belgeleri",
    title: "Başvuru Belgeleri Nelerdir?",
    eyebrow: "Başvuru Rehberi",
    heroText:
      "İngiltere üniversitelerine başvururken kullanmanız gereken belgeler önemlidir. Bu belgelerin başında transkript, diploma ve niyet mektubunuz gelir. Doğru hazırlanmış belgeler kabul şansınızı önemli ölçüde artırır.",
    heroPoints: ["Belge Kontrolü", "Tercüme Desteği", "Ücretsiz Rehberlik"],
    metrics: [
      { value: "4.000", label: "Karakter PS Limiti" },
      { value: "2-3 Ay", label: "Hazırlık Süresi" },
      { value: "6 Ay", label: "Pasaport Geçerliliği" },
      { value: "Ücretsiz", label: "Danışmanlık" },
    ],
    sections: [
      {
        type: "benefits",
        eyebrow: "Temel Belgeler",
        title: "Lisans Başvurusu İçin Gerekli Belgeler",
        items: [
          {
            title: "Transkript",
            text: "Lise not dökümünüz İngilizce tercümeli ve noter onaylı olmalıdır. Son sınıf öğrencileri güncel transkript sunar.",
          },
          {
            title: "Diploma / Geçici Mezuniyet",
            text: "Lise diplomanız veya geçici mezuniyet belgeniz İngilizce tercümeli olarak gereklidir.",
          },
          {
            title: "Personal Statement",
            text: "Akademik motivasyonunuzu, hedeflerinizi ve neden bu bölümü seçtiğinizi anlatan 4.000 karakterlik kişisel beyan.",
          },
          {
            title: "Referans Mektubu",
            text: "Okulunuzdan bir öğretmen veya rehber öğretmenden alınmış akademik değerlendirme mektubu.",
          },
        ],
      },
      {
        type: "dark-benefits",
        eyebrow: "Ek Belgeler",
        title: "Yüksek Lisans ve Doktora İçin Ek Belgeler",
        items: [
          {
            title: "IELTS / OET Sonucu",
            text: "İngilizce yeterlilik belgesi. Programlara göre minimum puan gereksinimleri değişir (genellikle IELTS 6.0-7.0).",
          },
          {
            title: "CV / Özgeçmiş",
            text: "Akademik ve profesyonel deneyimlerinizi özetleyen İngilizce CV. Yüksek lisans başvurularında gereklidir.",
          },
          {
            title: "Research Proposal",
            text: "Doktora başvurularında araştırma öneriniz gereklidir. Konunuz, metodolojiniz ve beklenen çıktılarınızı içerir.",
          },
          {
            title: "Pasaport",
            text: "Geçerli pasaportunuzun taranmış kopyası. Vize başvurusu için en az 6 ay geçerlilik süresi olmalıdır.",
          },
        ],
      },
      {
        type: "spotlights",
        eyebrow: "İpuçları",
        title: "Belge Hazırlama İpuçları",
        items: [
          {
            title: "Erken Hazırlık",
            text: "Belge hazırlığına başvuru tarihinden en az 2-3 ay önce başlayın. Tercüme ve noter işlemleri zaman alabilir.",
          },
          {
            title: "Profesyonel Tercüme",
            text: "Yeminli tercüman tarafından yapılmış ve noter onaylı tercümeler kullanın. Kendi çevirileriniz kabul edilmez.",
          },
          {
            title: "Personal Statement Desteği",
            text: "Kişisel beyanınızı birkaç kez gözden geçirin. Danışmanlarımız taslak inceleme ve geri bildirim desteği sunar.",
          },
        ],
      },
    ],
    ctaTitle: "Belgelerinizi eksiksiz hazırlayın",
    ctaText:
      "Study Global danışmanları belge kontrolü, tercüme rehberliği ve Personal Statement desteği ile yanınızda.",
  },

  // 5. ucas-basvuru
  {
    slug: "ucas-basvuru",
    title: "UCAS Başvuru Desteği",
    eyebrow: "İngiltere Lisans Başvurusu",
    heroText:
      "İngiltere'de lisans eğitimi başvuruları UCAS (Universities and Colleges Admissions Service) sistemi üzerinden gerçekleşir. Deneyimli kadromuz ile UCAS başvuru sürecinizi en verimli şekilde yönetiyoruz.",
    heroPoints: ["UCAS Yetkili Merkez", "5 Tercih Hakkı", "Ücretsiz Destek"],
    metrics: [
      { value: "142", label: "Üniversite" },
      { value: "5", label: "Tercih Hakkı" },
      { value: "4.000", label: "Karakter PS Limiti" },
      { value: "Ücretsiz", label: "Danışmanlık" },
    ],
    sections: [
      {
        type: "benefits",
        eyebrow: "UCAS Nedir?",
        title: "UCAS Başvuru Sistemi",
        items: [
          {
            title: "Merkezi Sistem",
            text: "Tüm İngiltere üniversiteleri için tek başvuru noktası. 5 tercih hakkınız var.",
          },
          {
            title: "Personal Statement",
            text: "Tüm tercihleriniz için tek bir kişisel beyan yazarsınız. 4.000 karakter limiti.",
          },
          {
            title: "Referans Mektubu",
            text: "Öğretmeninizden veya danışmanınızdan akademik referans UCAS'a yüklenir.",
          },
          {
            title: "UCAS Track",
            text: "Başvuru sonuçlarınızı UCAS Track sistemi üzerinden canlı takip edebilirsiniz.",
          },
        ],
      },
      {
        type: "dark-benefits",
        eyebrow: "Önemli Tarihler",
        title: "UCAS Başvuru Takvimi",
        items: [
          {
            title: "15 Ekim \u2014 Oxford & Cambridge",
            text: "Oxford, Cambridge ve tıp/diş hekimliği/veterinerlik programları için son başvuru tarihi (18:00 UK saati).",
          },
          {
            title: "31 Ocak \u2014 Çoğu Program",
            text: "Avrupa ve uluslararası öğrenciler dahil çoğu lisans programı için son başvuru tarihi.",
          },
          {
            title: "30 Haziran \u2014 Son Tarih",
            text: "Son başvuru tarihi. Bu tarihten sonra yapılan başvurular otomatik olarak Clearing sürecine yönlendirilir.",
          },
          {
            title: "Eylül \u2014 Kayıt",
            text: "Kabul alan öğrenciler için üniversite kayıt dönemi ve oryantasyon programları başlar.",
          },
        ],
      },
      {
        type: "spotlights",
        eyebrow: "Destek",
        title: "UCAS Sürecinde Nasıl Yardımcı Oluyoruz?",
        items: [
          {
            title: "Üniversite Seçimi",
            text: "Akademik profilinize, bütçenize ve kariyer hedeflerinize uygun 5 tercihi birlikte belirliyoruz.",
          },
          {
            title: "Personal Statement",
            text: "Etkili ve dikkat çekici bir kişisel beyan yazmanızda rehberlik ediyoruz. Taslak inceleme ve düzeltme desteği.",
          },
          {
            title: "Başvuru Takibi",
            text: "Başvurunuzun her aşamasını takip ediyor, mülakatlar ve ek belgeler konusunda hazırlık desteği sunuyoruz.",
          },
        ],
      },
    ],
    ctaTitle: "UCAS başvurunuzu uzman desteğiyle tamamlayın",
    ctaText:
      "Study Global UCAS yetkili danışmanlık merkezi olarak başvuru sürecinizin her aşamasında yanınızdayız.",
  },

  // 6. ucas-clearing
  {
    slug: "ucas-clearing",
    title: "UCAS Clearing Başvuruları",
    eyebrow: "İkinci Şansınız",
    heroText:
      "UCAS üzerinden başvurularınıza bir cevap alamamış ya da istediğiniz okuldan kabul alamamış olabilirsiniz. UCAS Clearing size bir şans daha veriyor. Haziran-Eylül arası açık olan bu süreçte boş kontenjanlardan yerinizi alabilirsiniz.",
    heroPoints: ["Haziran - Eylül Arası", "Ücretsiz Destek", "Hızlı Kabul"],
    metrics: [
      { value: "Haziran", label: "Başlangıç" },
      { value: "Eylül", label: "Son Kabul" },
      { value: "1", label: "Tercih / Seferde" },
      { value: "Ücretsiz", label: "Danışmanlık" },
    ],
    sections: [
      {
        type: "spotlights",
        eyebrow: "Clearing Nedir?",
        title: "UCAS Clearing Hakkında",
        items: [
          {
            title: "Son Tarihi Kaçıranlar",
            text: "UCAS başvuru tarihlerini kaçırmış ve normal süreçte başvuramamış öğrenciler Clearing ile başvurabilir.",
          },
          {
            title: "Yeterli Puan Alamayanlar",
            text: "Sınav sonuçları beklenen düzeyde çıkmayan ve tekliflerini kaybeden öğrenciler bu süreçten yararlanabilir.",
          },
          {
            title: "Teklife Cevap Vermeyenler",
            text: "Aldığı tekliflere süresinde cevap vermemiş veya tüm tekliflerini reddetmiş öğrenciler Clearing'e dahil olabilir.",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "Süreç",
        title: "Clearing Başvuru Adımları",
        items: [
          {
            title: "Ücretsiz Danışmanlık",
            text: "Clearing seçeneklerini birlikte değerlendiriyoruz. Akademik profilinize uygun boş kontenjanlı programları belirliyoruz.",
          },
          {
            title: "Üniversiteyle İletişim",
            text: "Danışmanlarımız sizin adınıza üniversitelerle doğrudan iletişime geçiyor ve uygun programları araştırıyor.",
          },
          {
            title: "Clearing Üzerinden Kabul",
            text: "Üniversite ve bölümü birlikte inceledikten sonra Clearing kabul sürecini başlatıyoruz.",
          },
          {
            title: "Tercih Bildirimi",
            text: "UCAS sistemi üzerinden resmi tercihinizi bildiriyoruz. Bir seferde yalnızca bir tercih yapılabilir.",
          },
        ],
      },
      {
        type: "benefits",
        eyebrow: "Zaman Çizelgesi",
        title: "Clearing Takvimi",
        items: [
          {
            title: "Haziran",
            text: "Clearing süreci resmi olarak başlar. Erken hareket edenler en geniş seçeneklere ulaşır.",
          },
          {
            title: "Temmuz",
            text: "Üniversiteler boş kontenjanlarını açıklamaya başlar. Araştırma ve iletişim dönemi.",
          },
          {
            title: "Ağustos",
            text: "Sınav sonuçları açıklanır. En yoğun Clearing dönemi. Hızlı karar vermek gerekir.",
          },
          {
            title: "Eylül",
            text: "Son kabul tarihi. Üniversiteler kalan boş yerleri doldurur. Son fırsatlar dönemi.",
          },
        ],
      },
    ],
    ctaTitle: "Clearing ile İngiltere'de eğitim hayalinizden vazgeçmeyin",
    ctaText:
      "Study Global Clearing desteği ile boş kontenjanlardan yerinizi alın. Danışmanlık hizmetimiz Türk öğrenciler için ücretsizdir.",
  },
];
