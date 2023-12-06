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
  '42d8662b-24a2-434b-8394-945ff0daa194', // harry
  'ef6195c9-fc46-4a13-95eb-cf90848c8a9f', // hermione
  '1cfd4f04-cd14-45c1-96d7-a08287e7b671', // ron
  '80d199a6-21c0-43eb-9026-51bd77b2c9a5', // dumbledore
  'e4d82fb3-e07b-439c-ac65-3dfbef5a8985', // mcgonagall
  'fbf54908-4fc8-4eab-b67b-541118612096', // neville
  '94eb4256-18b2-4b10-90b3-8e400c860eb0', // hagrid
  '70d041f6-10af-4f6b-be5f-644025838c7d', // malfoy
  '51c25a9c-5cce-4404-b686-70a01f534dd4', // ginny
  '6281cd42-37b5-4602-9bb2-ce3efe1c04e7', // luna
  '46471d0a-fcbb-4ecb-a4d6-376881588f88', // molly
  '324801b0-398c-4c98-afde-15a93ace991f', // snape
  '125f941e-14c6-42ca-83d6-7ea1ccdf32cb', // fred
  '18e18593-b6ae-41a3-ad2e-489ddd5ae096', // george
  '54f419af-9476-420c-ab21-ea96a5ab44c2' // cedric
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
