import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [projectsCube, setProjectsCube] = useState([]);

  useEffect(() => {
    axios.get('../projectsCube.json')
      .then((res) => {
        setProjectsCube(res.data.projectsCube);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

const Cube = ({ projectsCube, index }) => {
  if (loading) {
    return <>Loading...</>
  } else {
    return (
      <div id='page-stretch'>
      <div id="cube-holder">
        <div className="cube-wrap">
          <div className="cube" key={index}>
            <div className="side top" key={projectsCube.id}
            style={
            {backgroundColor: `${projectsCube[0].backgroundColor}`}}>
              <a href={`#/projects/${projectsCube[0]?.id}`}>
                <img src={projectsCube[0].Image} alt="" className='cube-image'/>
                <h2
                style={
            {color: `${projectsCube[0].textColor}`}}
                >{projectsCube[0]?.Name}</h2>

              </a>
            </div>
            <div className="side bottom" style={
            {backgroundColor: `${projectsCube[1].backgroundColor}`}}>
              <a href={`#/projects/${projectsCube[1]?.id}`}>
                <img src={projectsCube[1].Image} alt="" className='cube-image'/>
                <h2
                style={
            {color: `${projectsCube[1].textColor}`}}
            >{projectsCube[1]?.Name}</h2>
              </a>
            </div>
            <div className="side front" style={
            {backgroundColor: `${projectsCube[2].backgroundColor}`}}>
              <a href={`#/projects/${projectsCube[2]?.id}`}>
                <img src={projectsCube[2].Image} alt="" className='cube-image'/>
                <h2
                style={
            {color: `${projectsCube[2].textColor}`}}
                >{projectsCube[2]?.Name}</h2>
              </a>
            </div>
            <div className="side back" style={
            {backgroundColor: `${projectsCube[3].backgroundColor}`}}>
              <a href={`#/projects/${projectsCube[3]?.id}`}>
                <img src={projectsCube[3].Image} alt="" className='cube-image'/>
                <h2
                style={
            {color: `${projectsCube[3].textColor}`}}
                >{projectsCube[3]?.Name}</h2>
              </a>
            </div>
            <div className="side left" style={
            {backgroundColor: `${projectsCube[4].backgroundColor}`}}>
              <a href={`#/projects/${projectsCube[4]?.id}`}>
                <img src={projectsCube[4].Image} alt="" className='cube-image'/>
                <h2
                style={
            {color: `${projectsCube[4].textColor}`}}
                >{projectsCube[4]?.Name}</h2>
              </a>
            </div>
            <div className="side right" style={
            {backgroundColor: `${projectsCube[5].backgroundColor}`}}>
              <a href={`#/projects/${projectsCube[5]?.id}`}>
                <img src={projectsCube[5].Image} alt="" className='cube-image'/>
                <h2
                style={
            {color: `${projectsCube[5].textColor}`}}
                >{projectsCube[5]?.Name}</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false); 


  return (
    <>
      <div className="progress"></div>
      <Cube projectsCube={projectsCube} />
    </>
  );
}

export default Home;
