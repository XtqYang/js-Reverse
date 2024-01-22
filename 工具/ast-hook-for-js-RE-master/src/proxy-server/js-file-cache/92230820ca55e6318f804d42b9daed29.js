(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const pathname = cc11001100_hook("pathname", window.document.location.pathname, "var-init");

    if (pathname.indexOf("/repl") != -1) {
      document.body.setAttribute("data-repl", "");
    }
  });
})();