/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as Layout2Import } from './routes/_layout2'
import { Route as LayoutImport } from './routes/_layout'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as StatusStatusImport } from './routes/_status/status'
import { Route as Layout2ChildOfLayout2Import } from './routes/_layout2/ChildOfLayout2'
import { Route as LayoutChildOfLayoutImport } from './routes/_layout/ChildOfLayout'
import { Route as AboutAboutImport } from './routes/_about/about'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const Layout2Route = Layout2Import.update({
  id: '/_layout2',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PostsIndexRoute = PostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

const StatusStatusRoute = StatusStatusImport.update({
  path: '/status',
  getParentRoute: () => rootRoute,
} as any)

const Layout2ChildOfLayout2Route = Layout2ChildOfLayout2Import.update({
  path: '/ChildOfLayout2',
  getParentRoute: () => Layout2Route,
} as any)

const LayoutChildOfLayoutRoute = LayoutChildOfLayoutImport.update({
  path: '/ChildOfLayout',
  getParentRoute: () => LayoutRoute,
} as any)

const AboutAboutRoute = AboutAboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout2': {
      id: '/_layout2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof Layout2Import
      parentRoute: typeof rootRoute
    }
    '/_about/about': {
      id: '/_about/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutAboutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/ChildOfLayout': {
      id: '/_layout/ChildOfLayout'
      path: '/ChildOfLayout'
      fullPath: '/ChildOfLayout'
      preLoaderRoute: typeof LayoutChildOfLayoutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout2/ChildOfLayout2': {
      id: '/_layout2/ChildOfLayout2'
      path: '/ChildOfLayout2'
      fullPath: '/ChildOfLayout2'
      preLoaderRoute: typeof Layout2ChildOfLayout2Import
      parentRoute: typeof Layout2Import
    }
    '/_status/status': {
      id: '/_status/status'
      path: '/status'
      fullPath: '/status'
      preLoaderRoute: typeof StatusStatusImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  LayoutRoute: LayoutRoute.addChildren({ LayoutChildOfLayoutRoute }),
  Layout2Route: Layout2Route.addChildren({ Layout2ChildOfLayout2Route }),
  AboutAboutRoute,
  StatusStatusRoute,
  PostsPostIdRoute,
  PostsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/_layout2",
        "/_about/about",
        "/_status/status",
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/ChildOfLayout"
      ]
    },
    "/_layout2": {
      "filePath": "_layout2.tsx",
      "children": [
        "/_layout2/ChildOfLayout2"
      ]
    },
    "/_about/about": {
      "filePath": "_about/about.tsx"
    },
    "/_layout/ChildOfLayout": {
      "filePath": "_layout/ChildOfLayout.tsx",
      "parent": "/_layout"
    },
    "/_layout2/ChildOfLayout2": {
      "filePath": "_layout2/ChildOfLayout2.tsx",
      "parent": "/_layout2"
    },
    "/_status/status": {
      "filePath": "_status/status.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx"
    },
    "/posts/": {
      "filePath": "posts.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
