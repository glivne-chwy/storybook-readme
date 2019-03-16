import stringRaw from 'string-raw';
import styleFactory from './styleFactory';

// Took from github-markdown-css
const getStyles = theme => stringRaw`
@font-face {
  font-family: octicons-link;
  src: url(data:font/woff;charset=utf-8;base64,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) format('woff')
}

.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  font-family: ${theme.fontFamily};
  color: ${theme.bodyColor};
  margin-bottom: 8px;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body hr::after,
.markdown-body::after {
  clear: both;
}

.markdown-body hr::after,
.markdown-body hr::before,
.markdown-body::after,
.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  color: ${theme.linkColor};
}

.markdown-body a:active,
.markdown-body a:hover {
  outline-width: 0;
  text-decoration: underline;
}

.markdown-body h1 {
  margin: .67em 0;
}

.markdown-body img {
  border-style: none;
  background-color: ${theme.imgBackgroundColor};
}

.markdown-body svg:not(:root) {
  overflow: hidden;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body * {
  box-sizing: border-box;
}

.markdown-body strong {
  font-weight: 600;
}

.markdown-body hr {
  border: 0;
  box-sizing: content-box;
  overflow: visible;
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${theme.hrColor};
  border: none;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body blockquote {
  margin: 0;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ol ol ol,
.markdown-body ol ul ol,
.markdown-body ul ol ol,
.markdown-body ul ul ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body code {
  font-family: ${theme.codeFontFamily};
}

.markdown-body pre {
  font-size: 12px;
  font-family: ${theme.preFontFamily};
  word-wrap: normal;
}

.markdown-body input {
  -webkit-font-feature-settings: "liga" 0;
  font-feature-settings: "liga" 0;
}

.markdown-body>:first-child {
  margin-top: 0!important;
}

.markdown-body>:last-child {
  margin-bottom: 0!important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: 0;
}

.markdown-body blockquote,
.markdown-body dl,
.markdown-body ol,
.markdown-body p,
.markdown-body pre,
.markdown-body table,
.markdown-body ul {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body blockquote {
  padding: 0 1em;
  color: #777;
  border-left: .25em solid ${theme.blockquoteBorderLeftColor};
}

.markdown-body h1,
.markdown-body h2 {
  padding-bottom: .3em;
  border-bottom: 1px solid ${theme.h1h2BorderBottomColor};
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #000;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 {
  font-size: 2em;
}

.markdown-body h2 {
  font-size: 1.5em;
}

.markdown-body h3 {
  font-size: 1.25em;
}

.markdown-body h4 {
  font-size: 1em;
}

.markdown-body h5 {
  font-size: .875em;
}

.markdown-body h6 {
  font-size: .85em;
  color: ${theme.h6Color};
}

.markdown-body ol,
.markdown-body ul {
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ol ul,
.markdown-body ul ol,
.markdown-body ul ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 700;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px.
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: 100%;
  overflow: auto;
}

.markdown-body table th {
  font-weight: 700;
}

.markdown-body table td,
.markdown-body table th {
  padding: 6px 13px;
  border: 1px solid ${theme.tableTdBorderColor};
}

.markdown-body table tr {
  background-color: ${theme.tableTrBackgroundColor};
  border-top: 1px solid ${theme.tableTrBorderTopColor};
}

.markdown-body table tr:nth-child(2n) {
  background-color: ${theme.tableOddTrBackgroundColor};
}

.markdown-body img {
  max-width: 100%;
  box-sizing: content-box;
}


.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

/*
.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  border-radius: 3px;
  background-color: ${theme.preBackgroundColor};
}


.markdown-body pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  border: 0;
}


.markdown-body code {
  padding: .2em 0;
  margin: 0;
  font-size: 85%;
  background-color: ${theme.codeBackgroundColor};
  border-radius: 3px;
}

.markdown-body code::after,
.markdown-body code::before {
  letter-spacing: -.2em;
  content: "\00a0";
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: 0 0;
  border: 0;
}
*/

.markdown-body pre code::after,
.markdown-body pre code::before {
  content: normal;
}

.markdown-body .full-commit .btn-outline:not(:disabled):hover {
  color: #4078c0;
  border: 1px solid #4078c0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
  line-height: 10px;
  vertical-align: middle;
  border-radius: 3px;
  color: ${theme.kbdColor};
  background-color: ${theme.kbdBackgroundColor};
  border: 1px solid ${theme.kbdBorderColor};
  border-bottom-color: ${theme.kbdBottomBorderColor};
  box-shadow: inset 0 -1px 0 ${theme.kbdBoxShadowColor};
}

.markdown-body:checked+.radio-label {
  position: relative;
  z-index: 1;
  border-color: ${theme.checkedRadioLabelColor};
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 3px;
}

.markdown-body .task-list-item input {
  margin: 0 .2em .25em -1.6em;
  vertical-align: middle;
}
`;

const defaultTheme = {
  // bodyBackgroundColor: '#969896',
  bodyColor: '#333',
  linkColor: '#4078c0',
  hrColor: '#e7e7e7',
  checkedRadioLabelColor: '#4078c0',
  kbdColor: '#555',
  kbdBackgroundColor: '#fcfcfc',
  kbdBorderColor: '#ccc',
  kbdBottomBorderColor: '#bbb',
  kbdBoxShadowColor: '#bbb',
  preBackgroundColor: '#f7f7f7',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  imgBackgroundColor: '#fff',

  tableTrBackgroundColor: '#fff',
  tableOddTrBackgroundColor: '#f8f8f8',
  tableTrBorderTopColor: '#ccc',
  tableTdBorderColor: '#ddd',

  codeBackgroundColor: 'rgba(0, 0, 0, .04)',
  codeFontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
  preFontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',

  blockquoteBorderLeftColor: '#ddd',
  h1h2BorderBottomColor: '#ddd',
  h6Color: '#777',
};

function pickValues(theme) {
  const t = {
    bodyColor: theme.textColor,
    preBackgroundColor: theme.appBg,
    tableTrBackgroundColor: theme.barBg,
    tableOddTrBackgroundColor: theme.appBg,
  };

  return Object.keys(t)
    .filter(k => t[k])
    .reduce(
      (theme, k) => {
        theme[k] = t[k];
        return theme;
      },
      {
        ...theme,
      },
    );
}

export default styleFactory('github-markdown-css', {
  getStyles,
  pickValues,
  defaultTheme,
});
