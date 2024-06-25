/* 변수 */
const lnb = document.querySelectorAll('.lnb_func')
const lnb_bg = document.querySelector('.lnb_bg')
const gnb = document.querySelectorAll('.gnb > li')
console.log(lnb, lnb_bg, gnb)

/* 숨기기 */
lnb[0].style.display = 'none';
lnb_bg.style.display = 'none';

/* 효과 */
/* gnb[0].addEventListener('mouseover',function(){
    lnb.style.display = 'block';
}) */