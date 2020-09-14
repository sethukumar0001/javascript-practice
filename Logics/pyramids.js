//javascript looping pyramid

// 1234
// 1234
// 1234
// 1234

function Pyramid1() {
  let rows = 5;
  let cols = 5;
  let output = "";

  for (var i = 1; i < rows; i++) {
    for (var j = 1; j < cols; j++) {
      // output += j + '';
      output = output + j + " ";
    }
    console.log(output);
    output = "";
  }
}
// Pyramid1();

// 4321
// 4321
// 4321
// 4321

function Pyramid2() {
  let rows = 5;
  let cols = 5;
  let output = "";

  for (var i = 1; i < rows; i++) {
    for (var j = 1; j < cols; j++) {
      output = j + output + " ";
    }
    console.log(output);
    output = "";
  }
}
//   Pyramid2();

// 1
// 12
// 123
// 1234

const Pyramid3 = () => {
  let rows = 5;
  let output = "";

  for (var i = 1; i < rows; i++) {
    for (j = 1; j <= i; j++) {
      output = output + j;
    }
    console.log(output);
    output = "";
  }
};
// Pyramid3();

// 1234
// 123
// 12
// 1

const Pyramid4 = () => {
  let rows = 5;
  let cols = 5;
  let output = "";

  for (let i = 5; i > 1; i--) {
    for (let j = 1; j < i; j++) {
      output = output + j;
    }
    console.log(output);
    output = "";
  }
};
//   Pyramid4();

//    4
//   345
//  234567
// 12345678

const Pyramid5 = () => {
  var n = 6;
  //*   formulae   *//
  var width = n * 2 - 1;
  var middle = Math.floor(width / 2);
  var output = "";
  console.log(middle);

  for (let i = 0; i < n; i++) {
    output = "";
    for (let j = 0; j < width; j++) {
      if (j < middle - i || j > middle + i) {
        output = output + " ";
      } else {
        output = output + j;
      }
    }
    console.log(output);
  }
};
// Pyramid5();

// 12345678
//  234567
//   345
//    4

const pyramid6 = () => {
  let n = 6;
  let width = n * 2 - 1;
  let middle = Math.floor(width / 2);
  let output = "";
  console.log(middle);

  for (let i = n - 1; i >= 1; i--) {
    output = "";
    for (let j = 0; j < width; j++) {
      if (j < middle - i || j > middle + i) {
        output = output + " ";
      } else {
        output = output + j;
      }
    }
    console.log(output);
  }
};
// pyramid6();

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *

const pyramid7 = () => {
  let rows = 6;
  for (let i = 0; i < rows; i++) {
    var output = "";

    for (let j = 0; j < rows - i; j++) {
      output = output + ".";
    }

    for (let k = 0; k <= i; k++) {
      output += "A ";
    }
    console.log(output);
  }
};

pyramid7();

//    4
//   345
//  234567
// 12345678
// 12345678
//  234567
//   345
//    4
