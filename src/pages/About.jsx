import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <div id='about-page'>
  <div className='about-hero section'>
      <h1>👋 Hi there! I'm Ethan Jones</h1>
      <img src="/images/ethan.jpg" alt="" />
  </div>
  <div className='about-experience section'>
    <h2>Tools</h2>
    <br />
    <ul className='skills'>
      <li className='skill'><img src="/skills/css.png" alt="" />CSS</li>
      <li className='skill'><img src="/skills/figma.png" alt="" />Figma</li>
      <li className='skill'><img src="/skills/html.png" alt="" />HTML</li>
      <li className='skill'><img src="/skills/mongodb.png" alt="" />MongoDB</li>
      <li className='skill'><img src="/skills/node.png" alt="" />Node js</li>
      <li className='skill'><img src="/skills/react.png" alt="" /> React </li>
      <li className='skill'><img src="/skills/sass.png" alt="" /> Sass </li>
      <li className='skill'><img src="/skills/WordPress.png" alt="" /> WordPress </li>
      <li className='skill'><img src="/skills/javascript.svg" alt="" /> JavaScript </li>
    </ul>
  </div>
  <div className='about-educational section'>
    <h2>My Educational Journey</h2>
    <br />
    <p>My design journey began at Yoobee, where I earned my diploma. I've been on a continuous quest to enhance my skills and knowledge in the field of Interaction and Web Design.</p>
    <Link to='/allprojects'>
        <button>View my projects</button>
    </Link>
  </div>
  <div className='about-beyond section'>
    <h2>Life Beyond Design</h2>
    <br />
    <p>When I'm not crafting captivating web experiences, you'll often find me by the ocean. Whether I'm diving, riding the waves on a surfboard, or simply enjoying a swim, the ocean holds a special place in my heart.</p>
  </div>
  <div className='about-connect section'>
    <h2>Let's Connect</h2>
    <br />
    <p>If you'd like to discuss potential collaborations, share ocean adventures, or simply connect, I'm all ears. Feel free to reach out to me at any time! </p>
    <br />
    <p>Thank you for taking the time to explore my portfolio. </p>
    <Link to='/contact'>
        <button>Lets chat!</button>
    </Link>
  </div>
</div>

  )
}

export default About
