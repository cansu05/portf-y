const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const GTM_ID = import.meta.env.VITE_GTM_ID?.trim();

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;
const trackedSections = new Set<string>();
let lastTrackedPagePath = '';

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function injectGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, 'google-analytics');

  ensureDataLayer();
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
}

function injectGoogleTagManager() {
  if (!GTM_ID || document.getElementById('google-tag-manager')) {
    return;
  }

  ensureDataLayer();
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
  });

  injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`, 'google-tag-manager');
}

export function initAnalytics() {
  if (analyticsInitialized || typeof window === 'undefined') {
    return;
  }

  injectGoogleTagManager();
  injectGoogleAnalytics();
  analyticsInitialized = true;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  ensureDataLayer();
  window.dataLayer.push({
    event: eventName,
    ...params,
  });

  if (GA_MEASUREMENT_ID && !GTM_ID && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function trackPageView(path = `${window.location.pathname}${window.location.hash}`, title = document.title) {
  if (path === lastTrackedPagePath) {
    return;
  }

  lastTrackedPagePath = path;
  trackEvent('page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function trackSectionView(sectionId: string, sectionName?: string) {
  if (trackedSections.has(sectionId)) {
    return;
  }

  trackedSections.add(sectionId);
  trackEvent('section_view', {
    section_id: sectionId,
    section_name: sectionName || sectionId,
  });
}

export function getGtmId() {
  return GTM_ID;
}
