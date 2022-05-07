$(window).scroll(function(){

   // $('.mobile-navbar').css({'opcity':'0'});

    if ($(this).scrollTop() > 50) {
       $('.mobile-navbar').css({'opacity':'1'});
    } else {
       $('.mobile-navbar').css({'opacity':'0'});
    }
});

$(ready(function(){

   $('a').click(function(e){
    e.preventDefault();
   })

}));


let url = "https://docs.google.com/forms/d/e/1FAIpQLSdVSiHdFSVeP2804xUcTQAKN8KeASJvWSnU0dHxUZBs0UF_fw/formResponse"; //action url
let form = document.querySelector("#form"); //form element

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default behaviour

  fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        'Content-Type': 'application/json'
      },
      body: getInputData()
    })
    .then(data => {
      console.log(data);
      alert("Form Submitted");
    })
    .catch(err => console.error(err));
});

//populating input data
function getInputData() {
  let dataToPost = new FormData(); //formdata API

  //fill name attributes to corresponding values
  dataToPost.append("ContactName", document.querySelector("#input1").value);

  return dataToPost;
}
