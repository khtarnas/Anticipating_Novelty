import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import "../../styles/writing.css"

function Writing() {

  /****** States ******/
  const [currTitle, setCurrTitle] = useState('');
  const [currDesc, setCurrDesc] = useState('');
  const [currText, setCurrText] = useState('');

  /****** Handling functions ******/
  const addNewWriting = async () => {
    window.alert(`title = ${currTitle}, desc = ${currDesc}, text = ${currText}.`);
    setCurrTitle('');
    setCurrDesc('');
    setCurrText('');

    // if (friends.includes(currFriend)) {
    //   window.alert('already friends with that user!');
    // } else {
    //   const data = await api.getUser(username);
    //   if (data === '') {
    //     window.alert('user does not exist!');
    //   } else {
    //     try {
    //       const time = new Date();
    //       await api.sendRequest(username, currFriend, time);
    //     } catch (err) {
    //       window.alert('could not add friend!');
    //     }
    //   }
    // }
    // setCurrFriend('');
    // removeFriend(user, friend);
  };


  /****** Actual View ******/
  return(
    <div>
        <main>
            <h1>Add a writing:</h1>
            <ul>
              <li>title:
              <input value={currTitle} onChange={(e) => setCurrTitle(e.target.value)} /></li>
              <li>desc:
              <input value={currDesc} onChange={(e) => setCurrDesc(e.target.value)} /></li>
              <li>text: 
              <input value={currText} onChange={(e) => setCurrText(e.target.value)} /></li>
              <button className="primBtn" type="submit" onClick={() => addNewWriting()}>Submit</button>
            </ul>
            {/* Must use "Link to" below -- relative rather than absolute */}
            <Link to="..">See all writings.</Link> 
        </main>
    </div>
  )
}

export default Writing;
