
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/home",
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/Contact-us"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 906, hash: '9f0453619e66ac2a06a69b86fef0cd98223e0003cee4ba3f06349f8b47053c31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1137, hash: 'e2ba31b7d5018d7b831e17539b5672bb871200eae0966a73b12326631f39b3d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23696, hash: '4766e205d71a34e15d1a79031aedcaf3a344688a287aa45bb2d929770d7b33d1', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'Contact-us/index.html': {size: 6809, hash: 'ad26fb5108656e71584da3180f497ce9dce646ac85fcfe011d1e44e796a89b2c', text: () => import('./assets-chunks/Contact-us_index_html.mjs').then(m => m.default)},
    'styles-2RDKBODY.css': {size: 418, hash: 'Tmq2sexAJPw', text: () => import('./assets-chunks/styles-2RDKBODY_css.mjs').then(m => m.default)}
  },
};
