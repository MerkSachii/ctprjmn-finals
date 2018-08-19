( function($) {
    // we can now rely on $ within the safety of our "bodyguard" function
    $(document).ready(function(){ 
        $('#target').teletype({
            text: [
                'A CTPRJMN final requirement'
            ]
          });
          
          $('#cursor').teletype({
            text: ['.', ' '],
            delay: 0,
            pause: 500
          });
    } );
} ) ( jQuery );
