interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <div className="bg-primary rounded-lg shadow-lg p-4">
    <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-secondary mb-4">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View Project</a>
  </div>
);

const Projects = () => {
  const projects: ProjectCardProps[] = [];
  // [
  //   {
  //     title: "Old Project 1",
  //     description: "A beginner project from my early coding days, showcasing basic HTML/CSS skills.",
  //     link: "#",
  //   },
  //   {
  //     title: "Old Project 2",
  //     description: "An early JavaScript app demonstrating DOM manipulation and event handling.",
  //     link: "#",
  //   },
  //   {
  //     title: "Crypto Dashboard (New)",
  //     description: "A React app with live crypto data and interactive charts using Chart.js.",
  //     link: "#",
  //   },
  //   {
  //     title: "Task Management API (New)",
  //     description: "A Node.js REST API with MongoDB, paired with a React front-end.",
  //     link: "#",
  //   },
  //   {
  //     title: "Book Recommender (New)",
  //     description: "A React app with a simulated AI recommendation system for books.",
  //     link: "#",
  //   },
  // ];

  return (
    <section className="py-20 bg-background pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}; export default Projects;