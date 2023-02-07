export const filterMenu = (searchInput, resturantCard) => {
  if (Array.isArray(resturantCard)) {
    let result = resturantCard.filter((cards) =>
      cards.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return result;
  } else {
  }
};
