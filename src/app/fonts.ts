import localFont from 'next/font/local';



// Fonte 3 - Outra fonte
export const Oskon = localFont({
  src: [
    {
      path: './fonts/ZTBrosOskon90s-Regular.otf',
      weight: '300',
    },

  ],
  variable: '--font-oskon',
  display: 'swap',
});
