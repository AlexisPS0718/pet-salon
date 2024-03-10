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
  info = '';

  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];

    if (pet.type === 'dog') {
      dogs++;
    } else if (pet.type === 'cat') {
      cats++;
    }
  }

  info = `
      <div class="flex-row gap-2">
        <p>Cats 🐈: ${cats}</p>
        <p>Dogs 🐕: ${dogs}</p>
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
      <tr>
        <th scope="row">${pet.name}</th>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.service}</td>
        <td>${pet.type}</td>
        <td>${pet.breed}</td>
      </tr>
    `;
  }

  TABLE_DIV.innerHTML = table;
}