import {
  require_react_dom
} from "./chunk-UP6LQVYV.js";
import {
  Action,
  Await,
  BrowserRouter,
  DataRouterContext,
  DataRouterStateContext,
  ErrorResponseImpl,
  FetchersContext,
  Form,
  FrameworkContext,
  HashRouter,
  HistoryRouter,
  IDLE_BLOCKER,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  Link,
  Links,
  LocationContext,
  MemoryRouter,
  Meta,
  NavLink,
  Navigate,
  NavigationContext,
  Outlet,
  PrefetchPageLinks,
  RemixErrorBoundary,
  Route,
  RouteContext,
  Router,
  RouterProvider,
  Routes,
  Scripts,
  ScrollRestoration,
  ServerMode,
  ServerRouter,
  SingleFetchRedirectSymbol,
  StaticRouter,
  StaticRouterProvider,
  ViewTransitionContext,
  createBrowserHistory,
  createBrowserRouter,
  createClientRoutes,
  createClientRoutesWithHMRRevalidationOptOut,
  createCookie,
  createCookieSessionStorage,
  createHashRouter,
  createMemoryRouter,
  createMemorySessionStorage,
  createPath,
  createRequestHandler,
  createRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  createRoutesStub,
  createSearchParams,
  createSession,
  createSessionStorage,
  createStaticHandler2,
  createStaticRouter,
  data,
  decodeViaTurboStream,
  deserializeErrors2,
  generatePath,
  getPatchRoutesOnNavigationFunction,
  getSingleFetchDataStrategy,
  invariant,
  isCookie,
  isRouteErrorResponse,
  isSession,
  mapRouteProperties,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  redirectDocument,
  renderMatches,
  replace,
  resolvePath,
  setDevServerHooks,
  shouldHydrateRouteLoader,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useBeforeUnload,
  useBlocker,
  useFetcher,
  useFetchers,
  useFogOFWarDiscovery,
  useFormAction,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  usePrompt,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useScrollRestoration,
  useSearchParams,
  useSubmit,
  useViewTransitionState
} from "./chunk-ZY72HOMP.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/react-router/dist/development/dom-export.mjs
var React = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var React2 = __toESM(require_react(), 1);
function RouterProvider2(props) {
  return React.createElement(RouterProvider, { flushSync: ReactDOM.flushSync, ...props });
}
var ssrInfo = null;
var router = null;
function initSsrInfo() {
  if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
    ssrInfo = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: false
    };
  }
}
function createHydratedRouter() {
  var _a;
  initSsrInfo();
  if (!ssrInfo) {
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  }
  let localSsrInfo = ssrInfo;
  if (!ssrInfo.stateDecodingPromise) {
    let stream = ssrInfo.context.stream;
    invariant(stream, "No stream found for single fetch decoding");
    ssrInfo.context.stream = void 0;
    ssrInfo.stateDecodingPromise = decodeViaTurboStream(stream, window).then((value) => {
      ssrInfo.context.state = value.value;
      localSsrInfo.stateDecodingPromise.value = true;
    }).catch((e) => {
      localSsrInfo.stateDecodingPromise.error = e;
    });
  }
  if (ssrInfo.stateDecodingPromise.error) {
    throw ssrInfo.stateDecodingPromise.error;
  }
  if (!ssrInfo.stateDecodingPromise.value) {
    throw ssrInfo.stateDecodingPromise;
  }
  let routes = createClientRoutes(
    ssrInfo.manifest.routes,
    ssrInfo.routeModules,
    ssrInfo.context.state,
    ssrInfo.context.isSpaMode
  );
  let hydrationData = void 0;
  if (!ssrInfo.context.isSpaMode) {
    hydrationData = {
      ...ssrInfo.context.state,
      loaderData: { ...ssrInfo.context.state.loaderData }
    };
    let initialMatches = matchRoutes(
      routes,
      window.location,
      (_a = window.__reactRouterContext) == null ? void 0 : _a.basename
    );
    if (initialMatches) {
      for (let match of initialMatches) {
        let routeId = match.route.id;
        let route = ssrInfo.routeModules[routeId];
        let manifestRoute = ssrInfo.manifest.routes[routeId];
        if (route && manifestRoute && shouldHydrateRouteLoader(
          manifestRoute,
          route,
          ssrInfo.context.isSpaMode
        ) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
          delete hydrationData.loaderData[routeId];
        } else if (manifestRoute && !manifestRoute.hasLoader) {
          hydrationData.loaderData[routeId] = null;
        }
      }
    }
    if (hydrationData && hydrationData.errors) {
      hydrationData.errors = deserializeErrors2(hydrationData.errors);
    }
  }
  let router2 = createRouter({
    routes,
    history: createBrowserHistory(),
    basename: ssrInfo.context.basename,
    hydrationData,
    mapRouteProperties,
    dataStrategy: getSingleFetchDataStrategy(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      () => router2
    ),
    patchRoutesOnNavigation: getPatchRoutesOnNavigationFunction(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.isSpaMode,
      ssrInfo.context.basename
    )
  });
  ssrInfo.router = router2;
  if (router2.state.initialized) {
    ssrInfo.routerInitialized = true;
    router2.initialize();
  }
  router2.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
  createClientRoutesWithHMRRevalidationOptOut;
  window.__reactRouterDataRouter = router2;
  return router2;
}
function HydratedRouter() {
  if (!router) {
    router = createHydratedRouter();
  }
  let [criticalCss, setCriticalCss] = React2.useState(
    true ? ssrInfo == null ? void 0 : ssrInfo.context.criticalCss : void 0
  );
  if (true) {
    if (ssrInfo) {
      window.__reactRouterClearCriticalCss = () => setCriticalCss(void 0);
    }
  }
  let [location, setLocation] = React2.useState(router.state.location);
  React2.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
      ssrInfo.routerInitialized = true;
      ssrInfo.router.initialize();
    }
  }, []);
  React2.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router) {
      return ssrInfo.router.subscribe((newState) => {
        if (newState.location !== location) {
          setLocation(newState.location);
        }
      });
    }
  }, [location]);
  invariant(ssrInfo, "ssrInfo unavailable for HydratedRouter");
  useFogOFWarDiscovery(
    router,
    ssrInfo.manifest,
    ssrInfo.routeModules,
    ssrInfo.context.isSpaMode
  );
  return (
    // This fragment is important to ensure we match the <ServerRouter> JSX
    // structure so that useId values hydrate correctly
    React2.createElement(React2.Fragment, null, React2.createElement(
      FrameworkContext.Provider,
      {
        value: {
          manifest: ssrInfo.manifest,
          routeModules: ssrInfo.routeModules,
          future: ssrInfo.context.future,
          criticalCss,
          isSpaMode: ssrInfo.context.isSpaMode
        }
      },
      React2.createElement(RemixErrorBoundary, { location }, React2.createElement(RouterProvider2, { router }))
    ), React2.createElement(React2.Fragment, null))
  );
}
export {
  Await,
  BrowserRouter,
  Form,
  HashRouter,
  HydratedRouter,
  IDLE_BLOCKER,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  Link,
  Links,
  MemoryRouter,
  Meta,
  NavLink,
  Navigate,
  Action as NavigationType,
  Outlet,
  PrefetchPageLinks,
  Route,
  Router,
  RouterProvider2 as RouterProvider,
  Routes,
  Scripts,
  ScrollRestoration,
  ServerRouter,
  StaticRouter,
  StaticRouterProvider,
  DataRouterContext as UNSAFE_DataRouterContext,
  DataRouterStateContext as UNSAFE_DataRouterStateContext,
  ErrorResponseImpl as UNSAFE_ErrorResponseImpl,
  FetchersContext as UNSAFE_FetchersContext,
  FrameworkContext as UNSAFE_FrameworkContext,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RemixErrorBoundary as UNSAFE_RemixErrorBoundary,
  RouteContext as UNSAFE_RouteContext,
  ServerMode as UNSAFE_ServerMode,
  SingleFetchRedirectSymbol as UNSAFE_SingleFetchRedirectSymbol,
  ViewTransitionContext as UNSAFE_ViewTransitionContext,
  createBrowserHistory as UNSAFE_createBrowserHistory,
  createClientRoutes as UNSAFE_createClientRoutes,
  createClientRoutesWithHMRRevalidationOptOut as UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  createRouter as UNSAFE_createRouter,
  decodeViaTurboStream as UNSAFE_decodeViaTurboStream,
  deserializeErrors2 as UNSAFE_deserializeErrors,
  getPatchRoutesOnNavigationFunction as UNSAFE_getPatchRoutesOnNavigationFunction,
  getSingleFetchDataStrategy as UNSAFE_getSingleFetchDataStrategy,
  invariant as UNSAFE_invariant,
  mapRouteProperties as UNSAFE_mapRouteProperties,
  shouldHydrateRouteLoader as UNSAFE_shouldHydrateRouteLoader,
  useFogOFWarDiscovery as UNSAFE_useFogOFWarDiscovery,
  useScrollRestoration as UNSAFE_useScrollRestoration,
  createBrowserRouter,
  createCookie,
  createCookieSessionStorage,
  createHashRouter,
  createMemoryRouter,
  createMemorySessionStorage,
  createPath,
  createRequestHandler,
  createRoutesFromChildren,
  createRoutesFromElements,
  createRoutesStub,
  createSearchParams,
  createSession,
  createSessionStorage,
  createStaticHandler2 as createStaticHandler,
  createStaticRouter,
  data,
  generatePath,
  isCookie,
  isRouteErrorResponse,
  isSession,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  redirectDocument,
  renderMatches,
  replace,
  resolvePath,
  HistoryRouter as unstable_HistoryRouter,
  setDevServerHooks as unstable_setDevServerHooks,
  usePrompt as unstable_usePrompt,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useBeforeUnload,
  useBlocker,
  useFetcher,
  useFetchers,
  useFormAction,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useSearchParams,
  useSubmit,
  useViewTransitionState
};
/*! Bundled license information:

react-router/dist/development/dom-export.mjs:
  (**
   * react-router v7.0.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.0.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=react-router-dom.js.map