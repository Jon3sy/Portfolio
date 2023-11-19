import { useState, useEffect } from "react";
import axios from "axios";

const Allprojects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('./projectsCube.json')
      .then((res) => {
        setProjects(res.data.projectsCube);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function getFeaturedImage(projects){
        if (projects) {
            return `https://via.placeholder.com/150`;
        }
        else{
            return 'https://via.placeholder.com/150';
        }
    }
 
const Projects = ({ projects, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="content-container">
        {projects.map((project, index) => (
          <div key={index} className="project-container" style={
            {backgroundColor: `${project.backgroundColor}`}}>
            <img src={project.Image} alt="" />
            <h2 className="Project-name">{project.Name}</h2>
            <p className="short-desc">{project.Short_Description}</p>
            <a href={`#/projects/${project.id}`}>read more</a>
          </div>
        ))}
      </div>
    );
  }
};



  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
}

export default Allprojects;
