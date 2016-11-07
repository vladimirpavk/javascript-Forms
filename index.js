window.onload=function(){

    var users=["vladimir", "natasa", "pavle"];

    /*document.getElementById("username").addEventListener("invalid", function(sender){
        console.log(sender.target.validity);
        sender.target.setCustomValidity("");
        document.getElementById("username_empty").style.display="none";
        document.getElementById("username_l_s").style.display="none";

        if(sender.target.validity.valueMissing)
        {
            document.getElementById("username_empty").style.display="inline-block";
            sender.target.setCustomValidity("empty...");
        }
        else{
            if(sender.target.validity.tooShort || sender.target.validity.tooLong)
            {
                document.getElementById("username_l_s").style.display="inline-block";
                sender.target.setCustomValidity("too short or long...");
            }
            else
            {
                if(sender.target.validity.already_exsist)
                {
                     document.getElementById("username_exists").style.display="inline-block";
                     sender.target.setCustomValidity("Username already exist");
                }
                else{
                    document.getElementById("username_exists").style.display="none";
                    sender.target.setCustomValidity("");
                }
            }
        }
    });*/

    document.getElementById("username").addEventListener("invalid", function(sender){
            console.log(sender.target.validity);         
            
            if(sender.target.validity.valueMissing)
            {            
                sender.target.setCustomValidity("username can not be empty...");
            }
            else{
                if(sender.target.validity.tooShort || sender.target.validity.tooLong)
                {
                    sender.target.setCustomValidity("username must be from 6 to 18 characters long...");
                }              
            }
    })

    document.getElementById("username").addEventListener("input", function(sender){                              
            console.log(users.indexOf(sender.target.value));
            if(users.indexOf(sender.target.value)!=-1){                
                //sender.target.validity.already_exsist=true;     
                document.getElementById("username").setCustomValidity("Username already exist...")
                document.getElementById("username_exists").style.display="inline-block";          
            }
            else
            {
                  //sender.target.validity.already_exsist=false;
                  document.getElementById("username").setCustomValidity(""); 
                  document.getElementById("username_exists").style.display="none";
            }                       
    });

    document.getElementById("pass").addEventListener("invalid", function(sender){
            console.log(sender.target.validity);
    });

    document.getElementById("password2").addEventListener("input", function(){
        var pass1=document.getElementById("password");
        var pass2=document.getElementById("password2");
        var passLabel=document.getElementById("password_dont_match");
        var passLabel2=document.getElementById("password_match");     

        if( pass1.value != pass2.value){
            passLabel2.style.display="none";
            passLabel.style.display="inline-block";
            pass2.setCustomValidity("passwords do not match");
        }
        else
        {
            passLabel2.style.display="inline-block";
            passLabel.style.display="none";
            pass2.setCustomValidity("");
        }

    })
}