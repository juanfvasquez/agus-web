import {
  APP_STORE_URL,
  PLAY_STORE_URL,
} from '../data/site';
import {
  appendTrackingParams,
  pushPageView,
  pushStoreRedirect,
  type StorePlatform,
} from './analytics';

const REDIRECT_DELAY_MS = 200;

function detectPlatform(): StorePlatform | null {
  const ua = navigator.userAgent;

  if (/android/i.test(ua)) return 'android';
  if (/iPad|iPhone|iPod/i.test(ua)) return 'ios';

  return null;
}

function getStoreUrl(platform: StorePlatform): string {
  const base = platform === 'android' ? PLAY_STORE_URL : APP_STORE_URL;
  return appendTrackingParams(base);
}

function showRedirectState() {
  const landing = document.getElementById('app-landing-content');
  const redirect = document.getElementById('app-redirect-state');

  landing?.classList.add('hidden');
  redirect?.classList.remove('hidden');
}

function initAppDeviceRedirect() {
  const page = document.querySelector('[data-app-download-page]');
  if (!page) return;

  pushPageView('/app');

  const platform = detectPlatform();
  if (!platform) return;

  showRedirectState();
  pushStoreRedirect(platform);

  const storeUrl = getStoreUrl(platform);

  window.setTimeout(() => {
    window.location.replace(storeUrl);
  }, REDIRECT_DELAY_MS);
}

document.addEventListener('DOMContentLoaded', initAppDeviceRedirect);
