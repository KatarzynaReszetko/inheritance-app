function changeColor(color) {
  document.body.style.background = color;
}

function gfg_Run() {
  changeColor('#5e5c53');
} 

function myeyeColor () {
    const selectedColor = document.getElementById("eyecolor").value;
    swal ("Great!",`Your eyes are ${selectedColor}`, "success");
}

function mybloodType () {
    const selectedBlood = document.getElementById("bloodtype").value;
    swal ("Great!",`Your blood type is ${selectedBlood}`,"success");
}

function myselectedForm () {
    const selectedForm = document.getElementById("customRadio").value;
    if (selectedForm === true) {
        swal ("Great!",`Your blood type is ${selectedBlood}`,"success");
    }
}

function checkRadio1(){
   let radio1 = document.getElementById('customRadio');
   let radio2 = document.getElementById('customRadio2');
   let radio3 = document.getElementById('customRadio3');
   let radio4 = document.getElementById('customRadio4');
   if(radio1.checked){
        swal ("Not true","Try again!","error");
   }
   if(radio2.checked){
        swal ("Not true","Try again!","error"); 
   }
   if(radio3.checked){
        swal ("Not true","Try again!","error"); 
   }
   if(radio4.checked){
        swal ("Excellent","It is true!","success");
 }
}

function checkRadio2(){
    let radio1 = document.getElementById('customRadio');
    let radio2 = document.getElementById('customRadio2');
    let radio3 = document.getElementById('customRadio3');
    let radio4 = document.getElementById('customRadio4');
    if(radio1.checked){
        swal ("Excellent","It is true!","success");
    }
    if(radio2.checked){
        swal ("Not true","Try again!","error"); 
    }
    if(radio3.checked){
        swal ("Not true","Try again!","error"); 
    }
    if(radio4.checked){
        swal ("Not true","Try again!","error"); 
  }
 }

function firstSection() {
    const dots = document.getElementById("dots1");
    const moreText = document.getElementById("more1");
    const btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function secondSection() {
    const dots = document.getElementById("dots2");
    const moreText = document.getElementById("more2");
    const btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function thirdSection() {
    const dots = document.getElementById("dots3");
    const moreText = document.getElementById("more3");
    const btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function fourthSection() {
    const dots = document.getElementById("dots4");
    const moreText = document.getElementById("more4");
    const btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }