import axios from 'axios';

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
    addNewWriting
}