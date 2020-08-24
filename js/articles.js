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
const removeSelected = function(list){
    list.forEach(element => element.setAttribute('aria-selected', false))
}
const checkYear = function(){
    let year = this.innerText;
    let yearContent = content.filter(yearArticles => checkClass(year, yearArticles.classList))[0];
    let isActive = checkClass("active", yearContent.classList);
    let activeYear = checkClass("active", this.classList);
    if(!isActive){
        removeActive(content);
        yearContent.classList.add("active");
    if(!activeYear){
        removeActive(years);
        removeSelected(years);
        this.classList.add("active");
        this.setAttribute('aria-selected', true);
    }
    }
    else return
}

const setArticlesHeight = function(){
    let artBody = artContent[0].clientHeight + artHeader.clientHeight;
    if (artBody < yearsBox[0].clientHeight){
        artSection[0].setAttribute('style','height:'+yearsBox[0].clientHeight+'px');
    }else{
        artSection[0].setAttribute('style','height:'+ artBody +'px');
    }
}
window.onload = setArticlesHeight();
window.addEventListener('resize', setArticlesHeight);

years.forEach(function(year){
    year.addEventListener('click', (evt) => {
        checkYear.apply(evt.currentTarget);
        setArticlesHeight.apply(evt.currentTarget);
    });
})