document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let index = 0;

    function updateCarousel() {
        const itemWidth = carouselItems[0].offsetWidth;
        const newTransformValue = -index * itemWidth;
        carousel.style.transform = `translateX(${newTransformValue}px)`;
    }

    function moveToNextItem() {
        index++;
        if (index >= carouselItems.length) {
            index = 0;
        }
        updateCarousel();
    }

    setInterval(moveToNextItem, 3000);
});
document.addEventListener('DOMContentLoaded', () => {
   const decrementButton = document.getElementById('minus');
   const incrementButton = document.getElementById('plus');
   const counterValue = document.getElementById('counter-value');

   let count = 0;

   decrementButton.addEventListener('click', () => {
       count--;
       counterValue.textContent = count;
       localStorage.setItem("countflow", count);
   });

   incrementButton.addEventListener('click', () => {
       count++;
       counterValue.textContent = count;
       localStorage.setItem("countflow", count);
   });
});
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
function getParameterFromQueryString() {
  const queryString = window.location.search;
  return queryString ? queryString.substring(1) : null;
}
const productName=getParameterFromQueryString();
fetch('./data.json')
.then(response=>response.json())
.then(function (data) {
const product=data.find(item=>item.name===productName);
  if (product) {
  document.getElementById('product-name').textContent=product.name;
  document.getElementById('product-price').textContent=product.price;
	document.getElementById('product-qty').textContent=product.qty;
	document.getElementById('product-imga').src=product.imga;
	document.getElementById('product-imgb').src=product.imgb;
	document.getElementById('product-imgc').src=product.imgc;
	document.getElementById('product-desc').textContent=product.desc;
  document.getElementById('product-cat').textContent=product.cat;
  localStorage.setItem("idflow", product.id);
  } else {
    document.getElementById('product-price').textContent='NoName';
  }
})

