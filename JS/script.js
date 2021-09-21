$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "Mechanical Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer", "Mechanical Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // skill counter

    $(window).scroll(function(){
        if(this.scrollY > 2600){
            $('.skills-content .right').addClass("right-bars");
            
        }
        else{
            $('.skills-content .right').removeClass("right-bars")
            
        }
    });
    
    var Htmlinterval = setInterval(htmlcounter, 20);
    var Cssinterval = setInterval(csscounter, 22);
    var Jsinterval = setInterval(jscounter, 25);
    var Xdinterval = setInterval(xdcounter, 28);
    var Illinterval = setInterval(illcounter, 35);
    var Premiereinterval = setInterval(precounter, 22);
    var Cadinterval = setInterval(cadcounter, 40);
    let count1 = 1;
    let count2 = 1;
    let count3 = 1;
    let count4 = 1;
    let count5 = 1;
    let count6 = 1;
    let count7 = 1;


    function htmlcounter(){
        
        count1++;
        document.querySelector('.counter1').innerHTML = count1 + "%";
        if(count1 == 90){
            clearInterval(Htmlinterval);

        };
    }
    function csscounter() {
        count2++;
        document.querySelector('.counter2').innerHTML = count2 + "%";
        if(count2 == 80){
            clearInterval(Cssinterval);
        }

    }
    function jscounter() {
        count3++;
        document.querySelector('.counter3').innerHTML = count3 + "%";
        if(count3 == 70){
            clearInterval(Jsinterval);
        }

    }
    function xdcounter() {
        count4++;
        document.querySelector('.counter4').innerHTML = count4 + "%";
        if(count4 == 60){
            clearInterval(Xdinterval);
        }

    }
    function illcounter() {
        count5++;
        document.querySelector('.counter5').innerHTML = count5 + "%";
        if(count5 == 50){
            clearInterval(Illinterval);
        }

    }
    function precounter() {
        count6++;
        document.querySelector('.counter6').innerHTML = count6 + "%";
        if(count6 == 70){
            clearInterval(Premiereinterval);
        }

    }
    function cadcounter() {
        count7++;
        document.querySelector('.counter7').innerHTML = count7 + "%";
        if(count7 == 40){
            clearInterval(Cadinterval);
        }

    }
        
    
    
    
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
