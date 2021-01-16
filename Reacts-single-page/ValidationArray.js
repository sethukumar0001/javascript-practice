javascript validation

  isEmpty = arr => {
    console.log(arr)
    let arrValues = arr.map(item => {
      return [...Object.values(item)];
    });
    var myNewArray = [].concat(...arrValues);
    if (myNewArray.indexOf("") === -1 && myNewArray.indexOf(null) === -1) {
      return true;
    } else {
      return false;
    }

  };
