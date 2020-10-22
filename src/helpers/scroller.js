let navElements = document.querySelectorAll('.nav__item'),
main = document.querySelector('main')

navElements.forEach(el=>{
    el.addEventListener('click', ()=>scroller(el.getAttribute('goTo')))
})

function scroller(classes){
    let elementToScroll = document.querySelector(classes)
    let y = elementToScroll.offsetTop;
	main.scrollTo({top: y, left: 0, behaviour: 'smooth'})
}