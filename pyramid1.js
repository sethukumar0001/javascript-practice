//javascript looping pyramid


//squre pyramid:

// 1234
// 1234
// 1234
// 1234

function Pyramid1() {
    let rows = 5;
    let cols = 5;
    let output = ""

    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            // output += j + '';
            output  = output+j+" "
        }
        console.log(output);
        output = '';
    }
}
// Pyramid1();

//triangle pyramid
    
// 1
// 12
// 123
// 1234

const Pyramid2 = () =>{
let rows = 5;
let output = "";

for (var i=1;i< rows;i++){
    for (j=1;j<= i;j++){
        output = output+j
    }
    console.log(output);
    output = ""
}
}
// Pyramid2();