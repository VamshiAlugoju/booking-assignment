
 let ulItems = document.querySelector("#items")
 let nameInp = document.querySelector("#name")
 let emailInp = document.querySelector("#email")
 let phoneInp = document.querySelector("#phone")
 window.addEventListener("load" , docall)
    
    function docall()
    {
        axios.get("https://crudcrud.com/api/5e23e7d240c14587b1b0194169f1a010/users")
        .then(res=>{
            // console.log(res.data)
            // showOutput(res.data)
            res.data.forEach(user=>{
                // console.log(user.name)
                localStorage.setItem(user.name , JSON.stringify(user))
            })
        })
        .catch(err=>console.log(err))

        showOutput();
    }


    function dothis(e)
    {
        e.preventDefault();
        let user = e.target;
         
        let userobj = {
            name:user.name.value,
            email:user.email.value,
            phone:user.phone.value,
        }
        localStorage.setItem(userobj.name,JSON.stringify(userobj));
        axios
        .post(
          "https://crudcrud.com/api/5e23e7d240c14587b1b0194169f1a010/users",
          userobj
        )
        .then((res) => {
          console.log(res);
          addtoDom(JSON.parse(localStorage.getItem(userobj.name)))
        })
        .catch(err=>{
            console.log(err);
        });
        
    }
     
    function showOutput()
    {     
        let users = Object.keys(localStorage)
         users.forEach(user => {
            let a = JSON.parse( localStorage.getItem( user))
            addtoDom(a);
        });
    }

      function addtoDom(a)
      {
        // console.log(a)
        let liEle = document.createElement("li");
        let btn = document.createElement("button");
        let editbtn = document.createElement("button")
        liEle.textContent =  a.name+"   " + a.email+"   "+a.phone;
        btn.innerText = "delete"
        btn.className = "delete btn btn-danger btn-sm ";
        btn.addEventListener("click",deleteuser)
        editbtn.textContent = "edit";
        editbtn.className = "edit btn btn-success btn-sm"
        editbtn.addEventListener("click" , edituser)

        liEle.appendChild(btn)
        liEle.appendChild(editbtn)
        ulItems.appendChild(liEle);
      }

    
    function deleteuser(e)
    {   
        let li = e.target.parentElement;
        let ul = li.parentElement;
        let key = li.textContent.split(" ")[0];
         
        localStorage.removeItem(key);

        ulItems.removeChild(li);

    }

    let a = new Set();


    function edituser(e)
    {
       let liele =  e.target.parentElement ;
       let key = liele.textContent.split(" ")[0];
       console.log(key)
       let user = JSON.parse(localStorage.getItem(key))
       localStorage.removeItem(key);

       nameInp.value  = user.name;
       emailInp.value = user.email;
       phoneInp.value = user.number

       ulItems.removeChild(liele)

    }