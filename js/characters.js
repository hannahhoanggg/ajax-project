const $apiContainer = document.querySelector('.api-container');

const request = new XMLHttpRequest();
request.open('GET', 'https://api.potterdb.com/v1/characters/harry-potter');
request.responseType = 'json';
request.send();

function loadEvent() {
  // console.log('response of http request:', request.response);

  for (let i = 0; i < request.response.data.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = request.response[i].name;
    $apiContainer.appendChild($li);
  }
}
request.addEventListener('load', loadEvent);
