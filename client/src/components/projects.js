import React, { useState, useEffect } from 'react'
import '../App.css'
import '../styles/projects.css'

function Projects() {
  /*Create an image array. This will give each repo a picture with the corresponding index in the array. */
  let imgArr = [
    '/chatapp.png',
    '/crypto.png',
    '/binderapp.png',
    '/stocks.png',
    '/tictac.png',
    '/yelpington.png',
  ]
  /*gitHubData is the array of repos and setGitHubData is our updater function to change state. 
  Later in the projectList div, gitHubData is looped over using map and each repo in that array will print out its name and description using p tags */
  const [githubData, setGithubData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/manofshad97/repos', {
      /*Github said they strongly recommend using this line for headers before using its API */
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
    })
      // Fetch the github data from the api and set it to the user state variable
      .then((res) => res.json())
      .then((data) => setGithubData(data))
  }, [])

  return (
    // Main projects div
    <div id="projects">
      {/* Projects section title */}
      <p className="projectTitle">My Projects</p>
      {/* Div holding the various project repos */}
      <div className="projectList">
        {/* Loop through githubData array. Index is used in order to give each repo a picture with the corresponding index in the image array.  */}
        {githubData.map((repo, index) => (
          <div className="repo">
            <p className="repoName">
              {/* .name is a property in githubs API */}
              {repo.name}
            </p>

            <p className="repoDescription">
              {/* .description is a property in githubs API */}
              {repo.description}
            </p>

            {/* .full_name is a property in githubs API */}
            {repo.name === 'Yelpington-App' ? (
              <a
                href={'https://blooming-lowlands-72131.herokuapp.com/'}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Live Demo
              </a>
            ) : null}

            {repo.name === 'Chat-App' ? (
              <a
                href={'https://limitless-headland-30461.herokuapp.com/'}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Live Demo
              </a>
            ) : null}

            {repo.name === 'Crypto-App' ? (
              <a
                href={'https://shad-crypto.herokuapp.com/'}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Live Demo
              </a>
            ) : null}

            {repo.name === 'Shad-Stocks' ? (
              <a
                href={'https://shad-stocks.netlify.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Live Demo
              </a>
            ) : null}

            {repo.name === 'om-binder-program' ? (
              <a
                href={'https://binder-program.herokuapp.com/login'}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Live Demo
              </a>
            ) : null}

            <a
              href={'https://github.com/' + repo.full_name}
              target="_blank"
              rel="noopener noreferrer"
              className="repoLink"
            >
              GitHub Link
            </a>

            {/* Use the index variable to get the corresponding image in the images array for each repo */}
            <img
              className="projImg"
              src={imgArr[index]}
              alt="Project Picture"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
