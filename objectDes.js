let obj = {
    a: 10,
    b:20,
    c:30
}

// let a = obj.a
// let b = obj.b
// let c = obj.c

//shortcut 

// let { b:y, a:x} = obj
let {a, b, c} = obj

console.log(a,b,c) // 10 20 30