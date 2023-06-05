export const isHexColorCode = (props, propName, comoponentName) => {
  const regexToMatchHexCode = /^#[A-F | a-f | 0-9]{6}/g;

  if (!!props[propName] && !regexToMatchHexCode.test(props[propName])) {
    return new Error(
      `Invalid proper ${propName} passed to ${comoponentName}. Expected a color hex code.`,
    );
  }
};

export const Colors = {
  // Theme Colors.
  Primary: '#0C3B5B',
  PrimaryLight: '#2A648B',
  Secondary: '#DCDCDC',
  MainBackground: '#EDEDED',

  // Blacks.
  Black400: '#A7A7A7',

  // Whites.
  White: '#FFFFFF',

  // Customs.
  HyperlinkBlue: '#729AE8',
  LogoutRed: '#DC3545',
};
