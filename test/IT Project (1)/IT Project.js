let slideIndex = 1;
showSlides1(slideIndex);


function plusSlides1(n) 
{
  showSlides1(slideIndex += n);
}

function plusSlides2(n) 
{
  showSlides2(slideIndex += n);
}


function currentSlide(n) 
{
  showSlides1(slideIndex = n);
}

function showSlides1(n)
{

    let i;
    let slides = document.getElementsByClassName("mySlides-1");
    if (n > slides.length) 
    {
        slideIndex = 1
    }

    if (n < 1) 
    {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";
}

function showSlides2(n)
{

    let i;
    let slides = document.getElementsByClassName("mySlides-2");
    if (n > slides.length) 
    {
        slideIndex = 1
    }

    if (n < 1) 
    {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";
}