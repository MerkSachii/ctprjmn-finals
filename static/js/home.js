( function($) {
    // we can now rely on $ within the safety of our "bodyguard" function
    $(document).ready(function(){ 
        // $('#target').teletype({
        //     text: [
        //         'A CTPRJMN final requirement'
        //     ]
        //   });
          
        //   $('#cursor').teletype({
        //     text: ['.', ' '],
        //     delay: 0,
        //     pause: 500
        //   });
        new TypeIt('#subtext', {
            strings: ["A CTPRJMN final requirement", "by Mark Christian Sanchez"],
            speed: 100,
            breakLines: false,
            nextStringDelay: 3000
        })

    } );
    
} ) ( jQuery );
