function robarPlanos(idPlano,despegar){

    if(idPlano>0 && idPlano<=10){

        let mensaje="El plano que se consiguio fue el "+idPlano;
        despegar(null,mensaje);

    }else{
        let error="Pilas!! no te has robado un plano real"
        despegar(error,null);
    }

}

robarPlanos(3,function(error,mensajeOK){

    if(error){
        console.log(error);
        console.log("nos quedamos camellando");
    }else{
        console.log(mensajeOK);
        console.log("estamos despegando");
    }
});


/*let robarPlanos2=idPlano=>{
    
    if(idPlano>0 && idPlano<=10){

        let mensaje="El plano que se consiguio fue el "+idPlano;
        return (mensaje);

    }else{
        let error="Pilas!! no te has robado un plano real"
        return(error);
    }
}*/




