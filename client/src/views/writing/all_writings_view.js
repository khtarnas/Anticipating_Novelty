import { Link } from 'react-router-dom'
import "../../styles/writing.css"
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';

import * as handler from '../../handlers/writing_handler.js';


function AllWriting() {

    const [allWritings, setAllWritings] = useState([{}]);

    const retrieveAllWriting = async () => {

        let writings = await handler.retrieveAllWritings();
        setAllWritings(writings);
    };

    // window.alert(allWritings);

    // for (let [key, value] of allWritings) {
    //     window.alert(key + " is " + value);
    // }

    useEffect(() => retrieveAllWriting, []);

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
            {/* {console.log(allWritings)}
            {console.log(allWritings[0])}
            {console.log(allWritings[0].title)} */}
            
            <ul>
                {
                    allWritings.map(writing => {
                        return <li>{writing.title}</li>
                    })

                }

            </ul>

                
        </main>
    </motion.div>
  )
}

export default AllWriting;
