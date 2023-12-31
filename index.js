function my(){
    const entre=Math.ceil( document.querySelector(".min").value);
    const depois =Math.floor(document.querySelector(".max").value);
const result= Math.floor(Math.random() * (depois - entre+ 1)) + entre;
alert(result)
}
