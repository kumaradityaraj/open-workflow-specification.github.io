import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_D9nz8jw8.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kraj/projects/open-workflow-specification.github.io/","cacheDir":"file:///Users/kraj/projects/open-workflow-specification.github.io/node_modules/.astro/","outDir":"file:///Users/kraj/projects/open-workflow-specification.github.io/dist/","srcDir":"file:///Users/kraj/projects/open-workflow-specification.github.io/src/","publicDir":"file:///Users/kraj/projects/open-workflow-specification.github.io/public/","buildClientDir":"file:///Users/kraj/projects/open-workflow-specification.github.io/dist/","buildServerDir":"file:///Users/kraj/projects/open-workflow-specification.github.io/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"community/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/community","isIndex":false,"type":"page","pattern":"^\\/community\\/?$","segments":[[{"content":"community","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/community.astro","pathname":"/community","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.Es-voxWh.css"}],"routeData":{"route":"/spec/1.0.0/errors/[...id]","isIndex":false,"type":"page","pattern":"^\\/spec\\/1\\.0\\.0\\/errors(?:\\/(.*?))?\\/?$","segments":[[{"content":"spec","dynamic":false,"spread":false}],[{"content":"1.0.0","dynamic":false,"spread":false}],[{"content":"errors","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/spec/1.0.0/errors/[...id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://open-workflow-specification.org/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/blog/[group].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/community.astro",{"propagation":"none","containsHead":true}],["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/spec/1.0.0/errors/[...id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/spec/1.0.0/errors/[...id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/kraj/projects/open-workflow-specification.github.io/src/utils/collections.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[group]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/[group]@_@astro":"pages/blog/_group_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/community@_@astro":"pages/community.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/spec/1.0.0/errors/[...id]@_@astro":"pages/spec/1.0.0/errors/_---id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BREgBSQ6.mjs","/Users/kraj/projects/open-workflow-specification.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dvh3buk4.mjs","/Users/kraj/projects/open-workflow-specification.github.io/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/kraj/projects/open-workflow-specification.github.io/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_ip5aPg7y.mjs","/Users/kraj/projects/open-workflow-specification.github.io/src/components/OWSEditor":"_astro/OWSEditor.8QZwX7XF.js","@astrojs/react/client.js":"_astro/client.fU-bjJ84.js","/Users/kraj/projects/open-workflow-specification.github.io/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.gk57psKQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/kraj/projects/open-workflow-specification.github.io/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('input[name=\"code_tabs\"]').forEach(e=>{e.addEventListener(\"change\",()=>{setTimeout(()=>{const t=e.nextElementSibling;if(!t)return;const n=t.querySelector(\".react-flow__controls-fitview\");n instanceof HTMLElement&&n.click()},300)})});"]],"assets":["/_astro/_slug_.Es-voxWh.css","/_astro/index.DY7vup6m.css","/_headers","/_redirects","/_astro/OWSEditor.8QZwX7XF.js","/_astro/client.fU-bjJ84.js","/_astro/index.BW435vSx.js","/icons/android-icon-144x144.png","/icons/android-icon-192x192.png","/icons/android-icon-36x36.png","/icons/android-icon-48x48.png","/icons/android-icon-72x72.png","/icons/android-icon-96x96.png","/icons/apple-icon-114x114.png","/icons/apple-icon-120x120.png","/icons/apple-icon-144x144.png","/icons/apple-icon-152x152.png","/icons/apple-icon-180x180.png","/icons/apple-icon-57x57.png","/icons/apple-icon-60x60.png","/icons/apple-icon-72x72.png","/icons/apple-icon-76x76.png","/icons/apple-icon-precomposed.png","/icons/apple-icon.png","/icons/apple-touch-icon-180x180.png","/icons/browserconfig.xml","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/icons/favicon-96x96.png","/icons/favicon.ico","/icons/logo.svg","/icons/manifest.json","/icons/ms-icon-144x144.png","/icons/ms-icon-150x150.png","/icons/ms-icon-310x310.png","/icons/ms-icon-70x70.png","/img/banners/banner1.jpg","/img/banners/banner2.jpg","/img/banners/placeholder-1.png","/img/logos/caf.png","/img/logos/cncf-color-bg.svg","/img/logos/cncf-white-logo.svg","/img/logos/eventmesh.png","/img/logos/eventmesh2.png","/img/logos/faasnet.png","/img/logos/foxflow.svg","/img/logos/huawei.png","/img/logos/huawei.svg","/img/logos/lemlinelogo.png","/img/logos/lf-stacked-color.svg","/img/logos/lf-stacked-white.svg","/img/logos/neuroglia.png","/img/logos/quarkusflow.png","/img/logos/redhat.svg","/img/logos/redhat_reverse.svg","/img/logos/sonataflowlogo.png","/img/logos/sw-logo.png","/img/logos/synapselogo.png","/img/logos/temporal.png","/img/logos/warrify.png","/img/logos/zigflowlogo.png","/schemas/0.5/common.json","/schemas/0.5/events.json","/schemas/0.5/functions.json","/schemas/0.5/retries.json","/schemas/0.5/workflow.json","/schemas/0.6/common.json","/schemas/0.6/events.json","/schemas/0.6/functions.json","/schemas/0.6/retries.json","/schemas/0.6/workflow.json","/schemas/0.9/auth.json","/schemas/0.9/common.json","/schemas/0.9/errors.json","/schemas/0.9/events.json","/schemas/0.9/functions.json","/schemas/0.9/odata.json","/schemas/0.9/retries.json","/schemas/0.9/secrets.json","/schemas/0.9/timeouts.json","/schemas/0.9/workflow.json","/schemas/0.9/workflowextensions.json","/schemas/0.7/auth.json","/schemas/0.7/common.json","/schemas/0.7/errors.json","/schemas/0.7/events.json","/schemas/0.7/functions.json","/schemas/0.7/odata.json","/schemas/0.7/retries.json","/schemas/0.7/secrets.json","/schemas/0.7/timeouts.json","/schemas/0.7/workflow.json","/schemas/0.8/auth.json","/schemas/0.8/common.json","/schemas/0.8/errors.json","/schemas/0.8/events.json","/schemas/0.8/functions.json","/schemas/0.8/odata.json","/schemas/0.8/retries.json","/schemas/0.8/secrets.json","/schemas/0.8/timeouts.json","/schemas/0.8/workflow.json","/schemas/1.0.0/workflow.json","/schemas/1.0.0/workflow.yaml","/schemas/1.0.0-alpha1/workflow.json","/schemas/1.0.0-alpha2/workflow.json","/schemas/1.0.0-alpha2/workflow.yaml","/schemas/1.0.0-alpha3/workflow.json","/schemas/1.0.0-alpha3/workflow.yaml","/schemas/1.0.0-alpha4/workflow.json","/schemas/1.0.0-alpha4/workflow.yaml","/schemas/1.0.0-alpha5/workflow.json","/schemas/1.0.0-alpha5/workflow.yaml","/schemas/1.0.1/workflow.json","/schemas/1.0.1/workflow.yaml","/schemas/1.0.3/workflow.json","/schemas/1.0.3/workflow.yaml","/schemas/0.5/extensions/kpi.json","/schemas/0.6/extensions/kpi.json","/schemas/0.9/extensions/kpi.json","/schemas/0.9/extensions/ratelimiting.json","/schemas/0.7/extensions/kpi.json","/schemas/0.7/extensions/ratelimiting.json","/schemas/0.8/extensions/kpi.json","/schemas/0.8/extensions/ratelimiting.json","/blog/index.html","/community/index.html","/robots.txt","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"9CXcZJg5Mi+tDA49UKNQP8TxjUqNj4CZejUS8VRM9Vc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
