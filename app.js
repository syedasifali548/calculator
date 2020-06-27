function getNumber(num){
    console.log(num)
    var result = document.getElementById("result");
    result.value+=num;
}
function clearResult()
{
    var result = document.getElementById("result")
    result.value="";

} 
function getResult(){
    var result = document.getElementById("result")
    // console.log(value);
    result.value = eval(result.value)
    // console.log(result)
    

}