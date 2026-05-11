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
    title: "Tour Show - Tur Keşif ve Yönetim Platformu",
    text: "Tour Show; kullanıcıların turları kolayca keşfetmesini sağlayan tur listeleme web sitesi ile işletmelerin tur içeriklerini, görsellerini ve yayın süreçlerini yönetebildiği admin dashboard deneyimini bir araya getiren turizm platformudur.",
    tags: ["Next.js", "Turizm", "Dashboard", "İçerik Yönetimi"],
    features: [
      {
        icon: "map",
        title: "Tur keşif deneyimi",
        text: "Kullanıcıların kategori, arama ve öne çıkan fırsatlar üzerinden uygun turları hızlıca bulmasını sağlar.",
      },
      {
        icon: "list",
        title: "Tur içerik yönetimi",
        text: "Tur başlığı, açıklama, kategori, fiyatlandırma ve yayın durumlarını tek panelden düzenlemeyi kolaylaştırır.",
      },
    ],
  },
  {
    id: "lilya-planner",
    images: [plannerProject],
    url: "https://lliya-planner.vercel.app/",
    github: "https://github.com/cansu05/Lliya-Planner",
    title: "Lilya Planner - Sakin ve Odaklı Planlama Deneyimi",
    text: "Lilya Planner; yoğun günleri daha net yönetmek isteyen kullanıcılar için günlük, haftalık ve aylık planlamayı tek bir sade arayüzde birleştiren kişisel planlama ürünüdür.",
    tags: ["React", "Planlama", "Verimlilik"],
    features: [
      {
        icon: "calendar",
        title: "Takvim odaklı planlama",
        text: "Gün, hafta ve ay görünümleriyle kullanıcının zamanını daha net görmesini sağlar.",
      },
      {
        icon: "list",
        title: "Gündem akışı",
        text: "Yaklaşan işler, odak blokları ve günlük özetlerle planlama sürecini sadeleştirir.",
      },
      {
        icon: "filter",
        title: "Kategori bazlı düzen",
        text: "Kişisel, iş, sağlık ve randevu gibi alanlarla planları daha kolay ayrıştırır.",
      },
    ],
  },
  {
    id: "lilya-estate",
    images: [estateProject],
    url: "https://lilya-estate-web.vercel.app/",
    github: "https://github.com/cansu05/Lilya-Estate",
    title: "Lilya Estate - Premium Emlak Keşif Platformu",
    text: "Lilya Estate; kullanıcıların satılık ve kiralık mülkleri konum, mülk tipi ve ihtiyaçlarına göre keşfetmesini sağlayan, güven veren ve görsel sunumu güçlü bir emlak platformudur.",
    tags: ["React", "TypeScript", "Harita Entegrasyonu"],
    features: [
      {
        icon: "map",
        title: "Harita destekli keşif",
        text: "Kullanıcının lokasyona göre mülk aramasını ve çevreyi daha hızlı değerlendirmesini sağlar.",
      },
      {
        icon: "filter",
        title: "Akıllı ilan filtreleme",
        text: "Şehir, ilan tipi, oda sayısı ve mülk türü gibi kriterlerle arama sürecini hızlandırır.",
      },
      {
        icon: "map",
        title: "Detaylı mülk sunumu",
        text: "Fotoğraf galerisi, fiyat, konum ve temel özelliklerle karar verme sürecini destekler.",
      },
    ],
  },
  {
    id: "scandleted",
    images: [scandletedProject],
    url: "https://scandleted-five.vercel.app/",
    github: "https://github.com/cansu05/Scandleted",
    title: "Scandleted - Butik Mum Mağazası",
    text: "Scandleted; mum ürünlerini butik mağaza hissiyle sunan, kullanıcıların ürünleri kolayca keşfetmesini, detaylarını incelemesini ve sepete ekleyerek alışveriş sürecini tamamlamasını sağlayan sade bir e-ticaret uygulamasıdır.",
    tags: ["React", "E-Ticaret", "Ürün Listeleme"],
    features: [
      {
        icon: "list",
        title: "Düzenli ürün kataloğu",
        text: "Kullanıcıların farklı mum seçeneklerini kolayca karşılaştırabileceği sade bir listeleme yapısı sağlar.",
      },
      {
        icon: "shopping",
        title: "Sepete ekleme akışı",
        text: "Ürün seçimi, detay inceleme ve sepete ekleme adımlarını basit bir alışveriş deneyimine dönüştürür.",
      },
    ],
  },
  {
    id: "areka-corporate",
    images: [arekaProject],
    url: "https://areka-corporate-website.vercel.app",
    github: "https://github.com/cansu05/Areka-Corporate-Website",
    title: "Areka Carbon Hub - Kurumsal İklim Teknolojisi Web Sitesi",
    text: "İklim teknolojisi çözümlerini profesyonel bir çizgide sunan; verinin netliğini ve kurumsal kimliği ön plana çıkaran bir web projesidir.",
    tags: ["Kurumsal Web", "Çok Dilli", "İklim Teknolojisi"],
  },
  {
    id: "areka-dashboard",
    images: [arekaDashboardProject],
    url: "https://app.areka.ai/",
    title: "Areka Carbon Hub - Karbon Yönetim Dashboard’u",
    text: "Areka Dashboard; kullanıcıların karbon emisyonlarını görüntülemesini, dengeleme süreçlerini takip etmesini ve karbon kayıtlarını tek panelden yönetmesini sağlayan veri odaklı bir ürün deneyimidir.",
    tags: ["Dashboard", "Veri Görselleştirme", "Karbon Takibi"],
    features: [
      {
        icon: "chart",
        title: "Emisyon takibi",
        text: "Kullanıcının toplam, dengelenmiş ve dengelenmemiş karbon verilerini hızlıca görmesini sağlar.",
      },
      {
        icon: "list",
        title: "Kayıt yönetimi",
        text: "NFT ve emisyon kayıtlarını tablo yapısıyla düzenli, izlenebilir ve yönetilebilir hale getirir.",
      },
      {
        icon: "filter",
        title: "Dengeleme akışı",
        text: "Kullanıcıyı karbon etkisini azaltmaya yönelik aksiyonlara yönlendiren sade bir dashboard deneyimi sunar.",
      },
    ],
  },
  {
    id: "wessex-dashboard",
    images: [verilandProject],
    url: "https://searches.csu.azureapp.net/user/login",
    title: "Wessex Searches - Kurumsal Süreç Yönetim Paneli",
    text: "Wessex Searches; sipariş, sorgu, talep ve müşteri iletişimi süreçlerini tek panelde birleştiren, operasyon ekiplerinin iş akışını daha kontrollü ve izlenebilir yönetmesini sağlayan kurumsal dashboard ürünüdür.",
    tags: ["Kurumsal Panel", "Dashboard", "Operasyon"],
    features: [
      {
        icon: "chart",
        title: "Dashboard görünümü",
        text: "Özet metrikler, grafikler ve hızlı aksiyonlarla operasyonel durumu görünür hale getirir.",
      },
      {
        icon: "list",
        title: "Sorgu ve mesaj akışı",
        text: "Müşteri sorgularını, mesajları ve iletişim detaylarını tek merkezden takip etmeyi sağlar.",
      },
      {
        icon: "map",
        title: "Sipariş ve konum akışı",
        text: "Yeni sipariş oluşturma ve harita destekli lokasyon adımlarıyla süreci yönlendirir.",
      },
    ],
  },
  {
    id: "note-app",
    images: [noteProject],
    url: "https://note-app-gold-theta.vercel.app/",
    github: "https://github.com/cansu05/note-app",
    title: "Note Canvas - Esnek Not ve Fikir Panosu",
    text: "Fikirlerinizi sınırlara hapsolmadan organize edin. Notları, sayfaları ve fikir kartlarını tek bir esnek tuval üzerinde toplayan, verimlilik odaklı dijital çalışma alanı.",
    tags: ["React", "Drag and Drop", "State Management"],
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
