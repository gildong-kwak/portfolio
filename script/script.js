/* 변수 */
const main = document.querySelector('main')
const menu = document.querySelector('.left')
const nav = document.querySelector('nav')
const gnb = document.querySelectorAll('.gnb')
const gnb_li = document.querySelectorAll('li')
const lnb = document.querySelector('.lnb_fun')

console.log(menu, nav, gnb, lnb)

/* 숨기기 */
nav.style.display = 'none';
lnb.style.display = 'none';

/* nav 마우스  보이기 */
menu.addEventListener('click',()=>{
    nav.style.display = 'block';
})
/* nav 마우스 내리면 숨기기 */
main.addEventListener('mouseover',()=>{
    nav.style.display = 'none';
})

/* lnb 마우스 올리면 보이기 */
gnb_li[1].addEventListener('mouseover',()=>{
    lnb.style.display = 'flex';
})
/* lnb 마우스 내리면 숨기기 */
/* gnb_li[1].addEventListener('mouseout',()=>{
    lnb.style.display = 'flex';
}) */
lnb.addEventListener('mouseout',()=>{
    lnb.style.display = 'none';
})