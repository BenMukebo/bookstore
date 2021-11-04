// const APP_ID = '9oGCGsuz2srGR7ssHMEo';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/9oGCGsuz2srGR7ssHMEo';


export const createBook = async ({ id, title, category }) => { //POST
  const url = `${BASE_URL}/books`;
  const data = JSON.stringify({
    item_id: id,
    title,
    category,
  });
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  return response.text();
};

