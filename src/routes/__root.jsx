import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts
} from "@tanstack/react-router";
import { Toaster } from "../components/ui/sonner";
import appCss from "../styles.css?url";
function NotFoundComponent() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex min-h-screen items-center justify-center bg-background px-4" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-md text-center" }, /* @__PURE__ */ React.createElement("h1", { className: "text-7xl font-bold text-foreground" }, "404"), /* @__PURE__ */ React.createElement("h2", { className: "mt-4 text-xl font-semibold text-foreground" }, "Page not found"), /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-sm text-muted-foreground" }, "The page you're looking for doesn't exist or has been moved."), /* @__PURE__ */ React.createElement("div", { className: "mt-6" }, /* @__PURE__ */ React.createElement(
    Link,
    {
      to: "/",
      className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    },
    "Go home"
  ))));
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ React.createElement("div", { className: "flex min-h-screen items-center justify-center bg-background px-4" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-md text-center" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-semibold tracking-tight text-foreground" }, "This page didn't load"), /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-sm text-muted-foreground" }, "Something went wrong on our end. You can try refreshing or head back home."), /* @__PURE__ */ React.createElement("div", { className: "mt-6 flex flex-wrap justify-center gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        router.invalidate();
        reset();
      },
      className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    },
    "Try again"
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "/",
      className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
    },
    "Go home"
  ))));
}
const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prashant Kumawat \u2014 Front-End Developer Portfolio" },
      {
        name: "description",
        content: "Portfolio of Prashant Kumawat, a front-end developer crafting responsive, user-focused web experiences with React, JavaScript, and modern CSS."
      },
      { name: "author", content: "Prashant Kumawat" },
      { property: "og:title", content: "Prashant Kumawat \u2014 Front-End Developer" },
      {
        property: "og:description",
        content: "Crafting the web, one pixel at a time. React, JavaScript, HTML, CSS and UI/UX from Pune, India."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ React.createElement("html", { lang: "en" }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(HeadContent, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(Scripts, null)));
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return /* @__PURE__ */ React.createElement(QueryClientProvider, { client: queryClient }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(Toaster, { duration: 6000 }));
}
export {
  Route
};
