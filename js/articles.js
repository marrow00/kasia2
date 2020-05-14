let years = document.getElementsByClassName('articles-year');
let content  = Array.from(document.getElementsByClassName('articles-content_year'));
let yearsBox = document.getElementsByClassName('articles-years');
let artSection = document.getElementsByClassName('articles');

let checkClass = function(element, list){
    return list.contains(element)
}
let removeActive = function(list){
    list.forEach(element => element.classList.remove("active"))
}
let checkYear = function(){
    let year = this.innerText
    let yearContent = content.filter(yearArticles => checkClass(year, yearArticles.classList))[0];
    let isActive = checkClass("active", yearContent.classList)
    if(!isActive){
        removeActive(content)
        yearContent.classList.add("active")
    }
    else return
}
Array.from(years).forEach(function(year){
    year.addEventListener('click', checkYear);
})

window.onload = setArticlesHeight()

function setArticlesHeight(){
    let done;
    return function(inProgress){
        if(done===undefined || inProgress){
            if (artSection[0].clientHeight < yearsBox[0].clientWidth){
                debugger;
                artSection[0].setAttribute('style','height:'+yearsBox[0].clientWidth+'px');
                done = true;
            }
        }
        return done;
    }
    
}
