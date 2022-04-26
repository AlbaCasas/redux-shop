const FIREBASE_URI = process.env.REACT_APP_FIREBASE_URI;

const client = async (path: string, body: object | null, method: string) => {
  const res = await fetch(`${FIREBASE_URI}/${path}.json`, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    ...(method !== "GET" && !!body && { body: JSON.stringify(body) }),
  });
  return res.json();
};

export default client;
