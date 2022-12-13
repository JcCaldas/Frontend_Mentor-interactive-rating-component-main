let btn = document.querySelector("button");
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let num = document.getElementsByClassName('item');
let rating;
let click = false;

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'hsl(25, 97%, 53%)';
});

btn.addEventListener("mouseleave", function() {
    btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn.style.color = 'white';
});


// Números em "botões"
for (let i = 0; i < num.length; i++){ 
    num[i].addEventListener("mouseover", function () {
        num[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        num[i].style.color = 'white';
    });
    
    num[i].addEventListener("click", function () {
        click = true;
        console.log(click);
        console.log(num[i].innerHTML);
        rating = num[i].innerHTML;
    })
    
    num[i].addEventListener("mouseleave", function() {
        if (click == true) {
            num[i].style.color = 'white';
            num[i].style.backgroundColor = 'hsl(217, 12%, 63%)';
            btn.addEventListener("click", function () {
                document.querySelector('.rating').innerHTML = `You selected ${rating} out of 5`;
                first.classList.add('hide');
                second.classList.remove('hide');
            });
        } else {
            num[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
            num[i].style.color = 'hsl(217, 12%, 63%)';
        };
    })

};






