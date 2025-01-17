const $charContainer = document.querySelector('.character-container');

const $detailsContainer = document.createElement('div');
$detailsContainer.className = 'details-container hidden';
document.body.appendChild($detailsContainer);

function renderCharacterDetails(charData) {
  $detailsContainer.innerHTML = '';

  const $detailsModal = document.createElement('div');
  $detailsModal.className = 'details-modal';

  const $headerRow = document.createElement('div');
  $headerRow.className = 'header-row';

  const $xButton = document.createElement('i');
  $xButton.className = 'fa-solid fa-circle-xmark x-button ';
  $xButton.addEventListener('click', function () {
    $detailsContainer.classList.add('hidden');
  });

  const $name = document.createElement('h2');
  $name.textContent = charData.attributes.name.toUpperCase();

  const $likeButton = document.createElement('i');
  $likeButton.className = 'fa-regular fa-heart like-button ';
  $likeButton.addEventListener('click', function() {
    addToFavorites(charData.id, charData.attributes.name, charData.attributes.image);
  });

  $headerRow.appendChild($xButton);
  $headerRow.appendChild($name);
  $headerRow.appendChild($likeButton);

  $detailsModal.appendChild($headerRow);

  const $row2 = document.createElement('div');
  $row2.className = 'row';

  const $imgColumn = document.createElement('div');
  $imgColumn.className = 'column-half';

  const $image = document.createElement('img');
  $image.setAttribute('src', charData.attributes.image);

  const $attributesColumn = document.createElement('div');
  $attributesColumn.className = 'column-half';

  const $born = document.createElement('p');
  $born.textContent = `BORN: ${charData.attributes.born.toUpperCase() || 'Unknown'}`;
  
  const $bloodStatus = document.createElement('p');
  $bloodStatus.textContent = `BLOOD STATUS: ${charData.attributes.blood_status.toUpperCase() || 'Unknown'}`;

  const $house = document.createElement('p');
  $house.textContent = `HOUSE: ${charData.attributes.house.toUpperCase() || 'Unknown'}`;

  const $patronus = document.createElement('p');
  const patronus = (charData.attributes.patronus || 'Unknown').toUpperCase();
  $patronus.textContent = `PATRONUS: ${patronus}`;


  const $wand = document.createElement('p');
  $wand.textContent = `WAND: ${charData.attributes.wands[0].toUpperCase() || 'Unknown'}`;

  const $boggart = document.createElement('p');
  const boggart  = (charData.attributes.boggart|| 'Unknown').toUpperCase();
  $boggart.textContent = `BOGGART: ${boggart}`;

  $attributesColumn.appendChild($born);
  $attributesColumn.appendChild($bloodStatus);
  $attributesColumn.appendChild($house);
  $attributesColumn.appendChild($patronus);
  $attributesColumn.appendChild($wand);
  $attributesColumn.appendChild($boggart);

  $imgColumn.appendChild($image);
  $row2.appendChild($imgColumn);
  $row2.appendChild($attributesColumn);
  $detailsModal.appendChild($row2);
  $detailsContainer.appendChild($detailsModal);

  $detailsContainer.classList.remove('hidden');
}

function attachViewInfoListener($viewInfo, charID) {
  $viewInfo.addEventListener('click', function(event) {
    event.preventDefault();

    const request = new XMLHttpRequest();
    request.open ('GET', `https://api.potterdb.com/v1/characters/${charID}`);
    request.responseType = 'json';
    request.send();

    request.addEventListener('load', function() {
      if (request.response && request.response.data) {
        renderCharacterDetails(request.response.data); 
      }
    });
  });
}

function renderHPCharacters(name, charImage, charID) {

  const $charView = document.createElement('div');
  $charView.className = 'character-view column-fifth';
  $charView.setAttribute('data-view', 'character-view');

  const $characterRow = document.createElement('div');
  $characterRow.className = 'row';

  const $columnFifth = document.createElement('div');
  $columnFifth.className = 'column-full';

  const $hpName = document.createElement('h2');
  $hpName.className = 'hp-name';

  const $newButtonRow = document.createElement('div');
  $newButtonRow.className = 'new-button-row';

  const $likeButton = document.createElement('i');
  $likeButton.className = 'fa-regular fa-heart like-button ';
  $likeButton.addEventListener('click', function() {
    addToFavorites(charID, name, charImage);
  });

  const $row2 = document.createElement('div');
  $row2.className = 'img-row';

  const $imgColumn = document.createElement('div');
  $imgColumn.className = 'column-full';

  const $image = document.createElement('img');
  $image.className = 'img';
  $image.setAttribute('src', charImage);

  const $rowInfo = document.createElement('div');
  $rowInfo.className = 'row info';

  const $viewInfo = document.createElement('a');
  $viewInfo.className = 'view-info';
  $viewInfo.textContent = 'View Information';

  attachViewInfoListener($viewInfo, charID);

  $hpName.textContent = name.toUpperCase();

  $charView.appendChild($characterRow);
  $characterRow.appendChild($columnFifth);
  $columnFifth.appendChild($hpName);
  $columnFifth.appendChild($newButtonRow);
  $newButtonRow.appendChild($likeButton);
  $charView.appendChild($row2);
  $row2.appendChild($imgColumn);
  $imgColumn.appendChild($image);
  $charView.appendChild($rowInfo);
  $rowInfo.appendChild($viewInfo);

  return $charView;

}

const characters = [
 'bcae9def-6584-4300-ac63-ff007974bf3c', // harry potter
 '9a992090-02b8-4c89-9e6a-bdaa32404c69', // hermione granger
 'd67ddb5d-192b-4d75-8f18-c55a1b5ce442', // ron weasley
 'a57de83d-2a44-40d4-8060-75895fa756f5', // albus dumbledore
 '2ddd3642-ee7d-41e1-aa18-ae6c6855d07f', // minverva mcgonagall
 'de9a44ac-400d-4c2b-9da6-f52240ba3e54', // neville longbottom
 '3afcc5c7-8c96-4921-97cb-a4ce5ff67acb', // rubeus hagrid
 '8765ea64-39c7-4275-8aeb-7b457f0d2a52', // draco malfoy
 '49ce06a5-f08b-4475-8e79-72a2b0733c5d', // ginny (ginerva) weasley
 '91ec67d7-bf9a-4fa4-b5d6-aa99b8aba036', // luna lovegood
 '74b0522c-8c66-4866-884d-b04455884a84', // molly weasley
 '45c907dd-c1cf-40ba-b287-e90a80f3183e', // severus snape
 'deb89774-4a79-4efe-8342-4037c93b8dba', // fred weasley
 '36ba1b33-4dd2-457d-b44d-27e4728b2faf', // george weasley
 '6f250fa6-0984-4096-85f4-02b73474dcc7' // cedric diggory
];

function getCharacterData(charID) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.potterdb.com/v1/characters/' + charID);
  request.responseType = 'json';
  request.send();

  request.addEventListener('load', function () {
    const charData = request.response;
    $charContainer.appendChild(renderHPCharacters(charData.data.attributes.name, charData.data.attributes.image, charID));
  });
}

function getAllCharacters() {
  for (const charID of characters) {
    getCharacterData(charID);
  }
}
getAllCharacters();

// Array to store favorite characters
const favorites = []; 

// Function to add a character to Favorites
function addToFavorites(charID, name, charImage) {
  const isAlreadyFavorite = favorites.some(fave => fave.id === charID);

  if (!isAlreadyFavorite) {
    favorites.push({ id: charID, name, image: charImage });
    console.log(`${name} has been added to your favorites!`);
  } else {
    console.log(`${name} is already in favorites.`);
  }
}

// Function to display the Favorites page
function favoritesPage() {
  // Hide the main content rendered by renderHPCharacters
  // const $mainContent = document.querySelector('.main-content');
  // if ($mainContent) $mainContent.classList.add('hidden');
  
  // Show or create the Favorites page
  // let $favoritesPage = document.querySelector('.favorites-page');

  // if (!$favoritesPage) {
    const $favoritesPage = document.createElement('section');
    $favoritesPage.className = 'favorites-page';
    $favoritesPage.innerHTML = `
      <h1>Favorites</h1>
      <div class="favorites-container"></div>
      <p class="message">There are currently no items in your favorites.</p>
      <button class="back-button">Back to Characters</button>`;
  document.body.appendChild($favoritesPage);

  // Add functionality to the back button
  const $backButton = $favoritesPage.querySelector('.back-button');
  $backButton.addEventListener('click', () => {
    $favoritesPage.classList.add('hidden');
    if ($mainContent) $mainContent.classList.remove('hidden');
  });
  renderFavorites();
  $favoritesPage.classList.remove('hidden');
};

// Function to render the Favorites list 
function renderFavorites() {
  const $favoritesContainer = document.querySelector('.favorites-container');
  const $message = document.querySelector('.message');
  $favoritesContainer.innerHTML = '';

  if (favorites.length === 0) {
    // Show the "no items" message
    $message.classList.remove('hidden');
  } else {
    // Hide the "no items" message
    $message.classList.add('hidden');

    favorites.forEach(favorite => {
      const $favoriteCard = document.createElement('div');
      $favoriteCard.className = 'favorite-card';
  
      const $name = document.createElement('h2');
      $name.textContent = favorite.name;
  
      const $image = document.createElement('img');
      $image.setAttribute('src', favorite.image);
      $image.className = 'img';
  
      $favoriteCard.appendChild($name);
      $favoriteCard.appendChild($image);
      $favoritesContainer.appendChild($favoriteCard);
    });
  }
}

// // Function to initialize the Main page
// function mainPage() {
//   const $redFavoritesButton = document.querySelector('.red-favorite-page');
//   if ($redFavoritesButton) {
//     $redFavoritesButton.addEventListener('click', favoritesPage);
//   } 
//   // Dynamically render the main content
//   renderHPCharacters();
// }

// Initialize the application
// document.addEventListener('DOMContentLoaded', () => { 
//   // Create a container for the main content if it doesn't exist 
// let $mainContent = document.querySelector('.main-content');
//   if (!$mainContent) {
//     $mainContent = document.createElement('div');
//     $mainContent.className = 'main-content';
//     document.body.appendChild($mainContent);
//   }
//   mainPage();
// });

document.querySelector('.red-favorite-page').addEventListener('click', () => {
  document.querySelector('.main-content').classList.add('hidden');
  document.querySelector('.favorites-page').classList.remove('hidden');
  renderFavorites();
});

document.querySelector('.back-button').addEventListener('click', () => {
  document.querySelector('.favorites-page').classList.add('hidden');
  document.querySelector('.main-content').classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
  renderFavorites(); // Run after DOM content is fully loaded
});