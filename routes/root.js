const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`New http request to '/' from ip ${req.headers['x-forwarded-for'] || req.socket.remoteAddress }`)
    if (req.query.a == undefined) { // WITH animations
        res.send(`<!-- <!DOCTYPE html> -->
<html lang="en">

<head>
  <title>Eclypse</title>
  <link rel="icon" type="image/x-icon" href="./media/favicon.png">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="./css/main.css">
  <link rel="stylesheet" href="/css/stars.css">
  <link rel="stylesheet" href="/css/moon.css">
  <!-- <link rel="stylesheet" href="./css/700.css"> -->
  <link rel="preconnect" href="/js/script.js">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=open_in_new" />
  <script>window.onload = function () { window.scrollTo(0, 0); }; const github = 'https://github.com/MaxWhitten'; function redirect(url) { window.location.href = url };</script>
</head>

<body>
  <div id="loadingWrapper">
    <div id="init">
      <div></div>
    </div>
    <div id="canvasContainer" style="display: none;">
      <canvas id="loadingCanvas"></canvas>
    </div>
  </div>
  <script src="/js/home/load.js" type="module"></script>
  <div id="wrapper" style="display: none;">
    <div id="section1">
      <div class="star-wrapper">
        <div class='stars'></div>
        <div class='stars2'></div>
        <div class='stars3'></div>
      </div>
      <div id="banner-canvas-wrapper">
        <canvas id="banner-canvas" style="display: none;"></canvas>
      </div>
      <nav id="upper">
        <ul>
          <li><a class="active" href="/">Home</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/blog">Blog</a></li>
          <li style="float: right;"><img id="github" title="github" alt="github" src="/media/github.png"
              onclick="redirect(github)">
          </li>
          <li style="float:right"><a href="#about">Buy Me a Coffee</a></li>
        </ul>
      </nav>
      <div id="banner">
        <header>
          <div id="bannertxt">
            <h2>ECLYPSE</h2>
            <!-- <h4>Making Stupid Stuff Since 2021</h4> -->
          </div>
        </header>
        <!-- <nav id="lower">
          <ul>
            <li class="active" onclick="changeDisplayMode('featured')" id="latest">
              <div class="container"><a>Latest</a></div>
              <div class="bg"></div>
            </li>
            <li onclick="changeDisplayMode('latest')" id="featured">
              <div class="container"><a>Featured</a></div>
              <div class="bg"></div>
            </li>
          </ul>
        </nav> -->
        <!-- <div id="moon-wrapper">
    <div id="orbit-circle">
      <object type="image/svg+xml" data="./media/svg/moon.svg" id="bgMoon"></object>
    </div>
    <div id="moon-mask"></div>
  </div> -->
      </div>
      <div id="arrowPrompt" onclick="window.scrollTo(0, window.innerHeight);">
        <svg id="arrowPromptSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363.64 533.73">
          <path
            d="M7.9,326.56h0c-10.54,10.54-10.54,27.62,0,38.15l165.52,165.52c4.66,4.66,12.23,4.66,16.89,0l165.43-165.43c10.57-10.57,10.53-27.72-.09-38.24l-.2-.2c-10.55-10.45-27.57-10.41-38.07.09l-94.59,94.63c-5.5,5.5-14.9,1.61-14.9-6.17l.03-387.92C207.93,12.09,195.84,0,180.93,0h0c-14.91,0-27,12.09-27,27v386.67c0,7.78-9.41,11.67-14.91,6.16l-92.94-93.23c-10.53-10.56-27.64-10.58-38.18-.03Z"
            style="fill: #fff;" />
        </svg>
      </div>
      <div id="hamburger">
        <nav id="navbar" class="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <button onclick="menuCheck()" id="moonContainer">
          </button>
          <nav class="menu1">
            <a class="link1" href="">Our Models</a>
            <a class="link1" href="">Specialties</a>
            <a class="link1" href="">About</a>
            <a class="link1" href="">Blog</a>
            <a class="lin1 kbutton-nav" href="">Contact</a>
          </nav>
        </nav>
      </div>
    </div>
    <div class="section" id="about">
      <div id="about-canvas-wrapper">
        <canvas id="about-canvas"></canvas>
      </div>
      <h1>hi, <strong>I'm <span>Max</span></strong></h1>
      <div class="one">
        <p>I like to make stuff of all shapes, sizes, and mediums</p>
      </div>
      <div class="two">
        <p>I'm a web dev (obviously), I'm a guitarist, an SVG artist, and a woodworker (kinda)</p>
      </div>
      <div class="three">
        <p>Just because I'm only a highschool sophmore doesn't mean you should underestimate me 🤓</p>
      </div>
    </div>
    <div class="section" id="projects">
      <div class="star-wrapper">
        <div class='stars'></div>
        <div class='stars2'></div>
        <div class='stars3'></div>
      </div>
      <div id="card-wrapper">
        <div class="card" id="card1">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card2">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card3">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card4">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card5">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card6">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="blog">
      <div id="postWrapper">
        <h1>Lorem Ipsum Dolor</h1>
        <div class="meta">
          <img src="/media/favicon.png">
          <p>Max Whitten</p>
          <div></div>
          <p>11.2.24</p>
        </div>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus magnis amet condimentum, penatibus finibus per.
          Tincidunt id dolor natoque aptent proin. Felis penatibus pretium laoreet nam tristique. Taciti aenean lacus
          tellus aptent nunc. Taciti parturient nibh eu efficitur erat curae blandit sagittis! Magna convallis venenatis
          eget nulla sollicitudin! Cras magna penatibus enim pellentesque sit tristique semper est. Inceptos sodales nam
          nunc posuere habitant nisi. Morbi nostra feugiat, hendrerit inceptos dapibus justo tristique ultricies.</p>
        <p>Ligula nunc montes, nascetur libero vulputate urna. Nec fusce donec sagittis porttitor tincidunt sociosqu
          molestie. Primis aliquam in ligula lacinia risus semper; interdum facilisis. Taciti penatibus elementum id mi
          viverra nam. Nunc suscipit tellus magna eleifend, hendrerit mauris. Iaculis eget dolor class luctus fames
          senectus. Vestibulum parturient conubia venenatis hac dictum nam.</p>
        <p>Mollis rutrum egestas aliquet justo phasellus arcu. Laoreet vel sollicitudin, curae luctus lacus convallis.
          Auctor neque sit accumsan adipiscing, efficitur diam. Class fermentum arcu fermentum dignissim fusce varius.
          Gravida massa himenaeos ut facilisi dui rhoncus; nulla rhoncus. Felis volutpat volutpat velit pellentesque
          sodales faucibus ridiculus. Fusce auctor molestie lacus duis ridiculus fermentum lectus. Commodo ligula
          feugiat quisque eget urna volutpat. Sodales nisi ultrices enim rhoncus duis, arcu orci fringilla sapien.</p>
        <p>Hendrerit nullam inceptos molestie ad at natoque rutrum euismod. Sit placerat est tempor curae felis mattis
          efficitur. Sit maximus natoque arcu aptent nibh. Libero justo enim dapibus est sociosqu maximus. Vel mattis
          lobortis vivamus arcu iaculis. Sit vulputate nulla venenatis aptent tempus lectus mollis. Vitae dictum nec
          maximus at tempor tempus placerat class. Tortor curabitur fusce porta ornare in quisque id feugiat tempor.</p>
        <p>Odio elit class non, ullamcorper natoque purus faucibus. Odio elit placerat fringilla velit orci platea erat
          nec. Nisi dignissim quisque eleifend nunc egestas efficitur massa metus viverra. Vel eleifend placerat nullam
          aptent placerat maximus auctor convallis. Nullam urna quis potenti orci ligula vivamus. Montes ornare urna dis
          velit nullam mollis suspendisse mauris. Et aliquet natoque natoque; porttitor auctor per.</p>
      </div>
      <div id="postFilter">
        <div id="readMore" onclick="redirect('/blog/post/')">
          <p>Read More</p>
          <span class="material-symbols-outlined">
            open_in_new
          </span>
        </div>
      </div>
    </div>
    <footer>
      <h1>© Maxwell Whitten 2024</h1>
      <!-- <object type="image/svg+xml" data="./media/svg/moon.svg" id="bgMoon"></object> -->
      <div class="moon"></div>
    </footer>
  </div>
  <script src="/js/home/home.js" type="module"></script>
</body>

</html>`);
    } else { // WITHOUT animations
        res.send(`<!-- <!DOCTYPE html> -->
<html lang="en">

<head>
  <title>Eclypse</title>
  <link rel="icon" type="image/x-icon" href="./media/favicon.png">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="./css/main.css">
  <link rel="stylesheet" href="/css/stars.css">
  <link rel="stylesheet" href="/css/moon.css">
  <!-- <link rel="stylesheet" href="./css/700.css"> -->
  <link rel="preconnect" href="/js/script.js">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=open_in_new" />
  <script>const github = 'https://github.com/MaxWhitten'; function redirect(url) { window.location.href = url };</script>
</head>

<body>
  <div id="wrapper">
    <div id="section1">
      <div class="star-wrapper">
        <div class='stars'></div>
        <div class='stars2'></div>
        <div class='stars3'></div>
      </div>
      <div id="banner-canvas-wrapper">
        <canvas id="banner-canvas" style="display: none;"></canvas>
      </div>
      <nav id="upper">
        <ul>
          <li><a class="active" href="/">Home</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/blog">Blog</a></li>
          <li style="float: right;"><img id="github" title="github" alt="github" src="/media/github.png"
              onclick="redirect(github)">
          </li>
          <li style="float:right"><a href="#about">Buy Me a Coffee</a></li>
        </ul>
      </nav>
      <div id="banner">
        <header>
          <div id="bannertxt">
            <h2>ECLYPSE</h2>
            <!-- <h4>Making Stupid Stuff Since 2021</h4> -->
          </div>
        </header>
        <!-- <nav id="lower">
          <ul>
            <li class="active" onclick="changeDisplayMode('featured')" id="latest">
              <div class="container"><a>Latest</a></div>
              <div class="bg"></div>
            </li>
            <li onclick="changeDisplayMode('latest')" id="featured">
              <div class="container"><a>Featured</a></div>
              <div class="bg"></div>
            </li>
          </ul>
        </nav> -->
        <!-- <div id="moon-wrapper">
    <div id="orbit-circle">
      <object type="image/svg+xml" data="./media/svg/moon.svg" id="bgMoon"></object>
    </div>
    <div id="moon-mask"></div>
  </div> -->
      </div>
      <div id="arrowPrompt" onclick="window.scrollTo(0, window.innerHeight);">
        <svg id="arrowPromptSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363.64 533.73">
          <path
            d="M7.9,326.56h0c-10.54,10.54-10.54,27.62,0,38.15l165.52,165.52c4.66,4.66,12.23,4.66,16.89,0l165.43-165.43c10.57-10.57,10.53-27.72-.09-38.24l-.2-.2c-10.55-10.45-27.57-10.41-38.07.09l-94.59,94.63c-5.5,5.5-14.9,1.61-14.9-6.17l.03-387.92C207.93,12.09,195.84,0,180.93,0h0c-14.91,0-27,12.09-27,27v386.67c0,7.78-9.41,11.67-14.91,6.16l-92.94-93.23c-10.53-10.56-27.64-10.58-38.18-.03Z"
            style="fill: #fff;" />
        </svg>
      </div>
      <div id="hamburger">
        <nav id="navbar" class="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <button onclick="menuCheck()" id="moonContainer">
          </button>
          <nav class="menu1">
            <a class="link1" href="">Our Models</a>
            <a class="link1" href="">Specialties</a>
            <a class="link1" href="">About</a>
            <a class="link1" href="">Blog</a>
            <a class="lin1 kbutton-nav" href="">Contact</a>
          </nav>
        </nav>
      </div>
    </div>
    <div class="section" id="about">
      <div id="about-canvas-wrapper">
        <canvas id="about-canvas"></canvas>
      </div>
      <h1>hi, <strong>I'm <span>Max</span></strong></h1>
      <div class="one">
        <p>I like to make stuff of all shapes, sizes, and mediums</p>
      </div>
      <div class="two">
        <p>I'm a web dev (obviously), I'm a guitarist, an SVG artist, and a woodworker (kinda)</p>
      </div>
      <div class="three">
        <p>Just because I'm only a highschool sophmore doesn't mean you should underestimate me 🤓</p>
      </div>
    </div>
    <div class="section" id="projects">
      <div class="star-wrapper">
        <div class='stars'></div>
        <div class='stars2'></div>
        <div class='stars3'></div>
      </div>
      <div id="card-wrapper">
        <div class="card" id="card1">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card2">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card3">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card4">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card5">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
        <div class="card" id="card6">
          <div class="card-border">
            <div class="card-bg"></div>
          </div>
          <div class="content">
            <div class="img"></div>
            <div class="overlay">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="blog">
      <div id="postWrapper">
        <h1>Lorem Ipsum Dolor</h1>
        <div class="meta">
          <img src="/media/favicon.png">
          <p>Max Whitten</p>
          <div></div>
          <p>11.2.24</p>
        </div>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus magnis amet condimentum, penatibus finibus per.
          Tincidunt id dolor natoque aptent proin. Felis penatibus pretium laoreet nam tristique. Taciti aenean lacus
          tellus aptent nunc. Taciti parturient nibh eu efficitur erat curae blandit sagittis! Magna convallis venenatis
          eget nulla sollicitudin! Cras magna penatibus enim pellentesque sit tristique semper est. Inceptos sodales nam
          nunc posuere habitant nisi. Morbi nostra feugiat, hendrerit inceptos dapibus justo tristique ultricies.</p>
        <p>Ligula nunc montes, nascetur libero vulputate urna. Nec fusce donec sagittis porttitor tincidunt sociosqu
          molestie. Primis aliquam in ligula lacinia risus semper; interdum facilisis. Taciti penatibus elementum id mi
          viverra nam. Nunc suscipit tellus magna eleifend, hendrerit mauris. Iaculis eget dolor class luctus fames
          senectus. Vestibulum parturient conubia venenatis hac dictum nam.</p>
        <p>Mollis rutrum egestas aliquet justo phasellus arcu. Laoreet vel sollicitudin, curae luctus lacus convallis.
          Auctor neque sit accumsan adipiscing, efficitur diam. Class fermentum arcu fermentum dignissim fusce varius.
          Gravida massa himenaeos ut facilisi dui rhoncus; nulla rhoncus. Felis volutpat volutpat velit pellentesque
          sodales faucibus ridiculus. Fusce auctor molestie lacus duis ridiculus fermentum lectus. Commodo ligula
          feugiat quisque eget urna volutpat. Sodales nisi ultrices enim rhoncus duis, arcu orci fringilla sapien.</p>
        <p>Hendrerit nullam inceptos molestie ad at natoque rutrum euismod. Sit placerat est tempor curae felis mattis
          efficitur. Sit maximus natoque arcu aptent nibh. Libero justo enim dapibus est sociosqu maximus. Vel mattis
          lobortis vivamus arcu iaculis. Sit vulputate nulla venenatis aptent tempus lectus mollis. Vitae dictum nec
          maximus at tempor tempus placerat class. Tortor curabitur fusce porta ornare in quisque id feugiat tempor.</p>
        <p>Odio elit class non, ullamcorper natoque purus faucibus. Odio elit placerat fringilla velit orci platea erat
          nec. Nisi dignissim quisque eleifend nunc egestas efficitur massa metus viverra. Vel eleifend placerat nullam
          aptent placerat maximus auctor convallis. Nullam urna quis potenti orci ligula vivamus. Montes ornare urna dis
          velit nullam mollis suspendisse mauris. Et aliquet natoque natoque; porttitor auctor per.</p>
      </div>
      <div id="postFilter">
        <div id="readMore" onclick="redirect('/blog/post/')">
          <p>Read More</p>
          <span class="material-symbols-outlined">
            open_in_new
          </span>
        </div>
      </div>
    </div>
    <footer>
      <h1>© Maxwell Whitten 2024</h1>
      <!-- <object type="image/svg+xml" data="./media/svg/moon.svg" id="bgMoon"></object> -->
      <div class="moon"></div>
    </footer>
  </div>
  <script src="/js/home/home.js" type="module"></script>
</body>

</html>`);
    }

});

module.exports = router;