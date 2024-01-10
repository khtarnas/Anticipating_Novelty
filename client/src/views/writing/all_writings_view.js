import { Link } from 'react-router-dom'
import "../../styles/writing.css"
import { motion } from "framer-motion"
import React, { useState } from 'react';

import * as handler from '../../handlers/writing_handler.js';


function AllWriting() {

    // const [backendData, setBackendData] = useState([{}])

    const retrieveAllWriting = async () => {

        let writings = await handler.retrieveAllWritings();
        window.alert(writings);

        return writings

      };

    

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
            <h1>Here are ALL the writings!</h1>  
            <Link to="add">Add a writing here!</Link>
            {console.log(writings)}
            {/* <ul>
                {for (i = 0; i < length(writings); ++i):
                    <li key={item}>{item}</li>
                ))}
            </ul> */}
                
        </main>
    </motion.div>
  )
}

export default AllWriting;
