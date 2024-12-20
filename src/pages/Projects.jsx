import ProjectsList from "../config/ProjectsList"
import { Link } from "react-router-dom"
function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <ul>

            {
                ProjectsList && ProjectsList.map((project) => {
                    return (<li key={project.name}>
                        <Link to={project.url}>{project.name}</Link>
                    </li>)
                })
        }
        
        </ul>
        {/* <Outlet /> */}
    </div>
  )
}

export default Projects