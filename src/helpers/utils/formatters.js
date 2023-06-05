import { isEmpty } from 'lodash';

export const toStrictTitleCase = (text, separator = ' ') => {
  /**
   * Converts any string to title case, i.e., 'TiTlE cAse' => 'Title Case' format.
   * @param text Text or string that needs to be formatted.
   * @param separator String parameter used as the separator to identify different words in text. One whitespace by default.
   * @returns The formatted text in title case format.
   */
  if (isEmpty(text)) {
    return text;
  }

  const newText = text.split(separator);
  return newText
    .map((val) => val[0].toUpperCase() + val.slice(1).toLowerCase())
    .join(' ');
};
