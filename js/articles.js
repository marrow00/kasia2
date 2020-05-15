let years = Array.from(document.getElementsByClassName('articles-year'));
let content  = Array.from(document.getElementsByClassName('articles-content_year'));
let yearsBox = document.getElementsByClassName('articles-years');
let artSection = document.getElementsByClassName('articles');
let artContent = document.getElementsByClassName('articles-content');
let artHeader = document.getElementById('articles-header')

const checkClass = function(element, list){
    return list.contains(element)
}
const removeActive = function(list){
    list.forEach(element => element.classList.remove("active"))
}
const checkYear = function(){
    let year = this.innerText
    let yearContent = content.filter(yearArticles => checkClass(year, yearArticles.classList))[0];
    let isActive = checkClass("active", yearContent.classList)
    if(!isActive){
        removeActive(content)
        yearContent.classList.add("active")
    }
    else return
}

const setArticlesHeight = function(){
    if (artContent[0].clientHeight < yearsBox[0].clientWidth){
        artSection[0].setAttribute('style','height:'+yearsBox[0].clientWidth+'px');
    }else{
        artSection[0].setAttribute('style','height:'+ (artContent[0].clientHeight + artHeader.clientHeight) +'px');
    }
}
window.onload = setArticlesHeight();
window.addEventListener('resize', setArticlesHeight);

years.forEach(function(year){
    year.addEventListener('click', (evt) => {
        checkYear.apply(evt.srcElement);
        setArticlesHeight.apply(evt.srcElement);
    });
})