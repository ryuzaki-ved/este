export const cities = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Liverpool",
  "Newcastle",
  "Sheffield",
  "Bristol",
  "Nottingham",
  "Southampton",
  "Cardiff",
  "Glasgow",
  "Edinburgh",
  "Belfast",
  "Cambridge",
  "Oxford",
  "York",
  "Bath",
  "Brighton",
  "Leicester"
];

export const getFilteredCities = (query) => {
  return cities.filter(city => 
    city.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);
};