const mobileNavHTML = `
<div class="wrapper">
<div class="content">
<button class="icon close">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
</svg>
</button>
    <div class="flex">
    </div>
    <nav>
    <a href="/home">Home</a>
    <a href="/about">About Us</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact Us</a>
    </nav>
    <div class="flex footer">
    <button class="login-btn">
                <a href="/login">
                 Login
             </a>
            </button>
    </div>
</div>
</div>
`
const mobileNavFragment = document.createRange().createContextualFragment(mobileNavHTML);
const closeButton = mobileNavFragment.querySelector('.close');
const wrapper = mobileNavFragment.querySelector('.wrapper');
closeButton.addEventListener('click',function(){
   wrapper.remove();
})
const icon = document.querySelector('.icon');
icon.addEventListener('click',function(){
    const header = document.querySelector('header');
    header.append(wrapper);
})
