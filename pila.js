function uno(auxiliar,dos){
    setTimeout(function(){
        console.log("uno"+auxiliar);
        dos();
    },2000);

}
uno(5,function(){console.log("dos");});
