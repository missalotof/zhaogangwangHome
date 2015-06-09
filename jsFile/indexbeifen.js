var index = 0;
var body_list_index = 0;
function float_window_body_listBtn_time_engine(){
    console.log("=======================list:"+index);
    var show_array = $("#basicPriceList")[0].childNodes;
    var array = $(".list_btn")[0].childNodes;
    body_listBtn_takeTurn(index,array,show_array);
    if(index == array.length - 1)
        index = 0;
    else
        index++;
    setTimeout('float_window_body_listBtn_time_engine()',5000);
}
function body_listBtn_takeTurn(index,array,show_array){
    for(var i = 0;i<array.length;i++)
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




function float_window_body_list_time_engine(a_index){

    if(a_index == -1)
    {
        a_index = 3;
    }
    console.log("list:"+a_index+"   :"+body_list_index);
    var body_list_show_array = $("#basicPriceList")[0].childNodes[a_index].childNodes;
    for(var i = 0;i<body_list_show_array.length;i++)
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
    setTimeout("float_window_body_list_time_engine((index-1))",1000);
}





float_window_body_listBtn_time_engine();
float_window_body_list_time_engine(index-1);