const toggle = document.getElementById("toggle"),
      close =  document.getElementById("close"),
    //   links = document.getElementById("links")
      menu = document.getElementById("mobile-menu");

    if(toggle){
    toggle.addEventListener('click', () =>{
        
       menu.classList.remove("inactive");
       close.classList.add("active");
       toggle.classList.remove('active');

    })
}
if(close){
    close.addEventListener('click', () =>{
        
       menu.classList.add("inactive");
       toggle.classList.add("active");
       close.classList.remove('active')

    })
}

// if(close){
//     close.addEventListener('click', () =>{
//         toggle.style.display="block";
//         close.style.display= "none";
//         links.style.top="-100%";
//         nav.style.top="-100%";

        
        

//     })
// }