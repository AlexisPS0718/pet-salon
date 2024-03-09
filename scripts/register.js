let pets = [];
let inputName;
let inputAge;
let inputGender;
let inputService;
let inputBreed;
let inputType;

window.onload = init();

function Pet(name, age, gender, service, breed, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.service = service;
  this.breed = breed;
  this.type = type;
}

function init() {
  let pet1 = new Pet("Scooby", 10, "Male", "Bath", "Great Dane", "dog");
  let pet2 = new Pet("Cookie", 3, "Female", "Haircut", "Scottish Fold", "cat");
  let pet3 = new Pet("Salsa", 5, "Male", "Brushing", "Siamese", "cat");
  let pet4 = new Pet("Morgana", 2, "Male", "Nail trim", "British Shorthair", "cat");

  pets.push(pet1, pet2, pet3, pet4);

  inputName = document.getElementById("txtName");
  inputAge = document.getElementById("txtAge");
  inputGender = document.getElementsByName("gender");
  inputService = document.getElementById("ctrlService");
  inputType = document.getElementById("ctrlType");
}

function register() {
  let newPet = new Pet(inputName.value, Number(inputAge.value), getGender(), inputService.value, inputBreed.value, inputType.value);
  pets.push(newPet);
  document.getElementById('pet-list').innerHTML = getPetNames();
  document.getElementById('register-pets').style.display = 'block';
  document.getElementById('numPets').innerHTML = getNumberOfPets();
  document.getElementById('pet-list').innerHTML = getPetNames();
  document.getElementById('avg').innerHTML = getAverageAges();
}

function clearForm() {
  document.getElementById('txtName').value = '';
  document.getElementById('txtAge').value = '';
  document.getElementById('register').style.display = 'none';
  document.getElementById('breedC').style.display = 'none';
  document.getElementById('breedD').style.display = 'none';
}

function getGender() {
  for (let i = 0; i < inputGender.length; i++) {
    if (inputGender[i].checked) {
      return inputGender[i].value;
    }
  }
}

function getType() {
  if (inputType.value == 'dog') {
    document.getElementById('breedD').style.display = 'block';
    document.getElementById('breedC').style.display = 'none';
    inputBreed = document.getElementById('ctrlBreedD');
  } else if (inputType.value == 'cat') {
    document.getElementById('breedC').style.display = 'block';
    document.getElementById('breedD').style.display = 'none';
    inputBreed = document.getElementById('ctrlBreedC');
  }

  document.getElementById('register').style.display = 'block';
}

function getNumberOfPets() {
  return pets.length;
}

function getAverageAges() {
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < pets.length; i++) {
    sum += pets[i].age;
    console.log(pets[i].age);
  }

  avg = sum / pets.length;

  return avg;
}