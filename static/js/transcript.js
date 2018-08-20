( function($) {
    // we can now rely on $ within the safety of our "bodyguard" function
    $(document).ready(function(){ 
 
        var dialogue = `{
            "answers" :     
            {
                "question1": {
                    "question": [
                        {"question":"Welcome, Welcome! It is nice seeing you here. This will autotype all of my answers so take a look carefully!"},
                        {"question":"I am gonna try my best to answer some of your questions. Here it goes then."},
                        {"question":"What is the essence of life and its relation to project management?"},
                        {"question":"It may sound a simple question but I think I can give you a great answer."},
                        {"question":"Hmmmmm....."},
                        {"question":"Life is like an art,"},
                        {"question":"it is subjective,"},
                        {"question":"we judge it,"},
                        {"question":"we fall in love with it,"},
                        {"question":"we hate it, we despise it,"},
                        {"question":"but most importantly we paint it."},
                        {"question":"It is us who gives meaning to it."},
                        {"question":"It is us who takes care of it."},
                        {"question":"We could say that our life is one big project"},
                        {"question":"We started from somewhere..."},
                        {"question":"and because of that we are what we are."},
                        {"question":"We think of things we want to do."},
                        {"question":"If it went wrong then we learn from it."},
                        {"question":"If it went right then we cherish it."},
                        {"question":"For some people, they worry of the things that could happen."},
                        {"question":"Risks."},
                        {"question":"For other people, let life throw things at them and they would make something out of it."},
                        {"question":"We know things are going right in life because we know it is."},
                        {"question":"But it is actually so many factors that we think of to know that our life is on the right path."},
                        {"question":"It's just like a project, there are criterias and factors that we have to consider."},
                        {"question":"I hope that satisfies your curiosity"},
                        {"question":"Second on the list: Narrate your life plan for the next 20 years using project management principles and concepts you have learned so far."},
                        {"question":"My whole life is based on an iterative model..."},
                        {"question":"It's pretty much linear, but it's not something I could plan on in the very beginning."},
                        {"question":"(I wish I had the consciousness to do so! HAHA)."},
                        {"question":"I wanted to become a professor back then but due to financial risks, I decided I will enter the industry."},
                        {"question":"The first critical step in my 20-year plan is to acquire my certificates."},
                        {"question":"That includes my Cisco, CompTIA A+, and other certifications."},
                        {"question":"In this step, I have to prepare for the exams, take the exams, and see if I pass."},
                        {"question":"The next critical step in my plan is to look for a career in IT."},
                        {"question":"I like to use the term career because I am hoping it is something where I can use my leadership skills that I honed over the years."},
                        {"question":"The next critical step is to acheive stability."},
                        {"question":"Financially, socially, -lly, -lly, and whatnot."},
                        {"question":"This is probably the biggest risk right now. I don't know if I'm going to love the career which I think I like!"},
                        {"question":"When I'm okay financially, then I'll try to study the best approach to buy a house/lot and all those things."},
                        {"question":"I should have established my investment portfolio because I've been reading a lot of financial books now."},
                        {"question":"Relating everything to the incremental model. Each of my critical steps would have results."},
                        {"question":"Along the way, I have to determine if everything is going according to plan."},
                        {"question":"Change some of the goals, adapt to the situation if needed."},
                        {"question":"Of course, at the end of this 20-year plan, I have to learn from everything I did whether it was success or failure."},
                        {"question":"I have a lot more to say but I guess you may not have the time."},
                        {"question":"..."},
                        {"question":"For my project charter, click the link to the right."},
                        {"question":"...."}

                    ]
                    
                }
            }
        }`
        var dialogue2 = `{
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
        var data2 = $.parseJSON(dialogue2);
        console.log(data.answers.question1.question);
        var dataArray = [];
        $.each(data.answers.question1.question, function (index, value) {
            $('#answers').append(value.question + '<br />');
        });
        $.each(data2.answers.question1.question, function (index, value) {
            $('#answers2').append(value.question + '<br />');
        });

    } );
    
} ) ( jQuery );
