$(function(){
    $('.pop').dblclick(function(){
        $(this).fadeOut();
    })

    var clicknum = $(".itemnum").text();

    $('.out').click(function(){
        clicknum--;
        if(clicknum < 0){
            clicknum = 0;
        }
        $(".itemnum").html(clicknum);
    });
    $('.plus').click(function(){
        clicknum++;
        $(".itemnum").html(clicknum); 
    });
    $('.inputcart').click(function(){
        alert("리바이탈라이징 수프림 유스 크림 " + clicknum + " 개를 장바구니에 넣으시겠습니까?")
    });

    $(window).scroll(function(){
        var dh = $('body').height();
        var st = $(this).scrollTop();
        var bh = $(window).scrollTop();
        console.log(st)

        if(st < 60 || st > 4200){
            $('.fix').fadeOut();

        }else if(61 < st){
            $('.fix').fadeIn();

        }

        if(st < 65){
            $('.move ul').css({'display':'flex'})
            $('.move li img').css('width','250px');
            $('.move li').css('margin','100px 20px');
            $('.move li:first-child').css('marginLeft','unset');
        }else{
            $('.move ul').css({'display':'inherit'});
            $('.move li img').css('width','700px');
            $('.move li').css('margin','-3px 100px 0px');
        }
    })
})