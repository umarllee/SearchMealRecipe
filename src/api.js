
const getReceipt = async (searchString) => {
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=58abd0e9&app_key=48d20ca14a6c9af3f01bb8cdaa90aec6`
  const response = await fetch(url.toString()).then((r) => r.json());

  if (response.Error) {
    throw new Error(response.Error);
  }

  return response.hits;
};


const save = async (request) => {
  const response = await fetch('http://localhost:3200/users', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) { 
      return await response.json();
  } 
  throw new Error(await "EYNI EMAIL DAXIL edilib");
}


const getInfo = async (request) => {
    
  return await fetch('http://localhost:3200/users').then(res => res.json());
}


const api = { save, getReceipt, getInfo };
export default api;
