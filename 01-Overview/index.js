var year = 2020;

const name = 'John';
let age = 18;
age = 19;


function getAge(){
    return age;
}


const myage = () =>{
    return age;
}

const myagePlus2 = () => age + 2;

const thisYear = () => {
    return year;
}


console.log(getAge())
console.log(myage())
console.log(thisYear())
console.log(myagePlus2())




const arr = [];
arr.push(1)
arr.push(2)

const arrPlus1 =  arr.map(v=> {
    return v + 1;
})

console.log(arrPlus1);

const arrFilter = arr.filter(v =>{
     return v == 2
});

console.log(arrFilter);

console.log([...arrFilter,...arrPlus1]);
//[ 2, 2, 3 ]

console.log([...arrFilter, arrPlus1]);
//[ 2, [ 2, 3 ] ]








