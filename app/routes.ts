import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
  route("contact", "routes/contact.tsx"), route("about", "routes/about.tsx"), route("projects", "routes/projects.tsx"), route("blog", "routes/blog.tsx"),
] satisfies RouteConfig;
