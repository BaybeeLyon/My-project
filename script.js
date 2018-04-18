

function insRow(id) {
    var contact =  {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        mobile: document.getElementById('mob_num').value,
        phone: document.getElementById('pho_num').value,
        emailAddress: document.getElementById('e_mail').value
    };

    var person = document.getElementById(id).insertRow(-1);
    var n = person.insertCell(0);
    var m = person.insertCell(1);
    var p = person.insertCell(2);
    var e = person.insertCell(3);
    n.innerHTML = contact.firstName + " " + contact.lastName;
    m.innerHTML = contact.mobile;
    p.innerHTML = contact.phone;
    e.innerHTML = contact.emailAddress;

    document.getElementById("new_contact").reset();
}

function discardEntry() {
    document.getElementById("new_contact").reset();
}

function listContacts (){
    document.getElementById("allContacts").style.display = "block";
}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



