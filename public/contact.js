const db = firebase.firestore()
const messagesRef = db.collection("messages")

// modal DOM
const modalForm = document.getElementById("modalForm")
const modalContent = document.getElementsByClassName("modal-form__content")[0]
const modalClose = document.getElementById("modalClose")
const modalMessage = document.getElementById("modalMessage")

modalClose.addEventListener("click", e => {
    modalForm.style.display = "none"
})

contactForm.addEventListener("submit", e => {
    e.preventDefault()
    const contactData = {
        name: fullname.value,
        email: email.value,
        subject: subject.value,
        content: content.value
    }

    if ( subject.value.length > 5 && content.value.length > 10 ) {
        // messagesRef.add(contactData)
        //     .then(function(docRef) {
        //         console.log("Document written with ID: ", docRef.id);
        //     })
        //     .catch(function(error) {
        //         console.error("Error adding document: ", error);
        //     })
        // modalContent.classList.remove("modal-form__content--danger")
        // modalMessage.innerHTML = "Message send successfully. We'll be in touch soon."
        const emailValue = email.value
        messagesRef.doc(emailValue).set({
            name: fullname.value,
            email: email.value,
            subject: subject.value,
            content: content.value
        })

        modalContent.classList.remove("modal-form__content--danger")
        modalMessage.innerHTML = "Message send successfully. We'll be in touch soon."
    } else {
        modalContent.classList.add("modal-form__content--danger")
        modalMessage.innerHTML = "Ooops! Seems like your data is too short."
    }

    const tl = gsap.timeline()
    modalForm.animate(
        tl
            .to("#modalForm", { display: "block", opacity: 1 })
            .from("#modalForm", {ease: "power.in", duration: 1, y: "100vh"}, "-=1")
            .to("#modalForm", { display: "none", opacity: 0, delay: 1 })
     )
})