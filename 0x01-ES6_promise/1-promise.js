function getFullResponseFromAPI(success) {
  const results = {
    status: 200,
    body: 'Success',
  };

  return new Promise((resolve, reject) => {
    if (success) {
      resolve(results);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
