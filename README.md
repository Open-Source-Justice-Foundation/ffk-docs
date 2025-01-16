<div align="center"><p>
    <h1>Foundation Formation Kit Docs ⚖️</h1>
    <a href="https://github.com/Open-Source-Justice-Foundation/ffk-docs/pulse">
      <img alt="Last commit" src="https://img.shields.io/github/last-commit/Open-Source-Justice-Foundation/ffk-docs?style=for-the-badge&logo=starship&color=8bd5ca&logoColor=D9E0EE&labelColor=302D41"/>
    </a>
    <a href="https://github.com/Open-Source-Justice-Foundation/ffk-docs/stargazers">
      <img alt="Stars" src="https://img.shields.io/github/stars/Open-Source-Justice-Foundation/ffk-docs?style=for-the-badge&logo=starship&color=c69ff5&logoColor=D9E0EE&labelColor=302D41" />
    </a>
    <a href="https://github.com/Open-Source-Justice-Foundation/ffk-docs/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/Open-Source-Justice-Foundation/ffk-docs?style=for-the-badge&logo=bilibili&color=F5E0DC&logoColor=D9E0EE&labelColor=302D41" />
    </a>
    <a href="https://github.com/Open-Source-Justice-Foundation/ffk-docs">
      <img alt="Repo size" src="https://img.shields.io/github/repo-size/Open-Source-Justice-Foundation/ffk-docs?color=%23DDB6F2&label=SIZE&logo=codesandbox&style=for-the-badge&logoColor=D9E0EE&labelColor=302D41" />
    </a>
</div>

## Contribute

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
