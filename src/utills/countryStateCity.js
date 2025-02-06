import { GetCountries, GetState } from "react-country-state-city";

const countryList = await GetCountries().then((result) => {
  return result;
});

export const getStatesList = (countryCode) => {
  return GetState(countryCode).then((result) => {
    return result;
  });
};

export default countryList;
