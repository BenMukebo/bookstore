const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9oGCGsuz2srGR7ssHMEo';

export const postBook = async ({ itemId, title, category }) => {
  const url = `${BASE_URL}/books`;
  const data = JSON.stringify({
    item_id: itemId,
    title,
    category,
  });
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  return response.text();
};

export const deleteBook = async (id) => {
  const url = `${BASE_URL}/books/${id}`;
  const data = JSON.stringify({
    item_id: id,
  });
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  return response.text();
};

export const displayBooks = async () => {
  const url = `${BASE_URL}/books`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
