const removeDuplicates = e => [...new Set(e)].sort().join("")
console.log(removeDuplicates("aabbccddeeff"))

const remDup= s=> s.split("").sort().reduce((a,b)=>(a[a.length-1]!=b)?(a+b):a,"")
console.log(remDup("aabbccddeeff"))

const remDup1= s=> s.split("").filter((e,i,f)=>f.indexOf(e)==i).sort().join("")
console.log(remDup1("aabbccddeeff"))

const remDup2= s=> s.split("").map((c,i,o)=>(o.indexOf(c)==i)?c:"").sort().join("")
console.log(remDup2("aabbccddeeff"))