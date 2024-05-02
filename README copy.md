# README
# Hướng dẫn Sử dụng và Cài Đặt
## Giới Thiệu
Dự án này là một trang web du lịch đơn giản với API miễn phí để cung cấp thông tin về các địa điểm du lịch cũng như cung cấp khả năng quy đổi tiền tệ cho người dùng. Dưới đây là hướng dẫn cài đặt và sử dụng dự án.
## Cài Đặt

1. **Clone Repository:**
   ```bash
   git clone https://github.com/PhatDB/csn-da21tta-lamvinhphat-freeAPI-travel-website.git
2. **Cài Đặt Dependencies:**
   ```bash
   cd csn-da21tta-lamvinhphat-freeAPI-travel-website
   npm install
3. **Cấu hình API Key:**\
    Đăng ký và nhận API Key miễn phí từ các trang web cung cấp API:
- https://rapidapi.com/apidojo/api/travel-advisor
- https://rapidapi.com/wirefreethought/api/geodb-cities
- https://www.exchangerate-api.com
- https://openweathermap.org
4. **Cấu hình File .env:**\
    Tạo file .env trong thư mục gốc của dự án.\
    Thêm API Key vào file .env:
    ```env
    API_KEY=your_api_key
## Sử Dụng
**Khởi chạy Ứng dụng:**
```bash
npm run dev
```
**Truy cập Ứng dụng:**
Mở trình duyệt và truy cập:
http://localhost:5173.

**Tìm Kiếm và Xem Thông Tin Du Lịch:**\
Sử dụng chức năng tìm kiếm để tìm kiếm địa điểm du lịch.\
Xem chi tiết thông tin về địa điểm và các điểm tham quan.\
Quy đổi tiền tệ.

## Đóng Góp
Nếu bạn muốn đóng góp vào dự án, xin vui lòng tạo một pull request và mô tả chi tiết về sự thay đổi của bạn.

## Báo Lỗi
Nếu bạn gặp vấn đề hoặc phát hiện lỗi, vui lòng tạo một issue trên trang GitHub của dự án.
