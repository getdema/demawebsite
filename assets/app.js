//smooth scrolls
	var scroll = new SmoothScroll('a[href*="#seller"]', {
   easing: 'easeInOutQuad',
   speed : 600,
});

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

window.onload = function(){
  let data = sessionStorage.getItem('pageLoad');
  let btn = sessionStorage.getItem("click");
  if (data === 'true') {
    btn === 'start' ? document.querySelector(".header-btn").click() : btn === 'seller' ? document.querySelector(".seller").click() : document.querySelector(".buyer").click()
    sessionStorage.clear();
    navBtn.classList.toggle("active")
    nav.classList.toggle("active")
  }

}


let form = document.getElementById('mc-embedded-subscribe-form');


const validation = new JustValidate('#mc-embedded-subscribe-form', {
	  	errorFieldCssClass : 'err',
      errorLabelCssClass : 'err',

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
  validation.onSuccessCallback = () => {
    form.submit();
    sessionStorage.setItem("formSubmit", "true");
  }

  })
  form.addEventListener("keypress", function(e){
  	if (e.key === "Enter") {
  		if (validation.isValid) {
  				form.submit();
  		}
  	}
  })


