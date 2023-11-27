import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import axios from 'axios';

const ProjectDetail = () => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('./projectsCube.json')
      .then((res) => {
        setProject(res.data.projectsCube);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!project) {
    return <div>Project not found.</div>;
  }

  // Use .find() to find the project with a matching id
  const selectedProject = project.find(item => item.id === id);

  if (!selectedProject) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='single-container' style={
            {backgroundColor: `${selectedProject.backgroundColor}`}}>
      <button onClick={() => navigate(-1)} className='back-button'><ArrowLeft/> go back</button>
      <div className='content-holder'>
      <img src={selectedProject.Image} alt={selectedProject.Name} className='featured-image'/>
      <h1 className='header' style={{color: `${selectedProject.textColor}`}}>{selectedProject.Name}</h1>
      <p className='body-text' style={{color: `${selectedProject.textColor}`}}>{selectedProject.Long_Description}</p>
      <img src={selectedProject.additionalImage1} className='additional-images' alt="" />
      <img src={selectedProject.additionalImage2} className='additional-images' alt="" />
      <img src={selectedProject.additionalImage3} className='additional-images' alt="" />
      </div>
    </div>
  );
};

export default ProjectDetail;
