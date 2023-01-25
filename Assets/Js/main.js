// Start scroll Effect

const page = document;
let menu = page.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }
});





// Start Skills progress bar js

// HTML Progress

let Hbar = document.querySelector('.progressH');
let Cbar = document.querySelector('.progressC');
let Btbar = document.querySelector('.progressBt');
let Jsbar = document.querySelector('.progressJs');
let Dbar = document.querySelector('.progressD');
onload=() =>{
      let HPercent = 0;
        
      let Hinterval = setInterval(function() {
        if(HPercent >=Hbar.ariaValueMax) {
          clearInterval(Hinterval);
        }
        Hbar.style.width = HPercent + '%';
        Hbar.innerHTML=HPercent + '%';
        HPercent++;
        
      }, 100);

      // Css Progress
      let CPercent = 0;
      let Cinterval = setInterval(function() {
        if(CPercent >=Cbar.ariaValueMax) {
          clearInterval(Cinterval);
        }
        Cbar.style.width = CPercent + '%';
        Cbar.innerHTML=CPercent + '%';
        CPercent++;
      }, 100);

    //   Bootstrap Progress
    let BtPercent = 0;
    let Btinterval = setInterval(function() {
      if(BtPercent >=Btbar.ariaValueMax) {
        clearInterval(Btinterval);
      }
      Btbar.style.width = BtPercent + '%';
      Btbar.innerHTML=BtPercent + '%';
      BtPercent++;
    }, 100);

    // Js Progress
    let JsPercent = 0;
    let Jsinterval = setInterval(function() {
        if(JsPercent >=Jsbar.ariaValueMax) {
          clearInterval(Jsinterval);
        }
        Jsbar.style.width = JsPercent + '%';
        Jsbar.innerHTML=JsPercent + '%';
        JsPercent++;
      }, 100);
    //   Design Progress
    let DPercent= 0;
    let Dinterval = setInterval(function() {
        if(DPercent >=Dbar.ariaValueMax) {
          clearInterval(Dinterval);
        }
        Dbar.style.width = DPercent + '%';
        Dbar.innerHTML=DPercent + '%';
        DPercent++;
      }, 100);
}





// end Skills progress bar js


// Start portfolio filter



// Start blog js

const articleBtn=document.querySelector("#article_btn")
const articleText = document.querySelector(".article_text")

articleBtn.addEventListener("click",()=>{
  articleText.classList.toggle("show_article_text")
})

// End blog js


// Start contact section



let sendBtn = document.querySelector("#send_btn")

sendBtn.addEventListener("click", (e) => {
    let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    let userMsg = document.querySelector("#message").value;
    if (userName !== "" && userEmail !== "" && userMsg !== "") {
        e.preventDefault()
        let userMessage=                {
            name: userName,
            email: userEmail,
            message: userMsg,
            id: 'mesaj'
        }
        fetch('Your Api', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                userMessage
            )
        }).then(response => response.json()).then(json => console.log(json))
        // console.log({userMessage})
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";

        swal({
            title: "Message is send !",
            text: "Thank you!",
            icon: "success",
            button: "Ok",
        });
    } else {
        alert("Fill in the blanks!!")
    }

})


// Burger menu

const menuBtn=document.querySelector("#menu_btn")
const nav = document.querySelector(".menu_ul")

menuBtn.addEventListener("click",()=>{
  nav.classList.toggle("show_menu")
})