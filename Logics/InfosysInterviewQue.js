

// sum of array elements equal to 13 (infosys)

const fun = (array) => {
    let answerArray = []
    let arr = 0
    for (let i = 0; i <= array.length - 1; i++) {
        if (i && array[i] !== 13) {
            for (let j = 0; j <= (array.length - 1) / 2; j++) {
                arr = array[i] + array[j]
                if (arr === 13) {
                    answerArray.push(([array[j], array[i]]), `---->value${array[j] + array[i]}`,)
                }
            }
        } else {
            if (array[i] === 13)
                answerArray.push(array[i], "---->value is equal to 13")
        }
    }
    console.log(answerArray)
}

fun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13])
