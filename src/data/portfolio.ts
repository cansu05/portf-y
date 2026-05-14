import profileImage from "../assets/me-optimized.jpg";
import plannerProject from "../assets/planner-project.png";
import estateProject from "../assets/estate-project.png";
import scandletedProject from "../assets/scandleted-project.png";
import arekaProject from "../assets/areka-project.png";
import arekaDashboardProject from "../assets/areka-dashboard-project.png";
import verilandProject from "../assets/veriland-project.png";
import noteProject from "../assets/note-project.png";
import botanicProject from "../assets/botanic-project.png";
import tourShowProject from "../assets/tour.png";

import type {
  AboutCard,
  ContactMethod,
  ExperienceItem,
  NavItem,
  Project,
  SkillGroup,
  SocialLink,
} from "../types";

export const navItems: NavItem[] = [
  { label: "Hakkımda", href: "#about" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
];

export const socials: SocialLink[] = [
  { id: "github", href: "https://github.com/cansu05", name: "GitHub" },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/cansuugur/",
    name: "LinkedIn",
  },
  {
    id: "resume",
    href: "https://drive.google.com/file/d/18V0-mR0IY_uWV2Bz9CHb0vNVqrmR2ar4/view?usp=sharing",
    name: "CV",
  },
];

export const heroContent = {
  eyebrow: "Frontend Developer",
  title:
    "Kullanıcı odaklı, performanslı ve ölçeklenebilir arayüzler geliştiriyorum.",
  description:
    "React ekosistemiyle dashboard, kurumsal panel ve ürün odaklı deneyimler geliştiriyor; tasarım ve geliştirme süreçlerini birlikte düşünen bir yaklaşım benimsiyorum.",
  primaryCta: { label: "Projeleri İncele", href: "#projects" },
  secondaryCta: { label: "İletişime Geç", href: "#contact" },
  stats: [
    { label: "Yıl Deneyim", value: "3+" },
    { label: "Canlı Proje", value: "10" },
    { label: "Odak", value: "Frontend" },
  ],
  image: profileImage,
};

export const aboutContent = {
  intro:
    "Merhaba, ben kullanıcı odaklı ve performanslı web uygulamaları geliştiren bir Frontend Developer’ım.",
  details: [
    "React ve Next.js ekosistemiyle çalışarak dashboard’lar, kurumsal paneller ve ürün odaklı arayüzler tasarlıyor ve geliştiriyorum.",
    "Profesyonel deneyimimde, tasarımın koda dönüştürülmesinden bileşen mimarisinin kurulmasına ve backend entegrasyonlarına kadar ürün geliştirme sürecinin birçok aşamasında aktif rol aldım.",
    "Ölçeklenebilir, sürdürülebilir ve gerçek kullanım senaryolarına uygun arayüzler üretmeye odaklanıyorum.",
    "Teknik yetkinliğimi genişletmek için backend ve mobil geliştirme alanlarında da çalışıyorum. Node.js, Express ve React Native ile full-stack bakış açımı güçlendirerek ürün geliştirme süreçlerine daha bütüncül katkı sağlamayı hedefliyorum.",
    "Benim için önemli olan kodun okunabilir, düzenli ve uzun vadede sürdürülebilir olması. Ürün geliştirme sürecinde ihtiyacı net analiz etmeye, işlevselliği önceliklendirmeye ve arayüzü kullanıcı deneyimi açısından tutarlı şekilde tasarlamaya özen gösteriyorum.",
  ],
  cards: [
    { title: "Telefon", text: "+90 531 509 93 80" },
    { title: "E-posta", text: "cansuugurr0@gmail.com" },
    { title: "Adres", text: "Ankara" },
  ] as AboutCard[],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Geliştirme",
    items: [
      "HTML, CSS, JavaScript, TypeScript",
      "React.js, Next.js",
      "React Native",
      "Redux Toolkit, Zustand",
      "Responsive Web Design",
    ],
  },
  {
    title: "Stil ve UI Kütüphaneleri",
    items: ["CSS, Sass", "Tailwind CSS, Bootstrap", "Material UI, shadcn/ui"],
  },
  {
    title: "Backend ve Veri Katmanı",
    items: [
      "API Entegrasyonu",
      "Middleware Geliştirme",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
  },
  {
    title: "UI/UX ve Tasarım",
    items: ["Figma", "Adobe Photoshop", "Canva"],
  },
];

export const projects: Project[] = [
  {
    id: "tour-show",
    images: [tourShowProject],
    url: "https://tour-show-platform-tour-app.vercel.app/tr",
    title: "Tour Show - Tur Keşif ve Operasyon Yönetim Platformu",
    text: "Tour Show; tur satış süreçlerini dijitalleştiren, kullanıcıların doğru turlara hızlıca ulaşmasını sağlayan ve işletmelerin tur içeriklerini tek panelden yönetmesine olanak tanıyan modern bir turizm platformudur.\n\nKullanıcı tarafında filtreleme, kategori bazlı keşif ve öne çıkan tur alanlarıyla güçlü bir deneyim sunarken; admin paneli üzerinden tur detayları, fiyatlandırma, medya içerikleri ve yayın durumu kolayca yönetilebilir.",
    tags: ["Next.js", "Turizm", "Dashboard", "İçerik Yönetimi"],
    features: [
      {
        icon: "map",
        title: "Hızlı Tur Keşfi",
        text: "Kullanıcılar kategori, arama ve öne çıkan filtreler ile ihtiyaçlarına uygun turları kısa sürede keşfedebilir.",
      },
      {
        icon: "list",
        title: "Merkezi Tur Yönetimi",
        text: "İşletmeler tur içeriklerini, fiyat bilgilerini, görsellerini ve yayın durumlarını tek panelden kolayca yönetebilir.",
      },
    ],
  },
  {
    id: "lilya-planner",
    images: [plannerProject],
    url: "https://lliya-planner.vercel.app/",
    title: "Lilya Planner - Kişisel Planlama ve Zaman Yönetimi Platformu",
    text: "Lilya Planner; günlük, haftalık ve aylık planlamayı tek bir sade arayüzde birleştiren kişisel üretkenlik platformudur.\n\nKullanıcılar görevlerini, randevularını ve hedeflerini kategori bazlı olarak organize edebilir; yaklaşan işleri, odak alanlarını ve günlük özetlerini daha net takip edebilir.",
    tags: ["React", "Planlama", "Verimlilik"],
    features: [
      {
        icon: "calendar",
        title: "Esnek Takvim Görünümü",
        text: "Gün, hafta ve ay görünümleriyle kullanıcının zamanını daha net planlamasını sağlar.",
      },
      {
        icon: "list",
        title: "Gündem ve Odak Takibi",
        text: "Yaklaşan işler, günlük özetler ve odak alanlarıyla planlama sürecini sadeleştirir.",
      },
      {
        icon: "filter",
        title: "Kategori Bazlı Düzen",
        text: "Kişisel, iş, sağlık ve randevu gibi alanları ayrı kategorilerde yönetmeyi kolaylaştırır.",
      },
    ],
  },
  {
    id: "lilya-estate",
    images: [estateProject],
    url: "https://lilya-estate-web.vercel.app/",
    title: "Lilya Estate - Premium Emlak Keşif Platformu",
    text: "Lilya Estate; satılık ve kiralık mülkleri modern, güven veren ve görsel odaklı bir deneyimle sunan emlak keşif platformudur.\n\nKullanıcılar konum, mülk tipi ve detaylı filtreler üzerinden arama yapabilir; harita destekli keşif, fotoğraf galerileri ve kapsamlı ilan bilgileriyle karar sürecini daha kolay yönetebilir.",
    tags: ["React", "TypeScript", "Harita Entegrasyonu"],
    features: [
      {
        icon: "map",
        title: "Harita Destekli Keşif",
        text: "Kullanıcıların mülkleri konuma göre incelemesini ve çevreyi daha hızlı değerlendirmesini sağlar.",
      },
      {
        icon: "filter",
        title: "Gelişmiş İlan Filtreleme",
        text: "Şehir, mülk tipi, oda sayısı ve fiyat gibi kriterlerle arama sürecini daha hedefli hale getirir.",
      },
      {
        icon: "map",
        title: "Detaylı Mülk Sunumu",
        text: "Fotoğraf galerisi, fiyat, konum ve temel özelliklerle kullanıcıların karar sürecini destekler.",
      },
    ],
  },
  {
    id: "scandleted",
    images: [scandletedProject],
    url: "https://scandleted-five.vercel.app/",
    title: "Scandleted - Butik Mum E-Ticaret Deneyimi",
    text: "Scandleted; mum ürünlerini butik mağaza estetiğiyle sunan, sade ve kullanıcı odaklı bir e-ticaret uygulamasıdır.\n\nKullanıcılar ürünleri kolayca keşfedebilir, detaylarını inceleyebilir ve sepete ekleme akışıyla alışveriş sürecini hızlıca tamamlayabilir.",
    tags: ["React", "E-Ticaret", "Ürün Listeleme"],
    features: [
      {
        icon: "list",
        title: "Düzenli Ürün Kataloğu",
        text: "Mum koleksiyonlarını sade bir listeleme yapısıyla sunarak kullanıcıların ürünleri kolayca keşfetmesini sağlar.",
      },
      {
        icon: "shopping",
        title: "Akıcı Sepet Deneyimi",
        text: "Ürün inceleme, seçim ve sepete ekleme adımlarını basit ve anlaşılır bir alışveriş akışına dönüştürür.",
      },
    ],
  },
  {
    id: "areka-corporate",
    images: [arekaProject],
    url: "https://areka-corporate-website.vercel.app",
    title: "Areka Carbon Hub - Kurumsal İklim Teknolojisi Web Sitesi",
    text: "Areka Carbon Hub; karbon ayak izi takibi ve iklim teknolojisi çözümlerini kurumsal bir arayüzle sunan modern bir web sitesidir.\n\nPlatform; şirketin sürdürülebilirlik vizyonunu, blokzincir tabanlı güven yaklaşımını ve veri odaklı hizmetlerini net, profesyonel ve çok dilli bir deneyimle aktarır.",
    tags: ["Kurumsal Web", "Çok Dilli", "İklim Teknolojisi"],
  },
  {
    id: "areka-dashboard",
    images: [arekaDashboardProject],
    url: "https://app.areka.ai/",
    title: "Areka Carbon Hub - Karbon Yönetim Dashboard’u",
    text: "Areka Dashboard; karbon emisyonlarını, dengeleme süreçlerini ve kayıt yönetimini tek panelde birleştiren veri odaklı bir karbon yönetim ürünüdür.\n\nKullanıcılar toplam, dengelenmiş ve dengelenmemiş emisyon verilerini takip edebilir; karbon kayıtlarını tablo yapısıyla inceleyerek süreçlerini daha şeffaf ve yönetilebilir hale getirebilir.",
    tags: ["Dashboard", "Veri Görselleştirme", "Karbon Takibi"],
    features: [
      {
        icon: "chart",
        title: "Karbon Verisi Takibi",
        text: "Toplam, dengelenmiş ve dengelenmemiş emisyon değerlerini tek bakışta takip etmeyi sağlar.",
      },
      {
        icon: "list",
        title: "Merkezi Kayıt Yönetimi",
        text: "NFT ve emisyon kayıtlarını düzenli, izlenebilir ve yönetilebilir bir tablo yapısıyla sunar.",
      },
      {
        icon: "filter",
        title: "Dengeleme Süreci",
        text: "Kullanıcıyı karbon etkisini azaltmaya yönelik aksiyonlara yönlendiren sade bir yönetim akışı sağlar.",
      },
    ],
  },
  {
    id: "wessex-dashboard",
    images: [verilandProject],
    url: "https://searches.csu.azureapp.net/user/login",
    title: "Wessex Searches - Kurumsal Süreç Yönetim Paneli",
    text: "Wessex Searches; sipariş, sorgu, talep ve müşteri iletişimi süreçlerini tek panelde birleştiren kurumsal bir operasyon yönetim ürünüdür.\n\nDashboard yapısı; ekiplerin iş akışını daha görünür, takip edilebilir ve kontrollü şekilde yönetmesini sağlarken, sipariş oluşturma ve konum bazlı süreçleri sade bir kullanıcı deneyimiyle destekler.",
    tags: ["Kurumsal Panel", "Dashboard", "Operasyon"],
    features: [
      {
        icon: "chart",
        title: "Operasyonel Dashboard",
        text: "Özet metrikler, grafikler ve hızlı aksiyonlarla operasyon durumunu tek bakışta görünür hale getirir.",
      },
      {
        icon: "list",
        title: "Merkezi Talep Akışı",
        text: "Sorgu, mesaj ve müşteri iletişim detaylarını tek merkezden takip etmeyi kolaylaştırır.",
      },
      {
        icon: "map",
        title: "Konum Destekli Süreç",
        text: "Sipariş oluşturma ve harita bazlı lokasyon adımlarıyla operasyon akışını daha kontrollü yönetir.",
      },
    ],
  },
  {
    id: "note-app",
    images: [noteProject],
    url: "https://note-app-gold-theta.vercel.app/",
    title: "Note Canvas - Esnek Not ve Fikir Panosu",
    text: "Note Canvas; notları, fikir kartlarını ve sayfaları tek bir esnek çalışma alanında birleştiren verimlilik odaklı bir dijital pano uygulamasıdır.\n\nKullanıcılar içeriklerini kategori bazlı düzenleyebilir, farklı fikirleri görsel bir tuval üzerinde organize edebilir ve planlama sürecini daha sade, esnek ve takip edilebilir hale getirebilir.",
    tags: ["React", "Drag and Drop", "State Management"],
    features: [
      {
        icon: "list",
        title: "Esnek Not Alanı",
        text: "Notları, fikir kartlarını ve sayfaları tek bir dijital çalışma alanında düzenlemeyi sağlar.",
      },
      {
        icon: "filter",
        title: "Kategori Bazlı Düzen",
        text: "İçerikleri proje, plan, fikir ve görev gibi alanlara ayırarak daha kontrollü takip sunar.",
      },
      {
        icon: "chart",
        title: "Görsel Planlama Akışı",
        text: "Fikirleri kart yapısıyla sunarak planlama ve içerik üretim sürecini daha anlaşılır hale getirir.",
      },
    ],
  },
  {
    id: "blossom",
    images: [botanicProject],
    github: "https://github.com/cansu05/Blossom",
    title: "Blossom - Bitki Kataloğu ve Bakım Rehberi",
    text: "Bitki dünyasını keşfetmenin en sade yolu. Favori bitkilerinizi bulun, detaylı bakım bilgilerine ulaşın ve koleksiyonunuzu kolayca yönetin.",
    tags: ["React Native", "Mobil", "Ürün Kataloğu"],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "08.25 - 03.26",
    role: "Frontend Developer",
    company: "Areka Carbon Hub",
    description:
      "Karbon yönetimi odaklı dashboard ve yönetim panellerinde kullanıcı deneyimi ve arayüz geliştirme süreçlerinde yer aldım.",
  },
  {
    period: "11.23 - 01.25",
    role: "Frontend Developer",
    company: "Veriland Consulting Ltd.",
    description:
      "Ürün arayüzleri, dashboard yapıları ve kullanıcı odaklı frontend bileşenleri geliştirdim.",
  },
  {
    period: "09.23 - 10.23",
    role: "Volunteer Frontend Developer",
    company: "Fogo Team",
    description:
      "Frontend geliştirme süreçlerine destek vererek arayüz üretimi ve kullanıcı deneyimi tarafında katkı sağladım.",
  },
  {
    period: "05.23 - 10.23",
    role: "Frontend Developer",
    company: "Altıncı Kat",
    description:
      "Kullanıcı odaklı arayüzlerin geliştirilmesi ve frontend uygulama süreçlerinde yer aldım.",
  },
  {
    period: "09.22 - 11.21",
    role: "Intern R&D Engineer",
    company: "Mechanica",
    description:
      "Görüntü işleme ve algoritma geliştirme odaklı Ar-Ge çalışmalarında görev aldım.",
  },
];

export const contactMethods: ContactMethod[] = [
  { label: "Telefon", value: "+90 531 509 93 80", href: "tel:+905315099380" },
  {
    label: "E-posta",
    value: "cansuugurr0@gmail.com",
    href: "mailto:cansuugurr0@gmail.com",
  },
  { label: "Adres", value: "Ankara", href: "#contact" },
];
