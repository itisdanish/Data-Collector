// scripts.js
function onFormSubmit() {
    var formData = readFormData();
    if (formData) {
      insertNewRecord(formData);
      resetForm();
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function readFormData() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var officeLocation = document.getElementById("location").value;
  
    if (firstName && lastName && officeLocation) {
      return { firstName, lastName, officeLocation };
    } else {
      return null;
    }
  }
  
  function insertNewRecord(data) {
    var table = document.getElementById("tabledata");
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = data.firstName;
    cell2.innerHTML = data.lastName;
    cell3.innerHTML = data.officeLocation;
  }
  
  function resetForm() {
    document.getElementById("formvalue").reset();
  }
  