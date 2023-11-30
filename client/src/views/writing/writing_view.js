import { Link } from 'react-router-dom'
import "../../styles/writing.css"

function Writing() {

  return(
    <div>
        <main>
            <h1>Welcome to my WRITING!</h1>  
            <Link to="add">Add a writing here!</Link>
        </main>
    </div>
  )
}

export default Writing;
