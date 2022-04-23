const API_URI = process.env.REACT_APP_API_URI;

const client = async (path: string, body: object, method: string) => {
  const res = await fetch(`${API_URI}/${path}.json`, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export default client;
