import profileImage from "../assets/me-optimized.jpg";
import rickAndMorty from "../assets/optimized/rickAndMorty.opt.jpg";
import taskManagement from "../assets/optimized/taskManagement.opt.jpg";
import arekaWebsite from "../assets/optimized/areka-website.opt.jpg";
import noteApp from "../assets/optimized/note-app.opt.jpg";
import blossom from "../assets/optimized/blossom.opt.jpg";
import lilyaPlanner from "../assets/lilyaPlanner.opt.png";
import scandleted1 from "../assets/optimized/scandleted-1.opt.jpg";
import scandleted2 from "../assets/optimized/scandleted-2.opt.jpg";
import scandleted3 from "../assets/optimized/scandleted-3.opt.jpg";
import scandleted4 from "../assets/optimized/scandleted-4.opt.jpg";
import scandleted5 from "../assets/optimized/scandleted-5.opt.jpg";
import lilyaEstate1 from "../assets/optimized/lilya-estate-1.opt.jpg";
import lilyaEstate2 from "../assets/optimized/lilya-estate-2.opt.jpg";
import lilyaEstate3 from "../assets/optimized/real-estate-3.opt.jpg";
import wessexDashboard1 from "../assets/optimized/dashboard1.opt.jpg";
import wessexDashboard2 from "../assets/optimized/dashboard2.opt.jpg";
import wessexDashboard3 from "../assets/optimized/dashboard3.opt.jpg";
import wessexDashboard4 from "../assets/optimized/dashboard4.opt.jpg";
import wessexDashboard5 from "../assets/optimized/dashboard5.opt.jpg";
import wessexDashboard6 from "../assets/optimized/dashboard6.opt.jpg";
import wessexDashboard7 from "../assets/optimized/dashboard7.opt.jpg";
import wessexDashboard8 from "../assets/optimized/dashboard8.opt.jpg";
import wessexDashboard9 from "../assets/optimized/dashboard9.opt.jpg";
import wessexDashboard10 from "../assets/optimized/dashboard10.opt.jpg";
import wessexDashboard11 from "../assets/optimized/dashboard11.opt.jpg";
import wessexDashboard12 from "../assets/optimized/dashboard12.opt.jpg";
import wessexDashboard13 from "../assets/optimized/dashboard13.opt.jpg";
import wessexDashboard14 from "../assets/optimized/dashboard14.opt.jpg";
import wessexDashboard15 from "../assets/optimized/dashboard15.opt.jpg";
import arekaDashboard1 from "../assets/optimized/areka-1.opt.jpg";
import arekaDashboard2 from "../assets/optimized/areka-2.opt.jpg";
import arekaDashboard3 from "../assets/optimized/areka-3.opt.jpg";
import arekaDashboard5 from "../assets/optimized/areka-5.opt.jpg";
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
    id: "lilya-planner",
    images: [lilyaPlanner],
    url: "https://lliya-planner.vercel.app/",
    github: "https://github.com/cansu05/Lliya-Planner",
    title: "Lilya Planner - Planlama Uygulaması",
    text: "Günlük ve haftalık planları, etkinlikleri ve kişisel akışı düzenlemeye odaklanan planlama sitesi.",
    tags: ["React", "Planlama", "Verimlilik"],
  },
  {
    id: "lilya-estate",
    images: [lilyaEstate1, lilyaEstate2, lilyaEstate3],
    url: "https://lilya-estate-web.vercel.app/",
    github: "https://github.com/cansu05/Lilya-Estate",
    title: "Lilya Estate - Emlak Platformu",
    text: "Kullanıcıların konum, filtre ve harita desteğiyle ilan arayabildiği emlak platformu.",
    tags: ["React", "TypeScript", "Harita Entegrasyonu"],
  },
  {
    id: "scandleted",
    images: [scandleted1, scandleted2, scandleted3, scandleted4, scandleted5],
    url: "https://scandleted-five.vercel.app/",
    github: "https://github.com/cansu05/Scandleted",
    title: "Scandleted - E-Ticaret Web Uygulaması",
    text: "Mum ürünleri için sergileme ve satın alma akışına odaklanan e-ticaret deneyimi.",
    tags: ["React", "E-Ticaret", "UI Geliştirme"],
  },
  {
    id: "areka-corporate",
    images: [arekaWebsite],
    url: "https://areka-corporate-website.vercel.app",
    github: "https://github.com/cansu05/Areka-Corporate-Website",
    title: "Areka Carbon Hub - İklim Teknolojisi Platformu",
    text: "Çok dilli kurumsal web sitesi ile sürdürülebilirlik çözümlerini erişilebilir biçimde sunuyor.",
    tags: ["Kurumsal Web", "Çok Dilli", "Frontend"],
  },
  {
    id: "areka-dashboard",
    images: [
      arekaDashboard1,
      arekaDashboard2,
      arekaDashboard3,
      arekaDashboard5,
    ],
    url: "https://app.areka.ai/",
    title: "Areka Carbon Hub - Dashboard Uygulaması",
    text: "Kullanıcıların karbon emisyonlarını takip ve dengelemesini sağlayan dashboard deneyimi.",
    tags: ["Dashboard", "Veri Görselleştirme", "Ürün Geliştirme"],
  },
  {
    id: "wessex-dashboard",
    images: [
      wessexDashboard1,
      wessexDashboard2,
      wessexDashboard3,
      wessexDashboard4,
      wessexDashboard5,
      wessexDashboard6,
      wessexDashboard7,
      wessexDashboard8,
      wessexDashboard9,
      wessexDashboard10,
      wessexDashboard11,
      wessexDashboard12,
      wessexDashboard13,
      wessexDashboard14,
      wessexDashboard15,
    ],
    url: "https://searches.csu.azureapp.net/user/login",
    title: "Wessex Searches - Kurumsal Dashboard Uygulaması",
    text: "Sipariş, talep ve operasyon süreçlerini tek panelden yöneten dashboard katkısı.",
    tags: ["Kurumsal Panel", "Dashboard", "Operasyon"],
  },
  {
    id: "note-app",
    images: [noteApp],
    url: "https://note-app-gold-theta.vercel.app/",
    github: "https://github.com/cansu05/note-app",
    title: "Note App - Not Yönetim Uygulaması",
    text: "Not oluşturma, düzenleme ve sürükle-bırak ile sıralama odaklı not uygulaması.",
    tags: ["React", "Drag and Drop", "State Management"],
  },
  {
    id: "rick-and-morty",
    images: [rickAndMorty],
    url: "https://ricky-and-morty-omega-seven.vercel.app/character",
    github: "https://github.com/cansu05/RickyAndMorty",
    title: "Rick and Morty - Karakter Kataloğu Uygulaması",
    text: "Karakter keşfi, filtreleme ve detay inceleme özellikleri sunan katalog.",
    tags: ["React", "API", "Listeleme"],
  },
  {
    id: "task-flow",
    images: [taskManagement],
    github: "https://github.com/cansu05/Task-Flow",
    title: "TaskFlow - Görev Yönetim Uygulaması",
    text: "Ekiplerin görevlerini planlayıp takip ettiği sürükle-bırak destekli görev yönetimi.",
    tags: ["Görev Yönetimi", "UI", "Takım Çalışması"],
  },
  {
    id: "blossom",
    images: [blossom],
    github: "https://github.com/cansu05/Blossom",
    title: "Blossom - Mobil Ürün Kataloğu Uygulaması",
    text: "Çiçek ve bitki ürünlerinin mobilde kolayca keşfini sağlayan katalog uygulaması.",
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

