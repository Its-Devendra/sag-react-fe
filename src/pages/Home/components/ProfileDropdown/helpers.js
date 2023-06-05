import { Colors } from '../../../../components';

export const generateProfileImage = (userName) => {
  const imageUrl = new URL('https://ui-avatars.com/api/');

  imageUrl.searchParams.append('name', userName.replace(' ', '+'));
  imageUrl.searchParams.append('background', 'random');
  imageUrl.searchParams.append('color', Colors.White);
  imageUrl.searchParams.append('size', 128);
  imageUrl.searchParams.append('font-size', 0.5);
  imageUrl.searchParams.append('rounded', true);
  imageUrl.searchParams.append('format', 'svg');

  return imageUrl.toString();
};
