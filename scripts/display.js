let list;
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