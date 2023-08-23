const $main = document.getElementsByTagName('main')[0];

function renderHPCharacters(name, charImage) {
  const $charContainer = document.createElement('div');
  $charContainer.className = 'character-container';

  const $charView = document.createElement('div');
  $charView.className = 'character-view';

  const $characterRow = document.createElement('div');
  $characterRow.className = 'row';

  const $columnFifth = document.createElement('div');
  $columnFifth.className = 'column-fifth';

  const $hpName = document.createElement('h2');
  $hpName.className = 'hp-name';

  const $newButtonRow = document.createElement('div');
  $newButtonRow.className = 'new-button-row';

  const $likeButton = document.createElement('i');
  $likeButton.className = 'fa-regular fa-heart like-button ';

  const $row2 = document.createElement('div');
  $row2.className = 'img-row';

  const $image = document.createElement('img');
  $image.className = 'img';
  $image.setAttribute('src', charImage);

  const $rowInfo = document.createElement('div');
  $rowInfo.className = 'row info';

  const $viewInfo = document.createElement('a');
  $viewInfo.className = 'view-info';

  $main.appendChild($charContainer);
  $charView.appendChild($charContainer);
  $characterRow.appendChild($charView);
  $columnFifth.appendChild($characterRow);
  $hpName.appendChild($columnFifth);
  $newButtonRow.appendChild($columnFifth);
  $likeButton.appendChild($newButtonRow);
  $row2.appendChild($charView);
  $image.appendChild($columnFifth);
  $rowInfo.appendChild($charView);
  $viewInfo.appendChild($rowInfo);

  $hpName.textContent = capitalize(name);
}

const characters = [
  '8c43c796-2e42-4a81-8d37-447a02e4235a' // harry
  // '36228ea4-fb5d-42d1-863a-770ac02c5464', // hermione
  // '8e5223c6-7e60-4a22-808b-fa39762f1686', // ron
  // '07a2d24a-602c-4986-9941-86cc80f35709', // dumbledore
  // '58317657-14f0-4f91-bf76-06fad9cbc651', // mcgonagall
  // '2081dc40-2b59-40c5-9fdb-036263c42fbb' // snape
  // '6635d2e5-07ac-42ba-adf3-18a834fba5b4', // neville
  // '97dbd832-f038-4d87-83c6-fa7d03131a4a', // hagrid
  // 'dd4e3454-67d9-45c3-8f43-0f3eebbd3234', // malfoy
  // '7757c670-7db2-4579-ae98-0d60fadf871b', // sirius
  // '7e3b7067-9319-49b1-9a07-5efa5e3e23cd', // ginny
  // 'd83d5c2a-1a24-414f-8d32-c268c3cd8a10', // luna
  // 'ff032a78-3b9d-40d5-b5d7-26203c5a6c52', // molly
  // '29baafc0-f25d-4668-8096-577cf02b49c6', // arthur
  // '8cb2731a-a56d-4d5d-9753-3e82ac866923', // dobby
  // '319c2a73-3cda-4dd3-9562-2c40009d34c5', // fred
  // '23af9747-5659-4055-9774-54f08bcaec8c', // george
  // 'cf70445a-6b44-4a51-98de-f14d19d0389b', // cedric
  // '806567dd-e776-4b3a-90f0-c712204e32fe', // cho
  // 'b8230edb-7e43-4fcd-8365-42a6c5ec7f37' // voldemort
];

function getCharacterData(charID) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.potterdb.com/v1/characters/' + charID);
  request.send();

  request.addEventListener('load', function () {
    const charData = JSON.parse(request.response);
    renderHPCharacters(charData.data.attributes.name, charData.data.attributes.image);
  });
}

function getAllCharacters() {
  for (const charID of characters) {
    getCharacterData(charID);
  }
}
getAllCharacters();

function capitalize(string) {
  let capitalizeword = '';
  capitalizeword = string[0].toUpperCase();
  capitalizeword += string.substring(1);
  return capitalizeword;
}
