let imgAnimationDelay = 0.8;

document.querySelector(".nav-link").addEventListener("click", function(){
	imgAnimationDelay = 0;
	setTimeout(() => {
		imgAnimationDelay = 0.4;
	},1000)
})
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
	
  // large
  "(min-width: 900px)": function() {
const ts = gsap.timeline();
ts.from(".seller1", {yPercent : 0,opacity: 0});
ts.to(".seller1", { yPercent: -5, opacity: 0, delay:1});
ts.from(".seller2", { yPercent : 100,xPercent:0, opacity:0});
ts.to(".seller2", { yPercent: -5, opacity: 0, delay:1});
ts.from(".seller3", { yPercent:100,opacity:0});
ts.to(".seller3", { yPercent: -5, opacity: 0, delay:1});
const t2 = ScrollTrigger.create({
	animation : ts,
	trigger : ".text",
	start : "top top",
	end : "bottom bottom",
	scrub : 1,
	pin: true,
})


const it = gsap.timeline();
it.from(".s1-img-anim", {opacity: 0, delay: 0.1});
it.to(".s1-img-anim", {opacity: 0, delay : 0.4});
it.from(".s2-img-anim", {opacity: 0,delay: imgAnimationDelay});
it.to(".s2-img-anim", {opacity: 0, delay: 0.4});
it.from(".s3-img-anim", {opacity: 0,delay: imgAnimationDelay});
it.to(".s3-img-anim", {opacity: 0,delay: 0.4});


const t1 = ScrollTrigger.create({
	animation : it,
	trigger : ".text",
	start : "top top",
	end : "bottom bottom",
	scrub : 1,
	pin: true,
})
const tl = gsap.timeline();
tl.from(".word", { 
  opacity: 0,
  x: -200,
  stagger : 0.5,
  duration: 0.8,
  ease: Power3.easeOut,
})

const f = gsap.timeline();
f.from(".fee", { 
  opacity: 0,
  x: -700,
  stagger : 0.1,
ease: Power3.easeOutIn,
  duration: 0.8,
})

const h = gsap.timeline();
h.from([".hero-img", ".hero-logo"], { 
  opacity: 0,
  x: -30,
  stagger : 0.1,
ease: Power3.easeOutIn,
  duration: 0.8,
})
  },
	
}); 
//smooth scrolls



if (window.innerWidth > 900) {
	var scroll = new SmoothScroll('a[href*="#seller"]', {
	 offset: -800,
   easing: 'easeInOutQuad',
   speed : 600,
});
}
if (window.innerWidth < 900) {
	var scroll = new SmoothScroll('a[href*="#seller"]', {
	 offset: -150,
   easing: 'easeInOutQuad',
   speed : 600,

});
}

var begin = new SmoothScroll('.header-btn', {
	 offset: 0,
   easing: 'easeInOutQuad',
   speed : 600,

});
var buyers = new SmoothScroll('a[href*="#buyers"]', {
	 offset: 0,
   easing: 'easeInOutQuad',
   speed : 600,

});


let form = document.getElementById('mc-embedded-subscribe-form');
let fnameError = document.querySelector('.fname-validation');
let lnameError = document.querySelector('.fname-validation');



const validation = new JustValidate('#mc-embedded-subscribe-form', {
	  	errorFieldCssClass : 'err',errorLabelCssClass : 'err',

});

validation
  .addField('#mce-FNAME', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage : ""
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage : " "
    }
  ]
  )
  .addField('#mce-LNAME', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'The field  is required',
    },
  ])
  .addField('#mce-MERGE3', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'The field is required',
    },
  ])
  .addField('#mce-MERGE4',  [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'The field is required',
    },
  ])
  .addRequiredGroup('#communication_radio_group', 'The field is required', [
  		 {
  		 	rule : "required"
  		 }
  	])

  .addField('#mce-EMAIL', [
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
    {
      rule: 'required',
      errorMessage: 'The field is required',
    },
  ])
  
  document.querySelector('.formBtn').addEventListener("click", function(){
  		if (validation.isValid) {
  				form.submit();

  		}

  })
  form.addEventListener("keypress", function(e){
  	if (e.key === "Enter") {
  		if (validation.isValid) {
  				form.submit();
  		}
  	}
  })


