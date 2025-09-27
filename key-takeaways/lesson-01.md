# Lesson 1: Giới thiệu chung
## 1.  Giới thiệu Playwright
- Là một framework
- Ưu điểm:
    + Cross browser
    + Cross platform
    + Auto-wait
    + Web-first asertion
    + Easy tracing
    + Code-gen
    + Dễ học và dễ làm

## 2. Các tools cần thiết:
### 2.1 NVM và NodeJS
- NodeJS: để chạy code
- NVM để quản lý version
### 2.2 Cách set Playwright
- Bước 1: Tạo thư mục
- Bước 2: Chạy lệnh 
```npm init playwright@latest```
### 2.3 Git
- Bước 1: Download và cài đặt Git vào máy
- Bước 2: Cài đặt cấu hình:
    + Username: ```git config --global user.name"tên"```
    + Email:
    ```git config --global user.email"địachỉmail"```
    + Branch default:
    ```git config --global init.defaultBranch main```

### 2.4 VS Code

### 2.5 Github
- Bước 1: Tạo tài khoản
- Bước 2: Tạo SSH Key: là cặp khoá để push code lên Github dễ dàng hơn
```ssh-keygen -trsa -b 4095 -C"địa chỉ mail"```
    + Chú ý: nếu đã gen rồi thì cẩn thận nếu không sẽ bị ghi đè.
- Bước 3: Lấy nội dung SSH Key:
```cat ~/.ssh/id_rsa.pub```
- Bước 4: Gắn SSH key vào Github: Add new SSH Key -> paste nội dung SSH Key từ bước 3
- Bước 5: Đưa code lên Github:
    + Tạo new repository trên Github
    + Khởi tạo cho folder local: ```git init```
    + Liên kết với repository: ```git remote add origin <ssh_link>
    + Thêm code: ```git add .```
    + Commit: ```git commit -m"init project"```
    + Push code:
    ```git push origin main```
