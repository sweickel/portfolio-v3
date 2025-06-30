import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  summary: string;
  link: string;
  date: string;
}

const blogPosts: BlogPost[] = [];
//  [
//   {
//     title: "How I Built My Portfolio with React & Vite",
//     summary: "A walkthrough of the tech stack and design decisions behind this site.",
//     link: "#",
//     date: "2025-06-20",
//   },
//   {
//     title: "Integrating AI into My Dev Workflow",
//     summary: "How I use AI tools to boost productivity and code quality.",
//     link: "#",
//     date: "2025-06-10",
//   },
//   {
//     title: "Lessons Learned from My First 10 Projects",
//     summary: "Reflections on growth, mistakes, and best practices as a self-taught developer.",
//     link: "#",
//     date: "2025-05-30",
//   },
// ];

const BlogSection = () => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4 text-primary text-center">Latest Blog Posts</h2>
    <div className="space-y-4">
      {blogPosts.map((post) => (
        <div key={post.title} className="bg-emerald-50 rounded-lg shadow-lg p-4">
          <a
            href={post.link}
            className="text-lg font-semibold">
            {post.title}
          </a>
          <p className="text-secondary text-sm mb-1">{post.summary}</p>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
      ))}
    </div>
    <div className="text-center mt-6">
      <Link
        to="/blog"
        className="inline-block bg-black text-white text-background px-4 py-2 rounded-4xl hover:bg-secondary transition-colors"
      >
        More blog posts
      </Link>
    </div>
  </section>
);

export default BlogSection;
