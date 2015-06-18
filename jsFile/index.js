
function top_bar_my_order_drop_down(num){
    $('#topmenulist')[num].onmouseover = function(){
        $('.my').addClass("active");
        $('.my .icon_down').addClass("open");
        $('.my .my_list').css("display","block")
    };
    $('#topmenulist')[num].onmouseout = function(){
        $('.my').removeClass("active");
        $('.my .icon_down').removeClass("open");
        $('.my .my_list').css("display","none")
    }
}






function steel_big_mall_drop_down_item_and_sid_box(num,original_class,add_class){
    $('.menu_ul .item')[num].onmouseover = function(){
        $('.menu_ul .item')[num].setAttribute("class","item active");
        $('#menuTab'+(num+1))[0].style.cssText = "display:block;";
        $('.icon_line')[num].style.display = "inline";
        $('.'+original_class)[0].setAttribute("class",add_class);
    };
    $('.menu_ul .item')[num].onmouseout = function(){
        $('.menu_ul .item')[num].setAttribute("class","item");
        $('#menuTab'+(num+1))[0].style.cssText = "display:none;";
        $('.icon_line')[num].style.display = "none";
        $('.'+add_class)[0].setAttribute("class",original_class)
    }
}







function steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(num){
    $('.dot')[num].onmouseover = function(){
        $('.list_company')[num].style.cssText = "display:block;";
        $('.list_company')[num+1].style.cssText = "display:none;";
        $('.dot')[num].setAttribute("class","dot active");
        $('.dot')[num+1].setAttribute("class","dot");
    };
    $('.dot')[num+1].onmouseover = function(){
        $('.list_company')[num].style.cssText = "display:none";
        $('.list_company')[num+1].style.cssText = "display:block";
        $('.dot')[num].setAttribute("class","dot");
        $('.dot')[num+1].setAttribute("class","dot active");
    };
}

function steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(num){
    $('.dot')[num].onmouseover = function(){
        for (var i = 4;i < 9;i ++)
        {
            if(i == num){
                $('.list_company')[i].style.cssText = "display:block;";
                $('.dot')[num].setAttribute("class","dot active")
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


function user_purchase_merchandise_state_tiem_float(){
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

function circle_index_layer_float(){
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

function circle_index_layer_float_Background_img_change(){

    $(document).scroll(function(){
        if($(document).scrollTop() < 845)
        {
            $('.index_layer ul li')[0].setAttribute("class","active");
            $('.index_layer ul li')[1].setAttribute("class","");
            $('.index_layer ul li')[2].setAttribute("class","");
            $('.index_layer ul li')[3].setAttribute("class","");
        }
        else if($(document).scrollTop() >= 845 && $(document).scrollTop() < 1225)
        {
            $('.index_layer ul li')[0].setAttribute("class","");
            $('.index_layer ul li')[1].setAttribute("class","active");
            $('.index_layer ul li')[2].setAttribute("class","");
            $('.index_layer ul li')[3].setAttribute("class","");
        }
        else if($(document).scrollTop() >=1225 && $(document).scrollTop() < 1611)
        {
            $('.index_layer ul li')[0].setAttribute("class","");
            $('.index_layer ul li')[1].setAttribute("class","");
            $('.index_layer ul li')[2].setAttribute("class","active");
            $('.index_layer ul li')[3].setAttribute("class","");
        }
        else
        {
            $('.index_layer ul li')[0].setAttribute("class","");
            $('.index_layer ul li')[1].setAttribute("class","");
            $('.index_layer ul li')[2].setAttribute("class","");
            $('.index_layer ul li')[3].setAttribute("class","active");
        }
    })
}

function circle_index_layer_click_scroll(){
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
function index_banner_img_scroll_engine(){
    var array = $('.slide .bg');
    index_banner_img_take_turn(index_banner,array);
    if(index_banner == array.length - 1)
        index_banner = 0;
    else
        index_banner ++;
    setTimeout('index_banner_img_scroll_engine()',1000);
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

var index_banner_btn = 0;
function index_banner_slide_btn_scroll_egine(){
    var array = $('#topBannerPager .slide_btn a');
    index_banner_slide_btn(index_banner_btn,array);
    if(index_banner_btn == array.length - 1)
    {

        index_banner_btn = 0;
    }
    else
    {
        index_banner_btn = index_banner_btn + 1;
    }

    setTimeout('index_banner_slide_btn_scroll_egine()',1000);

}

function index_banner_slide_btn(index_banner_btn,array){

    for(var i = 0;i < array.length;i ++)
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

function index_content_item_left_charts_mouseover(num){
    $('.item .item_left .top h4 a')[num].onmouseover = function(){
        $('.item .item_left .top h4 a')[num].setAttribute('class','top1 active');
        $('.item .item_left .top h4 a')[num + 1].setAttribute('class','top2');
        $('.item .item_left table')[num].setAttribute('style','display:table');
        $('.item .item_left table')[num + 1].setAttribute('style','display:none');
    };
    $('.item .item_left .top h4 a')[num+1].onmouseover = function(){
        $('.item .item_left .top h4 a')[num].setAttribute('class','top1');
        $('.item .item_left .top h4 a')[num + 1].setAttribute('class','top2 active');
        $('.item .item_left table')[num].setAttribute('style','display:none');
        $('.item .item_left table')[num + 1].setAttribute('style','display:table');
    }
}


function index_content_item_right_img_scroll(){
    $(".switch").find("ul:first").animate({
        marginLeft:"-559px"
    },"80000",function(){
        $(this).css({marginLeft:"0px"}).find("li:first").appendTo(this);
    });
}

function index_content_item_right_prev_next(num){
    $('.item_right')[num].onmouseover = function(){
        $('.prev')[num].setAttribute("style","display:block");
        $('.next')[num].setAttribute("style","display:block");
    };
    $('.item_right')[num].onmouseout = function(){
        $('.prev')[num].setAttribute("style","display:none");
        $('.next')[num].setAttribute("style","display:none");
    }

}


function  user_purchase_merchandise_state_tiem_Scroll(){
    $("#dealRecordList  ").find("ul:last").animate({
        marginBottom:"-24px"
    },"slow",function(){
        $(this).css({marginBottom:"0px"}).find("li:last").prependTo(this);
    });

}


var index = 0;
function float_board_body_list_btn_scroll_engine(){
    var show_array = $('.board .list ul');
    var array = $(".list_btn a");
    body_list_btn_takeTurn(index,array,show_array);
    if(index == array.length - 1)
        index = 0;
    else
        index ++;
}
function body_list_btn_takeTurn(index,array,show_array){

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
function float_board_vertical_scroll_engine(a_index){
    if(a_index == -1)
    {
        a_index = 3;
    }
    var body_list_show_array = $("#basicPriceList ul")[a_index].childNodes;
    for(var i = 0;i < body_list_show_array.length;i ++)
    {
        if(i == body_list_index)
        {
            $("li",  body_list_show_array[body_list_index])
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

    top_bar_my_order_drop_down(0);

    steel_big_mall_drop_down_item_and_sid_box(0,"icon_view","icon_view_active");
    steel_big_mall_drop_down_item_and_sid_box(1,"icon_sun","icon_sun_active");
    steel_big_mall_drop_down_item_and_sid_box(2,"icon_carouse","icon_carouse_active");
    steel_big_mall_drop_down_item_and_sid_box(3,"icon_map","icon_map_active");
    steel_big_mall_drop_down_item_and_sid_box(4,"icon_box","icon_box_active");
    steel_big_mall_drop_down_item_and_sid_box(5,"icon_copy","icon_copy_active");

    //侧拉出来的框底部 .....鼠标移入移出

    steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(0);
    steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(2);
    steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(9);

    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(4);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(5);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(6);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(7);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(8);

    //滚动屏幕浮动事件......
    //
    topbar_mall_head_float();
    user_purchase_merchandise_state_tiem_float();
    circle_index_layer_float();
    circle_index_layer_float_Background_img_change();
    circle_index_layer_click_scroll();

    //index_banner图片,下边按钮轮播

    index_banner_img_scroll_engine();
    index_banner_slide_btn_scroll_egine();


    //index_content_item_left鼠标移入事件
    //
    index_content_item_left_charts_mouseover(0);
    index_content_item_left_charts_mouseover(2);
    index_content_item_left_charts_mouseover(4);
    index_content_item_left_charts_mouseover(6);

    //index_content_item_right图片轮播

    setInterval('index_content_item_right_img_scroll()',3000);


    //index_content_item_right点选箭头换图

    index_content_item_right_prev_next(0);
    index_content_item_right_prev_next(1);
    index_content_item_right_prev_next(2);
    index_content_item_right_prev_next(3);


    //index_content_right滚播_鼠标移入停止移出继续

    var  user_purchase_merchandise_state_tiem_clear_scroll = setInterval(' user_purchase_merchandise_state_tiem_Scroll("#dealRecordList")',700);
    $('#dealRecordList')[0].onmouseover = function(){
        clearInterval( user_purchase_merchandise_state_tiem_clear_scroll)
    };
    $('#dealRecordList')[0].onmouseout = function(){
        user_purchase_merchandise_state_tiem_clear_scroll = setInterval(' user_purchase_merchandise_state_tiem_Scroll("#dealRecordList")',700);
    };





    //浮动窗口轮播事件

    //bug:切换页面轮播次序混乱(妾身认为是 index-1 这个参数搞的鬼)
    setTimeout(function (){
        float_board_body_list_btn_scroll_engine();
        setTimeout(arguments.callee, 5000);
    }, 20);
    setTimeout(function(){
        float_board_vertical_scroll_engine(index-1);
        setTimeout(arguments.callee,1000);
    },20);




});