// Viết một hàm JavaScript nhận vào một mảng số và trả về mảng mới
// chứa các số đã được sắp xếp theo thứ tự tăng dần.

const addArray = (array) => {
   
    for(let i = 0; i < array.length ; i++){
        let tg = 0;
        for(let j = i+1; j < array.length; j++){
            if (array[i] > array[j]){
                tg = array[i];
                array[i] = array[j];
                array[j] = tg;
            }
            
        }

    }
    return  array;
}

let numberArray = [8,6,7,9,0,4,5,2,1] ;
console.log("Mảng đã sẵp xếp tăng dần là :", addArray(numberArray));

