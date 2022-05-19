const apiURL = process.env.REACT_APP_API_URL;

const getStories = async (startTime = 1652881500, endTime = 1652888701) => {
  const endpoint = "stories";
  const query = `startTime=${startTime}&endTime=${endTime}`;
  return fetch(`${apiURL}/${endpoint}?${query}`, { method: "GET" }).then(
    async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

export { getStories };
