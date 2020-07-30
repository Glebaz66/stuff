let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.item');
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";    
}
document.querySelector('.js-previous').addEventListener('click', previousSlide)
document.querySelector('.js-next').addEventListener('click', nextSlide)

// class Slider {
//     constructor(slider){
//         this.slider = slider;
//         console.log(this.slider);
//         this.slides = this.slider.querySelectorAll('.item');
//         console.log(this.slides);
//         this.totalSlides=this.slides.length;
//         console.log(this.totalSlides);
//         this.prev = this.slider.querySelector('.js-previous');
//         this.next = this.slider.querySelector('.js-next');
//         console.log(this.prev);
//         const that = this;
//         // console.log('that', that);
//         this.prev.onclick = () =>{
//             console.log('preb');
//             that.prev();
//         };
//         this.next.onclick = () =>{
//             console.log('next');
//             that.next();
//         };

//         this.index=0;
//         this.jumpWidth=0;

//     }
//     next(){
//         if(this.index==this.totalSlides-1){
//           this.index=0;
//           this.jumpWidth=0;
//           console.log(this.index);
//           console.log(this.jumpWidth);
//         }
//         else{
//             this.index++;
//             this.jumpWidth=this.jumpWidth+this.containerWidth;
//         }
        
//        this.slider.querySelector(".item").style.marginLeft=-this.jumpWidth+"px"
//     }
    
//     // prev slide method
//     prev(){
//         if(this.index==0){
//           this.index=this.totalSlides-1;
//           this.jumpWidth=this.containerWidth*(this.totalSlides-1);
//         }
//         else{
//             this.index--;
//             this.jumpWidth=this.jumpWidth-this.containerWidth;
//         }
        
//        this.slider.querySelector(".item").style.marginLeft=-this.jumpWidth+"px"
//     }
// }

// const sl = document.querySelector('.slider')

// const createSlider = new Slider(sl);