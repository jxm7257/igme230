
$(document).ready(() => {
    // hiding the submenus on load
    $('.items').css("display", "none");

    // displaying article0 on load
    let article0 = ('article0.txt');
    $('article').load(article0);
})

// when the radio buttons are selected change the appropriate display of article

$('input[type="radio"]').click(function() {
    if(input.target.value == 'article1.txt'){
        let article1 = ('article1.txt');
        $('article').load(article1);
        } else {
        let article2 = ('article2.txt');
        $('article').load(article2);
            }
    });


// clicking on menu shows and hides submenu
$('.menu').on('click', function() {
    $(this).next().slideToggle();
})


