
const getReceipt = async (searchString) => {
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=58abd0e9&app_key=48d20ca14a6c9af3f01bb8cdaa90aec6`
  const response = await fetch(url.toString()).then((r) => r.json());

  if (response.Error) {
    throw new Error(response.Error);
  }

  console.log(response.hits);
  return response.hits;
};

const api = { getReceipt };
export default api;
