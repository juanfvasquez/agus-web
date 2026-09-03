declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type StorePlatform = 'android' | 'ios';
export type StoreClickSource = 'landing' | 'home';

const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
] as const;

export function initDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

export function getTrackingParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const tracking: Record<string, string> = {};

  for (const key of TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) tracking[key] = value;
  }

  return tracking;
}

export function appendTrackingParams(url: string): string {
  const tracking = getTrackingParams();
  const keys = Object.keys(tracking);

  if (!keys.length) return url;

  const target = new URL(url);
  for (const key of keys) {
    target.searchParams.set(key, tracking[key]);
  }

  return target.toString();
}

export function pushPageView(pagePath?: string) {
  initDataLayer();
  window.dataLayer.push({
    event: 'page_view',
    page_path: pagePath ?? window.location.pathname,
    page_location: window.location.href,
    ...getTrackingParams(),
  });
}

export function pushStoreRedirect(platform: StorePlatform) {
  initDataLayer();
  window.dataLayer.push({
    event: 'store_redirect',
    platform,
    page_path: window.location.pathname,
    ...getTrackingParams(),
  });
}

export function pushStoreClick(platform: StorePlatform, source: StoreClickSource) {
  initDataLayer();
  window.dataLayer.push({
    event: 'store_click',
    platform,
    source,
    page_path: window.location.pathname,
    ...getTrackingParams(),
  });
}
