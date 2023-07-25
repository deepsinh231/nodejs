const a =5;
let b=0;

// setTimeout(() => {
//     b=20;
// }, 2000);


let waitig= new Promise((resolv,rej)=>{
    setTimeout(() => {
        resolv(20)
    }, 2000);    
})
waitig.then((data)=>{
    b=data
    console.log(a+b);
})