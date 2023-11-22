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
});
