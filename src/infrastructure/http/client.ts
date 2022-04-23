const { API_URI } = process.env;

const client = async (body: object, method: string) => {
  const res = await fetch(`${API_URI}`, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export default client;
