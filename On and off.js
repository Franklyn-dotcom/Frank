//create a variable
const boot = function () {
//then create a function
//select the elements
    const see = document.querySelector('.on');
    const veet = document.querySelector('.on-smile');
    const biggy = document.querySelector('.on-big');
    const chan = document.querySelector('.on-mech');
    //then add an eventListener
    see.addEventListener('click', () => {
    //add a claslist to each element.
        veet.classList.toggle('on-before');
        biggy.classList.toggle('on-active');
        chan.classList.toggle('on-before');
    });
}
boot();
