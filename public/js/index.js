$(document).ready(function () {
    var backgrounds = [
        'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/eximg1.png)',
        'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/eximg2.png)',
        'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/eximg3.png)',
        'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/eximg4.png)',
        'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/eximg5.png)',
    ];

    var currentBackground = 0;
    $('#prev1').click(function () {
        currentBackground = (currentBackground + 4) % backgrounds.length;
        $('#imgs_ver1').css('background-image', backgrounds[currentBackground]);
        $('#imgs_ver2').css('background-image', backgrounds[currentBackground]);
        
    });
    $('#next1').click(function () {
        currentBackground = (currentBackground + 1) % backgrounds.length;
        $('#imgs_ver1').css('background-image', backgrounds[currentBackground]);
        $('#imgs_ver2').css('background-image', backgrounds[currentBackground]);
        
    });
    $('#prev2').click(function () {
        currentBackground = (currentBackground + 4) % backgrounds.length;
        $('#imgs_ver1').css('background-image', backgrounds[currentBackground]);
        $('#imgs_ver2').css('background-image', backgrounds[currentBackground]);
        
    });
    $('#next2').click(function () {
        currentBackground = (currentBackground + 1) % backgrounds.length;
        $('#imgs_ver1').css('background-image', backgrounds[currentBackground]);
        $('#imgs_ver2').css('background-image', backgrounds[currentBackground]);
        
    });

    $('#b1').click(function () {
        $('#main_1 ,#main_bar').fadeOut(400, function(){
            $('#login_div').fadeIn(400);
            $('#login_div').css('display','flex');
            $('#content_wrapper').css('height','75vh');
        });

    });

    $('#b2').click(function () {
        $('#main_1 ,#main_bar').fadeOut(400, function(){
            $('#signup_div').fadeIn(400);
            $('#signup_div').css('display','flex');
            $('#content_wrapper').css('height','75vh');
            
        });

    });

    $('#back_button_login').click(function () {
        $('#login_div').fadeOut(400, function(){
            $('#main_bar').fadeIn(400);
            $('#main_1').fadeIn(400);
            $('#login_div').css('display','none');
            $('#content_wrapper').css('height','50vh');
            
        });

    });

    $('#back_button_signup').click(function () {
        $('#signup_div').fadeOut(400, function(){
            $('#main_bar').fadeIn(400);
            $('#main_1').fadeIn(400);
            $('#signup_div').css('display','none');
            $('#content_wrapper').css('height','50vh');
            
        });

    });
});
