window.addEventListener('scroll', show);

function show() {
    const xy = document.getElementById('demo');
    const scrollY = window.scrollY;

    if (scrollY > 50 && scrollY <= 150) {
        xy.style.top = "100px";
        xy.style.left = "80px";
        xy.style.padding = "50px";
        xy.style.borderRadius="0px"
        xy.style.backgroundColor = "yellow";
        xy.innerHTML = "Step 1";

    } else if (scrollY > 150 && scrollY <= 250) {
        xy.style.top = "200px";
        xy.style.left = "250px";
          xy.style.borderRadius="0px 30px 40px 120px"
        xy.style.padding = "120px";
        xy.style.backgroundColor = "orange";
        xy.innerHTML = "Step 2";

    } else if (scrollY > 250 && scrollY <= 350) {
        xy.style.top = "350px";
        xy.style.left = "400px";
          xy.style.borderRadius="50px 0px 0px 20px"
        xy.style.padding = "20px";
        xy.style.backgroundColor = "red";
        xy.innerHTML = "Step 3";

    } else if (scrollY > 350 && scrollY <= 450) {
       xy.style.top = "550px";
        xy.style.left = "800px";
          xy.style.borderRadius="100%"
        xy.style.padding = "90px";
        xy.style.backgroundColor = "purple";        
        xy.innerHTML = "Step 4";

    } else if (scrollY > 450 && scrollY<= 550) {
         xy.style.top = "750px";
        xy.style.left = "100px";
          xy.style.borderRadius="100%"
        xy.style.padding = "40px";
        xy.style.backgroundColor = "green";
        xy.innerHTML = "Step 5";

    } else if (scrollY > 550) {
        xy.style.top = "1200px";
       xy.style.left = "900px";
         xy.style.borderRadius="100%"
       xy.style.padding = "40px";
       xy.style.backgroundColor = "pink";
       xy.innerHTML = "Step 5";

   }else {
        xy.style.top = '0px';
        xy.style.left = "0px";
        xy.style.padding = "0px";
        xy.style.backgroundColor = "cornflowerblue";
        xy.innerHTML = "Header";
    }
}
