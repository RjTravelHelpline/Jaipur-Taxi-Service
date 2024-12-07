// funtion to get the data items by category
export const getPackagesByCategory = (data, category) => {
  return data.filter((item) => item.category === category);
};

// funtion to truncate word limit
export const truncateWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};
