
const bookCatalog = [
    {
        bookCode: "B01",
        title: "Cấu trúc Dữ liệu & Giải thuật",
        category: "Công nghệ thông tin",
        price: 120000,
        totalCopies: 10,
        availableCopies: 1,
        shelfLocation: "Kệ A1-02"
    },
    {
        bookCode: "B02",
        title: "Lập trình JavaScript Nâng cao",
        category: "Công nghệ thông tin",
        price: 150000,
        totalCopies: 5,
        availableCopies: 3,
        shelfLocation: "Kệ A1-05"
    },
    {
        bookCode: "B03",
        title: "Thế giới Động vật Hoang dã",
        category: "Khoa học tự nhiên",
        price: 95000,
        totalCopies: 4,
        availableCopies: 0,
        shelfLocation: "Kệ B2-01"
    }
];

/**
 * @param {string} title 
 */
function displayInventoryReport(title) {
    console.log("\n==========================================================================================================");
    console.log(`  BÁO CÁO KIỂM KÊ KHO SÁCH THƯ VIỆN: ${title.toUpperCase()}`);
    console.log("==========================================================================================================");
    console.table(bookCatalog);
}

displayInventoryReport("Danh mục ban đầu");

console.log("\n[THAO TÁC] Nhập kho đầu sách mới B04...");
const newBook = {
    bookCode: "B04",
    title: "Thiết kế Hệ thống Lớn",
    category: "Công nghệ thông tin",
    price: 210000,
    totalCopies: 8,
    availableCopies: 8,
    shelfLocation: "Kệ A2-01"
};

bookCatalog.push(newBook);
displayInventoryReport("Sau khi nhập kho sách B04");

console.log("\n[THAO TÁC] Sinh viên thực hiện mượn sách B01...");
const targetBorrowCode = "B01";

let borrowIndex = -1;
for (let i = 0; i < bookCatalog.length; i++) {
    if (bookCatalog[i].bookCode === targetBorrowCode) {
        borrowIndex = i;
        break;
    }
}

if (borrowIndex !== -1) {
    const targetBook = bookCatalog[borrowIndex];

    if (targetBook.availableCopies > 0) {
        targetBook.availableCopies -= 1;
        console.log(`=> Mượn thành công! Số lượng còn lại của sách ${targetBorrowCode}: ${targetBook.availableCopies} cuốn.`);

        if (targetBook.availableCopies === 0) {
            targetBook.shelfLocation = "HẾT SÁCH TRÊN KỆ";
            console.log(`=> Thông báo: Sách ${targetBorrowCode} đã HẾT SÁCH TRÊN KỆ.`);
        }
    } else {
        console.log(`=> Thất bại: Sách ${targetBorrowCode} hiện tại đã hết trên kệ, không thể mượn!`);
    }
} else {
    console.log(`=> Lỗi: Không tìm thấy mã sách ${targetBorrowCode} trong hệ thống.`);
}

displayInventoryReport("Sau khi cho mượn sách B01");

console.log("\n[THAO TÁC] Thanh lý sách hỏng mã B03...");
const targetDeleteCode = "B03";

let deleteIndex = -1;
for (let i = 0; i < bookCatalog.length; i++) {
    if (bookCatalog[i].bookCode === targetDeleteCode) {
        deleteIndex = i;
        break;
    }
}

if (deleteIndex !== -1) {
    const deletedBook = bookCatalog.splice(deleteIndex, 1);
    console.log(`=> Đã thanh lý và xóa ấn bản: "${deletedBook[0].title}" (${targetDeleteCode}) khỏi kho.`);
} else {
    console.log(`=> Lỗi: Không tìm thấy sách ${targetDeleteCode} để thanh lý.`);
}

displayInventoryReport("Sau khi thanh lý sách B03");

let totalBookTitles = bookCatalog.length;
let totalPhysicalCopies = 0;
let totalAvailableCopies = 0;
let totalInventoryValue = 0;

for (let i = 0; i < bookCatalog.length; i++) {
    const book = bookCatalog[i];
    totalPhysicalCopies += book.totalCopies;
    totalAvailableCopies += book.availableCopies;
    totalInventoryValue += (book.totalCopies * book.price);
}

console.log("\n+--------------------------------------------------------------------+");
console.log("|                  BẢNG KIỂM KÊ TÀI SẢN KHO THƯ VIỆN                 |");
console.log("+--------------------------------------------------------------------+");
console.log(`| Tổng số đầu sách quản lý:     ${totalBookTitles.toString().padEnd(36)}|`);
console.log(`| Tổng số bản sách thực tế:      ${totalPhysicalCopies.toString().padEnd(36)}|`);
console.log(`| Tổng số bản sách khả dụng:    ${totalAvailableCopies.toString().padEnd(36)}|`);
console.log(`| Định giá tổng tài sản kho:    ${totalInventoryValue.toLocaleString("vi-VN")} VNĐ`.padEnd(69) + "|");
console.log("+--------------------------------------------------------------------+\n");