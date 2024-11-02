
//Navigation bar responsiveness
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
  navBar.classList.toggle('active');
});

//Five star rating
const allStars=document.querySelectorAll('.star');
      let currentRating=document.querySelector('.responce');
      allStars.forEach((star,i) => { 
        star.onclick=function(){
          let current_Star_Level=i+1;
          switch(current_Star_Level) {
            case 1:
            currentRating.textContent = '😞 Poor';
              break;
            case 2:
            currentRating.textContent = '😕 Fair';
              break;
            case 3:
            currentRating.textContent = '😐 Good';
              break;
            case 4:
            currentRating.textContent = '😊 Very Good';
              break;
            case 5:
            currentRating.textContent = '😍 Excellent';
              break;
          }
          allStars.forEach((star,j)=>{
            if(current_Star_Level>=j+1){
              star.innerHTML='&#9733';
            }else{
              star.innerHTML='&#9734';
            }
          })
        }
})
//TypeWriter text
      const text = "A driven and creative front-end web developer with a passion for solving challenges and sharing knowledge. When I'm not coding, you'll find me playing chess or reading books or tutoring mathematics and science, inspiring the next generation of problem-solvers.";
      const typewriter = document.getElementById('typewriter');   
      let index = 0;
      function type() {
        if (index < text.length) {
          typewriter.textContent += text.charAt(index);
          index++;
          setTimeout(type, 90);
        }
      }
type();


