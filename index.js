
 let ulItems = document.querySelector("#items")
 
 
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
        liEle.textContent = userobj.name+"   " + userobj.email+"   "+userobj.number;
        btn.innerText = "delete"
        btn.className = "delete btn btn-danger btn-sm ";
        btn.addEventListener("click",deleteuser)
        liEle.appendChild(btn)
        ulItems.appendChild(liEle);
       
    }
     

    
    function deleteuser(e)
    {   
        console.log("esl")
        let li = e.target.parentElement;
        let ul = li.parentElement;
        ulItems.removeChild(li);
    }