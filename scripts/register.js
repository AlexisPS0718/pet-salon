let pets = [];
let inputName;
let inputAge;
let inputGender;
let inputService;
let divBreed;
let inputBreed;
let inputType;
let inputMethod;

window.onload = init();

function Pet(name, age, gender, service, breed, type, method, price) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.service = service;
  this.breed = breed;
  this.type = type;
  this.method = method;
  this.price = price;
}

function init() {
  getServices();
  $("#closeNotification").click(hideNotification);

  let pet1 = new Pet("Scooby", 10, "Male", "Bath", "Great Dane", "dog", "Credit Card", getServicePrice("Bath"));
  let pet2 = new Pet("Cookie", 3, "Female", "Haircut", "Scottish Fold", "cat", "Debit Card", getServicePrice("Haircut"));
  let pet3 = new Pet("Salsa", 5, "Male", "Brushing", "Siamese", "cat", "Credit Card", getServicePrice("Brushing"));
  let pet4 = new Pet("Morgana", 2, "Male", "Nail trim", "British Shorthair", "cat", "Cash", getServicePrice("Nail trim"));

  pets.push(pet1, pet2, pet3, pet4);

  inputName = document.getElementById("txtName");
  inputAge = document.getElementById("txtAge");
  inputGender = document.getElementsByName("gender");
  inputService = document.getElementById("ctrlService");
  inputType = document.getElementById("ctrlType");
  divBreed = document.getElementById("breed");
  divBreed.style.display = 'none';
  inputBreed = document.getElementById("ctrlBreed");
  inputMethod = document.getElementById("payMethod");
}

function register() {
  inputBreed = document.getElementById("ctrlBreed");

  console.log("Service: " + inputService.value);

  let newPet = new Pet(inputName.value, Number(inputAge.value), getGender(), inputService.value, inputBreed.value, inputType.value, inputMethod.value, getServicePrice(inputService.value));

  console.log("Result: " + getServicePrice(String(inputService.value)))

  if (isValid(newPet)) {
    pets.push(newPet);

    document.getElementById('register-pets').style.display = 'block';
    /* document.getElementById('table').style.display = 'block'; */
    document.getElementById('numPets').innerHTML = getNumberOfPets();
    document.getElementById('avg').innerHTML = getAverageAges();
    getInfo();
    displayCards();
    /* displayTable(); */
    clearForm();
    inputName.classList.remove('alert-error');
    inputAge.classList.remove('alert-error');
    inputMethod.classList.remove('alert-error');
  }
}

function clearForm() {
  inputName.value = '';
  inputAge.value = '';
  divBreed.style.display = 'none';
  inputService.selectedIndex = "0";
  inputType.selectedIndex = "0";
  document.getElementById('form-half').style.display = 'none';
  inputMethod.selectedIndex = "0";
  document.getElementById("ctrlBreed").selectedIndex = "0";
}

function isValid(pet) {
  inputMethod.classList.remove('alert-error');
  inputName.classList.remove('alert-error');
  inputService.classList.remove('alert-error');

  if (!pet.name || !pet.service || !pet.method) {
    if (!pet.name) {
      inputName.classList.add('alert-error');
    }
    if (!pet.service) {
      inputService.classList.add('alert-error');
    }
    if (!pet.method) {
      inputMethod.classList.add('alert-error');
    }
    return false;
  }
  $("#notification").removeClass("alert-danger");
  showNotification("Pet registered successfully", "alert-success");
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
    divBreed.innerHTML =
      `<div class="input-control">
          <label for="">Breed: </label>
          <select name="" id="ctrlBreed">
            <option value="" selected="true" disabled>Select a breed</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Shiba Inu">Shiba Inu</option>
            <option value="Other">Other</option>
          </select>
        </div>`;
    document.getElementById('form-half').style.display = 'block';
  } else if (inputType.value == 'cat') {
    divBreed.innerHTML =
      `<div class="input-control">
          <label for="">Breed: </label>
          <select name="" id="ctrlBreed">
            <option value="" selected="true" disabled>Select a breed</option>
            <option value="Scottish Fold">Scottish Fold</option>
            <option value="British Shorthair">British Shorthair</option>
            <option value="Siamese">Siamese</option>
            <option value="Other">Other</option>
          </select>
        </div>
        `;
    document.getElementById('form-half').style.display = 'block';
  }

  divBreed.style.display = 'block';

}

function getNumberOfPets() {
  return pets.length;
}

function getAverageAges() {
  let sum = 0;
  let avg = 0;

  if (!pets.length) {
    return 0;
  }

  for (let i = 0; i < pets.length; i++) {
    sum += pets[i].age;
    /* console.log(pets[i].age); */
  }

  avg = sum / pets.length;

  return avg.toFixed(2);
}

function deletePet(index) {
  console.log('Deleting pet ' + index);
  pets.splice(index, 1);
  /* document.getElementById(index).remove(); */
  /* displayTable(); */
  displayCards();
  document.getElementById('numPets').innerHTML = getNumberOfPets();
  document.getElementById('avg').innerHTML = getAverageAges();
  getInfo();
  $("#notification").removeClass("alert-success");
  showNotification("Pet deleted successfully", "alert-danger");
}

function showNotification(msg, style) {
  $("#notification").addClass(style);
  $("#notificationText").text(msg);
  $("#notification").show();
  setTimeout(hideNotification, 5000);

}

function hideNotification() {
  $("#notification").hide();
}

function getServices() {
  let items = readItems();
  let list = $("#ctrlService");
  let option = "";

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    option = `<option value="${item.name}">${item.name}</option>`;
    list.append(option);
  }
}

function getServicePrice(service) {
  let items = readItems();
  let price = 0;

  for (let i = 0; i < items.length; i++) {
    if (service == items[i].name) {
      price = items[i].price;
      break;
    }
  }
  console.log("Price: " + Number(price));
  return Number(price);
}

function getProfit() {
  let items = readItems();
  let profit = 0;

  for (let i = 0; i < pets.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (pets[i].service == items[j].name) {
        profit += items[j].price;
        break;
      }
    }
  }
  return profit;
}