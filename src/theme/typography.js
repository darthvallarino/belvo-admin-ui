import {
  Roboto,
} from '@next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const FONT_PRIMARY = roboto.style.fontFamily; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
};

export default typography;