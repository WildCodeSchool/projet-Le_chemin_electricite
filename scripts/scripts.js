//fonction detectant l'url et la rechargeant quand
//elle n'est pas 'propre'
window.onload =  function() {
    var str = self.location.href;
    if ((str[str.length - 1]) != '?') {
        window.location.href = 'index.html?';
    }
};

$(document).ready(function() {
    
    // /!\/!\/!\/!\/!\/!\
    //ne pas oublier de mettre a true avant de livre
    var firstTime = false;
    
    //parametrage de fullpage et methodes associees
    $('#fullpage').fullpage({
        anchors:['startPage', 'mainPath', 'video'],
        loopHorizontal: false,
        animateAnchor: false,
        
        //lancement de fonctions apres le load de
        //certaines sections
        afterLoad: function(anchorLink, index){
            //stock la section actuelle
            var loadedSection = $(this);
            
            //quand on arrive dans la premiere section
            //pour la premiere fois
            if(anchorLink == 'mainPath' && firstTime == true) {
                //rebuild pout enlever la barre blanche
                $.fn.fullpage.reBuild();
                //lance le modal de bienvenue
                $('.firstTime').trigger('click');
                firstTime = false;
            }
        },
        //lancement de fonctions apres le load de
        //certains slide
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            //stock le slide actuel
            var loadedSlide = $(this);

            //quand on est dans la deuxieme section et 
            //sur le deuxieme slide
            if(anchorLink == 'mainPath' && slideIndex == 1){
                //apparition du sol progressive
                $(".upanim").css('animation', 'upanim 2s ease');
                $(".upanim").css('opacity', '1');
            }
        },
    });
   
    //stockage du slide actuel
    var slide = 1;

    //fonctions animant les eoliennes
    function rotor() {
        $('.rotor-1').transition({ rotate: '60000000deg' }, 7500000000, 'linear');
    };

    function rotor2() {
        $('.rotor-2').transition({ rotate: '60000000deg' }, 5600000000, 'linear');
    };
    
    //lance l'animation des eoliennes
    rotor();
    rotor2();
    
    //variable definissant la vitesse d'animation
    var speed = 800
    
    //mega fonction pour toutes les animations
    //hors fullscreen
    function moveThings(slide) {
        switch(slide) {
            case 1:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%',
                    left: '100%'
                }, 700);
                $('.sun').animate({
                    top: '-10%',
                    left: '2%'
                }, 700);
            break;
                
            case 2:
                $('.cloud-one').animate({
                    left: '40%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    top: '19%',
                    left: '100%'
                }, speed);
                $('.sun').animate({
                    top: '15%',
                    left: '2%'
                }, 700);
            break;
        
            case 3:
                $('.cloud-one').animate({
                    left: '30%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '90%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    left: '-10%'
                }, speed);
            break;
                
            case 4:
                $('.cloud-one').animate({
                    left: '20%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '80%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    left: '-10%'
                }, speed);
            break;
                
            case 5:
                $('.cloud-one').animate({
                    left: '10%',
                    top: '22%'
                }, speed);
                $('.cloud-two').animate({
                    left: '70%',
                    top: '19%'
                }, speed);
                $('.sun').animate({
                    left: '-10%'
                }, speed);
            break;
                
            case 6:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%'
                }, 700);
                $('.sun').animate({
                    top: '-10%'
                }, 700);
            break;
                
            case 7:
                $('.cloud-one').animate({
                    top: '-10%'
                }, 700);
                $('.cloud-two').animate({
                    top: '-10%'
                }, 700);
                $('.sun').animate({
                    top: '-10%'
                }, 700);
            break;
        }
    }
    
    //variable pour ne pas stacker les keypress
    animLock = false;
    
    moveThings(1);
    
    //lance les animations avec les touches du clavier
    $(document).keydown(function(e) {
        if (animLock) { return; }
        animLock = true;
        //permet d'attendre un certain temps avant de
        //relancer une animation
        setTimeout(function() { animLock = false }, 800);
        //detecte quelle touche (fleche droite ou gauche)
        //a été pressée
        switch(e.which) {
            case 37:          //gauche
                if (slide != 1) {
                    slide--;
                    moveThings(slide);
                }
            break;

            case 39:          //droite
                if (slide != 7) {
                    slide++;
                    moveThings(slide);
                }
            break;

            default: return;
        }
    });
    
    //lance les animations avec les clicks
    //sur les fleches
    $('.fp-prev').click(function() {
        if (slide != 1) {
            slide--;
            moveThings(slide);
        }
    });
    
    $('.fp-next').click(function() {
        if (slide != 7) {
            slide++;
            moveThings(slide);
        }
    });
    
    //lance les animations correspondant
    //au slide cliqué
    $('#production').click(function() {
        slide = 2;
        moveThings(slide);
    });
    
    $('#transport').click(function() {
        slide = 3;
        moveThings(slide);
    });
    
    $('#distribution').click(function() {
        slide = 4;
        moveThings(slide);
    });
    
    $('#fourniture').click(function() {
        slide = 5;
        moveThings(slide);
    });
    
    $('#roleerdf').click(function() {
        slide = 6;
        moveThings(slide);
    });
    
    //animations hover
    $('.animShake').hover(function() {
        $(this).addClass('animated shake');
    }, function() {
        $(this).removeClass('animated shake');
    });

    $('.animPulse').hover(function() {
        $(this).addClass('animated pulse');
    }, function() {
        $(this).removeClass('animated pulse');
    });

    $('.animBounce').hover(function() {
        $(this).addClass('animated bounce');
    }, function() {
        $(this).removeClass('animated bounce');
    });
    
});