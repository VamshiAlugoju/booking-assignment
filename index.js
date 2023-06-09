let Userdata = [];

let ulItems = document.querySelector("#items");
let nameInp = document.querySelector("#name");
let emailInp = document.querySelector("#email");
let phoneInp = document.querySelector("#phone");
window.addEventListener( "load" , OnLoad);

// function that gets called for the first time window loads
function OnLoad() {
  axios
    .get("http://localhost:5000")
    .then((res) => {
      LoadListItems(res.data);
    })
    .catch((err) => console.log( "error is ", err));
}



// gets called when we add  a new user
function dothis(e) {
  e.preventDefault();
  let user = e.target;

  let userobj = {
    name: user.name.value,
    phone: user.phone.value,
    Email: user.email.value,
  };
  axios 
  .post(
    "http://localhost:5000",
    userobj
    )
    .then((res) => {
      addtoDom(res.data);
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
}



// function that first called to get the user on the screeen for the first time
function LoadListItems(users) {
  users.forEach((user) => {
    addtoDom(user) ;
  });
}



// function that adds a list ele to the dom;
function addtoDom(a) {
  let liEle = document.createElement("li");
  let btn = document.createElement("button");
  let editbtn = document.createElement("button");

 console.log(a.id);
  liEle.textContent =  a.name 
  + "   " +  a.phone + "   " +
  a.Email;

  btn.innerText = "delete";
  btn.className = "delete btn btn-danger btn-sm ";
  btn.addEventListener("click", deleteuser);
  editbtn.textContent = "edit";
  editbtn.className = "edit btn btn-success btn-sm";
  editbtn.addEventListener("click", edituser);

  liEle.id = a.id;
  liEle.appendChild(btn);
  liEle.appendChild(editbtn);
  ulItems.appendChild(liEle);
}



// function that deletes the user li item from the dom and userdata array
function deleteuser(e) {
  let li = e.target.parentElement;
  let ul = li.parentElement;
  let idTodelete = li.getAttribute("id");
 
  ulItems.removeChild(li);
  deleteFromStorage(idTodelete);
}


//function that actually deletes an item from the userdaa array
function deleteFromStorage(userId) {
  
  // localStorage.removeItem(userId);
  axios.delete(`http://localhost:5000/${userId}`)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err); 
  })
}


// function to edit user
function edituser(e) {
  let liele = e.target.parentElement;
  let idTodelete = liele.getAttribute("id");
  let user = JSON.parse(localStorage.getItem(idTodelete))
  deleteFromStorage(idTodelete);
  nameInp.value = user.name;
  emailInp.value = user.email;
  phoneInp.value = user.phone;

  ulItems.removeChild(liele);
}

 