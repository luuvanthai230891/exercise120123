const array = (array) => {
    let index = [];
    for (let i = 0; i < array.length ; i++){
        if (array[i] % 2 === 0){
            index.push(array[i])
        } 
    }
    return index;     
}

const newArray = [1,2,4,6,7,8,9,10] ;
console.log("Tập hợp các số chẵn là" ,array(newArray));