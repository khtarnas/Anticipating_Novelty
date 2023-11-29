// import React, { useEffect, useState } from 'react';

import Navbar from "./navbar";



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
    
    <div>
        <Navbar />
        <h1>Welcome to My Website</h1>  
      {/* {(typeof backendData.sampleList === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.sampleList.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )
      } */}
    </div>
  )
}

export default Home;
