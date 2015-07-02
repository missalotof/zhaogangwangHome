//功能块：我的订单
function top_bar_my_order_drop_down(num){
    top_bar_my_order_drop_down_mouse_over(num);
    top_bar_my_order_drop_down_mouse_out(num);
}
function top_bar_my_order_drop_down_mouse_over(num){
    $('#topmenulist')[num].onmouseover = function(){
        $('.my').addClass("active");
        $('.my .icon_down').addClass("open");
        $('.my .my_list').css("display","block")
    };
}
function top_bar_my_order_drop_down_mouse_out(num){
    $('#topmenulist')[num].onmouseout = function(){
        $('.my').removeClass("active");
        $('.my .icon_down').removeClass("open");
        $('.my .my_list').css("display","none")
    }
}
////////////////////////////////////////////////


//功能块：钢材大卖场下拉单和侧拉
function steel_big_mall_drop_down_item_and_sid_box(num,original_class,add_class){
    steel_big_mall_drop_down_item_and_sid_box_mouse_over(num,original_class,add_class);
    steel_big_mall_drop_down_item_and_sid_box_mouse_over_mouse_out(num,original_class,add_class)
}
function steel_big_mall_drop_down_item_and_sid_box_mouse_over(num,original_class,add_class){
    $('.menu_ul .item')[num].onmouseover = function(){
        $('.menu_ul .item')[num].setAttribute("class","item active");
        $('#menuTab'+(num+1))[0].style.cssText = "display:block;";
        $('.icon_line')[num].style.display = "inline";
        $('.'+original_class)[0].setAttribute("class",add_class);
    };
}
function steel_big_mall_drop_down_item_and_sid_box_mouse_over_mouse_out(num,original_class,add_class){
    $('.menu_ul .item')[num].onmouseout = function(){
        $('.menu_ul .item')[num].setAttribute("class","item");
        $('#menuTab'+(num+1))[0].style.cssText = "display:none;";
        $('.icon_line')[num].style.display = "none";
        $('.'+add_class)[0].setAttribute("class",original_class)
    }
}
//////////////////////////////////


//功能块：钢材大卖场侧拉框的下面的圆点修改哦
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
        for (var i = 4;i < 9;i ++){
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
//////////////////////////////////////////////////



//功能块：浮动
function topbar_mall_head_float(){
    $(document).scroll(function(){
         var topbar_mall_head_start_float_scrollbar_position = 0;
        topbar_mall_head_add_class_float(topbar_mall_head_start_float_scrollbar_position);
    });
}
function topbar_mall_head_add_class_float(num){
    if($(document).scrollTop() > num){
        $(".mall_head").attr("class","mall_head fixed");
        $(".topbar").attr("class","topbar fixed6");
    }
    else{
        $(".mall_head").attr("class","mall_head");
        $(".topbar").attr("class","topbar");
    }
}


function user_purchase_merchandise_state_tiem_float(){
    $(document).scroll(function(){
        var user_purchase_merchandise_state_tiem_start_float_scrollbar_position = 456;
        var user_purchase_merchandise_state_tiem_stop_float_scrollbar_position = 1598;
        user_purchase_merchandise_state_tiem_float_first_stage(user_purchase_merchandise_state_tiem_start_float_scrollbar_position,user_purchase_merchandise_state_tiem_stop_float_scrollbar_position);
        user_purchase_merchandise_state_tiem_float_second_stage(user_purchase_merchandise_state_tiem_stop_float_scrollbar_position);
        user_purchase_merchandise_state_tiem_float_third_stage(user_purchase_merchandise_state_tiem_start_float_scrollbar_position);
    });
}
function user_purchase_merchandise_state_tiem_float_first_stage(start_position,stop_position){
    if($(document).scrollTop() >= start_position && $(document).scrollTop() < stop_position){
        $(".index_content .right")[0].setAttribute("class","right fixed");
        $(".index_content .right")[0].setAttribute("style","margin-top: 0px; top: 99px;");
    }
}
function user_purchase_merchandise_state_tiem_float_second_stage(stop_position){
    if($(document).scrollTop() >= stop_position){
        $(".index_content .right")[0].setAttribute("class","right");
        $(".index_content .right")[0].setAttribute("style","margin-top: 1043px; top: 0px;")
    }
}
function user_purchase_merchandise_state_tiem_float_third_stage(start_position){
    if($(document).scrollTop() < start_position){
        $(".index_content .right")[0].setAttribute("class","right");
        $(".index_content .right")[0].setAttribute("style","margin-top: 0px; top: 0px;")
    }
}


function circle_index_layer_float(){
    $(document).scroll(function(){
        var circle_index_layer_start_float_scrollbar_position = 456;
        var circle_index_layer_stop_float_scrollbar_position = 1706;
        circle_index_layer_float_first_stage(circle_index_layer_start_float_scrollbar_position,circle_index_layer_stop_float_scrollbar_position);
        circle_index_layer_float_second_stage(circle_index_layer_stop_float_scrollbar_position);
        circle_index_layer_float_third_stage(circle_index_layer_start_float_scrollbar_position);
    });
}
function circle_index_layer_float_first_stage(start_position,stop_position){
    if($(document).scrollTop() >= start_position && $(document).scrollTop() < stop_position){
        $(".index_layer").attr("class","index_layer fixed2");
        $(".index_layer").attr("style","top: 99px;");
    }
}
function circle_index_layer_float_second_stage(stop_position){
    if($(document).scrollTop() >= stop_position){
        $(".index_layer").attr("class","index_layer");
        $(".index_layer").attr("style","top: 1344px;")

    }
}
function circle_index_layer_float_third_stage(start_position){
    if($(document).scrollTop() < start_position){
        $(".index_layer").attr("class","index_layer");
        $(".index_layer").attr("style","top: 90px;")
    }
}


function circle_index_layer_float_Background_img_change(){
    $(document).scroll(function(){
        var first_circle_index_layer_img_change_scrollbar_position = 845;
        var second_circle_index_layer_img_change_scrollbar_position = 1225;
        var third_circle_index_layer_img_change_scrollbar_position = 1611;
        circle_index_layer_first_change(first_circle_index_layer_img_change_scrollbar_position);
        circle_index_layer_second_change(first_circle_index_layer_img_change_scrollbar_position,second_circle_index_layer_img_change_scrollbar_position);
        circle_index_layer_third_change(second_circle_index_layer_img_change_scrollbar_position,third_circle_index_layer_img_change_scrollbar_position);
        circle_index_layer_fourth_change(third_circle_index_layer_img_change_scrollbar_position);
    })
}
function circle_index_layer_first_change(first_position){
    if($(document).scrollTop() < first_position){
        circle_index_img_change(0);
    }
}
function circle_index_layer_second_change(first_position,second_position){
    if($(document).scrollTop() >= first_position && $(document).scrollTop() < second_position){
        circle_index_img_change(1);
    }
}
function circle_index_layer_third_change(second_position,third_position){
    if($(document).scrollTop() >= second_position && $(document).scrollTop() < third_position){
        circle_index_img_change(2);
    }
}
function circle_index_layer_fourth_change(third_position){
    if($(document).scrollTop() >= third_position){
        circle_index_img_change(3);
    }
}
function circle_index_img_change(num){
    var arry = $('.index_layer ul li').length;
    for(var i = 0;i < arry;i ++){
        if(i == num){
            $('.index_layer ul li')[i].setAttribute("class","active")
        }
        else{
            $('.index_layer ul li')[i].setAttribute("class","")
        }
    }
}
////////////////////////////////////////////////


//功能块：点击圆形图片页面滑动
function circle_index_layer_click_scroll(){
    var click_first_circe_index_layer_scrollbar_position = 456;
    var click_second_circe_index_layer_scrollbar_position = 845;
    var click_third_circe_index_layer_scrollbar_position = 1225;
    var click_four_circe_index_layer_scrollbar_position = 1611;
    circle_click_scroll('one',click_first_circe_index_layer_scrollbar_position);
    circle_click_scroll('two',click_second_circe_index_layer_scrollbar_position);
    circle_click_scroll('three',click_third_circe_index_layer_scrollbar_position);
    circle_click_scroll('four',click_four_circe_index_layer_scrollbar_position);
}
function circle_click_scroll(which_circle,scrollbar_position){
    $("#icon_circle_"+which_circle).click(function(){
        window.scrollTo(0,scrollbar_position);
    });
}
//////////////////////////////////////////////


//功能块：index_banner图片的轮播、鼠标移入移出、点击slide_btn

//图片数组顺序会变化。
//function img_fade(){
//    $('.slide .bg').first().fadeTo(3000,0,img_change())
//}
//function img_change(){
//    $('.slide .bg').first().appendTo($('.slide'));
//    $('.slide .bg').first().fadeTo(3000,1);
//}

var index_banner_img_index = 0;
function img_fade(){
    var array = $('.slide .bg');
    img_change(array);
    if(index_banner_img_index == array.length -1){
        index_banner_img_index = 0;
    }
    else{
        index_banner_img_index ++;
    }
}
function img_change(array){
    for(var i = 0;i < array.length;i ++){
        if(i == index_banner_img_index){
            $(array[i]).fadeIn(1000)
        }
        else{
            $(array[i]).fadeOut(1000)
        }
    }
}


var index_banner_btn = 0;
function index_banner_slide_btn_scroll_egine(){
    var array = $('#topBannerPager .slide_btn a');
    index_banner_slide_btn(index_banner_btn,array);
    if(index_banner_btn == array.length - 1){
        index_banner_btn = 0;
    }
    else{
        index_banner_btn = index_banner_btn + 1;
    }
}
function index_banner_slide_btn(index_banner_btn,array){
    for(var i = 0;i < array.length;i ++){
        index_banner_slide_btn_change(i,index_banner_btn,array);
    }
}
function index_banner_slide_btn_change(i,index_banner_btn,array){
    if(i == index_banner_btn){
        array[index_banner_btn].setAttribute("class","activeSlide")
    }
    else{
        array[i].setAttribute("class","")
    }
}


function index_banner_mouseover_mouseout(){
    var btn_scroll = setInterval('index_banner_slide_btn_scroll_egine()',3000);
    var img_scroll = setInterval('img_fade()',3000);
    $('#topBanner')[0].onmouseover = function(){
        clearInterval(btn_scroll);
        clearInterval(img_scroll)
    };
    $('#topBanner')[0].onmouseout = function(){
        btn_scroll = setInterval('index_banner_slide_btn_scroll_egine()',3000);
        img_scroll = setInterval('img_fade()',3000);
    };
}


function index_banner_slid_btn_click(num){
    var arry = $('#topBannerPager .slide_btn a');
    $($('#topBannerPager .slide_btn a')[num]).click(function(){
        for(var i = 0;i < arry.length;i ++){
            if(i == num){
                    $($('.slide .bg')[i]).fadeIn(1000)
            }
            else{
                $($('.slide .bg')[i]).fadeOut(1000)
            }
        }
    });
}
//////////////////////////////////////////////


//功能块：index_content鼠标移入数据块变化
function index_content_item_left_charts_mouseover(num){
    index_content_item_left_charts_one_mouseover(num);
    index_content_item_left_charts_two_mouseover(num);
}
function index_content_item_left_charts_one_mouseover(num){
    $('.item .item_left .top h4 a')[num].onmouseover = function(){
        $('.item .item_left .top h4 a')[num].setAttribute('class','top1 active');
        $('.item .item_left .top h4 a')[num + 1].setAttribute('class','top2');
        $('.item .item_left table')[num].setAttribute('style','display:table');
        $('.item .item_left table')[num + 1].setAttribute('style','display:none');
    };
}
function index_content_item_left_charts_two_mouseover(num){
    $('.item .item_left .top h4 a')[num+1].onmouseover = function(){
        $('.item .item_left .top h4 a')[num].setAttribute('class','top1');
        $('.item .item_left .top h4 a')[num + 1].setAttribute('class','top2 active');
        $('.item .item_left table')[num].setAttribute('style','display:none');
        $('.item .item_left table')[num + 1].setAttribute('style','display:table');
    }
}
//////////////////////////////////////////////


//功能块：index_content部分图片的轮播、鼠标移入停止、前后项箭头隐藏、显现
function index_content_item_right_img_scroll(num){
    $('.floor'+(num+1)+'Banner').find("ul:first").animate({
        marginLeft:"-559px"
    },"slow",function(){
        $(this).css({marginLeft:"0px"}).find("li:first").appendTo(this);
    });
}
function first_index_content_img_scroll(){
    var firsr_img = setInterval('index_content_item_right_img_scroll(0)',3000);
    $('.switch')[0].onmouseover = function(){

        clearInterval(firsr_img);
        $('.prev')[0].setAttribute("style","display:block");
        $('.next')[0].setAttribute("style","display:block");
    };
    $('.switch')[0].onmouseout = function(){

        firsr_img = setInterval('index_content_item_right_img_scroll(0)',3000);
        $('.prev')[0].setAttribute("style","display:none");
        $('.next')[0].setAttribute("style","display:none");
    };

}
function second_index_content_img_scroll(){
    var second_img = setInterval('index_content_item_right_img_scroll(1)',3000);
    $('.switch')[1].onmouseover = function(){
        clearInterval(second_img);
        $('.prev')[1].setAttribute("style","display:block");
        $('.next')[1].setAttribute("style","display:block");
    };
    $('.switch')[1].onmouseout = function(){
        second_img = setInterval('index_content_item_right_img_scroll(1)',3000);
        $('.prev')[1].setAttribute("style","display:none");
        $('.next')[1].setAttribute("style","display:none");
    };
}
function third_index_content_img_scroll(){
    var third_img = setInterval('index_content_item_right_img_scroll(2)',3000);
    $('.switch')[2].onmouseover = function(){
        clearInterval(third_img);
        $('.prev')[2].setAttribute("style","display:block");
        $('.next')[2].setAttribute("style","display:block");
    };
    $('.switch')[2].onmouseout = function(){
        third_img = setInterval('index_content_item_right_img_scroll(2)',3000);
        $('.prev')[2].setAttribute("style","display:none");
        $('.next')[2].setAttribute("style","display:none");
    };
}
function fourth_index_content_img_scroll(){
    var fourth_img = setInterval('index_content_item_right_img_scroll(3)',3000);
    $('.switch')[3].onmouseover = function(){
        clearInterval(fourth_img);
        $('.prev')[3].setAttribute("style","display:block");
        $('.next')[3].setAttribute("style","display:block");
    };
    $('.switch')[3].onmouseout = function(){
        fourth_img = setInterval('index_content_item_right_img_scroll(3)',3000);
        $('.prev')[3].setAttribute("style","display:none");
        $('.next')[3].setAttribute("style","display:none");
    };
}
////////////////////////////////////////////////////////////////////////////


//功能块：index_content部分前后项箭头点击换图
function index_content_item_prev_next_click(num){
    $('.floor'+num+'Banner .prev').click(function(){
        $('.floor'+num+'Banner').find("ul:last").animate({
            marginRight:"-559px"
        },"slow",function(){
            $(this).css({marginRight:"0px"}).find("li:last").prependTo(this);
        });
    });
    $('.floor'+num+'Banner .next').click(function(){
        $('.floor'+num+'Banner').find("ul:first").animate({
            marginLeft:"-559px"
        },"slow",function(){
            $(this).css({marginLeft:"0px"}).find("li:first").appendTo(this);
        });
    });
}
////////////////////////////////////////////////////////////////////


//功能块：index_content右侧部分数据的滚动、鼠标移入移出
function  user_purchase_merchandise_state_tiem_Scroll(){
    $("#dealRecordList  ").find("ul:last").animate({
        marginBottom:"-24px"
    },"slow",function(){
        $(this).css({marginBottom:"0px"}).find("li:last").prependTo(this);
    });
}
function user_purchase_merchandise_state_tiem_Scroll_mouseover_mouseout(){

    var  user_purchase_merchandise_state_tiem_clear_scroll = setInterval(' user_purchase_merchandise_state_tiem_Scroll("#dealRecordList")',700);
    $('#dealRecordList')[0].onmouseover = function(){
        clearInterval( user_purchase_merchandise_state_tiem_clear_scroll)
    };
    $('#dealRecordList')[0].onmouseout = function(){
        user_purchase_merchandise_state_tiem_clear_scroll = setInterval(' user_purchase_merchandise_state_tiem_Scroll("#dealRecordList")',700);
    };
}
////////////////////////////////////////////////////


//功能块：index_banner浮窗的轮播
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
    for(var i = 0;i < array.length;i ++){
        body_btn_change(i,index,array,show_array);
    }
}
function body_btn_change(i,index,array,show_array){
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

var body_list_index = 0;
function float_board_vertical_scroll_engine(a_index){
    if(a_index == -1)
    {
        a_index = 3;
    }
    var body_list_show_array = $("#basicPriceList ul")[a_index].childNodes;
    float_board_vertical_change(body_list_show_array);
    if(body_list_index == body_list_show_array.length - 1)
        body_list_index = 0;
    else
        body_list_index ++;
}
function float_board_vertical_change(body_list_show_array){
    for(var i = 0;i < body_list_show_array.length;i ++){
        float_vertical_change(i,body_list_show_array);
    }
}
function float_vertical_change(i,body_list_show_array){
    if(i == body_list_index){
        body_list_show_array[body_list_index].setAttribute("style","height:164px");
        body_list_show_array[body_list_index].childNodes[1].style.cssText = ("display:block");
        body_list_show_array[body_list_index].childNodes[0].style.cssText = ("display:none");
    }
    else{
        body_list_show_array[i].setAttribute("style","height:36px");
        body_list_show_array[i].childNodes[0].style.cssText = ("display:block");
        body_list_show_array[i].childNodes[1].style.cssText = ("display:none");
    }
}
function float_board_mouseover_mouseout(){
    float_board_vertical_scroll_engine(index-1);
    float_board_body_list_btn_scroll_engine();
    var body_list_scroll = setInterval('float_board_vertical_scroll_engine(index-1)',3000);
    var body_btn_scroll = setInterval('float_board_body_list_btn_scroll_engine()',15000);
    //clearInterval(body_list_scroll);
    //clearInterval(body_btn_scroll);

    $('#basicPriceList')[0].onmouseover = function(){
        clearInterval(body_list_scroll);
        clearInterval(body_btn_scroll);
    };
    $('#basicPriceList')[0].onmouseout = function(){
        body_list_scroll = setInterval('float_board_vertical_scroll_engine(index-1)',3000);
        body_btn_scroll = setInterval('float_board_body_list_btn_scroll_engine()',15000);
    }
}
//////////////////////////////////////////////
//鼠标移入横向切换、纵向切换事件
function float_board_bodyradio_mouseover(num){
    var array = $('.list_btn a');

    $('.list_btn a')[num].onmouseover = function(){
        for(var i = 0;i < array.length;i ++){
            if(i == num){
                $('.board .list ul')[num].style.display = "block";
                $($('.list_btn a')[num]).addClass("active");
            }
            else{
                $('.board .list ul')[i].style.display = "none";
                $($('.list_btn a')[i]).removeClass("active");
            }
        }
    }
}
function float_board_body_mouseover(body_num){

    var     array = $('.board .list ul')[body_num].childNodes;
    body_list(array,body_num,0);
    body_list(array,body_num,1);
    body_list(array,body_num,2);
    body_list(array,body_num,3);
    body_list(array,body_num,4);
}
function body_list(array,body_num,body_list_num){
    $('.board .list ul')[body_num].childNodes[body_list_num].onmouseover = function(){

        for(var i = 0;i < array.length;i ++){
            if(i  == body_list_num){
                $('.board .list ul')[body_num].childNodes[i].setAttribute("style","height:164px");
                $('.board .list ul')[body_num].childNodes[i].childNodes[1].style.cssText = ("display:block");
                $('.board .list ul')[body_num].childNodes[i].childNodes[0].style.cssText = ("display:none");
            }
            else{
                $('.board .list ul')[body_num].childNodes[i].setAttribute("style","height:36px");
                $('.board .list ul')[body_num].childNodes[i].childNodes[1].style.cssText = ("display:none");
                $('.board .list ul')[body_num].childNodes[i].childNodes[0].style.cssText = ("display:bloc");
            }
        }
    };
}





$().ready(function(){
    //拉框..........
    top_bar_my_order_drop_down(0);


    //功能块：钢材大卖场下拉单和侧拉
    steel_big_mall_drop_down_item_and_sid_box(0,"icon_view","icon_view_active");
    steel_big_mall_drop_down_item_and_sid_box(1,"icon_sun","icon_sun_active");
    steel_big_mall_drop_down_item_and_sid_box(2,"icon_carouse","icon_carouse_active");
    steel_big_mall_drop_down_item_and_sid_box(3,"icon_map","icon_map_active");
    steel_big_mall_drop_down_item_and_sid_box(4,"icon_box","icon_box_active");
    steel_big_mall_drop_down_item_and_sid_box(5,"icon_copy","icon_copy_active");

    //侧拉出来的框底部圆点鼠标移入移出
    steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(0);
    steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(2);
    steel_big_mall_drop_down_item_and_sid_box_two_dot_company_list(9);


    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(4);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(5);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(6);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(7);
    steel_big_mall_drop_down_item_and_sid_box_five_dot_company_list(8);


    //滚动屏幕浮动事件......
    topbar_mall_head_float();
    user_purchase_merchandise_state_tiem_float();
    circle_index_layer_float();
    circle_index_layer_float_Background_img_change();


    //点击圆形图片页面滑动
    circle_index_layer_click_scroll();


    //功能块：index_banner图片的轮播、鼠标移入移出、点击slide_btn
    index_banner_mouseover_mouseout();
    index_banner_slid_btn_click(0);
    index_banner_slid_btn_click(1);
    index_banner_slid_btn_click(2);
    index_banner_slid_btn_click(3);


    //功能块：index_content鼠标移入数据块变化
    index_content_item_left_charts_mouseover(0);
    index_content_item_left_charts_mouseover(2);
    index_content_item_left_charts_mouseover(4);
    index_content_item_left_charts_mouseover(6);


    //功能块：index_content右侧部分数据的滚动、鼠标移入移出
    user_purchase_merchandise_state_tiem_Scroll_mouseover_mouseout();


    //功能模块：index_banner浮窗轮播 bug:切换浏览器页面标签轮播次序混乱(setInterval()休眠，解决方案待查)
    float_board_mouseover_mouseout();


    //index_content_item_right图片轮播
    first_index_content_img_scroll();
    second_index_content_img_scroll();
    third_index_content_img_scroll();
    fourth_index_content_img_scroll();
    //点击换图
    index_content_item_prev_next_click(1);
    index_content_item_prev_next_click(2);
    index_content_item_prev_next_click(3);
    index_content_item_prev_next_click(4);

    //功能模块：index_banner浮窗鼠标移入事件
    float_board_bodyradio_mouseover(0);
    float_board_bodyradio_mouseover(1);
    float_board_bodyradio_mouseover(2);
    float_board_bodyradio_mouseover(3);
    float_board_body_mouseover(0);
    float_board_body_mouseover(1);
    float_board_body_mouseover(2);
    float_board_body_mouseover(3);

});