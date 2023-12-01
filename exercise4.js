// 7. Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới chỉ
// chứa các chuỗi đã được viết hoa.

const listString = (array) => {
    let carName = [];
    for(let i = 0; i < array.length ; i++){
    carName.push(array[i].toUpperCase());
}
    return carName;
}

const car = ["Honda", "Suzuki", "yamaha", "toyota"];
console.log("Chuỗi viết hoa là: ", listString(car));