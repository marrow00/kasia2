let years = document.getElementsByClassName('articles-year');
let content  = Array.from(document.getElementsByClassName('articles-content_year'))

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
