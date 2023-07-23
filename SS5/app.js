// localstorage:
/**
 * -dạng lưu trữ dữ liệu: trong trình duyệt web
 * - ko mất khi đóng trình duyệt
 * - chỉ lưu trữ dữ liệu dới dạng object và string
 */
// cú pháp khởi tọa lưu trữ tren localstorage với biến
localStorage.setItem("menu",JSON.stringify(["rau, thịt, cá"]));
// JSON.stringify: cú pháp mặc định giữ nguyên mảng

// c2:
localStorage.obj= JSON.stringify(
    {
        name: "đạt",
        age: 25,
        address: "Ha Noi"
    }
)
// truy vấn dữ liệu trong