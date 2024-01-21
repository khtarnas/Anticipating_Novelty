/**
 * Handler for writing: the functions referenced by view files
 *  (on the server side) that deal with data related to writings
 *  by referencing .
 * 
 * Exists in the /client/handlers
 */

import axios from 'axios';


/**
 * Get Requests
 * 
 * note: initally variable name was "data". Do NOT do this as "data.data" will confuse it and you will
 * get a gibberish result.
 */

async function retrieveAllWritings() {

  let all; 
  
  await axios.get('/writing/getAll', {})
    .then(writings => all = writings)
    .catch(err => all = { "err" : err})

  return all.data;
}

/**
 * POST Requests
 */

async function addNewWriting(title, desc, text) {
  if (!title) {
    throw new Error('No title given...');
  }
  if (!text) {
    throw new Error('No text given...');
  }

  const { data } = await axios.post('/writing/add', {
    title,
    desc,
    text
  }); 

  return data;
}

export {
    addNewWriting, retrieveAllWritings
}