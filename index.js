  document.addEventListener("mousemove", parallax);

  function parallax(e){
      this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')
  
          const x = (window.innerWidth - e.pageX*speed)/100
          const y = (window.innerHeight - e.pageY*speed)/100
  
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
  }
  

  //Buutonsearch
knop = document.getElementById("btnsearch")
//when click
knop.addEventListener("click", function myScript(){
    var x = document.getElementById("Tekstvak").value;
    
    //the fetch code    
    fetch(`https://restcountries.eu/rest/v2/name/${x}?fullText=true`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        citywater = document.getElementById("city")
        citywater.innerHTML = data[0].city
        vlagholder = document.getElementById("vlag")
        vlagholder.src = data[0].flag
        waterlevel = document.getElementById("habitants")
        habitants.innerHTML = data[0].population
        
       
        
    });
    
});