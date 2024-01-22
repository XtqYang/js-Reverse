"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[3478], {
  29334: function (e, t, a) {
    a.r(t), a.d(t, {
      assets: function () {
        return p;
      },
      contentTitle: function () {
        return i;
      },
      default: function () {
        return d;
      },
      frontMatter: function () {
        return o;
      },
      metadata: function () {
        return l;
      },
      toc: function () {
        return s;
      }
    });
    var n = cc11001100_hook("n", a(25773), "var-init"),
        r = cc11001100_hook("r", (a(27378), a(35318)), "var-init");
    const o = cc11001100_hook("o", {
      layout: cc11001100_hook("layout", "post", "object-key-init"),
      title: cc11001100_hook("title", "7.22.0 Released: Explicit Resource Management support and Import Attributes parsing", "object-key-init"),
      author: cc11001100_hook("author", "Babel Team", "object-key-init"),
      authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
      date: cc11001100_hook("date", new Date("2023-05-26T00:00:00.000Z"), "object-key-init"),
      categories: cc11001100_hook("categories", "announcements", "object-key-init"),
      share_text: cc11001100_hook("share_text", "Babel 7.22.0 Released", "object-key-init")
    }, "var-init"),
          i = cc11001100_hook("i", void 0, "var-init"),
          l = cc11001100_hook("l", {
      permalink: cc11001100_hook("permalink", "/blog/2023/05/26/7.22.0", "object-key-init"),
      source: cc11001100_hook("source", "@site/blog/2023-05-26-7.22.0.md", "object-key-init"),
      title: cc11001100_hook("title", "7.22.0 Released: Explicit Resource Management support and Import Attributes parsing", "object-key-init"),
      description: cc11001100_hook("description", "Babel 7.22.0 is out, with parsing/transform support for the Explicit Resource Management proposal, including both the sync and async variants, and with parsing support for the Import Attributes (an evolution of the old Import Assertions proposal).", "object-key-init"),
      date: cc11001100_hook("date", "2023-05-26T00:00:00.000Z", "object-key-init"),
      formattedDate: cc11001100_hook("formattedDate", "2023\u5e745\u670826\u65e5", "object-key-init"),
      tags: cc11001100_hook("tags", [], "object-key-init"),
      readingTime: cc11001100_hook("readingTime", 5.045, "object-key-init"),
      hasTruncateMarker: cc11001100_hook("hasTruncateMarker", !0, "object-key-init"),
      authors: cc11001100_hook("authors", [{
        name: cc11001100_hook("name", "Babel Team", "object-key-init"),
        url: cc11001100_hook("url", "https://twitter.com/babeljs", "object-key-init")
      }], "object-key-init"),
      frontMatter: {
        layout: cc11001100_hook("layout", "post", "object-key-init"),
        title: cc11001100_hook("title", "7.22.0 Released: Explicit Resource Management support and Import Attributes parsing", "object-key-init"),
        author: cc11001100_hook("author", "Babel Team", "object-key-init"),
        authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
        date: cc11001100_hook("date", "2023-05-26T00:00:00.000Z", "object-key-init"),
        categories: cc11001100_hook("categories", "announcements", "object-key-init"),
        share_text: cc11001100_hook("share_text", "Babel 7.22.0 Released", "object-key-init")
      },
      nextItem: {
        title: cc11001100_hook("title", "7.21.0 Released: Inline RegExp modifiers, TypeScript 5.0, and Decorators updates", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2023/02/20/7.21.0", "object-key-init")
      }
    }, "var-init"),
          p = cc11001100_hook("p", {
      authorsImageUrls: cc11001100_hook("authorsImageUrls", [void 0], "object-key-init")
    }, "var-init"),
          s = cc11001100_hook("s", [{
      value: cc11001100_hook("value", "Highlights", "object-key-init"),
      id: cc11001100_hook("id", "highlights", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "Explicit Resource Management (#15633, #15520)", "object-key-init"),
      id: cc11001100_hook("id", "explicit-resource-management-15633-15520", "object-key-init"),
      level: cc11001100_hook("level", 3, "object-key-init")
    }, {
      value: cc11001100_hook("value", "Import Attributes (#15536, #15620)", "object-key-init"),
      id: cc11001100_hook("id", "import-attributes-15536-15620", "object-key-init"),
      level: cc11001100_hook("level", 3, "object-key-init")
    }, {
      value: cc11001100_hook("value", "Decorators updates (#15570)", "object-key-init"),
      id: cc11001100_hook("id", "decorators-updates-15570", "object-key-init"),
      level: cc11001100_hook("level", 3, "object-key-init")
    }, {
      value: cc11001100_hook("value", "TypeScript <code>import ... =</code> and <code>export =</code> statements", "object-key-init"),
      id: cc11001100_hook("id", "typescript-import---and-export--statements", "object-key-init"),
      level: cc11001100_hook("level", 3, "object-key-init")
    }, {
      value: cc11001100_hook("value", "Renamed packages", "object-key-init"),
      id: cc11001100_hook("id", "renamed-packages", "object-key-init"),
      level: cc11001100_hook("level", 3, "object-key-init")
    }], "var-init"),
          m = cc11001100_hook("m", {
      toc: cc11001100_hook("toc", s, "object-key-init")
    }, "var-init"),
          c = cc11001100_hook("c", "wrapper", "var-init");

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        components: t,
        ...a
      } = cc11001100_hook("", e, "var-init");
      return (0, r.kt)(c, (0, n.Z)({}, m, a, {
        components: cc11001100_hook("components", t, "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "MDXLayout", "object-key-init")
      }), (0, r.kt)("p", null, "Babel 7.22.0 is out, with parsing/transform support for the ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-explicit-resource-management", "object-key-init")
      }, "Explicit Resource Management"), " proposal, including both the sync and async variants, and with parsing support for the ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-import-attributes", "object-key-init")
      }, "Import Attributes"), " (an evolution of the old ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "http://web.archive.org/web/20220930084518/https://github.com/tc39/proposal-import-assertions", "object-key-init")
      }, "Import Assertions"), " proposal)."), (0, r.kt)("p", null, "We also updated our implementation of ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-decorators/", "object-key-init")
      }, "decorators"), " following some changes in the proposal, and added support for the TypeScript ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "import ... ="), " and ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "export ... ="), " statements."), (0, r.kt)("p", null, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/preset-env"), " now includes transform support for the ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "v"), " regular expressions flag, which was recently approved as part of the ECMAScript standard, by default. Lastly, we renamed all the plugins for ", (0, r.kt)("em", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "stable"), " ECMAScript features from ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "-proposal-"), " to ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "-transform-"), "."), (0, r.kt)("p", null, "You can read the whole changelog ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/releases/tag/v7.22.0", "object-key-init")
      }, "on GitHub"), "."), (0, r.kt)("p", null, "If you or your company want to support Babel and the evolution of JavaScript, but aren't sure how, you can donate to us on our ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel?sponsor=1", "object-key-init")
      }, "Open Collective"), " and, better yet, work with us on the implementation of ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/proposals", "object-key-init")
      }, "new ECMAScript proposals"), " directly! As a volunteer-driven project, we rely on the community's support to fund our efforts in supporting the wide range of JavaScript users. Reach out at ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "mailto:team@babeljs.io", "object-key-init")
      }, "team@babeljs.io"), " if you'd like to discuss more!"), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "highlights", "object-key-init")
      }, "Highlights"), (0, r.kt)("h3", {
        id: cc11001100_hook("id", "explicit-resource-management-15633-15520", "object-key-init")
      }, "Explicit Resource Management (", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/pull/15633", "object-key-init")
      }, "#15633"), ", ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/pull/15520", "object-key-init")
      }, "#15520"), ")"), (0, r.kt)("p", null, "The ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-explicit-resource-management/", "object-key-init")
      }, "Explicit Resource Management"), ' Stage 3 proposal allows defining variables containing resources that will be "disposed" when exiting the scope where they are declared. This is done through ', (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "using"), " (for synchronous disposal) and ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "await using"), " (for asynchronous disposal) declarations:"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, '{\n  using fileHandle = filesystem.open("./my/file.txt");\n\n  write(fileHandle, "Hello!");\n} // At the end of the block, fileHandle will be automatically closed.\n')), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, "{\n  await using db = await Database.connect(\"//my-db.sql\");\n  db.query(\"INSERT INTO tools (name, version) VALUES ('Babel', '7.22.0')\");\n} // At the end of the block, the db connection will be closed asynchronously\n")), (0, r.kt)("p", null, "You can enable support for this proposal by adding ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/plugin-proposal-explicit-resource-management"), " to your Babel config:"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-json", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="babel.config.json"', "object-key-init"),
        title: cc11001100_hook("title", '"babel.config.json"', "object-key-init")
      }, ' {\n   "plugins": [\n     "@babel/plugin-proposal-explicit-resource-management"\n   ]\n }\n')), (0, r.kt)("p", null, "You can also ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=N4KABGCuDOCWB2BzMAzWAbApgCQIbwBMswBeVDTaAT2gBdMBbAOgHsAHTeACgCImB6BlX5osTWgA9aPAJQBucGADuAJ1j0uonPiKYANGB7ZM6dCwCEshQF8QIUBFxLc6qHCRgCAI1JgnL2jAAEVxaXC9caEwmAGMWeHhMGNpefkEqAFpvJmgAR3QrRWzcyEwVKl4ASQA5AGUAUQAlABUwGuaAeTBaFhZ0aDAueFwGfTAANzK4eJkwADUAQQAZAFV62sGAcgAhcJNNg02AdiYAJlOmAAZNmULrIA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.22.0&externalPlugins=%40babel%2Fplugin-proposal-explicit-resource-management%407.20.0&assumptions=%7B%7D", "object-key-init")
      }, "try out this proposal in our REPL"), "."), (0, r.kt)("h3", {
        id: cc11001100_hook("id", "import-attributes-15536-15620", "object-key-init")
      }, "Import Attributes (", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/pull/15536", "object-key-init")
      }, "#15536"), ", ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/pull/15620", "object-key-init")
      }, "#15620"), ")"), (0, r.kt)("p", null, 'The "import assertions" proposal\'s syntax changed to use the ', (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "with"), " keyword instead of ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "assert"), ', and it has also been renamed to "import attributes":'), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, 'import json from "./foo.json" with { type: "json" };\n\nimport("./foo.json", { with: { type: "json" } });\n')), (0, r.kt)("p", null, "We've implemented parsing support for this new version of the proposal, which can be enabled using the ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/plugin-syntax-import-attributes"), " plugin (or, if you are directly using ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/parser"), ", ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "importAttributes"), "):"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-diff", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="babel.config.json"', "object-key-init"),
        title: cc11001100_hook("title", '"babel.config.json"', "object-key-init")
      }, ' {\n   "plugins": [\n-    "@babel/syntax-import-assertions",\n+    "@babel/syntax-import-attributes"\n   ]\n }\n')), (0, r.kt)("p", null, "You can read more about the changes to the proposal in the ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://docs.google.com/presentation/d/1Abdr54Iflz_4sah2_yX2qS3K09qDJGV84qIZ6pHAqIk/edit", "object-key-init")
      }, "slides presented at the March TC39 meeting"), ", and about the motivation in the ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://docs.google.com/presentation/d/1HbWhyo4tSnpv4vMZqCa2YQvi_mKdpDi4JWWBtSUQqQY", "object-key-init")
      }, "slides presented at the January TC39 meeting"), "."), (0, r.kt)("admonition", {
        type: cc11001100_hook("type", "caution", "object-key-init")
      }, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "admonition", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/plugin-syntax-import-assertions"), " will continue working until we release Babel 8.0.0, but will no longer be maintained, so we highly recommended migrating to the new plugin.")), (0, r.kt)("p", null, "To ease the migration from ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "with"), " to ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "assert"), ", if you run the Babel-compiled code only in tools and runtimes that support the legacy syntax but do not support yet the new one (such as Node.js 20 or Rollup 3.21), you can use the ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/plugin-proposal-import-attributes-to-assertions"), ":"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-diff", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="babel.config.json"', "object-key-init"),
        title: cc11001100_hook("title", '"babel.config.json"', "object-key-init")
      }, ' {\n   "plugins": [\n-    "@babel/syntax-import-assertions",\n+    "@babel/plugin-proposal-import-attributes-to-assertions"\n   ]\n }\n')), (0, r.kt)("blockquote", null, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "blockquote", "object-key-init")
      }, "\ud83d\uded1 Note that this plugin generates deprecated code that will not work in tools and runtimes only supporting the ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "with"), " syntax now described by the proposal.")), (0, r.kt)("h3", {
        id: cc11001100_hook("id", "decorators-updates-15570", "object-key-init")
      }, "Decorators updates (", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/pull/15570", "object-key-init")
      }, "#15570"), ")"), (0, r.kt)("p", null, "The TC39 committee received further feedback by JavaScript tools and engines implementing decorators, and refined the proposal, and designed ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-decorators/issues/499", "object-key-init")
      }, "different changes and bugfixes"), " in response to it."), (0, r.kt)("p", null, "The relevant changes for Babel users are:"), (0, r.kt)("ul", null, (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "accessor"), " static fields now work with derived classes:"), (0, r.kt)("pre", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, "class Base {\n  static accessor x = 2;\n}\nclass Derived extends Base {}\n\nDerived.x; // Used to throw, now returns `2`\n"))), (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, "Decorators stored in object properties are now called using the object as ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "this"), " instead of ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "undefined"), ":"), (0, r.kt)("pre", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, "let MyDecs = {\n  dec() {\n    console.log(this); // Now logs `MyDecs` instead of `undefined`\n  }\n};\n\n@MyDecs.dec class {}\n")))), (0, r.kt)("p", null, "You can use this new decorators version by passing the ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, 'version: "2023-05"'), " option to the decorators plugin:"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-json", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="babel.config.json"', "object-key-init"),
        title: cc11001100_hook("title", '"babel.config.json"', "object-key-init")
      }, ' {\n   "plugins": [\n     ["@babel/plugin-proposal-decorators", {\n       "version": "2023-05"\n     }]\n   ]\n }\n')), (0, r.kt)("p", null, "You can also try using the new version of the proposal ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYGwhgzhAEBCkFNoG8BQ1oQC5iwS2GjGGASgHsAnaAD2gF5oAmAblQF9VVRIYARBJTwA3BABNoCGlgQA7MTHgQkyTgKGixAOhpA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.22.0&externalPlugins=%40babel%2Fplugin-proposal-decorators%407.21.0&assumptions=%7B%7D", "object-key-init")
      }, "in our REPL"), ', enabling the "Stage 3" preset and choosing the appropriate decorators version.'), (0, r.kt)("h3", {
        id: cc11001100_hook("id", "typescript-import---and-export--statements", "object-key-init")
      }, "TypeScript ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init")
      }, "import ... ="), " and ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "h3", "object-key-init")
      }, "export ="), " statements"), (0, r.kt)("p", null, "When using the TypeScript ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "a", "object-key-init")
      }, "verbatimModuleSyntax")), " option, ESM ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "import"), "/", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "export"), " statements are disallowed in CommonJS files. Instead, developers must use the ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "import ... ="), " and ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "export ="), " statements:"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-ts", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="TypeScript"', "object-key-init"),
        title: cc11001100_hook("title", '"TypeScript"', "object-key-init")
      }, 'import A = require("./a");\n\nexport = { x: 2 };\n')), (0, r.kt)("p", null, "which desugar to:"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, 'const A = require("./a");\n\nmodule.exports = { x: 2 };\n')), (0, r.kt)("p", null, "This syntax is only supported in ECMAScript modules, and only when compiling them to CommonJS. Unless you have some custom configuration, this means:"), (0, r.kt)("ul", null, (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, "in ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, ".cts"), " files, when using ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, "@babel/preset-typescript")), (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, "in ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, ".ts"), " files written as ESM and compiled with ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init")
      }, "@babel/plugin-transform-modules-commonjs"))), (0, r.kt)("h3", {
        id: cc11001100_hook("id", "renamed-packages", "object-key-init")
      }, "Renamed packages"), (0, r.kt)("p", null, "From now on, we will rename ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "-proposal-"), " plugins to ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "-transform-"), " once they reach Stage 4 in the ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://tc39.es/process-document/", "object-key-init")
      }, "standardization process"), " and thus become stable. The following packages have been renamed:"), (0, r.kt)("table", null, (0, r.kt)("thead", {
        parentName: cc11001100_hook("parentName", "table", "object-key-init")
      }, (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "thead", "object-key-init")
      }, (0, r.kt)("th", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "Old name"), (0, r.kt)("th", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "New name"), (0, r.kt)("th", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ECMAScript version"))), (0, r.kt)("tbody", {
        parentName: cc11001100_hook("parentName", "table", "object-key-init")
      }, (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-unicode-sets-regex")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-unicode-sets-regex")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2024")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-class-static-block")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-class-static-block")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2022")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-private-property-in-object")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-private-property-in-object")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2022")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-class-properties")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-class-properties")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2022")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-private-methods")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-private-methods")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      })), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-numeric-separator")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-numeric-separator")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2021")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-logical-assignment-operators")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-logical-assignment-operators")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2021")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-nullish-coalescing-operator")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-nullish-coalescing-operator")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2020")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-optional-chaining")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-optional-chaining")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2020")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-export-namespace-from")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-export-namespace-from")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2020")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-json-strings")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-json-strings")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2019")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-optional-catch-binding")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-optional-catch-binding")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2019")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-async-generator-functions")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-async-generator-functions")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2018")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-object-rest-spread")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-object-rest-spread")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2018")), (0, r.kt)("tr", {
        parentName: cc11001100_hook("parentName", "tbody", "object-key-init")
      }, (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-proposal-unicode-property-regex")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "td", "object-key-init")
      }, "@babel/plugin-transform-unicode-property-regex")), (0, r.kt)("td", {
        parentName: cc11001100_hook("parentName", "tr", "object-key-init"),
        align: cc11001100_hook("align", "center", "object-key-init")
      }, "ES2018")))), (0, r.kt)("p", null, "These plugins are all included by default in ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/preset-env"), ": if you are using the preset, you don't need to explicitly list them in your configuration and thus this change will not affect you. The packages with the old name will no longer be updated."));
    }

    d.isMDXComponent = cc11001100_hook("d.isMDXComponent", !0, "assign");
  },
  35318: function (e, t, a) {
    a.d(t, {
      Zo: function () {
        return m;
      },
      kt: function () {
        return g;
      }
    });
    var n = cc11001100_hook("n", a(27378), "var-init");

    function r(e, t, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", a, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", a, "assign"), e;
    }

    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var a = cc11001100_hook("a", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), a.push.apply(a, n);
      }

      return a;
    }

    function i(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var a = cc11001100_hook("a", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? o(Object(a), !0).forEach(function (t) {
          r(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function l(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var a,
          n,
          r = cc11001100_hook("r", function (e, t) {
        if (null == e) return {};
        var a,
            n,
            r = cc11001100_hook("r", {}, "var-init"),
            o = cc11001100_hook("o", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < o.length; n++) a = cc11001100_hook("a", o[n], "assign"), t.indexOf(a) >= 0 || (r[a] = cc11001100_hook("r[a]", e[a], "assign"));

        return r;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var o = cc11001100_hook("o", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < o.length; n++) a = cc11001100_hook("a", o[n], "assign"), t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = cc11001100_hook("r[a]", e[a], "assign"));
      }

      return r;
    }

    var p = cc11001100_hook("p", n.createContext({}), "var-init"),
        s = function (e) {
      var t = cc11001100_hook("t", n.useContext(p), "var-init"),
          a = cc11001100_hook("a", t, "var-init");
      return e && (a = cc11001100_hook("a", "function" == typeof e ? e(t) : i(i({}, t), e), "assign")), a;
    },
        m = function (e) {
      var t = cc11001100_hook("t", s(e.components), "var-init");
      return n.createElement(p.Provider, {
        value: cc11001100_hook("value", t, "object-key-init")
      }, e.children);
    },
        c = cc11001100_hook("c", "mdxType", "var-init"),
        d = cc11001100_hook("d", {
      inlineCode: cc11001100_hook("inlineCode", "code", "object-key-init"),
      wrapper: function (e) {
        var t = cc11001100_hook("t", e.children, "var-init");
        return n.createElement(n.Fragment, {}, t);
      }
    }, "var-init"),
        u = cc11001100_hook("u", n.forwardRef(function (e, t) {
      var a = cc11001100_hook("a", e.components, "var-init"),
          r = cc11001100_hook("r", e.mdxType, "var-init"),
          o = cc11001100_hook("o", e.originalType, "var-init"),
          p = cc11001100_hook("p", e.parentName, "var-init"),
          m = cc11001100_hook("m", l(e, ["components", "mdxType", "originalType", "parentName"]), "var-init"),
          c = cc11001100_hook("c", s(a), "var-init"),
          u = cc11001100_hook("u", r, "var-init"),
          g = cc11001100_hook("g", c["".concat(p, ".").concat(u)] || c[u] || d[u] || o, "var-init");
      return a ? n.createElement(g, i(i({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, m), {}, {
        components: cc11001100_hook("components", a, "object-key-init")
      })) : n.createElement(g, i({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, m));
    }), "var-init");

    function g(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var a = cc11001100_hook("a", arguments, "var-init"),
          r = cc11001100_hook("r", t && t.mdxType, "var-init");

      if ("string" == typeof e || r) {
        var o = cc11001100_hook("o", a.length, "var-init"),
            i = cc11001100_hook("i", new Array(o), "var-init");
        i[0] = cc11001100_hook("i[0]", u, "assign");
        var l = cc11001100_hook("l", {}, "var-init");

        for (var p in t) hasOwnProperty.call(t, p) && (l[p] = cc11001100_hook("l[p]", t[p], "assign"));

        l.originalType = cc11001100_hook("l.originalType", e, "assign"), l[c] = cc11001100_hook("l[c]", "string" == typeof e ? e : r, "assign"), i[1] = cc11001100_hook("i[1]", l, "assign");

        for (var s = cc11001100_hook("s", 2, "var-init"); s < o; s++) i[s] = cc11001100_hook("i[s]", a[s], "assign");

        return n.createElement.apply(null, i);
      }

      return n.createElement.apply(null, a);
    }

    u.displayName = cc11001100_hook("u.displayName", "MDXCreateElement", "assign");
  }
}]);