# 1. NodeJS Introduction

## 1.1. NodeJS là gì

NodeJS là một trình thực thi code Javascript được xây dựng trên V8 JS engine của Chrome. Nodejs sử dụng một mô hình event-driven, non-blocking IO làm cho nó trở nên nhẹ nhàng và hiệu quả. Hệ sinh thái các package của NodeJS, npm, là một trong những hệ sinh thái các thư viện mã nguồn mở lớn nhất trên thế giới.

Là một trình thực thi JS hướng sự kiện bất đồng bộ, Node được thiết kế để xây dựng những ứng dụng network có thể thay đổi kích thước và phạm vi.
VD:

```

```

* Non-blocking I/O: Cho phép xử lý các task khác trong khi các IO call vẫn đang nằm trong quy trình để chờ được xử lý tiếp. Điều này cho phép Node hoạt động nhanh và hiệu quả bởi blocking I/O thực sự khá tốn kém!
  
* - Ví dụ về một hàm delayed println function trong Java:

```
System.out.println("Lan 1");
System.out.println("Lan 2");
Thread.sleep(1000);
System.out.println("Lan 3");
```
* - Chuyển sang Node code ta có thể viết như sau:

```
console.log("In node: 1");
setTimeout(function() {
  console.log("In node: 3")
}, 1000);
console.log("In node: 2");
```

Điểm khác biệt ở đây là nếu ta viết thêm các dòng lệnh sau dòng "In node: 2", các lệnh này sẽ được thực thi trước hàm callback của setTimeout().

How to write blocking code in Nodejs: Sử dụng vòng lặp for hay while

## 1.2. Điểm mạnh và điểm yếu của NodeJs

Điểm mạnh:

* Event loop trong Nodejs cho phép các hệ thống hiệu quả hơn bởi bạn có thể làm thêm nhiều việc trong khi chờ đợi I/O task tốn kém của bạn kết thúc
* There are no locks >> No worry of dead-locking process

Điểm yếu:

* Kế thừa điểm yếu từ JS: Do JS lấy định dạng số là float, nên không xử lý chính xác với các con số quá lớn

* Do cơ chế non-blocking cho phép xử lý nhiều tác vụ nhanh hơn cũng dẫn đến gây tốn tài nguyên hơn 

## 1.3. V8 Engine là gì ?

V8 Engine is a JS engine, a Google's open source JS engine
V8 is written in C++
V8 tuân theo ECMAScript, hỗ trợ đầy đủ ECMAScript5 và tương thích khoảng 97% với ES6

## 1.4. Nêu mô hình client - server ? Cụ thế mô hình client server ở trong web service

Mô hình client - server: Là mô hình trong đó máy khách client gửi request đến máy chủ server và chờ đợi câu trả lời từ server, máy chủ sẽ xử lý request và trả về kết quả cho máy khách. Máy chủ thực thi các chương trình server chấp nhận tất cả các request hợp lệ đến từ mọi nơi trên mạng.

Web service: là dịch vụ hoạt động trên nền web, gồm một hệ thống các phần mềm được thiết kế để hỗ trợ các thiết bị điện tử (máy tính) thuộc các nền tảng hay hệ điều hành khác nhau có thể tương tác với nhau một cách hiệu quả trên nền web. Web service được cài đặt trên máy chủ và chạy trên nền web

Mô hình client server trong web service: Máy khách bao gồm máy tính và các thiết bị điện tử nói chung kết nối đến máy chủ, máy chủ là nơi cài đặt các chương trình dịch vụ và lưu trữ tài nguyên. Ví dụ: Dịch vụ email (mỗi máy tính cá nhân là một máy khách, gửi request đến máy chủ để nhận email gửi đến và các thông tin liên quan; máy chủ là nơi lưu trữ dữ liệu người dùng, thư điện tử)

## 1.5. Thế nào là code js ở phía server ?

Code js phía server là sử dụng JS để viết ứng dụng xử lý các tác vụ phía server

## 1.6. Cài đặt node và kiểm tra phiên bản của node và npm ?

Start >> Run >> cmd >>node -v //v9.11.1 >>npm -v //v5.8.0

## 1.7. Use node CLI to run js script ?

Start >> cmd >> Node.js command prompt >> node >> (type js code here)

## 1.8. Viết script để lắng nghe cổng 3000 trả về Hello World ?

```
HelloWorld.js
```

# 2. NPM

## 2.1. NPM là gì? Nêu các lợi ích khi sử dụng trình quản lí package ?

## 2.2. File package.json dùng để làm gì ? Cách tạo file và nêu chức năng của từng trường trong file package.json

## 2.3. Dependency la gì ?, devDependencies là gì ?

## 2.4. Tự tạo file package.json bằng npm init ?

## 2.5. Cài đặt thư viện bằng npm add dependencies trong file package.json

## 2.6. Xoá thư viện trong file package.json ?

## 2.7. Chạy lệnh Js trong script, nhận xét sự khác biệt giữa chạy code trong script và ngoài script

# 3. Dev Tools

## 3.1. Tìm hiểu node debugger là gì ?

## 3.2. Debug một chương trình tính tích một mảng số dương, sử dụng các câu lệnh continue( c ), next( n ), repl( read eval print loop )

Phân biệt babel-cli, babel-presets-es2015, babel-presets-stage-2 ?

Sử dụng npm để install babel và các presets của babel

Webpack là gì ?. Ứng dụng của Webpack trong dự án NodeJS

Sử dụng NPM để cài đặt webpack ?. Cấu hình webpack trong file webpack.config.js.

Linter là gì ?, Cài đặt ES Lint bằng NPM

Sử dụng ESLint test coding convention yourfile.js

# 4. Node core

## 4.1. Để trở thành một webserver thì hệ thống cần đảm bảo những tiêu chí gì ?

Web server là một computer được kết nối Internet, nhận các requests,thực hiện theo yêu cầu và gửi về phản hồi

* Khả năng quản lý và tổ chức code tốt
* Xử lý với Files
* Xử lý với database
* Giao tiếp trên Internet
* Nhận requests và gửi phản hồi
* Khả năng xử lý nhiều tác vụ

## 4.2. Module Pattern là gì ?

Module pattern là một phương pháp lập trình giúp viết code và thực thi code theo các module riêng biệt với các ưu điểm là dễ mở rộng, giảm thiểu conflict khi làm việc theo nhóm, quản lý các biến local dễ hơn...

Module là một đoạn code trong chương trình được nhóm lại và có thể tái sử dụng, việc thêm bớt hay thay đổi code bên trong module không gây ra những tác động ngoài ý muốn đến cả chương trình nói chung

## 4.3. Các phương thức require, exports, module.exports dùng để làm gì ?
require là một hàm global trong NodeJS, trả về object: module.exports

exports và module.exports là các object mà cho phép module trích xuất ra các thành phần mà nó mong muốn đối tượng bên ngoài có thể truy cập

exports = module.exports

```
* buy.js
let buy = function () {
  console.log('Buy a shirt!');
}
buy();
moduel.exports = buy;

* app.js
let buyInApp = require("./buy.js");
buyInApp();
```

## 4.4. So sánh require ES5 => import Es6, sử dụng Babel để convert từ ES6 về ES5


## 4.5. So sánh require/import relative file, library
* require/import relative file: Truy xuất đến các file có đường dẫn tương đối đối với file gọi hàm require hiện tại, lấy giá trị của object module.exports để trả về, dùng để require các custom modules

String truyền vào require là đường dẫn tương đối đến file

* require/import library: Truy xuất đến các file trong thư viện các modules có sẵn của NodeJS, dùng để require các modules có sẵn này

String truyền vào require là tên của file trong thư viện

## 4.6. Node APIs là gì ?
* Là module được xây dựng trên Node thực hiện một chức năng nào đó

## 4.7. Fs module trong NodeJS dùng để làm gì ?

## 4.8. Viết chương trình tạo, viết và đọc file ?

## 4.9. Sự khác biệt giữa Fs asynchronous và Fs synchronous là gì ?

## 4.10. Http module trong NodeJS dùng để làm gì ?

## 4.11. Tạo một server đơn giản lẳng nghe ở cổng 8000, request trả lại "Hello world" sử dụng Http APIs

## 4.12. Event emitter trong nodejs là gì ?. Kể tên và nêu chức năng của các phương thức trong lớp Event emitter
Two kinds of event: 
  System events (events coming from the computer system, đến từ C++ core, các event mà JS vốn không có, được add thêm nhờ có C++)
  Custom events (event do người dùng tự định nghĩa từ event emitter). 
  Khi có event xảy ra ở system, nó sẽ tạo ra một custom event để giúp developer dễ dàng quản lý và xử lý event 

Event Emitter: cho phép tạo ra các custom event

## 4.13. Chức năng của Event Loop là gì ?. Event loop trong nodeJs có giống Event loop trong browser hay không ?
* Event Loop là một cơ chế bên trong NodeJS (được thêm vào nhờ các dòng code C++) liên tục kiểm tra các sự kiện được hoàn thành trong queue (event queue, message queue) và gọi hàm callback (event handler) khi V8 đã thực thi xong tương ứng với sự kiện đó

* So sánh: cơ chế giống nhau, đều liên tục kiểm tra sự kiện được hoàn thành (hàm chờ trong queue) và kiểm tra call stack có rỗng hay không để thực thi hàm đang chờ trong queue
Khác nhau là trong browser: Event Loop liên quan đến Timer của browser ; 
   Trong Nodejs: Event Loop liên quan đến việc đọc ghi file, truy xuất cơ sở dữ liệu

## 4.14. Trình bày các khái niệm: Event Driven, Non - Blocking trong nodeJS
* Event Driven programming (Event-driven architecture)
  Là một mô hình lập trình trong đó chương trình được thực thi khác nhau (luồng thực thi của chương trình) phụ thuộc vào các tương tác từ người dùng, kết quả đầu ra hay thông điệp từ các chương trình khác gửi đến


* Event Driven components:
  1, Event emitter: Matching event name with event handler, register the event to Event loop
  2, Callback function (event handler): be called when an event is triggered
  3, Event loop: listen for event triggered and calls the corresponding event handler


* Non - blocking: Là việc cho phép thực thi các chương trình hay tác vụ khác mà không phải dừng tác vụ đang chạy hiện thời

* IO (Input Outpt): Chỉ những tác vụ xảy ra ở mức độ hệ điều hành (truy xuất file, kết nối cơ sở dữ liệu, nhận và gửi thông tin qua Internet...), xảy ra bên trong hệ thống máy tính và bên trong server 

## 4.15. Phân biệt giữa asynchronous và Non - Blocking trong NodeJS ?
* Asynchronous: Là khái niệm chỉ sự hoạt động song song cùng lúc nhiều tác vụ 
* Non - blocking: Là một cơ chế trong NodeJS cho phép thực hiện Asynchronous

# 5. Express
## 5.1. Express là gì ?. Nếu chức năng của framework này ?
* Express là một framework trong NodeJS, cung cấp nhiều tính năng mạnh mẽ cho phép lập trình viên thiết kế các ứng dụng web cũng như ứng dụng di động dễ dàng hơn.
* Các chức năng chính:
* * Express hỗ trợ chúng ta phát triển ứng dụng theo mô hình MVC.
* * Cho phép định nghĩa các middleware.
* * Định nghĩa rõ ràng các request methods trong route.
* * Hỗ trợ mạnh về REST API.

## 5.2. WebServices la gi ? Có bao nhiêu loại: RESTfull, SOAP
* Web services là các hệ thống trao đổi thông tin sử dụng trên mạng Internet dựa trên XML. Những hệ thống này có thể bao gồm các programs, objects, messages hay documents
* Web service là một phương tiện hay môi trường trung gian được tiêu chuẩn hóa để thực hiện việc lan truyền giao tiếp giữa các ứng dụng trên client và server trên mạng World Wide Web. 
Một web service chính là một module phần mềm được thiết kế để thực hiện một bộ các nhiệm vụ cụ thể

Web services cung cấp một platform chung cho phép nhiều ứng dụng được xây dựng trên các ngôn ngữ lập trình khác nhau khả năng để giao tiếp với nhau

* Có hai loại Web services chính: 
* * SOAP web services
* * RESTful web services  

## 5.3. Có các loại RESTFull method nào ?
* POST: Được dùng để tạo một đối tượng mới sử dụng RESTFull web service
* GET: Dùng để lấy dữ liệu qua RESTFull web service
* PUT: Dùng để update dữ liệu
* DELETE: Dùng để xóa dữ liệu

## 5.4. Các bước tạo ra web server đơn giản bằng Express ?


## 5.5. Routing là gì ?

## 5.6. Nếu các khái niệm Route method, Route path, Route param ?

## 5.7. Template engine là gì ?, trình bày cách để tạo template trong express

## 5.8. Middleware là gì ?, Nếu các chức năng của middleware

## 5.9. Nêu tác dụng của phương thức use, all, next()
