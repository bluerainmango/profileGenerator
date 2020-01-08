exports.style = `<style>
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
    }
    html {
      /* font-family: sans-serif; */
      /* Letter - 72ppi */
      width: 612px;
      height: 792px;
      /* height: 279mm;
      width: 216mm; */
      -webkit-print-color-adjust: exact;
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
    }
    body {
      height: 100%;
    }
    .img {
      margin-top: 30px;
      width: 150px;
      border-radius: 50%;
      border: 4px solid rgb(255, 255, 255);
    }
    h2 {
      line-height: 1.75;
      font-weight: normal;
    }
    header {
      /* display: flex;
      flex-direction: column;
      align-items: center; */
      /* margin: 0 auto; */
      text-align: center;
      background-color: rgb(0, 113, 252);
      /* background-color: rgb(255, 174, 0);
      background-color: rgb(0, 182, 36);
      background-color: rgb(149, 0, 255); */
      color: #fff;
    }
    .header-link {
      /* display: flex;
      justify-content: space-around; */
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
      padding: 20px 0;
      text-align: center;
    }
    .row {
      /* display: flex;
      justify-content: space-evenly; */
      text-align: center;
      height: 100px;
    }
    .card {
      width: 45%;
      padding: 15px 0;
      line-height: 1.5;
      /* margin: 10px 30px; */
      margin-top: 20px;
      display: inline-block;
      background-color: rgb(0, 113, 252);
      /* background-color: rgb(255, 174, 0);
      background-color: rgb(0, 182, 36);
      background-color: rgb(149, 0, 255); */
      color: #fff;
      border-radius: 5px;
      /* display: flex;
      flex-direction: column; */
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
      background-color: rgb(0, 113, 252);
      height: 100px;
      width: 612px;
      position: absolute;
      bottom: 0;
      /* background-color: rgb(255, 174, 0);
      background-color: rgb(0, 182, 36);
      background-color: rgb(149, 0, 255); */
    }
    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
      /* margin-top: 3px; */
    }
    .icon-embed {
      width: 1.25em;
    }
  </style>`;
