module.exports = {
  opts: {
    readme: './README.md',
    package: './package.json',
    template: './node_modules/jsdoc-fresh',
    recurse: true,
    verbose: true,
    destination: './docs/'
  },
  plugins: [
    'plugins/markdown',
    'jsdoc-region-tag'
  ],
  source: {
    include: [
      './dist/lib/http-status.esm.js',
    ],
  },
  templates: {
    includeDate: false,
    sourceFiles: false,
    theme: 'lumen',
    default: {
      outputSourceFiles: false
    }
  },
  markdown: {
    idInHeadings: true
  }
};
