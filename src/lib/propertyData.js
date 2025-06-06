export const properties = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    type: "rent",
    property: "apartment",
    price: 2500,
    city: "London",
    address: "123 Baker Street, London",
    bedroom: 2,
    bathroom: 2,
    images: ["https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg"],
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    id: 2,
    title: "Luxury House with Garden",
    type: "buy",
    property: "house",
    price: 750000,
    city: "Manchester",
    address: "45 Oak Avenue, Manchester",
    bedroom: 4,
    bathroom: 3,
    images: ["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"],
    latitude: 53.4808,
    longitude: -2.2426,
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    type: "rent",
    property: "apartment",
    price: 1200,
    city: "Birmingham",
    address: "78 High Street, Birmingham",
    bedroom: 1,
    bathroom: 1,
    images: ["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"],
    latitude: 52.4862,
    longitude: -1.8904,
  },
  {
    id: 4,
    title: "Spacious Family Home",
    type: "buy",
    property: "house",
    price: 450000,
    city: "Leeds",
    address: "156 Park Lane, Leeds",
    bedroom: 3,
    bathroom: 2,
    images: ["https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"],
    latitude: 53.8008,
    longitude: -1.5491,
  }
];

export const filterProperties = (filters) => {
  if (!filters || Object.keys(filters).length === 0) {
    return properties;
  }

  return properties.filter(property => {
    const matchesType = !filters.type || property.type === filters.type;
    const matchesCity = !filters.city || property.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchesProperty = !filters.property || property.property === filters.property;
    const matchesMinPrice = !filters.minPrice || property.price >= Number(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || property.price <= Number(filters.maxPrice);
    const matchesBedroom = !filters.bedroom || property.bedroom === Number(filters.bedroom);

    return matchesType && matchesCity && matchesProperty && matchesMinPrice && matchesMaxPrice && matchesBedroom;
  });
};