const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/components/*.vue', './public/index.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [require('tailwindcss'), purgecss, require('cssnano')]
};
