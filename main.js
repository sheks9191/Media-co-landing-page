const menuBar = document.querySelector('.menu-bar'),
      nav = document.querySelector('.nav');
      
      menuBar.addEventListener('click', () => {
          nav.classList.toggle('active');
          menuBar.classList.toggle('active');
      })
      

    window.addEventListener('scroll', displayDiv)

    displayDiv()

    function displayDiv() {
        const displayPoint = window.innerHeight

        let allDivs = document.getElementsByTagName('div')

         for(let i = 0; i < allDivs.length; i++) {
              let eachDiv = allDivs[i]

              let divTop = eachDiv.getBoundingClientRect().top

              if(divTop > displayPoint) {
                  eachDiv.style.opacity = 0;
              }else {
                  eachDiv.style.opacity = 1;
                  eachDiv.style.transition = `opacity ${1}s ease-in`;
                  
              }
         }
        
    }