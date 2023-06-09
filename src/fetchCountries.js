'use strict';

export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  )
    .then(res => {
      if (!res.ok) {
        if (res.status === 404) {
          return [];
        }
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
};