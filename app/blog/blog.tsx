const blogPosts = [
  {
    title: "How I Built My Portfolio with React & Vite",
    summary: "A walkthrough of the tech stack and design decisions behind this site.",
    link: "#",
    date: "2025-06-20",
  },
  {
    title: "Integrating AI into My Dev Workflow",
    summary: "How I use AI tools to boost productivity and code quality.",
    link: "#",
    date: "2025-06-10",
  },
  {
    title: "Lessons Learned from My First 10 Projects",
    summary: "Reflections on growth, mistakes, and best practices as a self-taught developer.",
    link: "#",
    date: "2025-05-30",
  },
];

const Blog = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Blog</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {blogPosts.map((post) => (
          <div key={post.title} className="bg-emerald-50 rounded-lg shadow-lg p-4">
            <a href={post.link} className="text-xl font-semibold text-accent hover:underline">{post.title}</a>
            <p className="text-secondary text-base mb-2">{post.summary}</p>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Blog;