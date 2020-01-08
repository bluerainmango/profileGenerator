exports.rawHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  {ICONS}
  {STYLE}
  <body>
    <header>
      <img
        class="img"
        src="{AVATAR_URL}"
        alt="profile image"
      />
      <h1>{NAME}</h1>
      <h2>{COMPANY}</h2>
      <div class="header-link">
        <a href="https://www.google.com/maps/place/{LOCATION}" target="_blank">
          <svg class="icon icon-location">
            <use xlink:href="#icon-location"></use>
          </svg>
          {LOCATION}
        </a>
        <a href={HTML_URL} target="_blank">
          <svg class="icon icon-github">
            <use xlink:href="#icon-github"></use>
          </svg>
          GitHub
        </a>
        <a href={BLOG} target="_blank">
          <svg class="icon icon-blog">
            <use xlink:href="#icon-blog"></use>
          </svg>
          Blog
        </a>
      </div>
    </header>
    <main>
      <div class="bio">
        <p>
          {BIO}
        </p>
      </div>

      <div class="cards">
        <div class="row">
          <div class="card card--public-repo">
            <p>Public Repositories</p>
            <p class="num-public-repo">{PUBLIC_REPOS}</p>
          </div>
          <div class="card card--followers">
            <p>Followers</p>
            <p class="num-followers">{FOLLOWERS}</p>
          </div>
        </div>
        <div class="row">
          <div class="card card--github-stars">
            <p>GitHub Stars</p>
            <p class="num-github-stars">{NUMOFSTARS}</p>
          </div>
          <div class="card card--following">
            <p>Following</p>
            <p class="num-following">{FOLLOWING}</p>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </body>
</html>
`;
