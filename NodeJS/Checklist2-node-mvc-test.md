# 1 Concept
## 1.1 MVC Pattern
* MVC stands for Model, View, Controller là một phương pháp phổ biến để tổ chức code, dựa trên ý tưởng rằng mỗi khối code có một mục đích riêng.

### 1.1.1 Understand MVC Pattern
* https://www.codecademy.com/articles/mvc
* * Model code: về mặt cơ bản mô tả những thứ ngoài đời thực
   Khối code này có thể giữ những dữ liệu thô, hoặc định nghĩa các thành phần cơ bản của ứng dụng của bạn.
   Ví dụ nếu bạn đang xây dựng một To-do app, model code sẽ định nghĩa một 'task' là gì, một 'list' là gì - do đây là những thành phần chính của một To-do app.
* * View code: được tạo thành từ tất cả các hàm mà tương tác trực tiếp với người dùng, khối code này sẽ làm cho app của bạn trông đẹp hơn và xác định cách người dùng nhìn thấy và tương tác với nó 
* * Controller code: hoạt động như một cầu nối liên lạc giữa Model và View, nhận thông tin từ người dùng và xử lý nó. Controller code là bộ não của ứng dụng và kết nối chặt chẽ model và view.

* https://softwareengineering.stackexchange.com/questions/127624/what-is-mvc-really

### 1.1.2 What is its advantages/disadvantages ?
* Advantages: Làm cho chương trình trở nên minh bạch, rõ ràng, dễ đọc, dễ mở rộng và dễ bảo trì hơn
* Disadvantages: Cách tổ chức MVC không tốt có thể làm tăng độ phức tạp của chương trình, lặp code, tăng thời gian lập trình và tốc độ xử lý với những chương trình nhỏ

### 1.1.3 When to use MVC ?
* MVC dùng trong việc phát triển các ứng dụng có tính tương tác với người dùng, những chương trình phức tạp cần sự hợp tác nhóm, có hướng mở rộng, bảo trì và phát triển trong tương lai

## 1.2 ORM
* Object Relational Mapping: Là một kỹ thuật cho phép truy xuất và sử dụng dữ liệu từ một cơ sở dữ liệu theo mô hình hướng đối tượng
* An ORM là một thư viện thực hiện kỹ thuật ORM, được viết trong một ngôn ngữ lập trình tùy chọn, đóng gói tất cả code cần thiết để thao tác với dữ liệu qua các object của ngôn ngữ lập trình mà bạn đang sử dụng, do đó bạn không cần sử dụng những câu lệnh của SQL nữa
* ORM: 
* * Không cần sử dụng các cú pháp của SQL, giúp việc thao tác với database thân thiện hơn cho lập trình viên, code rõ ràng và có thể ngắn gọn hơn, có thể tổ chức code tốt hơn
* * Phải học cách sử dụng các thư viện ORM
   Về cơ bản các ORM sẽ tự động generate ra các câu lệnh SQL do đó sẽ không đảm bảo tối ưu trong mọi trường hợp
   Có thể làm giảm hiệu suất của chương trình với các dự án lớn

## 1.3 Testing
* Unit testing: Focus on a single 'unit of code'
* Integration tests: Multiple pieces are tested together, for example testing database access code against a test database
* Acceptance tests (also called Functional tests): Automatic testing of the entire application, for example using a tool like Selenium to automatically run a browser.

### 1.3.1 Understand TDD, BDD: https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/
* TDD (Test-Driven Development): Là một quy trình viết và chạy test gồm các bước sau:
* * Start by writing a test
* * Run the test and any other tests. At this point, your newly added test should fail. If it doesn’t fail here, it might not be testing the right thing and thus has a bug in it.
* * Write the minimum amount of code required to make the test pass
* * Run the tests to check the new test passes
* * Optionally refactor your code
* * Repeat from 1

   TDD projects thường có code-coverage (tỷ lệ code được test tự động) cao từ 90-100%, giúp việc maintain code và thêm tính năng mới dễ dàng
   TDD kết hợp tuyệt vời với unit tests, và nó cũng có thể được sử dụng với các phương pháp test khác.

* BDD (Behavior-Driven Development): Là một kỹ thuật lập trình hướng hành vi, khi được áp dụng vào automated testing, BDD là một bộ các nguyên tắc hữu ích để viết test
   BDD nên được dùng kếp hợp với các phương pháp TDD và Unit testing
   Một trong các điểm chính mà BDD hướng tới là chi tiết thực thi (implementation detail) trong các unit test. Một test tốt không nên test theo hướng implementation mà test theo hướng behavior của function.

* Unit Testing gives you the what. Test-Driven Development gives you the when. Behavior Driven-Development gives you the how.

### 1.3.2 Understand about Unit Test:
* https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a
* https://stackoverflow.com/questions/16860/getting-started-with-unit-testing
* https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/
* https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02

* Mỗi unit test có cấu trúc sau: Test Setup, Gọi phương thức cần test, đánh giá
* Modules hỗ trợ Node.js Unit Testing:
* * test runner (test environment): mocha, alternatively tape
* * assertion library: chai, alternatively the assert module (for asserting)
* * test spies, stubs and mocks: sinon (for test setup).

### 1.3.3 Understand about Test runner (e.g jest, mocha)
* Là môi trường mà lập trình viên chạy toàn bộ việc kiểm thử trong đó. Môi trường này chứa các thành phần liên quan đến phần mềm, phần cứng, và network đã được cấu hình sẵn để giúp việc thực thi việc kiểm thử. Việc cấu hình phải giúp biến môi trường test thành gần như tương đồng với môi trường thực mà sản phẩm sẽ chạy sau này, giúp lập trình viên phát hiện ra các lỗi của chương trình.

### 1.3.4 Understand about Test Assertion Framework (e.g chai, jasmine)
* Assertion libraries là những thư viện giúp lập trình viên xác minh tính đúng đắn của một đoạn code nào đó, giúp bạn viết các phép kiểm tra một cách dễ dàng hơn, sử dụng ngôn ngữ gần với ngôn ngữ nói hơn thay vì viết hàng nghìn câu lệnh if.
* Testing plugins là những phần mở rộng giúp gia tăng tính năng cho các test assertion

* Testing frameworks dùng để tổ chức và thực thi các phép kiểm tra viết bởi assertion libraries

### 1.3.5 Understand about spies, stubs and mocks (e.g sinon) 
(https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
* Spies, stubs and mocks are known (as test doubles) như các bản sao hay người đóng thế trong một test; tương tự với người đóng thế trong các pha hành động nguy hiểm trong phim; giúp việc viết test dễ dàng hơn

* Trong test double, chúng ta chia function ra làm hai loại:
* * Functions without side effects: kết quả của function chỉ phụ thuộc vào các tham số của nó, function luôn trả về giá trị giống nhau với cùng bộ tham số được truyền vào
* * Functions with side effects: là function có sự phụ thuộc vào một số yếu tố bên ngoài nào đó khi thực thi. 
Khi viết test, ta cần các test double khi function có side effects. Đôi khi ta cũng cần test-double với các hàm có khả năng gây ra problems trong test 

* Spies are used to get information about function calls. For example, a spy can tell us how many times a function was called, what arguments each call had, what values were returned, what errors were thrown, etc.
A spy is a good choice whenever the goal of a test is to verify something happened
Các trường hợp phổ biến nhất dùng spy gồm: kiểm tra số lần một function được gọi, kiểm tra những đối số nào được truyền vào hàm (sinon.assert.callCount, sinon.assert.calledOnce, sinon.assert.notCalled, sinon.assert.calledWith)

* Stubs: You can use them to replace problematic pieces of code
You can use them to trigger code paths that wouldn't otherwise trigger - such as error handling
You can use them to help test asynchronous code more easily

* Mocks:  Mocks được dùng chủ yếu khi bạn dùng stub nhưng cần xác minh nhiều hành vi cụ thể trên nó

### 1.3.6 Understand code coverage (e.g nyc)
* Code coverage tỷ lệ phần trăm code được test tự động trong chương trình
* module test code coverage: nyc

### 1.3.7 Understand HTTP mocking (e.g nock)
* HTTP mocking là việc giả lập môi trường HTTP ví dụ như một dịch vụ web hay một website nhằm hỗ trợ test các ứng dụng chạy trên nền HTTP
* nock là một thư viện HTTP mocking dành cho Nodejs, có thể được dùng để test các modules thực thi các HTTP requests một cách độc lập

## 1.4 API Security
* An ninh API: giữ an toàn cho API của bạn

### 1.4.1 Understand Authentication vs Authorization (https://blog.restcase.com/restful-api-authentication-basics/)
* Authentication: là việc xác minh các thông tin cần thiết có đủ điều kiện được chấp nhận của một yêu cầu kết nối đến một chức năng nào đó trong hệ thống. Quy trình này bao gồm việc gửi thông tin từ máy khách truy cập từ xa đến máy chủ dưới dạng thông tin gốc hoặc thông tin đã được mã hóa bằng việc sử dụng một giao thức xác thực

* Authentization: là việc xác minh rằng yêu cầu kết nối được chấp nhận, authorization xảy ra sau khi authentication được hoàn thành

## 1.5 API Testing with postman
### 1.5.1 https://www.getpostman.com/docs/v6/postman/scripts/test_scripts

### 1.5.2 https://medium.com/aubergine-solutions/api-testing-using-postman-323670c89f6d
* API: Application Programming Interface.
API is a defined set of rules, which contains clearly defined methods of communication. API helps different software components to interact with each other.
API là một bộ các quy tắc, methods, tools và các giao thức được sử dụng khi xây dựng ứng dụng, cung cấp phương thức cho các thành phần phần mềm khác nhau tương tác với nhau. API giảm thời gian phát triển, cung cấp cho các nhà phát triển sự truy cấp đến nhiều tính năng và dịch vụ hữu ích.

* The majority of mobile apps have three layers to them:
* *   Database, where data is extracted from and stored in databases (DB).
* *   Business Logic, which consists of APIs; its main purposes are data processing between different layers, logical decision making and application management.
* *   Presentation, which represents user interface (UI).

* API testing involves testing the collection of APIs and checking if they meet expectations for functionality, reliability, performance, and security and returns the correct response

### 1.5.3 https://steelkiwi.com/blog/api-testing-useful-tools-postman-tutorial-and-hints/

## 1.6 Practice
### 1.6.1 Build Node MVC app with mongoose:
http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/

### 1.6.2 Build a MVC Node App with ORM
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

### 1.6.3 Write API Testing for Mobile Phone API

### 1.6.4 Secure your Mobile Phone API with Authentication and Authorization
https://scotch.io/tutorials/easy-node-authentication-setup-and-local
