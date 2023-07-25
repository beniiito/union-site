import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { f as deserializeManifest } from './chunks/astro.c2afd273.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.9ec93d1b.mjs');
const _page1  = () => import('./chunks/costumbres@_@astro.57ec4484.mjs');
const _page2  = () => import('./chunks/acercade@_@astro.e01a8117.mjs');
const _page3  = () => import('./chunks/historia@_@astro.f7577473.mjs');
const _page4  = () => import('./chunks/hoteles@_@astro.4a7ea535.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/costumbres.astro", _page1],["src/pages/acercade.astro", _page2],["src/pages/historia.astro", _page3],["src/pages/hoteles.astro", _page4]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/union-site/_astro/hoisted.99227d61.js"}],"styles":[{"type":"external","src":"/union-site/_astro/acercade.851680b2.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/union-site/_astro/hoisted.d0c55403.js"}],"styles":[{"type":"external","src":"/union-site/_astro/acercade.851680b2.css"}],"routeData":{"route":"/costumbres","type":"page","pattern":"^\\/costumbres\\/?$","segments":[[{"content":"costumbres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/costumbres.astro","pathname":"/costumbres","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/union-site/_astro/hoisted.1f46bfd9.js"}],"styles":[{"type":"external","src":"/union-site/_astro/acercade.851680b2.css"}],"routeData":{"route":"/acercade","type":"page","pattern":"^\\/acercade\\/?$","segments":[[{"content":"acercade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acercade.astro","pathname":"/acercade","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/union-site/_astro/hoisted.1f46bfd9.js"}],"styles":[{"type":"external","src":"/union-site/_astro/acercade.851680b2.css"}],"routeData":{"route":"/historia","type":"page","pattern":"^\\/historia\\/?$","segments":[[{"content":"historia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/historia.astro","pathname":"/historia","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/union-site/_astro/hoisted.1f46bfd9.js"}],"styles":[{"type":"external","src":"/union-site/_astro/acercade.851680b2.css"}],"routeData":{"route":"/hoteles","type":"page","pattern":"^\\/hoteles\\/?$","segments":[[{"content":"hoteles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hoteles.astro","pathname":"/hoteles","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://beniiito.github.io","base":"/union-site/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["C:/Users/blopez/Documents/Repositorio/union-site/src/pages/acercade.astro",{"propagation":"none","containsHead":true}],["C:/Users/blopez/Documents/Repositorio/union-site/src/pages/costumbres.astro",{"propagation":"none","containsHead":true}],["C:/Users/blopez/Documents/Repositorio/union-site/src/pages/historia.astro",{"propagation":"none","containsHead":true}],["C:/Users/blopez/Documents/Repositorio/union-site/src/pages/hoteles.astro",{"propagation":"none","containsHead":true}],["C:/Users/blopez/Documents/Repositorio/union-site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/costumbres.astro":"chunks/pages/costumbres.astro.4dcd340a.mjs","/src/pages/historia.astro":"chunks/pages/historia.astro.0e5d73e7.mjs","/src/pages/hoteles.astro":"chunks/pages/hoteles.astro.f03fc2e3.mjs","/src/pages/index.astro":"chunks/pages/index.astro.770a566d.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.9ec93d1b.mjs","\u0000@astro-page:src/pages/costumbres@_@astro":"chunks/costumbres@_@astro.57ec4484.mjs","\u0000@astro-page:src/pages/acercade@_@astro":"chunks/acercade@_@astro.e01a8117.mjs","\u0000@astro-page:src/pages/historia@_@astro":"chunks/historia@_@astro.f7577473.mjs","\u0000@astro-page:src/pages/hoteles@_@astro":"chunks/hoteles@_@astro.4a7ea535.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.99227d61.js","/astro/hoisted.js?q=2":"_astro/hoisted.d0c55403.js","/astro/hoisted.js?q=1":"_astro/hoisted.1f46bfd9.js","astro:scripts/before-hydration.js":""},"assets":["/union-site/_astro/acercade.851680b2.css","/union-site/atardecer.jpeg","/union-site/camino.jpeg","/union-site/campo.jpeg","/union-site/campo2.jpeg","/union-site/favicon.svg","/union-site/home.svg","/union-site/mar.jpeg","/union-site/mar2.jpeg","/union-site/mar3.jpeg","/union-site/molino.jpeg","/union-site/palacio.jpeg","/union-site/people.svg","/union-site/persona.svg","/union-site/torito.jpeg","/union-site/venta.jpeg","/union-site/venta.svg","/union-site/_astro/hoisted.1f46bfd9.js","/union-site/_astro/hoisted.99227d61.js","/union-site/_astro/hoisted.d0c55403.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };