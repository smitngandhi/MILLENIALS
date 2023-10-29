   function register()
   {
      let idsignup = document.getElementById("emailsignup").value
      let passsignup = document.getElementById("passwordsignup").value  
      let namesignup = document.getElementById("namesignup").value 
      localStorage.setItem(idsignup,passsignup)
      localStorage.setItem(namesignup,idsignup)
      console.log(idsignup)
      console.log(passsignup)
      console.log(localStorage.getItem(namesignup))
      if(namesignup==="")
      {
         alert("Entered username is not valid!!")
      }
      else if(idsignup==="")
      {
         alert("Enter email is not valid!!!")
      }
      else if(passsignup==="")
      {
         alert("Enter password is not valid!!!")
      }
      else
      {
         window.open("login.html","_self")
      }
   }
   function openfile()
   {
      let idlogin = document.getElementById("emaillogin").value
      let passlogin = document.getElementById("passwordlogin").value
      console.log(idlogin)
      console.log(passlogin)
      if(passlogin=="" || idlogin=="")
      {
         alert("Either entered email or passsword is not entered!!!")
      }
      else if(passlogin===localStorage.getItem(idlogin))
      {
         console.log(1)
         window.open("animationindex.html","_self")
      }
      else
      {
         alert("Email and Password do not match to same user!!!")
      }
   }
   function forgetpassword()
   {
      let nameforget = document.getElementById("nameforget").value
      let emailforget = document.getElementById("emailforget").value
      console.log(nameforget)
      console.log(emailforget)
      console.log()
      if(nameforget=="" || emailforget=="")
      {
         alert("Either entered username or password is not entered!!!")
      }
      else if(emailforget===localStorage.getItem(nameforget))
      {
         alert("Your password is "+localStorage.getItem(emailforget))
         window.open("login.html","_self")
      }
      else{
         alert("Either entered email or passsword is not matching with the user details!!!")
      }
   }