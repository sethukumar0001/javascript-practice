//javascript looping pyramid


//squre pyramid:

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
Pyramid1();