import * as React from 'react'
import { Link } from 'gatsby'
import '../stylesheets/index.css'
import companyLogo from "../images/icon.png"
import collab from "../images/netlify-gatsby.jpg"

const IndexPage = () => {
  return (
    <main>

      <div className="dark-back">
        <nav>
          <img src={companyLogo} alt="Gatsby Logo" className='logo'/>
        </nav>
      </div>
      <div className="image-back container-centered">
        <div className="center">
          <h1 className="box text-stroke">Jeremy's Gatsby Demonstration</h1>
          <div className='center-row'>
            <div className='box'>
              <Link to="https://github.com/mongeaujeremy2" className='link-big-text'>My Github</Link>
            </div>
            <div className='box'>
              <Link to="https://www.linkedin.com/in/mongeaujeremy/" className='link-big-text'>My Linkedin</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className='splash-image'>
          <img src={collab} alt="Netlify x Gatsby"/>
        </div>
        <div className="center">
          <p id="paragraph-block">This site was created using Gatsby, and then deployed using Netlify.</p>
          <p id="paragraph-block">This is a powerful combination for creating and deploying websites.</p>
          <p id="paragraph-block">For further usability, plugins can even be used through Gatsby to quickly add new features.</p>
        </div>
      </div>

      <div className="dark-back center text-stroke">
        <h2>320 Main St</h2>
        <h2>City, NJ 555555</h2>
        <h2>555 555-5555</h2>
      </div>
    </main>
  )
}

export const Head = () => <title>Gatsby Demo</title>

export default IndexPage