var carousel_inner = document.querySelectorAll('.carousel-inner')
var carousel_item = document.querySelector('.carousel-item')
var control_slide_go1 = document.querySelector('.control-slide-go1')


carousel_inner.forEach(imgElement=>{
    imgElement.addEventListener('click', e=>{
        control_slide_go1.src = e.target.getAttribute('src')
       
    })
    console.log(carousel_item.src);
})