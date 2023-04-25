const appSId = 'Wyu5tsnxyP8SUDrhnO7g';
const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appSId}/likes/`;

// Add a like
const addinLikes = async (idItem) => {
  await fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: idItem,
    }),
  });
};

// Get likes
const getinLikes = async () => {
  const responses = await fetch(URL_API);
  const results = await responses.json();
  return results;
};

export { addinLikes, getinLikes };
