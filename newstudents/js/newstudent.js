$(document).ready(function() {
	peerl();
	peerl1();
	change();
});
/*控制首页大照片的变化*/
function peerl(){
    var urllist=["logo.png","smallphoto.png","bigphoto.png"];
    var i=-1;
    setInterval(function(){
        if (i<urllist.length-1) {
            i++;
        }else{
            i=0;
        };
        $(".contain .first").css("background","url('img/"+urllist[i]+"')");
    },5000);
}
/*控制首页大照片旁的印章变化*/
function peerl1(){
    var urllist=["seal2.png","seal3.png","seal1.png"];
    var i=-1;
    setInterval(function(){
        if (i<urllist.length-1) {
            i++;
        }else{
            i=0;
        };
        $(".contain .seal").css("background","url('img/"+urllist[i]+"')");
    },5000);
}
/*控制知新楼鼠标悬停下方文字颜色*/
function change() {
    var picture = $(".contain").find(".second").find(".show");
    console.log(picture);
    picture.mouseover(function() {
            $(this).find(".text").addClass("text1"); 
        });
    picture.mouseout(function() {
            $(this).find(".text").removeClass("text1"); 
        }) 

};