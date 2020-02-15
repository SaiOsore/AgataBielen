import { css } from 'styled-components';

const optimize = css`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #root {
    height: 100%;
  }
  
  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
  h6, p, blockquote, pre,a, abbr, acronym, address, big,
  cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
  strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
  dd, ol, ul, li,fieldset, form, label, legend,table, caption,
  tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  ul,ol {
    list-style-type: none;
  }
  
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline
  }
  
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  
  [hidden],
  template {
    display: none;
  }
  
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: default;
  }
  
  html|* > svg {
    transform-origin: 50% 50% 0;
  }
  
  body {
    font-size: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
  
  a {
    background: transparent;
    text-decoration: none;
  }
  
  *:focus,
  *:active,
  *:hover {
    outline: none;
  }
  
  pre {
    tab-size: 4;
    white-space: pre-wrap;
  }
  
  q {
    quotes: '\\201C' '\\201D' '\\2018' '\\2019';
  }
  
  img {
    border: none;
  }
  
  svg:not(:root) {
    overflow: hidden;
  }
  
  button,
  input {
    line-height: normal;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button {
    overflow: visible;
  }
  
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
  }
  
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  
  input[type='search'] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }
  
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: none;
    padding: 0;
  }
  
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  
  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }
  
  input,
  select,
  textarea {
    border-radius: 0;
  }
  
  input,
  textarea {
    resize: none;
    border: 0;
  }
  
  [placeholder]:focus::placeholder {
    color: transparent;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  .slick-loading .slick-list
{
    background: #fff url('./ajax-loader.gif') center center no-repeat;
}


.slick-prev,
.slick-next
{
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus
{
    color: transparent;
    outline: none;
    background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before
{
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before
{
    opacity: .25;
}

.slick-prev:before,
.slick-next:before
{
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: -25px;
}
[dir='rtl'] .slick-prev
{
    right: -25px;
    left: auto;
}
.slick-prev:before
{
    content: '←';
}
[dir='rtl'] .slick-prev:before
{
    content: '→';
}

.slick-next
{
    right: -25px;
}
[dir='rtl'] .slick-next
{
    right: auto;
    left: -25px;
}
.slick-next:before
{
    content: '→';
}
[dir='rtl'] .slick-next:before
{
    content: '←';
}

.slick-dotted.slick-slider
{
    margin-bottom: 30px;
}

.slick-dots
{
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
}
.slick-dots li
{
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
}
.slick-dots li button
{
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus
{
    outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before
{
    opacity: 1;
}
.slick-dots li button:before
{
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .75;
    color: black;
}

.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}
`;

export default optimize;
