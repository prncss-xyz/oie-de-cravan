export const fr2en = {
  'index': 'index',
  'auteurs': 'authors',
  'nous-rejoindre': 'reach-us',
  'livres': 'books',
}

export const en2fr = {}
for (const [key, value] of Object.entries(fr2en)) {
  en2fr[value] = key;
}
