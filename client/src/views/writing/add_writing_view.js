import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import "../../styles/writing.css"
import * as handler from '../../handlers/writing_handler.js';

function Writing() {

  /****** States ******/
  const [currTitle, setCurrTitle] = useState('1000');
  const [currDesc, setCurrDesc] = useState('');
  const [currText, setCurrText] = useState('');

  /****** Handling functions ******/
  const addNewWriting = async () => {

    console.log(currTitle);
    console.log("HELLO?!");

    if (currTitle === '') {
      window.alert('Title is required. Please add a title and re-submit.');
      return;
    } else if (currText === '') {
      window.alert('Text is required. Please add some text and re-submit.');
      return;
    }

    // window.alert(`title = ${currTitle}, desc = ${currDesc}, text = ${currText}.`);
    const data = await handler.addNewWriting(currTitle, currDesc, currText);
    window.alert(data);
    // if (data === '') {
    //   window.alert('todo: failure message');
    // } else {
    //   window.alert('todo: success message');
    // }
    
    setCurrTitle('');
    setCurrDesc('');
    setCurrText('');
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
