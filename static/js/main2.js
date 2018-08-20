( function($) {
    // we can now rely on $ within the safety of our "bodyguard" function
    $(document).ready(function(){ 
 
        var dialogue = `{
            "answers" :     
            {
                "question1": {
                    "question": [
                        {"question":"Wow, you made it this far. I hope you are okay!"},
                        {"question":"These are the last two things I have to answer."},
                        {"question":"Let's go on?"},
                        {"question":"What do you consider as your life's best achievement so far?"},
                        {"question":"Interesting..."},
                        {"question":"My TLDR answer to that is: I've been able to do things that I love while doing good in school."},
                        {"question":"These videos are just a part of my public performances as a musician. (muzic is lyf bro)"},
                        {"question":"I also took part in organzing gigs."},
                        {"question":"I didn't feel the pressure of being 'locked' in school "},
                        {"question":"I was able to hone my skills, whether technical or something I use everyday."},
                        {"question":"This achievement is something that I value, something that I cherish."},
                        {"question":"This achievement is something I can share to my children. Perhaps something that they can learn from."},
                        {"question":"That's pretty much my life's greatest achievement. I do believe that I'll have to replace the 'greatest' with another one! (crosses fingers)"},
                        {"question":"... ... ..."},
                        {"question":"For the last one: What are the best learning(s) you've gained throughout CTPRJMN?"},
                        {"question":"For me, the best learning is that we all have the innate ability to lead a project"},
                        {"question":"Because managing a project is just how we manage our life."},
                        {"question":"Neglect your life, something will go wrong. Neglect the project, then surely something will go wrong."},
                        {"question":"There are also lots of principles to be learned in project management."},
                        {"question":"At the end of the day, it's all needed to ensure that everyone is on the same page and is responsible for everything happening in the project."},
                        {"question":"Project management is something I already loved before."},
                        {"question":"Hopefully this will enhance my knowledge should I pursue a career that is related to project management."}

                    ]
                    
                }
            }
        }`
        var data = $.parseJSON(dialogue);
        console.log(data.answers.question1.question);
        var dataArray = [];
        $.each(data.answers.question1.question, function (index, value) {
            dataArray.push(value.question);
        });

        var instance = new TypeIt('#content', {
            strings: dataArray,
            speed: 100,
            breakLines: false,
            nextStringDelay: 1000,
            startDelay: 2000 
        })

        console.log(dataArray);
        $('#transcript').click(function() {
            
            
        });
        $('#charter').click(function() {
            
            
        });
    } );
    
} ) ( jQuery );
