exports.style = `<style>
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
    }
    html {
      width: 612px;
      height: 792px;
      -webkit-print-color-adjust: exact;
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
    }
    body {
      height: 100%;
    }
    .img {
      margin: 30px 0 20px 0;
      width: 150px;
      border-radius: 50%;
      border: 4px solid rgb(255, 255, 255);
    }
    h2 {
      line-height: 1.75;
      font-weight: normal;
    }
    header {
      text-align: center;
      background-color: {COLOR};
      color: #fff;
    }
    .header-link {
      padding-top: 20px;
      padding-bottom: 30px;
    }
    .header-link > * {
      color: #fff;
      padding: 0 15px;
      text-decoration: none;
    }
    main {
      margin: 0 auto;
      width: 500px;
    }
    .bio {
      margin: 30px 0;
      text-align: center;
    }
    .row {
      text-align: center;
      height: 100px;
    }
    .card {
      width: 45%;
      padding: 15px 0;
      line-height: 1.5;
      display: inline-block;
      background-color: {COLOR};
      color: #fff;
      border-radius: 5px;
    }
    .row {
      width: 500px;
    }
    .card:first-child {
      float: left;
      clear: both;
    }
    .card:last-child {
      float: right;
    }
    footer {
      margin-top: 20px;
      background-color: {COLOR};
      height: 100px;
      width: 612px;
      position: absolute;
      bottom: 0;
    }
    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    }
    .icon-embed {
      width: 1.25em;
    }
  </style>`;
