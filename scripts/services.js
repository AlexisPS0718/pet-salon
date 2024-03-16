let services = [];
let inputName;
let inputPrice;

window.onload = init();

function Service(name, price) {
  this.name = name;
  this.price = price;
}

function init() {
  $("#closeNotification").click(hideNotification);

  let serv1 = new Service("Bath", 30);
  let serv2 = new Service("Haircut", 50);
  let serv3 = new Service("Brushing", 25);
  let serv4 = new Service("Nail trim", 25);

  services.push(serv1, serv2, serv3, serv4);

  inputName = document.getElementById("serviceName");
  inputPrice = document.getElementById("servicePrice");
}

function register() {
  let newService = new Service(inputName.value, Number(inputPrice.value));

  if (isValid(newService)) {
    services.push(newService);
    document.getElementById('register-services').style.display = 'block';

    clearForm();
    displayServices();

    inputName.classList.remove('alert-error');
    inputPrice.classList.remove('alert-error');
  }
}

function clearForm() {
  inputName.value = '';
  inputPrice.value = '';
}

function isValid(service) {
  inputName.classList.remove('alert-error');
  inputPrice.classList.remove('alert-error');

  if (!service.name || !service.price) {
    if (!service.name) {
      inputName.classList.add('alert-error');
    }
    if (!service.price) {
      inputPrice.classList.add('alert-error');
    }
    return false;
  }

  $("#notification").removeClass("alert-danger");
  showNotification("Service registered successfully", "alert-success");
  return true;
}

function deleteService(index) {
  services.splice(index, 1);

  displayServices();

  $("#notification").removeClass("alert-success");
  showNotification("Service deleted successfully", "alert-danger");
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