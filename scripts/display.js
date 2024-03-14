let list;
let card;
let info;
let table;
let petSalon = {
  name: 'The Fashion Pet',
  phone: '(999) 999-9999',
  address: {
    country: 'United States',
    city: 'San Francisco',
    zip: '12345'
  }
}

window.onload = init();

function init() {
  document.getElementById('salon-info').innerHTML = getSalon();
}

function getSalon() {
  list = `
  <ul>
    <li>${petSalon.name}</li>
    <li>${petSalon.phone}</li>
    <li>${petSalon.address.country}, ${petSalon.address.city}, ${petSalon.address.zip}</li>
  </ul>
  `

  return list;
}

function getPetNames() {
  list = '<ul>';

  for (let i = 0; i < pets.length; i++) {
    list += `<li>${pets[i].name}`;
    if (pets[i].type === 'dog') {
      list += ' 🐕</li>';
    } else if (pets[i].type === 'cat') {
      list += ' 🐈</li>';
    } else {
      list += '</li>';
    }
  }

  list += '</ul>';

  return list;
}

function getInfo() {
  const INFO_DIV = document.getElementById('info');
  let cats = 0;
  let dogs = 0;
  let bath = 0;
  let haircut = 0;
  let brushing = 0;
  let nailTrim = 0;
  info = '';

  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];

    if (pet.type === 'dog') {
      dogs++;
    } else if (pet.type === 'cat') {
      cats++;
    }

    switch (pet.service) {
      case "Bath":
        bath++;
        break;
      case "Haircut":
        haircut++;
        break;
      case "Brushing":
        brushing++;
        break;
      case "Nail trim":
        nailTrim++;
        break;
      default:
        break;
    }
  }

  info = `
      <div class="flex-row gap-2 info">
        <p>🐈: ${cats}</p>
        <p>🐕: ${dogs}</p>
        <p>🛀: ${bath}</p>
        <p>✂️: ${haircut}</p>
        <p>🪮: ${brushing}</p>
        <p>🐾: ${nailTrim}</p>
      </div>
    `;

  INFO_DIV.innerHTML = info;
}

function displayCards() {
  const PETS_DIV = document.getElementById('pet-list');
  let petType = '';
  card = '';

  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    let service = pet.service.toLowerCase();

    if (pet.type === 'dog') {
      petType = pet.name + ' 🐕';
    } else if (pet.type === 'cat') {
      petType = pet.name + ' 🐈';
    } else {
      petType = pet.name;
    }

    card += `
      <div class="card ${service.replace(/ /g, '')}">
        <p class="secondary-text">${petType}</p>
        <p><span class=bold>Age: </span>${pet.age}</p>
        <p><span class=bold>Gender: </span>${pet.gender}</p>
        <p><span class=bold>Service: </span>${pet.service}</p>
        <p><span class=bold>Breed: </span>${pet.breed}</p>
        <p><span class=bold>Payment method: </span>${pet.method}</p>
        <p><button class="btn-small" onclick="deletePet(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></button></p>
      </div>
    `;
  }

  PETS_DIV.innerHTML = card;
}

function displayTable() {
  const TABLE_DIV = document.getElementById('body');
  table = '';

  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];

    table += `
      <tr id=${i}>
        <th scope="row">${pet.name}</th>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.service}</td>
        <td>${pet.type}</td>
        <td>${pet.breed}</td>
        <td>${pet.method}</td>
        <td><button type="button" onclick="deletePet(${i})">Delete</button></td>
      </tr>
    `;
  }

  TABLE_DIV.innerHTML = table;
}