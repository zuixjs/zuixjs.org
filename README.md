### zUIx web, presentation and documentation site.

- https://zuixjs.org
- https://zuixjs.github.io/zuixjs.org


#### Development

This website is based on [zUIx Web Starter](https://github.com/zuixjs/zuix-web-starter).

1. `npm install` to install development dependencies
2. `npm start` to start local web server
3. `npm run watch` to watch file tree for changes and auto-rebuild
4. `npm run build` to manually build the files

website source files are located in the `./source` folder and are
generated in the `./docs` parent folder.
This setting can be changed by modifying the `./config/default.json`
and `./config/production.json` files.

To switch from development (*default*) to *production* config build:
```
export NODE_ENV=production
```


###### Resources and Docs

- zUIx https://zuixjs.org
- zUIx Web Starter https://github.com/zuixjs/zuix-web-starter
- Static Site https://github.com/paulcpederson/static-site
