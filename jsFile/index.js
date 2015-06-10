
function my_Order_Drop_Down(){
    $('.my')[0].onmouseover = function(){
        $('.my')[0].setAttribute("class","my active");
        $('.my')[0].childNodes[1].childNodes[1].setAttribute("class","icon_down open");
        $('.my')[0].childNodes[3].setAttribute("style","display:block")
    };
    $('.my')[0].onmouseout = function(){
        $('.my')[0].setAttribute("class","my");
        $('.my')[0].childNodes[1].childNodes[1].setAttribute("class","icon_down");
        $('.my')[0].childNodes[3].setAttribute("style","display:none")

    }
}

function mall_side_box(i,icon_view,icon_view_active){
    $('.item')[i].onmouseover = function(){
        $('#menuTab'+(i+1))[0].style.cssText = "display:block;";
        $('.icon_line')[i].style.display = "inline";
        $('.'+icon_view)[0].setAttribute("class",icon_view_active);
    };
    $('.item')[i].onmouseout = function(){
        $('#menuTab'+(i+1))[0].style.cssText = "display:none;";
        $('.icon_line')[i].style.display = "none";
        $('.'+icon_view_active)[0].setAttribute("class",icon_view)
    }

}

function mall_side_box_foot_list_two_btn(i){
    $('.dot')[i].onmouseover = function(){
        $('.list_company')[i].style.cssText = "display:block;";
        $('.list_company')[i+1].style.cssText = "display:none;";
        $('.dot')[i].setAttribute("class","dot active");
        $('.dot')[i+1].setAttribute("class","dot");
    };
    $('.dot')[i+1].onmouseover = function(){
        $('.list_company')[i].style.cssText = "display:none";
        $('.list_company')[i+1].style.cssText = "display:block";
        $('.dot')[i].setAttribute("class","dot");
        $('.dot')[i+1].setAttribute("class","dot active");
    };
}

function mall_side_box_foot_list_five_btn(d){
    $('.dot')[d].onmouseover = function(){
        for (var i = 4;i < 9;i ++)
        {
            if(i == d){
                $('.list_company')[i].style.cssText = "display:block;";
                $('.dot')[d].setAttribute("class","dot active")
            }
            else{
                $('.list_company')[i].style.cssText = "display:none;";
                $('.dot')[i].setAttribute("class","dot")
            }
        }
    }
}

function topbar_mall_head_float(){
    $(document).scroll(function(){
        if($(document).scrollTop() > 0)
        {
            $(".mall_head").attr("class","mall_head fixed");
            $(".topbar").attr("class","topbar fixed6");
        }
        else
        {
            $(".mall_head").attr("class","mall_head");
            $(".topbar").attr("class","topbar");
        }

    });
}

function index_content_right_float(){
    $(document).scroll(function(){
        if($(document).scrollTop() >= 456 && $(document).scrollTop() < 1598)
        {
            $(".right")[1].setAttribute("class","right fixed");
            $(".right")[1].setAttribute("style","margin-top: 0px; top: 99px;");
        }
        else if($(document).scrollTop() >= 1598 )
        {
            $(".right")[1].setAttribute("class","right");
            $(".right")[1].setAttribute("style","margin-top: 1043px; top: 0px;")

        }
        else{
            $(".right")[1].setAttribute("class","right");
            $(".right")[1].setAttribute("style","margin-top: 0px; top: 0px;")
        }

    });
}

function index_layer_float(){
    $(document).scroll(function(){
        if($(document).scrollTop() >= 456 && $(document).scrollTop() < 1706)
        {
            $(".index_layer").attr("class","index_layer fixed2");
            $(".index_layer").attr("style","top: 99px;");
        }
        else if($(document).scrollTop() >= 1706)
        {
            $(".index_layer").attr("class","index_layer");
            $(".index_layer").attr("style","top: 1344px;")

        }
        else{
            $(".index_layer").attr("class","index_layer");
            $(".index_layer").attr("style","top: 90px;")
        }

    });
}

function index_layer_float_Background_img_change(){

    $(document).scroll(function(){
        if($(document).scrollTop() < 845)
        {
            $('.index_layer')[0].childNodes[1].childNodes[1].setAttribute("class","active");
            $('.index_layer')[0].childNodes[1].childNodes[3].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[5].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[7].setAttribute("class","");
        }
        else if($(document).scrollTop() >= 845 && $(document).scrollTop() < 1225)
        {
            $('.index_layer')[0].childNodes[1].childNodes[1].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[3].setAttribute("class","active");
            $('.index_layer')[0].childNodes[1].childNodes[5].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[7].setAttribute("class","");
        }
        else if($(document).scrollTop() >=1225 && $(document).scrollTop() < 1611)
        {
            $('.index_layer')[0].childNodes[1].childNodes[1].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[3].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[5].setAttribute("class","active");
            $('.index_layer')[0].childNodes[1].childNodes[7].setAttribute("class","");
        }
        else
        {
            $('.index_layer')[0].childNodes[1].childNodes[1].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[3].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[5].setAttribute("class","");
            $('.index_layer')[0].childNodes[1].childNodes[7].setAttribute("class","active");
        }
    })
}

function index_layer_click_scroll(){
    $("#icon_circle_one").click(function(){
        window.scrollTo(0,456);
    });
    $("#icon_circle_two").click(function(){
        window.scrollTo(0,845);
    });
    $("#icon_circle_three").click(function(){
        window.scrollTo(0,1225);
    });
    $("#icon_circle_four").click(function(){
        window.scrollTo(0,1611);
    });
}

var index_banner = 0;
function index_banner_img_time_engine(){
    var array = $('#topBanner')[0].childNodes;
    index_banner_img_take_turn(index_banner,array);
    if(index_banner == array.length - 1)
        index_banner = 0;
    else
        index_banner ++;
    setTimeout('index_banner_img_time_engine()',1000);
}

function index_banner_img_take_turn(sindex,array){
    for(var i = 0;i < array.length;i ++)
    {
        if(i == sindex)
        {
            array[sindex].style.display = ("block");

        }
        else
        {
            array[i].style.display = ("none")
        }
    }

}

var index_banner_btn = 1;
function index_banner_slide_btn_time_egine(){
    var array = $('#topBannerPager')[0].childNodes[1].childNodes;
    index_banner_slide_btn(index_banner_btn,array);
    if(index_banner_btn == array.length - 2)
    {

        index_banner_btn = 1;
    }
    else
    {
        index_banner_btn = index_banner_btn + 2;
    }

    setTimeout('index_banner_slide_btn_time_egine()',1000);

}

function index_banner_slide_btn(index_banner_btn,array){

    for(var i = 1;i < array.length;i = i + 2)
    {
        if(i == index_banner_btn)
        {
            array[index_banner_btn].setAttribute("class","activeSlide")
        }
        else
        {
            array[i].setAttribute("class","")
        }
    }
}

function index_content_item_left_mouseOver(i){
    var array = $('.top');
    if(i == 0)
    {
        var temp = i + 4;
        array[i].childNodes[1].childNodes[1].onmouseover = function(){
            array[i].childNodes[1].childNodes[1].setAttribute("class","active");
            array[i].childNodes[1].childNodes[3].setAttribute("class","top2");
            $('#tableFloor'+temp+'FactoryDealRank')[0].setAttribute("style","display:table");
            $('#tableFloor'+temp+'SpecDealRank')[0].setAttribute("style","display:none");
        };
        array[i].childNodes[1].childNodes[3].onmouseover = function(){
            array[i].childNodes[1].childNodes[1].setAttribute("class","");
            array[i].childNodes[1].childNodes[3].setAttribute("class","top2 active");
            $('#tableFloor'+temp+'FactoryDealRank')[0].setAttribute("style","display:none");
            $('#tableFloor'+temp+'SpecDealRank')[0].setAttribute("style","display:table");
        }
    }
    else if(i == 3)
    {
        var temp2 = i - 2;
        array[i].childNodes[1].childNodes[1].onmouseover = function(){
            array[i].childNodes[1].childNodes[1].setAttribute("class","top1 active");
            array[i].childNodes[1].childNodes[3].setAttribute("class","top2");
            $('#tableFloor'+temp2+'FactoryDealRank')[0].setAttribute("style","display:table");
            $('#tableFloor'+temp2+'SpecDealRank')[0].setAttribute("style","display:none");
        };
        array[i].childNodes[1].childNodes[3].onmouseover = function(){
            array[i].childNodes[1].childNodes[1].setAttribute("class","top1");
            array[i].childNodes[1].childNodes[3].setAttribute("class","top2 active");
            $('#tableFloor'+temp2+'FactoryDealRank')[0].setAttribute("style","display:none");
            $('#tableFloor'+temp2+'SpecDealRank')[0].setAttribute("style","display:table");
        }

    }
    else
    {
        array[i].childNodes[1].childNodes[1].onmouseover = function(){
            array[i].childNodes[1].childNodes[1].setAttribute("class","top1 active");
            array[i].childNodes[1].childNodes[3].setAttribute("class","top2");
            $('#tableFloor'+(i+1)+'FactoryDealRank')[0].setAttribute("style","display:table");
            $('#tableFloor'+(i+1)+'SpecDealRank')[0].setAttribute("style","display:none");
        };
        array[i].childNodes[1].childNodes[3].onmouseover = function(){
            array[i].childNodes[1].childNodes[1].setAttribute("class","top1");
            array[i].childNodes[1].childNodes[3].setAttribute("class","top2 active");
            $('#tableFloor'+(i+1)+'FactoryDealRank')[0].setAttribute("style","display:none");
            $('#tableFloor'+(i+1)+'SpecDealRank')[0].setAttribute("style","display:table");
        }
    }
}

function index_content_item_right_scroll(){
    $(".switch").find("ul:first").animate({
        marginLeft:"-559px"
    },"80000",function(){
        $(this).css({marginLeft:"0px"}).find("li:first").appendTo(this);
    });
}

function index_content_item_right_prev(i){
    $('.item_right')[i].onmouseover = function(){
        $('.prev')[i].setAttribute("style","display:block");
        $('.next')[i].setAttribute("style","display:block");
    };
    $('.item_right')[i].onmouseout = function(){
        $('.prev')[i].setAttribute("style","display:none");
        $('.next')[i].setAttribute("style","display:none");
    }

}


function index_content_Scroll(){
    $("#dealRecordList").find("ul:last").animate({
        marginBottom:"-24px"
    },"slow",function(){
        $(this).css({marginBottom:"0px"}).find("li:last").prependTo(this);
    });

}


var index = 0;
function float_board_body_listBtn_time_engine(){
    var show_array = $("#basicPriceList")[0].childNodes;
    var array = $(".list_btn")[0].childNodes;
    body_listBtn_takeTurn(index,array,show_array);
    if(index == array.length - 1)
        index = 0;
    else
        index ++;
}
function body_listBtn_takeTurn(index,array,show_array){

    for(var i = 0;i < array.length;i ++)
    {
        if(i == index)
        {
            array[index].setAttribute("class","active");
            show_array[index].style.display = "block";
        }
        else
        {
            array[i].setAttribute("class","");
            show_array[i].style.display = "none";
        }
    }
}

var body_list_index = 0;
function float_board_body_list_time_engine(a_index){
    if(a_index == -1)
    {
        a_index = 3;
    }
    var body_list_show_array = $("#basicPriceList")[0].childNodes[a_index].childNodes;
    for(var i = 0;i < body_list_show_array.length;i ++)
    {
        if(i == body_list_index)
        {
            body_list_show_array[body_list_index].setAttribute("style","height:164px");
            body_list_show_array[body_list_index].childNodes[1].style.cssText = ("display:block");
            body_list_show_array[body_list_index].childNodes[0].style.cssText = ("display:none");
        }
        else
        {
            body_list_show_array[i].setAttribute("style","height:36px");
            body_list_show_array[i].childNodes[0].style.cssText = ("display:block");
            body_list_show_array[i].childNodes[1].style.cssText = ("display:none");
        }
    }
    if(body_list_index == body_list_show_array.length - 1)
        body_list_index = 0;
    else
        body_list_index ++;
}











$().ready(function(){
    //拉框..........

    my_Order_Drop_Down();
    mall_side_box(0,"icon_view","icon_view_active");
    mall_side_box(1,"icon_sun","icon_sun_active");
    mall_side_box(2,"icon_carouse","icon_carouse_active");
    mall_side_box(3,"icon_map","icon_map_active");
    mall_side_box(4,"icon_box","icon_box_active");
    mall_side_box(5,"icon_copy","icon_copy_active");

    //侧拉出来的框底部 .....鼠标移入移出

    mall_side_box_foot_list_two_btn(0);
    mall_side_box_foot_list_two_btn(2);
    mall_side_box_foot_list_two_btn(9);

    mall_side_box_foot_list_five_btn(4);
    mall_side_box_foot_list_five_btn(5);
    mall_side_box_foot_list_five_btn(6);
    mall_side_box_foot_list_five_btn(7);
    mall_side_box_foot_list_five_btn(8);

    //滚动屏幕浮动事件......
    //
    topbar_mall_head_float();
    index_content_right_float();
    index_layer_float();
    index_layer_float_Background_img_change();
    index_layer_click_scroll();

    //index_banner图片,下边按钮轮播

    index_banner_img_time_engine();
    index_banner_slide_btn_time_egine();


    //index_content_item_left鼠标移入事件
    //
    index_content_item_left_mouseOver(0);
    index_content_item_left_mouseOver(1);
    index_content_item_left_mouseOver(2);
    index_content_item_left_mouseOver(3);

    //index_content_item_right图片轮播

    setInterval('index_content_item_right_scroll()',3000);


    //index_content_item_right点选箭头换图

    index_content_item_right_prev(0);
    index_content_item_right_prev(1);
    index_content_item_right_prev(2);
    index_content_item_right_prev(3);


    //index_content_right滚播_鼠标移入停止移出继续

    var index_content_clear_scroll = setInterval('index_content_Scroll("#dealRecordList")',700);
    $('#dealRecordList')[0].onmouseover = function(){
        clearInterval(index_content_clear_scroll)
    };
    $('#dealRecordList')[0].onmouseout = function(){
        index_content_clear_scroll = setInterval('index_content_Scroll("#dealRecordList")',700);
    };





    //浮动窗口轮播事件

    //bug:切换页面轮播次序混乱(妾身认为是 index-1 这个参数搞的鬼)
    setTimeout(function (){
        float_board_body_listBtn_time_engine();
        setTimeout(arguments.callee, 5000);
    }, 20);
    setTimeout(function(){
        float_board_body_list_time_engine(index-1);
        setTimeout(arguments.callee,1000);
    },20);


});