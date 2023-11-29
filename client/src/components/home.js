// import React, { useEffect, useState } from 'react';



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
        <h1>Welcome to My Website</h1>  
        {/* <a href="http://localhost:3000/writing">Writings</a> */}
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
