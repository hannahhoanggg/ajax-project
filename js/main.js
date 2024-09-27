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
 '15df8339-79d5-4061-840a-080ab736699e', // harry potter
 '65eba7cc-f613-4db2-a62d-a3895111a1c8', // hermione granger
 'fa79e43f-0c4c-45af-b7fc-c49a3adbbfb9', // ron weasley
 '79c75147-27f3-4076-90d8-827980bb49c3', // albus dumbledore
 'd59b3a0b-0b61-40cb-9011-e8bee7e6dd46', // minverva mcgonagall
 '820f73a0-6037-422e-8eb1-a9c22ab9f861', // neville longbottom
 '2b81a93-668d-4777-ac58-8865a6db2247', // rubeus hagrid
 '437b996e-ff52-448f-af7c-65d3aae0eb52', // draco malfoy
 '19eb1ac7-ef2d-421d-bc7c-0fd2ff46d09e', // ginny (ginerva) weasley
 '7911a096-9f34-45b8-a8c7-e9009923416d', // luna lovegood
 '401b86564-5bba-4b80-9cc3-7adc394d2e47', // molly weasley
 '5ab59e36-980a-4bee-b1c9-f0a3bbc94339', // severus snape
 '2c28e7aa-a759-491f-8045-e41491789fc6', // fred weasley
 '54b6c905-1d89-4f9c-a066-14411aef2737', // george weasley
 '01e36a8f-9445-4826-aae2-2fbe0f2b7864' // cedric diggory
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
