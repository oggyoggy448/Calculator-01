$(document).ready(function(){
    
    $("#one").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#two").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#three").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#four").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });
    $("#five").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });


    $("#six").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });


    $("#seven").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });


    $("#eight").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });


    $("#nine").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#plus").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#minus").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });


    $("#divide").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#star").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

    $("#result").click(function(){
        
        var result = eval($("#display_area").val());
        $("#display_area").val(
            result

        );
    });

    $("#clear").click(function(){
        
        $("#display_area").val("");
    });

    $("#zero").click(function(){
        
        $("#display_area").val(
            $("#display_area").val()+
            $(this).val()
        );
    });

  });