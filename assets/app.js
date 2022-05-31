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


