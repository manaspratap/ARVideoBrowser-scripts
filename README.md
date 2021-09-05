<p align="center">
  <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/manaspratap/ARVideoBrowser-scripts.svg?style=for-the-badge"/>
  </a>
  <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/network/members">
    <img alt="Forks" src="https://img.shields.io/github/forks/manaspratap/ARVideoBrowser-scripts.svg?style=for-the-badge"/>
  </a>
  <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/graphs/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/manaspratap/ARVideoBrowser-scripts.svg?style=for-the-badge"/>
  </a>
  <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/manaspratap/ARVideoBrowser-scripts.svg?style=for-the-badge"/>
  </a>
  <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/blob/master/LICENSE.txt">
    <img alt="MIT License" src="https://img.shields.io/github/license/manaspratap/ARVideoBrowser-scripts.svg?style=for-the-badge"/>
  </a>
  <br />
   <a href="https://www.buymeacoffee.com/manaspratap">
    <img alt="Buy Me A Coffee" src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/>
  </a>
   <a href="https://www.linkedin.com/in/manaspratapthakur">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
   <a href="https://twitter.com/TheManasPratap">
    <img alt="Twitter" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>
  </a>
</p>

<br />
<p align="center">
  <h1 align="center">ARVideoBrowser-scripts</h1>

  <p align="center">
    Returns an URL for a search query!
    <br />
    <a href="https://github.com/manaspratap/ARVideoBrowser-scripts"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://www.youtube.com/watch?v=MATql-chz2Y">View Demo</a>
    ·
    <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/issues">Report Bug</a>
    ·
    <a href="https://github.com/manaspratap/ARVideoBrowser-scripts/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#-about-the-project">About The Project</a>
      <ul>
        <li><a href="#arvideobrowser">ARVideoBrowser</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#-usage">Usage</a></li>
    <li><a href="#-roadmap">Roadmap</a></li>
    <li><a href="#-contributing">Contributing</a></li>
    <li><a href="#-license">License</a></li>
  </ol>
</details>

## 🏠 About The Project

ARVideoBrowser-script is a service that will return an URL to play a video for the searched query. At this moment, it uses YouTube as a database of videos.

### ARVideoBrowser

ARVideoBrowser-scripts is a part of this magic:

<p align="center">
  <img src="ARVideoBrowser-working.gif" alt="ARVideoBrowser-working" width="150" height="300">
</p>

And this is **ARVideoBrowser**, which is an augmented reality video browser. In this application, you can use the microphone to query for a video using voice. The ARVideoBrowser will then play a video for that voice query. For more details on this, explore [ARVideoBrowser](https://github.com/manaspratap/ARVideoBrowser).

### Built With

[Node.js](https://nodejs.org): A JavaScript runtime built on Chrome's V8 JavaScript engine.

## 🏃 Getting Started

To get a local copy up and running, follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:manaspratap/ARVideoBrowser-scripts.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## ✨ Usage

Once you have this application running:

- Start the server

```sh
  npm start
```

- Send a GET request to the path: **/video**
- With the parameter: **name**
- And the value: **your+search+word**

So, `{{url}}/video?name=your+search+word` will then return an URL for the search query.

It is also available here:

<a href="https://ar-video-browser-scripts.herokuapp.com">
<img alt="ARVideoBrowser-scripts Deployed" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</a>

## 🗺 Roadmap

See the [open issues](https://github.com/manaspratap/ARVideoBrowser-scripts/issues) for a list of proposed features (and known issues).

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<br />

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/manaspratap)
