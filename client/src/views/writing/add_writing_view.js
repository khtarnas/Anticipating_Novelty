import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import "../../styles/writing.css"
import * as handler from '../../handlers/writing_handler.js';

function Writing() {

  /****** States ******/
  const [currTitle, setCurrTitle] = useState('');
  const [currDesc, setCurrDesc] = useState('');
  const [currText, setCurrText] = useState('');
  const [currLang, setCurrLang] = useState('English');

  /****** Handling functions ******/
  const addNewWriting = async () => {

    if (currTitle === '') {
      window.alert('The title is required. Please add a title and re-submit.');
      return;
    } else if (currDesc === '') {
      window.alert('A description is required. Please add one and re-submit.');
      return;
    } else if (currText === '') {
      window.alert('Text is required. Please add some (good) text and re-submit.');
      return;
    }

    const data = await handler.addNewWriting(currTitle, currDesc, currText, currLang);
    if (data === 'event created') {
      window.alert('Writing was successfully posted!');
    } else {
      window.alert(data);
    }
    
    setCurrTitle('');
    setCurrDesc('');
    setCurrText('');
    setCurrLang('')
  };


  /****** Actual View ******/
  return(
    <div>
        <main>
            <h1>Add a writing:</h1>
            <ul>
              <li>Title:
              <input value={currTitle} onChange={(e) => setCurrTitle(e.target.value)} /></li>
              <li>Description:
              <input value={currDesc} onChange={(e) => setCurrDesc(e.target.value)} /></li>
              <li>Text: 
              <input value={currText} onChange={(e) => setCurrText(e.target.value)} /></li>
              <li>Language:
                <select 
                  value={currLang} 
                  onChange={(e) => setCurrLang(e.target.value)} >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Hawaiian">Hawaiian</option>
                <option value="French">French</option>
                </select>
              </li>
            </ul>
            <button className="primBtn" type="submit" onClick={() => addNewWriting()}>Submit</button>
            <br></br>
            {/* Must use "Link to" below -- relative rather than absolute */}
            <Link to="..">See all writings.</Link> 
        </main>
    </div>
  )
}

export default Writing;
