window.onload=function(){

    var users=["vladimir", "natasa", "pavle"];

    document.getElementById("username").addEventListener("invalid", function(sender){
        console.log(sender.target.validity);
        sender.target.setCustomValidity("");
        document.getElementById("username_empty").style.display="none";
        document.getElementById("username_l_s").style.display="none";

        if(sender.target.validity.valueMissing)
        {
            document.getElementById("username_empty").style.display="block";
            sender.target.setCustomValidity("empty...");
        }
        else{
            if(sender.target.validity.tooShort || sender.target.validity.tooLong)
            {
                document.getElementById("username_l_s").style.display="block";
                sender.target.setCustomValidity("too short or long...");
            }
            else
            {
                if(sender.target.validity.already_exsist)
                {
                     document.getElementById("username_exists").style.display="block";
                     sender.target.setCustomValidity("Username already exist");
                }
                else{
                    document.getElementById("username_exists").style.display="none";
                    sender.target.setCustomValidity("");
                }
            }
        }
    });

    document.getElementById("username").addEventListener("input", function(sender){                              
            console.log(users.indexOf(sender.target.value));
            if(users.indexOf(sender.target.value)!=-1){                
                sender.target.validity.already_exsist=true;               
            }
            else
            {
                  sender.target.validity.already_exsist=false; 
            }            
            console.log(sender.target.validity);

            //sender.target.checkValidity();
    });

    document.getElementById("password2").addEventListener("input", function(){
        var pass1=document.getElementById("password");
        var pass2=document.getElementById("password2");
        var passLabel=document.getElementById("password_dont_match");
        var passLabel2=document.getElementById("password_match");
        pass2.setCustomValidity("");

        passLabel.style.display="none";
        passLabel2.style.display="none";

        if( pass1.value != pass2.value){
            passLabel.style.display="block";
            pass2.setCustomValidity("passwords do not match");
        }
        else
        {
            passLabel2.style.display="block";
        }

    })
}