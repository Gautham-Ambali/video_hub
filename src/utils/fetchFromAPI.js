
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const options = {
  
	
	headers: {
		'x-rapidapi-key': 'eb37b4b9afmsh59e44357675f598p11da82jsn4ddfcc0e3dc2',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


export async function fetchFromAPI(url) {
  const resp = await fetch(`${BASE_URL}/${url}`, options);
  const data=await resp.json();
  return data
};
