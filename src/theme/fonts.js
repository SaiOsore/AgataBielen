import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'AGaramondPro'; 
    src: url('fonts/AGaramondPro-Regular.woff') format('woff'),
         url('fonts/AGaramondPro-Regular.woff2') format('woff2'),
         url('fonts/AGaramondPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'AGaramondProItalic'; 
    src: url('fonts/AGaramondPro-Italic.woff') format('woff'),
         url('fonts/AGaramondPro-Italic.woff2') format('woff2'),
         url('fonts/AGaramondPro-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  };
`;

export default fonts;
