
function showInfo(title, description) {
  const dialogBox = document.getElementById('dialogBox');
  dialogBox.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
  dialogBox.style.display = 'block';

  setTimeout(() => {
      dialogBox.classList.add('show-dialog');
  }, 10);

  setTimeout(() => {
      dialogBox.classList.remove('show-dialog');
      setTimeout(() => {
          dialogBox.style.display = 'none';
      }, 1000);
  }, 5000);

  setTimeout(() => {
      createLinkAfterMoonAnimation();
  }, 3000);
}

  let moon = document.getElementById("moonplode");

  moon.addEventListener("click",()=>{
    moon.setAttribute("src","https://media.giphy.com/media/ahza0v6s5pSxy/200w.gif")  
    moon.style.width= "150px";
  
    setTimeout(()=>{
    moon.setAttribute("src","")
      moon.style.width= "150px";
  
    },700)
    
    setTimeout(()=>{
    moon.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lune_ico.png/590px-Lune_ico.png")
      moon.style.width= "150px";
  
    },4000)
  })
  