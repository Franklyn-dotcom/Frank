// If you love to create like a scroll to top js i have recommended some code here for you.


// first we have to create a variable then select the classlist or id you have in your html using the querySelector
const scrood = document.querySelector('.scrollTop');
//secondly, you have to apply some listener to the window then create a function
window.onscroll() = function () {
scrollFunction();
}
// thirdly, create another function with the previous function name 
function scrollFunction() {
// then create a conditional statement 
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
scrood .style.display = '' block'';
} else {
scrood.style.display = ''none'';
}
} 
//lastly, we are going to apply an event listener to the the variable name called scrood and the event we are listening for is click event and then we create a function inside it.
scrood.addEventListener('click', () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}) ;


