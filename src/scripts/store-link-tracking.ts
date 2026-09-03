import { pushStoreClick, type StoreClickSource, type StorePlatform } from './analytics';

export function initStoreLinkTracking() {
  document.querySelectorAll<HTMLAnchorElement>('[data-store-link]').forEach((link) => {
    link.addEventListener('click', () => {
      const platform = link.dataset.storeLink as StorePlatform | undefined;
      const source = (link.dataset.storeSource as StoreClickSource | undefined) ?? 'landing';

      if (platform) {
        pushStoreClick(platform, source);
      }
    });
  });
}
