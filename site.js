var Metalsmith = require('metalsmith');
var markdown = require('@metalsmith/markdown');
var layouts = require('@metalsmith/layouts');
const toc = require('@metalsmith/table-of-contents')
var headingsIdentifier = require("metalsmith-headings-identifier");
var inPlace = require('@metalsmith/in-place');

Metalsmith(__dirname)
    .metadata({
        sitename: "Genital Autonomy Collective",
        siteurl: "https://genital-autonomy-collective.github.io",
        generatorname: "Metalsmith",
        generatorurl: "https://metalsmith.io/"
    })
    .source('./source')
    .destination('./build')
    .clean(false)
    .use(toc())
    .use(inPlace({ transform: "handlebars", extname: null }))
    .use(markdown())
    .use(layouts({
        "default": "main.hbs",
        "pattern": "**/*.html"
    }))
    .build(function(err, files) {
        if (err) { throw err; }
    });
