
import BlogSection from './blog-section';
import AboutSummary from './about-summary';
import RecentProjects from './recent-projects';

const Dashboard = () => {
  // Top 3 projects (should match the most recent from projects list)
  // const projects = [
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
  const projects: any[] = [];

  return (
    <div className="container mx-auto px-4 pb-8">
      <AboutSummary />
      <hr className="my-8 border-t border-gray-300" />
      <RecentProjects projects={projects} />
      <hr className="my-8 border-t border-gray-300" />
      <BlogSection />
    </div>
  );
};
export default Dashboard;