let input = document.getElementById("input");
let added = document.getElementById("added");
let result = document.getElementById("result");
let deleted = document.getElementById("deleted");


added.addEventListener('click', function(){
    result.innerHTML = "";

    var numbers = [];

    
    for(let i =0; i < input.value; i++ )
    {
        for(var j = 0; numbers.length < 6; j++){
            let number = Math.floor(Math.random() * 90)+1;
            if(numbers.includes(number)){
                continue
            }
            else{
                numbers.push(number);
            }
        }
        let sorted = number.sort((a,b) => a-b)

        for (var k = 0; numbers.length < 7; k++){
            let number = Math.floor(Math.random() * 90)+1;
            if(numbers.includes(number)){
                continue
            }
            else{
                numbers.push(number);
            }
        }
        numbers.push(Math.trunc(Math.random()*90)+1);

        result.innerHTML += sorted[0]+ '|' + sorted[1]+ '|' +
        sorted[2]+ '|' + sorted[3]+ '|' + sorted[4]+ '|' + sorted[5]+ '--'+
        sorted[6]+ '--' + sorted[7]+ '|' +"<br>";

        result.innerHTML += '<hr>';
        numbers = []

    }
});
deleted.addEventListener("click", ()=>{
    input.value = "";
    result.innerHTML = "";
})







