# Portföy

React, TypeScript, Vite ve Tailwind CSS ile geliştirilen modern bir kişisel portfolyo projesi. Bu uygulama; profil, yetenekler, öne çıkan projeler, deneyim ve iletişim bilgilerini güçlü bir görsel dil ile tek sayfalık bir yapıda sunar.

## Genel Bakış

Bu repo, frontend odaklı kişisel portfolyo websitesini içerir. Proje; yeniden kullanılabilir bileşen mimarisiyle kurgulanmıştır ve `hero`, `hakkımda`, `yetenekler`, `projeler`, `deneyim` ve `iletişim` gibi bölümleri statik veri yapısı üzerinden üretir.

## Öne Çıkanlar

- Responsive tek sayfa portfolyo deneyimi
- Bakımı kolay bileşen tabanlı mimari
- `src/data/portfolio.ts` üzerinden merkezi içerik yönetimi
- Proje vitrinleri için optimize edilmiş görseller
- Vite ile hızlı geliştirme ve build süreci

## Teknoloji Yığını

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- PostCSS

## Proje Yapısı

```text
src/
  assets/                Statik görseller ve optimize medya dosyaları
  components/
    layout/              Genel yerleşim bileşenleri
    sections/            Sayfa bölümleri
    ui/                  Yeniden kullanılabilir arayüz bileşenleri
  data/
    portfolio.ts         Portfolyo içerik kaynağı
  App.tsx                Ana sayfa kompozisyonu
  main.tsx               Uygulama giriş noktası
```

## Başlangıç

### Gereksinimler

- Node.js 18+
- npm 9+

### Kurulum

```bash
npm install
```

### Geliştirme Ortamı

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Build Önizleme

```bash
npm run preview
```

## Kullanılabilir Scriptler

- `npm run dev`: Vite geliştirme sunucusunu başlatır
- `npm run build`: TypeScript derlemesi yapar ve production build üretir
- `npm run preview`: Production build'i lokal ortamda önizler

## Özelleştirme

Portfolyo içeriğinin büyük bölümü [`src/data/portfolio.ts`](./src/data/portfolio.ts) dosyasından yönetilir. Bu dosya üzerinden aşağıdaki alanları güncelleyebilirsiniz:

- Navigasyon başlıkları
- Hero alanı içeriği
- Hakkımda ve iletişim bilgileri
- Yetenek grupları
- Proje kartları ve linkleri
- Deneyim zaman akışı

## Yayınlama

Production build alındıktan sonra proje Vercel, Netlify veya GitHub Pages gibi platformlara kolayca deploy edilebilir.

## Repo Kurulumu

Repo ilk kez push edilecekse:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/cansu05/portf-y.git
git push -u origin main
```

## İletişim

- GitHub: https://github.com/cansu05
- LinkedIn: https://www.linkedin.com/in/cansuugur/
