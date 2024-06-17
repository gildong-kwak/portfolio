/* 변수 */
const menu = document.querySelectorAll('.gnb > li')
const lnb = document.querySelector('.lnb_func')

console.log(menu, lnb)

lnb.style.display = 'none';

/* 효과 */
menu[0].addEventListener('mouseover',function(){
    lnb.style.display = 'flex';
})
menu[0].addEventListener('mouseout',function(){
    lnb.style.display = 'none';
})