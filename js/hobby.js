let img = document.createElement('img');
let descDiv = document.createElement('div');
$(descDiv).addClass('description-box');
let descDivMobile = document.createElement('div');
$(descDivMobile).addClass('description-mobile');
let elem;

function setId(){
    return Math.random().toString(18).substr(3,5);
}

$('.image').each(function(){
    $(this).attr('id',setId());
})

function showDesc(a) {
    "use strict";
    $(a).empty();
    var desc = elem.siblings()[0].cloneNode(true);
    $(desc).css('display', 'block');
    $(a).append(desc);
}

$(window).on('resize', function () {
    "use strict";
    $('.image').off();
    if (window.matchMedia('(max-width: 414px ) and (orientation: portrait)').matches) {
        $('.fullscreen').css('display', 'none');
        $('.image').on('click', function () {
            elem = $(this);
            elem.parent().append(descDivMobile);
            $(descDivMobile).css('display', 'block');
            showDesc(descDivMobile);
            $(descDivMobile).on('click', function () {
                elem.parent().children('div').remove();
            });
        });
    } else {
        $(descDivMobile).css('display', 'none');
        $('.image').on('click', function () {
            elem = $(this);
            var src = elem.attr('src');
            $(img).attr('src', src);
            $('.fullscreen').css('display', 'block');
            $('.fullscreen').append(img);
            $('.fullscreen').append(descDiv);
            showDesc(descDiv);
        });
    }
}).resize();

function imgClose() {
    "use strict";
    $('.fullscreen').children('img').remove();
    $(descDiv).empty();
    $('.fullscreen').children('div').remove();
    $('.fullscreen').css('display', 'none');
}

$('.btn-close').on('click', function () {
    "use strict";
    imgClose();
});

function getNeighbors() {
    "use strict";
    var next = null, prev = null, found = false;
    $('.image').toArray().forEach(function (a) {
        if (found && next === null) {
            next = $(a);
        }
        if ($(a).attr('id') === elem.attr('id')) {
            found = true;
        }
        if (!found) {
            prev = $(a);
        }
    });
    if (next === null) {
        next = $('.image').first();
    }
    if (prev === null) {
        prev = $('.image').last();
    }
    return {next: next, prev: prev};
}

function imgNav(a) {
    "use strict";
    elem = getNeighbors()[a];
    $(img).attr('src', elem.attr('src'));
    $('.fullscreen').append(img);
    showDesc(descDiv);
}

$('.btn-right').on('click', function () {
    "use strict";
    imgNav('next');
});

$('.btn-left').on('click', function () {
    "use strict";
    imgNav('prev');
});

$(document).keydown(function (e) {
    "use strict";
    if ($('.fullscreen').css('display') === 'block') {
        switch (e.key) {
        case 'ArrowLeft':
        case 'Left':
            imgNav('prev');
            break;
        case 'ArrowRight':
        case 'Right':
            imgNav('next');
            break;
        case 'Escape':
        case 'Esc':
            imgClose();
            break;
        default:
            return;
        }
        e.preventDefault();
    }
    e.stopPropagation();
});