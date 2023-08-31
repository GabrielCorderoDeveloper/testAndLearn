const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_6Flh15QYDYu9XYjnQk3WCT514NX5D0XOqXAttwuzCtYCAwg87fIEvLu3IgPdzsXL';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_6Flh15QYDYu9XYjnQk3WCT514NX5D0XOqXAttwuzCtYCAwg87fIEvLu3IgPdzsXL';

const spanError = document.getElementById('error');

async function loadRandomMichis() {
  try {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
  
    console.log('Random')
    console.log(data)

    if (res.status !== 200) {
      throw new Error('Hubo un error: ' + res.status);
    } else {
      const img1 = document.getElementById('img1');
      const img2 = document.getElementById('img2');
    
      img1.src = data[0].url;
      img2.src = data[1].url;
    }
  } catch (error) {
    spanError.innerHTML = error.message;
  }
}

async function loadFavoritesMichis() {
  try {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites')
    console.log(data)

    if (res.status !== 200) {
      throw new Error('Hubo un error: ' + res.status);
    } 
  } catch (error) {
    spanError.innerHTML = error.message;
  }
}

loadRandomMichis();
loadFavoritesMichis();
