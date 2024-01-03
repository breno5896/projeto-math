function my(){
    const entre=Math.ceil( document.querySelector(".min").value);
    const depois =Math.floor(document.querySelector(".max").value);
    if(entre>=depois){alert("o valor minimo precisa ser maior do que o do maximo")}
    else{
const result= Math.floor(Math.random() * (depois - entre+ 1)) + entre;
alert(result)
}
}