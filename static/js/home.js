( function($) {
    // we can now rely on $ within the safety of our "bodyguard" function
    $(document).ready(function(){ 
        new TypeIt('#subtext', {
            strings: ["A CTPRJMN final requirement", "by Mark Christian Sanchez"],
            speed: 100,
            breakLines: false,
            nextStringDelay: 3000
        })

    } );
    
} ) ( jQuery );
