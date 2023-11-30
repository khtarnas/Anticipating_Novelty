import { Link } from 'react-router-dom'
import "../../styles/writing.css"

function Writing() {

  return(
    <div>
        <main>
            <h1>Add a writing:</h1>  
            {/* Must use "Link to" below -- relative rather than absolute */}
            <Link to="..">See all writings.</Link> 
        </main>
    </div>
  )
}

export default Writing;
