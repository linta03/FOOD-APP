//This function will filter the restaurant card through searchInput

export const filterMenu = (searchInput, resturantCard) => {
  if (Array.isArray(resturantCard)) { //Check if the provided parameter is an array
    return resturantCard.filter((cards) =>
      cards.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
};