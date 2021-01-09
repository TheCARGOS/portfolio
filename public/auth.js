// testing authentication
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
        
      console.log(token)
      console.log(user)

      const userPhoto = document.getElementById("user-photo")
      const userName = document.getElementById("user-name")
      const userPhoto2 = document.getElementById("user-photo-2")
      const userName2 = document.getElementById("user-name-2")
      userPhoto.src = user.photoURL
      userName.textContent = user.displayName
      userPhoto2.src = user.photoURL
      userName2.textContent = user.displayName

      const googleAuthDOM = document.getElementById("google-auth")
      googleAuthDOM.style.display = "none"

      const loginBtn = document.getElementById("login-button")
      loginBtn.style.display = "none"

      const googleUser = document.getElementById("google-user")
      googleUser.style.display = "flex"

      const contactForm = document.getElementById("contactForm")
      contactForm.style.display = "unset"

      document.getElementById("email").value = user.email
      document.getElementById("fullname").value = user.displayName

   }).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
    
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}