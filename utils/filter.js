export function getDropdownLabel(key) {
  switch (key) {
    case 'manufacturer':
      return 'Manufacturer';
    case 'color':
      return 'Color';
    case 'has_5g':
      return '5G';
    case 'has_esim':
      return 'eSIM';
    case 'operating_system':
      return 'Operating System';
    case 'refurbished':
      return 'Refurbished';
    default:
      return '';
  }
}

export function getActiveFilterTagLabel (val, key) {
  if (val === 'true') {
    return getDropdownLabel(key) + ': Yes';
  } else if (val === 'false') {
    return getDropdownLabel(key) + ': No';
  } else {
    return val;
  }
}

export function getFilterKeyList() {
  return ['manufacturer', 'color', 'has_5g', 'operating_system', 'has_esim', 'refurbished'];
}