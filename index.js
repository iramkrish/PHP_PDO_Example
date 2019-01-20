function make_it_visible() {
  if (document.getElementById('display').style.display == "block") {
    document.getElementById('display').style.display = "none";

  } else {
    document.getElementById('display').style.display = "block";
    document.getElementById('thank-you').style.display = "none";
  }
}

function popup(event) {
  const element_id = document.getElementById(event.target.parentElement.id);
  if (element_id) !== null) {
  if (event.currentTarget.id !== element_id) {
    const popup_id = document.getElementById('popup');
    popup_id.children[0].innerHTML = "";
    popup_id.children[1].innerHTML = "";
    document.getElementById('test-id').style.display = "flex";

    const img = '<img src="' + t.children[0].src + '"/>';

    popup_id.children[0].innerHTML = img;
    popup_id.children[0].appendChild(element_id.children[1].children[0].cloneNode(true));
    popup_id.children[1].appendChild(element_id.children[1].children[1].cloneNode(true));

  }
}

}

function popin() {
  document.getElementById('test-id').style.display = 'none';
}

function ajax_call() {
  const fname = document.getElementById('firstname').value;
  const lname = document.getElementById('lastname').value;
  const selected = document.getElementById('selected').value;

  if (fname != "" && lname != "" && selected != "") {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('button-space-id').style.display = "none";
        document.getElementById('display').style.display = "none";
        document.getElementById('thank-you').style.display = "flex";
      }
    };
    xhttp.open("POST", "action.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=" + fname + "&lname=" + lname + "&selected=" + selected);
  } else {
    alert("Please fill all the required details");
  }
}

function check() {
  ajax_call();
}