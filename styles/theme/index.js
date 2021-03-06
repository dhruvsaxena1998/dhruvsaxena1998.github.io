import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        overflowX: 'hidden',
        bg: props.colorMode === 'light' ? 'default.light' : 'default.dark',
        color: props.colorMode === 'light' ? 'default.dark' : 'default.light',
      },
    }),
  },
  colors: {
    default: {
      light: '#fcfcfc',
      dark: '#232323',
    },
    primary: {
      100: '#D1C1F4',
      200: '#B199E7',
      300: '#9C7DE4',
      400: '#8F67D7',
      500: '#805AD5',
      600: '#744EC8',
      700: '#311968',
    },
    secondary: {
      100: '#E6FFFA',
      200: '#B2F5EA',
      300: '#81E6D9',
      400: '#4FD1C5',
      500: '#38B2AC',
      600: '#319795',
      700: '#2C7A7B',
    },
    neutral: {
      100: '#F4F4F4',
      200: '#D9D9D9',
      300: '#A6A6A6',
      400: '#8C8C8C',
      500: '#737373',
      600: '#595959',
      700: '#404040',
    },
  },
  fonts: {
    heading: 'Sora',
    body: 'Sora',
  },
});

export default theme;
