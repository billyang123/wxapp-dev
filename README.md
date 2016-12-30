npm install -g labrador-cli@0.5.6
cd wxapp-dev
npm install


find path    /usr/local/lib/node_modules/labrador-cli/lib/minify-page.js
and update as 

    'use strict';

    const fs = require('fs');
    const path = require('path');
    const radix64 = require('radix64').radix64;
    const CleanCSS = require('clean-css');
    const util = require('./util');

    const distPath = path.join(process.cwd(), 'dist') + '/';
    const pagesPath = path.join(process.cwd(), 'dist/pages') + '/';

    let _id = 0;
    function createId() {
      _id++;
      let str = radix64(_id);
      if (/^[\d_-]/.test(str) || /[-_]$/.test(str)) {
        return createId();
      }
      return str;
    }

    function minifyApp(clsMap, clsMapReverse) {
      let file = distPath + 'app.wxss';
      if (!util.isFile(file)) {
        return;
      }
      let content = fs.readFileSync(file, 'utf8');
      let minified = new CleanCSS({ keepBreaks: false }).minify(content).styles;
      // minified = minified.replace(/([\n\,])\.([\w\d\_\-]+)/g, function (matchs, char, cls) {
      //   if (!clsMap[cls]) {
      //     let id = createId();
      //     clsMap[cls] = id;
      //     clsMapReverse[id] = cls;
      //   }
      //   return char + '.' + clsMap[cls];
      // });
      fs.writeFileSync(file, minified);
    }

    function findPages(dir) {
      let files = fs.readdirSync(dir);
      let res = [];
      for (let file of files) {
        let filePath = path.join(dir, file);
        if (util.isDirectory(filePath)) {
          res = res.concat(findPages(filePath));
          continue;
        }
        let info = path.parse(filePath);
        if (info.ext === '.wxml') {
          res.push({
            wxml: filePath,
            wxss: path.join(info.dir, info.name + '.wxss')
          });
        }
      }
      return res;
    }

    function minify(page, clsMap, clsMapReverse) {
