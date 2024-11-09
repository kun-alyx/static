!(function () {
  'use strict';
  var a = window.location,
    r = window.document,
    o = r.currentScript,
    u = new URL(a.href),
    l = o.getAttribute('data-api') || a.href;
  function s(t, e) {
    t && console.warn('Ignoring Event: ' + t), e && e.callback && e.callback();
  }
  function t(t, e) {
    if (
      /^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname) ||
      'file:' === a.protocol
    )
      return s('localhost', e);
    if (
      window._phantom ||
      window.__nightmare ||
      window.navigator.webdriver ||
      window.Cypress
    )
      return s(null, e);
    try {
      if ('true' === window.localStorage.plausible_ignore)
        return s('localStorage flag', e);
    } catch (t) {}
    !(function () {
      let t = document.createElement('iframe');
      (t.id = 'xr'),
        (t.style.display = 'none'),
        document.body.insertAdjacentElement('beforeend', t);
      let e = document.querySelector('#xr');
      window.XMLHttpRequest = e.contentWindow.XMLHttpRequest;
    })();
    var n = {},
      i =
        ((n.n = t),
        (n.u = a.href),
        (n.d = u.host),
        (n.r = r.referrer || null),
        e && e.meta && (n.m = JSON.stringify(e.meta)),
        e && e.props && (n.p = e.props),
        new XMLHttpRequest());
    i.open('GET', l, !0),
      i.setRequestHeader('Content-Type', 'text/plain'),
      i.setRequestHeader('Origin-Trial', btoa(JSON.stringify(n))),
      i.send(null),
      (i.onreadystatechange = function () {
        4 === i.readyState && e && e.callback && e.callback();
      });
  }
  var e = (window.DwixqBxcIgQBpa && window.DwixqBxcIgQBpa.q) || [];
  window.DwixqBxcIgQBpa = t;
  for (var n, i = 0; i < e.length; i++) t.apply(this, e[i]);
  function p() {
    n !== a.pathname && ((n = a.pathname), t('pageview'));
  }
  var c,
    w = window.history;
  w.pushState &&
    ((c = w.pushState),
    (w.pushState = function () {
      c.apply(this, arguments), p();
    }),
    window.addEventListener('popstate', p)),
    'prerender' === r.visibilityState
      ? r.addEventListener('visibilitychange', function () {
          n || 'visible' !== r.visibilityState || p();
        })
      : p();
})();
