import React, { useEffect, useState } from 'react';
import "../styles/home.css"

import { motion } from "framer-motion"


function Home() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  return (
    
    <motion.div
      className='Home'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.05 }}}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0}}
    >

        <h1>Welcome to My Website</h1>  
      {(typeof backendData.sampleList === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.sampleList.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )
      }
      
    </motion.div>
  )
}

export default Home;
