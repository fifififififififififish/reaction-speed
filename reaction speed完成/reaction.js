var status = "blue";
var id ;
var startTime;
var best = Infinity;

$("body").on("click", function(){
    if(status == "blue"){
        start();
        
    }else if(status == "red"){
        tooSoon();
       
    }else{
        showResult();
        
    }
})


function start(){
    $('h1').text('等待綠色');
    $('h2').text('');
    $('body').css('backgroundColor','red');
    
    status = "red";
    
    var time = Math.random()*10000;
    id = setTimeout(timeOut,time);
}

function timeOut(){
    $('h1').text('點擊!!');
    $('h2').text('');
    $('body').css('backgroundColor','springgreen');
    status = "green";
    startTime = Date.now();
    
}

function tooSoon(){
    $('h1').text('太快了la');
    $('h2').text('點擊頁面再玩一次');
    $('body').css('backgroundColor','royalblue');
    
    status = "blue";
    
    clearTimeout(id);
    
} 

function showResult(){

    $('h2').text('點擊頁面再玩一次');
    $('body').css('backgroundColor','royalblue');
    
    status = "blue";
    
    var time = Date.now()-startTime;
    $('h1').text(time + 'ms');
    if(time < best){
        $('h3').text('最佳紀錄:' + time + 'ms')
    }
}

start();