
 

    function dothis(e)
    {
        e.preventDefault();
        let user = e.target;
        let userobj = {
            name:user.name.value,
            email:user.email.value,
            number:user.phone.value,
            date:user.date.value,
            time:user.time.value
        }
        let UserArr ;
        if(localStorage.getItem("users") === null)
        {    UserArr = [];
        }
        else{
            UserArr =JSON.parse( localStorage.getItem("users"));   
        }
        UserArr.push(userobj);
        localStorage.setItem("users",JSON.stringify(UserArr));
       
    }
    