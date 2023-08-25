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
  '8c43c796-2e42-4a81-8d37-447a02e4235a', // harry
  '36228ea4-fb5d-42d1-863a-770ac02c5464', // hermione
  '8e5223c6-7e60-4a22-808b-fa39762f1686', // ron
  '07a2d24a-602c-4986-9941-86cc80f35709', // dumbledore
  '58317657-14f0-4f91-bf76-06fad9cbc651', // mcgonagall
  '6635d2e5-07ac-42ba-adf3-18a834fba5b4', // neville
  '97dbd832-f038-4d87-83c6-fa7d03131a4a', // hagrid
  'dd4e3454-67d9-45c3-8f43-0f3eebbd3234', // malfoy
  '7e3b7067-9319-49b1-9a07-5efa5e3e23cd', // ginny
  'd83d5c2a-1a24-414f-8d32-c268c3cd8a10', // luna
  'ff032a78-3b9d-40d5-b5d7-26203c5a6c52', // molly
  '2081dc402b5940c59fdb036263c42fbb', // snape
  '319c2a73-3cda-4dd3-9562-2c40009d34c5', // fred
  '23af9747-5659-4055-9774-54f08bcaec8c', // george
  'cf70445a-6b44-4a51-98de-f14d19d0389b' // cedric
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
