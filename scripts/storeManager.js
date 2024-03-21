function saveItem(item) {
  let list = readItems();
  list.push(item);

  let val = JSON.stringify(list);

  localStorage.setItem("services", val);
}

function readItems() {
  let data = localStorage.getItem("services");

  if (!data) {
    return [];
  } else {
    let list = JSON.parse(data);

    return list;
  }
}