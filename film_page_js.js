
var name
$(document).ready(function () {



    $.getJSON('http://www.omdbapi.com/?t='+name+'&apikey=208a12fa', function(data) {
        console.log(";askldmg;ldfkjs;ldfkjb")

        c=data["Title"]
        d=data["Year"]
        e=data["Director"]
        f=data["Language"]
        g=data["imdbRating"]
        h=data["imdbVotes"]
        i=data["Plot"]
        j=data["Poster"]
        k=data["Writer"]
        l=data["Runtime"]
        m=data["Country"]
        n=data["Actors"]




        document.getElementsByClassName("title")[0].innerHTML=c;
        document.getElementsByClassName("year")[0].innerHTML=d;
        document.getElementsByClassName("poster")[0].src=j;
        document.getElementsByClassName("describe")[0].innerHTML=i;
        document.getElementsByClassName("runtime")[0].innerHTML=l;
        document.getElementsByClassName("year_time")[0].innerHTML=d;
        document.getElementsByClassName("language")[0].innerHTML=f;
        document.getElementsByClassName("country")[0].innerHTML=m;

        document.getElementsByClassName("director")[0].innerHTML=e;
        document.getElementsByClassName("writer")[0].innerHTML=k;
        document.getElementsByClassName("actors")[0].innerHTML=n;













    });


    document.getElementsByClassName("downloads")[0].onmouseover=function() {mouseOver1()};

    function mouseOver1() {


        $(document.getElementsByClassName("all_divs")[0]).load("download_button.html")

    }




    document.getElementsByClassName("subtitle")[0].onmouseover=function() {mouseOver2()};

    function mouseOver2() {


        document.getElementsByClassName("all_divs")[0].innerHTML="this is subttile"

    }






    document.getElementsByClassName("subtitle")[0].onmouseover=function() {mouseOver3()};

    function mouseOver3() {


        document.getElementsByClassName("all_divs")[0].innerHTML="this is subttile"

    }





    document.getElementsByClassName("comments")[0].onmouseover=function() {mouseOver4()};

    function mouseOver4() {


        $(document.getElementsByClassName("all_divs")[0]).load("comment_button.html")

    }





    document.getElementsByClassName("critics")[0].onmouseover=function() {mouseOver5()};

    function mouseOver5() {


        document.getElementsByClassName("all_divs")[0].innerHTML="this is critics"

    }






    document.getElementsByClassName("employ")[0].onmouseover=function() {mouseOver6()};

    function mouseOver6() {


        document.getElementsByClassName("all_divs")[0].innerHTML="this is stars"

    }





    document.getElementsByClassName("awards")[0].onmouseover=function() {mouseOver7()};

    function mouseOver7() {


        document.getElementsByClassName("all_divs")[0].innerHTML="this is awards"

    }






    document.getElementsByClassName("gallery")[0].onmouseover=function() {mouseOver8()};

    function mouseOver8() {


        document.getElementsByClassName("all_divs")[0].innerHTML="this is gallery"

    }
























});