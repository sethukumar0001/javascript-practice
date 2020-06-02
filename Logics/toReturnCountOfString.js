// Write a function which takes in a string and returns the counts of each string

function CharacterCount(str){
    str = str.toUpperCase();
    let f = [];
    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
            f[str[i]] = f[str[i]]+1 || 1
            console.log(f[str[i]])
        }
    }
    return f;
}

console.log(CharacterCount("my name is sethu"))



