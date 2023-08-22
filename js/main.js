const $main = document.getElementsByTagName('main')[0];

function renderHPCharacters(name, image) {
  const $charContainer = document.createElement('div');
  $charContainer.className = 'character-container';
  $main.appendChild($charContainer);

  const $charView = document.createElement('div');
  $charView.className = 'character-view';
  $charView.appendChild($charContainer);

  const $hpCard = document.createElement('div');
  $hpCard.className = 'hp-card';
  $hpCard.appendChild($charView);

  const $columnFifth = document.createElement('div');
  $columnFifth.className = 'column-fifth';
  $columnFifth.appendChild($hpCard);

  const $hpName = document.createElement('h2');
  $hpName.className = 'hp-name';
  $hpName.appendChild($columnFifth);

  const $likeButton = document.createElement('i');
  $likeButton.className = 'fa-regular fa-heart like-button ';
  $likeButton.appendChild($hpName);

  const $image = document.createElement('img');
  $image.className = 'img';
  $image.setAttribute('src', 'images/1.webp');
  $image.appendChild($hpCard);

  const $viewInfo = document.createElement('a');
  $viewInfo.className = 'view-info';
  $viewInfo.appendChild($hpCard);

  // $hpName.textContent = capitalize(name);
}

const characters = {
  harryPotterID: '8c43c796-2e42-4a81-8d37-447a02e4235a',
  hermioneGrangerID: '36228ea4-fb5d-42d1-863a-770ac02c5464',
  ronWeasleyID: '8e5223c6-7e60-4a22-808b-fa39762f1686',
  albusDumbledoreID: '07a2d24a-602c-4986-9941-86cc80f35709',
  minervaMcGonagallID: '58317657-14f0-4f91-bf76-06fad9cbc651',
  severusSnapeID: '2081dc40-2b59-40c5-9fdb-036263c42fbb',
  nevilleLongbottomID: '6635d2e5-07ac-42ba-adf3-18a834fba5b4',
  rubeusHagridID: '97dbd832-f038-4d87-83c6-fa7d03131a4a',
  dracoMalfoyID: 'dd4e3454-67d9-45c3-8f43-0f3eebbd3234',
  siriusBlackID: '7757c670-7db2-4579-ae98-0d60fadf871b',
  ginnyWeasleyID: '7e3b7067-9319-49b1-9a07-5efa5e3e23cd',
  lunaLovegoodID: 'd83d5c2a-1a24-414f-8d32-c268c3cd8a10',
  mollyWeasleyID: 'ff032a78-3b9d-40d5-b5d7-26203c5a6c52',
  arthurWeasleyID: '29baafc0-f25d-4668-8096-577cf02b49c6',
  dobbyID: '8cb2731a-a56d-4d5d-9753-3e82ac866923',
  fredWeasleyID: '319c2a73-3cda-4dd3-9562-2c40009d34c5',
  georgeWeasleyID: '23af9747-5659-4055-9774-54f08bcaec8c',
  cedricDiggoryID: 'cf70445a-6b44-4a51-98de-f14d19d0389b',
  choChangID: '806567dd-e776-4b3a-90f0-c712204e32fe',
  voldemortID: 'b8230edb-7e43-4fcd-8365-42a6c5ec7f37'
};

function getCharacterData(charID) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.potterdb.com/v1/characters/' + charID);
  request.send();

  request.addEventListener('load', function () {
    const charData = JSON.parse(request.response);
    for (const characterKey in characters) {
      const characterID = characters[characterKey];
      getCharacterData(characterID);
    }
    renderHPCharacters(charData.data.attributes.image, charData.data.attributes.name);
  });
}
getCharacterData();
// // Replace GUID with variable from a loop
// getCharacterData(characterID);

// function capitalize(string) {
//   let capitalizeword = '';
//   capitalizeword = string[0].toUpperCase();
//   capitalizeword += string.substring(1);
//   return capitalizeword;
// }
