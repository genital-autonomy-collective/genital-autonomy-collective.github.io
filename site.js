var Metalsmith  = require('metalsmith');
var markdown    = require('@metalsmith/markdown');
var layouts     = require('@metalsmith/layouts');

Metalsmith(__dirname)
  .metadata({
    title: "Genital Autonomy Collective",
    generator: "Metalsmith",
    url: "http://autonomycollective.org"
  })
  .source('./source')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(layouts({
    "default": "main.hbs",
    "pattern": "**/*.html"
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
