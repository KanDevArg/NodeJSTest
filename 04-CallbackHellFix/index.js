var stall = async(stallTime=3000) => {
    await new Promise((promise) => setTimeout(promise, stallTime));
    return stallTime;
}

// async function stall(stallTime = 3000) {
//   await new Promise((resolve) => setTimeout(resolve, stallTime));
//   return stallTime;
// }

function showSum(rA, rb, rC){
    console.log(rA + rb + rC)
}

var aSum = async () => {
    var rA = await (stall(1000))
    console.log('got rA')
    var rB = await (stall(1000))
    console.log('got rB');
    var rC = await (stall(1000))
    console.log('got rC');
    return  showSum(rA, rB, rC);
};

aSum();


