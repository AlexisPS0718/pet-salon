let pets = [];
let inputName;
let inputAge;
let inputGender;
let inputService;
let divBreed;
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
  divBreed = document.getElementById("breed");
  divBreed.style.display = 'none';
  inputBreed = document.getElementById("ctrlBreed");
}

function register() {
  inputBreed = document.getElementById("ctrlBreed");
  let newPet = new Pet(inputName.value, Number(inputAge.value), getGender(), inputService.value, inputBreed.value, inputType.value);

  if (isValid(newPet)) {
    pets.push(newPet);

    document.getElementById('register-pets').style.display = 'block';
    document.getElementById('table').style.display = 'block';
    document.getElementById('numPets').innerHTML = getNumberOfPets();
    getInfo();
    displayCards();
    displayTable();
    document.getElementById('avg').innerHTML = getAverageAges();
    clearForm();
    inputName.classList.remove('alert-error');
    inputAge.classList.remove('alert-error');
  }
}

function clearForm() {
  inputName.value = '';
  inputAge.value = '';
  divBreed.style.display = 'none';
  inputService.selectedIndex = "0";
  inputType.selectedIndex = "0";
  document.getElementById('register').style.display = 'none';
  inputBreed.selectedIndex = "0";
}

function isValid(pet) {
  inputName.classList.remove('alert-error');
  inputService.classList.remove('alert-error');

  if (!pet.name || !pet.service) {
    if (!pet.name) {
      inputName.classList.add('alert-error');
    }
    if (!pet.service) {
      inputService.classList.add('alert-error');
    }
    return false;
  }

  return true;
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
    divBreed.style.display = 'block';
    divBreed.innerHTML =
      `<div class="input-control">
          <label for="">Breed: </label>
          <select name="" id="ctrlBreed">
            <option value="" selected="true" disabled>Select a breed</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Golden Retriever">Golden Retriever</option>
          </select>
        </div>
        <div id="register">
          <button class="btn-secondary" onclick="register()">Register</button>
        </div>`;
  } else if (inputType.value == 'cat') {
    divBreed.style.display = 'block';
    divBreed.innerHTML =
      `<div class="input-control">
          <label for="">Breed: </label>
          <select name="" id="ctrlBreed">
            <option value="" selected="true" disabled>Select a breed</option>
            <option value="Scottish Fold">Scottish Fold</option>
            <option value="British Shorthair">British Shorthair</option>
            <option value="Siamese">Siamese</option>
          </select>
        </div>
        <div id="register">
          <button class="btn-secondary" onclick="register()">Register</button>
        </div>`;
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