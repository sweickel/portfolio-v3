import { Link } from 'react-router-dom';

export interface Project {
  title: string;
  description: string;
  link: string;
}

const RecentProjects = ({ projects }: { projects: Project[] }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-primary text-center">Recent Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="bg-emerald-50 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold text-primary mb-1">{project.title}</h3>
          <p className="text-secondary mb-2">{project.description}</p>
          <a
            href={project.link}
            className="inline-block bg-primary text-background px-4 py-2 rounded hover:bg-secondary transition-colors"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
    <div className="text-center mt-6">
      <Link
        to="/projects"
        className="inline-block bg-black text-white text-background px-4 py-2 rounded-4xl hover:bg-secondary transition-colors"
      >
        See all projects
      </Link>
    </div>
  </section>
);

export default RecentProjects;
