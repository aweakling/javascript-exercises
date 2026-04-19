function repeatString(string, num){

    let result = '';
        if(num > 0){
            for(let i = 0; i < num; i++){
                result += string;
            }
        } else {
            return "ERROR";
        }
    return result;
}

console.log(repeatString("hey",3));
// Do not edit below this line
module.exports = repeatString;
