### zUIx web, presentation and documentation site.

- https://zuixjs.org
- https://zuixjs.github.io/zuixjs.org


#### Development

This website is based on [zUIx Web Starter](https://github.com/zuixjs/zuix-web-starter).

1. `npm install` to install development dependencies and run the initial build
2. `npm start` to start local web server

website source files are located in the `./source` folder and are
generated in the `./docs` parent folder.
This setting can be changed by modifying the `./config/default.json`
and `./config/production.json` files.

To switch from development (*default*) to *production* config build:
```
export NODE_ENV=production
```
