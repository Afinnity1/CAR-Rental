// Displays collapsible content panels for presenting information in a limited amount of space.
$("#accordion").accordion();

//  Js function for switching inbetween pages    
    document.getElementById("navbar-about").onclick = function(){
        window.location.href = 'About.html'
    }

    document.getElementById("navbar-vehicle").onclick = function(){
        window.location.href = 'vehicle.html'
    }

    document.getElementById("navbar-testimonials").onclick = function(){
        window.location.href = 'testimonial.html'
    }

    document.getElementById("navbar-team").onclick = function(){
        window.location.href = 'team.html'
    }

    document.getElementById("navbar-contact").onclick = function(){
        window.location.href = 'contact.html'
    }

    document.getElementById("navbar-home").onclick = function(){
        window.location.href = 'index.html'
    }