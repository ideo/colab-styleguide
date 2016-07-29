'use strict'

const exec = require('child_process').exec;

const cssMinify =   `cat ` +
                    `public/banners.css ` +
                    `public/base.css ` +
                    `public/colors.css ` +
                    `public/forms.css ` +
                    `public/grid.css ` +
                    `public/icons.css ` +
                    `public/images.css ` +
                    `public/molecules.css ` +
                    `public/navigation.css ` +
                    `public/typography.css ` +
                    // `| cleancss -o dist/css/colab-styleguide.min.css ` + // playing around with the api
                    `| cleancss > dist/css/colab-styleguide.min.css `


exec(cssMinify, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
