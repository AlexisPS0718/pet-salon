let petSalon = {
  name: 'Pet Salon',
  phone: 999 - 9999 - 9999,
  price: 1000,
  address: {
    country: 'United States',
    city: 'San Francisco',
    zip: '12345'
  },
  pets: [
    {
      name: 'Scooby',
      age: 10,
      gender: 'Male',
      service: 'Bath',
      breed: 'Great Dane',
      type: 'dog'
    },
    {
      name: 'Cookie',
      age: 3,
      gender: 'Female',
      service: 'Haircut',
      breed: 'Scottish Fold',
      type: 'cat'
    },
    {
      name: 'Salsa',
      age: 5,
      gender: 'Male',
      service: 'Brushing',
      breed: 'Siamese',
      type: 'cat'
    },
    {
      name: 'Morgana',
      age: 2,
      gender: 'Male',
      service: 'Nail trim',
      breed: 'British Shorthair',
      type: 'cat'
    }
  ]
}

document.getElementById('numPets').innerHTML = getNumberOfPets();
document.getElementById('pet-list').innerHTML = getPetNames();

function getNumberOfPets() {
  return petSalon.pets.length;
}

function getPetNames() {
  let list = '<ul>';

  for (let i = 0; i < petSalon.pets.length; i++) {
    list += `<li>${petSalon.pets[i].name}`;
    if (petSalon.pets[i].type === 'dog') {
      list += ' 🐕</li>';
    } else if (petSalon.pets[i].type === 'cat') {
      list += ' 🐈</li>';
    }
  }

  list += '</ul>';

  return list;
}