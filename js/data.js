/* exported data */

let data = {
  favHPChar: [],
  favHPCharImg: []
};

const previousDataJSON = localStorage.getItem('harry-potter-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function beforeUnload(event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('harry-potter-storage', dataJSON);
}

window.addEventListener('beforeunload', beforeUnload);
