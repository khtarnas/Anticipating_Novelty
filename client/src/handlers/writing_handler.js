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
 */

async function retrieveAllWritings() {

  const { data } = await axios.get('/writing/getAll', {});

  return data;
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