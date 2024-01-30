import { alpha } from '@mui/material/styles';

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#55CD6F',
  main: '#1ABB3D',
  dark: '#127B29',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#55CD6F',
  main: '#1ABB3D',
  dark: '#127B29',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFD075',
  main: '#FFBB38',
  dark: '#B27704',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#F3372A',
  main: '#EB1809',
  dark: '#C61206',
  darker: '#7A0C2E',
};
const ORANGE = {
  0: '#FF4D23',
  10: '#FFEFEB',
  20: '#FF7823',
};
const GREY = {
  0: '#FFFFFF',
  50: '#FAFBFB',
  100: '#F0F1F3',
  200: '#DFE2E6',
  300: '#CFD4DA',
  400: '#C0C6CD',
  500: '#8996A2',
  600: '#697886',
  700: '#4D5D6C',
  800: '#354350',
  900: '#292F36',
  500_8: alpha('#8996A2', 0.08),
  500_12: alpha('#8996A2', 0.12),
  500_16: alpha('#8996A2', 0.16),
  500_24: alpha('#8996A2', 0.24),
  500_32: alpha('#8996A2', 0.32),
  500_48: alpha('#8996A2', 0.48),
  500_56: alpha('#8996A2', 0.56),
  500_80: alpha('#8996A2', 0.8),
};

const BLUE = {
  0: '#0202E9',
  50: '#000250',
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  neutral: { main: GREY[800], contrastText: '#fff' },
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  orange: ORANGE,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  blue: '#3D49CC',
  blues: BLUE,
  backgroundBlue: '#E0E0FF',
};

const paletteLight = {
  ...COMMON,
  mode: 'light',
  text: { primary: '#1E2429', secondary: '#6E6E73', disabled: '#898C94' },
  background: {
    paper: '#fff',
    default: COMMON.common.white,
  },
  action: { active: GREY[600], ...COMMON.action },
};

const paletteDark = {
  ...COMMON,
  mode: 'dark',
  text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
  background: { paper: GREY[800], default: GREY[900] },
  action: { active: GREY[500], ...COMMON.action },
};

const palette = {
  light: paletteLight,
  dark: paletteDark,
};

export default palette;