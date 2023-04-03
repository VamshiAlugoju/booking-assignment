
 let ulItems = document.querySelector("#items")
 let nameInp = document.querySelector("#name")
 let emailInp = document.querySelector("#email")
 let phoneInp = document.querySelector("#phone")

 
    function dothis(e)
    {
        e.preventDefault();
        let user = e.target;
         
        let userobj = {
            name:user.name.value,
            email:user.email.value,
            number:user.phone.value,
        }
       
       
        localStorage.setItem(userobj.name,JSON.stringify(userobj));


        let liEle = document.createElement("li");
        let btn = document.createElement("button");
        let editbtn = document.createElement("button")
        liEle.textContent = userobj.name+"   " + userobj.email+"   "+userobj.number;
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
        console.log("esl")
        let li = e.target.parentElement;
        let ul = li.parentElement;
        let key = li.textContent.split(" ")[0];
         
        localStorage.removeItem(key);

        ulItems.removeChild(li);

    }

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