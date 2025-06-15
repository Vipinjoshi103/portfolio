
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio_app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio_app/home",
    "route": "/portfolio_app"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_app/Contact-us"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_app/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 910, hash: '55d9d8c7393711210ffc21c447df3ac7580818fe8158df545290559312195f1c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1141, hash: 'a7ae266cbccc01a388b9f94cbb4c2ca777004373bbc5e71f5cf17b977100e9aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23704, hash: 'e1cc92de5304142a868936a517227f2bd3c6527a862372a77ba6fa550092841a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'Contact-us/index.html': {size: 6817, hash: '7f54d7266276d9c35e6f8f8fd83231f86b59af5840b4f4cae2258c16a64fba9b', text: () => import('./assets-chunks/Contact-us_index_html.mjs').then(m => m.default)},
    'styles-2RDKBODY.css': {size: 418, hash: 'Tmq2sexAJPw', text: () => import('./assets-chunks/styles-2RDKBODY_css.mjs').then(m => m.default)}
  },
};
