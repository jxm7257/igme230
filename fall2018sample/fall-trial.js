$(document).ready(() => {
    //start by hiding the sub menus
    $('.submenu').css("display", "none");

    //load the text file into the content div
    let content1 = ("content1.txt"); //assigning content 1 to a variable
    $('#content').load(content1); //using jquery to load content 1 into the content div
    
})

//selecting a menu displaying the content change 

//if the value is content 1, load content 1
$('#choose-content').on('change', (el) => {
    if(el.target.value == "content1.txt"){
        let content1 = ("content1.txt");
        $('#content').load(content1);
    } else { //if the value is content 2. load content 2 into the content id section
        let content2 = ("content2.txt");
        $('#content').load(content2);
    }
})

//clicking on menu shows and hides submenu 
//when a menu item is clicked 
$('.menuitem').on('click', function (){
    //slide toggle to next element 
    $(this).next().slideToggle()
})  