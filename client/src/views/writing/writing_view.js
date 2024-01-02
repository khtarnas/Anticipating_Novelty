import { Link } from 'react-router-dom'
import "../../styles/writing.css"

import { motion } from "framer-motion"


function Writing() {

  return(
    <motion.div
      className='Writing'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.05 }}}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0}}
    >
        <main>
            <h1>Welcome to my WRITING!</h1>  
            <Link to="add">Add a writing here!</Link>
        </main>
    </motion.div>
  )
}

export default Writing;
