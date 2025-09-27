# Lesson 4: Javascript (continue)
## 1. Phạm vi biến
- Toàn cục: nằm ngoài, độc lập
- Function: nằm trong một hàm, chỉ truy cập được trong hàm
- Block: nằm trong một câu lệnh:
    + let/ const: giới hạn trong block
    + var: thì không bị giới hạn trong block

- Hoisting: có thể khai báo biến trước khi dùng
## 2. Điều kiện nâng cao: 
### 2.1 break:
 - Thoát luôn khỏi vòng lặp nếu gặp điều kiện thoả mãn
- Cú pháp: 
```javascript
for (let i = 0; i < 10; i++) {
if (i === 5) {
break; // Chạy lần lượt từ 0 đến 5, gặp 5 thoả mãn là dừng vòng lặp không chạy tiếp.
```
### 2.2 continue:
- Nếu dùng continue, khi thoả mãn điều kiện thì bỏ qua giá trị đó, không cho giá trị đó đi tiếp, mà chuyển sang giá trị tiếp theo của vòng lặp luôn
- Cú pháp"
```javascript
 const genDer = ["F", "M", "F", "F", "M", "M"];
console.log("Man:");
for (let gen of genDer) {
if (gen === "F") {
continue; // Bỏ qua những người là nữ
}
console.log(gen);
}
// In ra những người là nam
```
### 2.3 
- if ... else: dùng cho 2 điều kiện ngược nhau

- if ... else ... if: khi có nhiều điều kiện và chạy lần lượt từng điều kiện

- ternary operator: cách viết tắt cho if ... else
    + vế trước dấu : là true, sau là fault

## 3. Loops nâng cao:
### 3.1 for ... in
 - Lặp qua từng thuộc tính của object
 - Không nên dùng cho array

### 3.2 forEach
 - Chạy function qua từng value

## Chức năng hỗ trợ array
- map
- filter
- find
- reduce
- some
- every
- sort

## Chức năng hỗ trợ string
- trim()
- toLowerCase()
- toUpperCase()
- includes(<substr>)
- replace
- split
- substring
- indexOf

