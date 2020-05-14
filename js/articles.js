let years = document.getElementsByClassName('articles-year');
let content  = Array.from(document.getElementsByClassName('articles-content_year'));
let yearsBox = document.getElementsByClassName('articles-years');
let artSection = document.getElementsByClassName('articles');
let artContent = document.getElementsByClassName('articles-content');

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

// Array.from(years).forEach(function(year){
//     year.addEventListener('click', checkYear);
// })

// window.onload = setArticlesHeight()

// function setArticlesHeight(){
//     let done;
//     return function(inProgress){
//         if(done===undefined || inProgress){
//             if (artSection[0].clientHeight < yearsBox[0].clientWidth){
//                 artSection[0].setAttribute('style','height:'+yearsBox[0].clientWidth+'px');
//                 done = true;
//             }
//         }
//         return done;
//     }
    
// }
const setArticlesHeight = function(){
    if (artContent[0].clientHeight < yearsBox[0].clientWidth){
        artSection[0].setAttribute('style','height:'+yearsBox[0].clientWidth+'px');
    }else{
        artSection[0].setAttribute('style','height:'+artContent[0].clientWidth+'px');
    }
    // if(artSection[0].clientHeight < artContent[0].clientHeight){
    //     artSection[0].setAttribute('style','height:'+artContent[0].clientWidth+'px');
    // }
}
window.onload = setArticlesHeight();
window.addEventListener("resize", setArticlesHeight);

// Array.from(years).forEach(function(year){
//     year.addEventListener('click', setArticlesHeight);
// })
Array.from(years).forEach(function(year){
    year.addEventListener('click', () => {
        checkYear;
        setArticlesHeight;
    });
})