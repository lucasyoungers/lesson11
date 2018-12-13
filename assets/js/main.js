window.onload = function(){ 
    var reply_click = function() {
        alert(this.id);
    }
    document.getElementById('row1col1').onclick = reply_click;
    document.getElementById('row1col2').onclick = reply_click;
    document.getElementById('row1col3').onclick = reply_click;
    document.getElementById('row2col1').onclick = reply_click;
    document.getElementById('row2col2').onclick = reply_click;
    document.getElementById('row2col3').onclick = reply_click;
    document.getElementById('row3col1').onclick = reply_click;
    document.getElementById('row3col2').onclick = reply_click;
    document.getElementById('row3col3').onclick = reply_click;
};