//Tạo 1 mảng rỗng tên là products
//Viết 1 menu:
//Nếu chọn 1 thì cho phép thêm sản phẩm ở cuối mảng
//Nếu chọn 2 thì cho phép xoá sp ở cuối mảng
//nếu chọn 3 thì in ra mảng products
//Nếu chọn 4 thì thoát ct
//Nếu chọn khác (5,6,7) thì yêu cầu nhập lại

const products = [];
let i = 0;

while (i !== 4) {

    i = +prompt("Nhap lua chon: ")

    switch (i) {
        case 1:
            products.push(prompt("Nhập sản phẩm: "))    
            console.log(products);    
            break;
        case 2:
            products.pop()
            console.log(products);       
            break;
        case 3:
            console.log(products);      
            break;
        default:
            break;
    }
}