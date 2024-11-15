const $charContainer = document.querySelector('.character-container');

function renderHPCharacters(name, charImage) {

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
 'fd67ddb5d-192b-4d75-8f18-c55a1b5ce442', // ron weasley
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
    $charContainer.appendChild(renderHPCharacters(charData.data.attributes.name, charData.data.attributes.image));
  });
}

function getAllCharacters() {
  for (const charID of characters) {
    getCharacterData(charID);
  }
}
getAllCharacters();
