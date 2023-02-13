let menu = document.querySelector('.menu-icon')

menu.onClick = () => {
    menu.classList.toggle("move")
};

// reviews swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// email js
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let send = document.querySelector('.send-btn')

    send.addEventListener('click', (e) => {
        e.preventDefault()
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value)
            success();
        }
    })
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_eu6594b","template_knui6qf",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh No...",
        text: "Fields can't be empty!!",
        icon: "error",
      })
}

function success(){
    swal({
        title: "Email sent successfully..!",
        text: "We try to reply in 24 hours",
        icon: "Success",
      })
}

// header background change on scrolling
let header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    header.classList.toggle("header-active", window.scrollY > 0)
})

//scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', ()=>{
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0)
})