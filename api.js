const API_KEY = 'wQiPjhHnW2uGaTbknLjPa5er6dmQOAgfUnPRdbll';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams = '') => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${urlParams}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};