// funtion to get the data items by category
export const getPackagesByCategory = (data, category) => {
  return data.filter((item) => item.category === category);
};
