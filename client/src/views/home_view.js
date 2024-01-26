import React from 'react';
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Home() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data);
  //     }
  //   )
  // }, [])

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

        <h1 id='title'>Welcome to My Website</h1>  
      {/* {(typeof backendData.sampleList === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.sampleList.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )
      } */}
      <p className='p'>My goal here is to share some of my interests and work in a single
         place. Or at the very least, I want to make everything accessible from
         here. Even more so, myhope is that it gets people to engage
         meaningfully with what they see. Because of that I've tried to make
         everything interactive.
      </p>

      <p className='p'>If you feel both interested and comfortable, 
         please <Link to="/">make an account</Link> and start participating! You can
         also reach out to me using the <Link to="/">contact-me</Link> section.
      </p>

      {/* The "require" addition is necessary because of Webpack, see: https://stackoverflow.com/questions/34582405/react-wont-load-local-images */}
      <img className='img' id="img1" src={require("../images/IMG_5139.png")} alt="please" /> 

      
    </motion.div>
  )
}

export default Home;
