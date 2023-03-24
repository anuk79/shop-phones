const iosDummyImgSrc = 'https://www.kpn.com/shop/cdn/products/_/product_11755879_main.webp';
const androidDummyImgSrc = 'https://www.kpn.com/shop/cdn/products/_/product_13353188_main.webp';

export function getImageSrc(operatingSystem) {
  return operatingSystem === 'IOS' ? iosDummyImgSrc : androidDummyImgSrc
}

export function getPhoneLabel (phone) {
  return phone.model + ' ' + (phone.has_5g ? '5G ' : '') + (phone.has_esim ? 'eSIM' : '');
}

export function isNewRelease (releaseDate) {
  const releaseDateObj = new Date(releaseDate);
  return releaseDateObj.getFullYear() >= 2021;
}

export function getPhoneUrl(phone) {
  return '/phone/' + phone.default.split('_').join('/');
}