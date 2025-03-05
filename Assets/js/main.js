(() => {
  
    const cursor = document.getElementById('cursor');
    const cursorOuter = document.querySelector('#cursor .outer');
    const textLink = document.querySelector('a.text-link');
    const imageLink = document.querySelector('a.image-link');
    const textDisplay = document.querySelector('.content-wrap .text');
    
    cursor.setAttribute('style', 'background: rgb(0,0,0); mix-blend-mode: difference;');
    
    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate(-50%, -50%) translate(${e.pageX}px, ${e.pageY}px)`;
    })
    
    
	textLink.addEventListener('mouseenter', () => {
		cursorOuter.classList.add('small-hover');
	})
        
	textLink.addEventListener('mouseleave', () => {
		cursorOuter.classList.remove('small-hover');
	})
        
   
        
   imageLink.addEventListener('mouseenter', (e) => {
   	cursorOuter.classList.add('large-hover');
      imageLink.classList.add('no-cursor');
      cursor.setAttribute('style', 'mix-blend-mode: inherit;');
      textDisplay.innerHTML = 'view';
   })
        
	imageLink.addEventListener('mouseleave', () => {
   	cursorOuter.classList.remove('large-hover');
      imageLink.classList.remove('no-cursor');
    
      cursor.setAttribute('style', 'mix-blend-mode: difference;');
      textDisplay.innerHTML = '';
   })
        
})();

