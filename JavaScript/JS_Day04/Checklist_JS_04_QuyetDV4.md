# 1. Async
##  1.1. Sync vs Async
* Sync code (code đồng bộ):
   
   Là code trong đó các hàm được thực hiện tuần tự, khi kết thúc xử lý hàm này thì mới chuyển sang hàm khác để xử lý tiếp.

* Async code (code bất đồng bộ):

   Là code mà trong đó cho phép trong khi đang chờ xử lý xong một hàm thì có thể thực hiện một hàm khác mà chưa cần hàm trước đó phải kết thúc.
   
* Theo em JavaScript là ngôn ngữ đồng bộ hay bất đồng bộ :
   
   JavaScript là ngôn ngữ đồng bộ do code của nó được thực hiện từng bước theo thứ tự, khi một hàm được thực hiện xong thì mới chuyển sang thực hiện hàm tiếp theo. 
   
   
##  1.2. setTimeout
* Set đoạn code sau, hãy mô tả chính xác những gì xảy ra và kết quả in ra là gì ? 
```
console.log('Hi');

setTimeout(function () {
  console.log('there');
}, 1000);
```
   Kết quả in ra là:
   ```
   Hi
   there
   ```
   Trình duyệt đọc chương trình theo thứ tự từ trên xuống, hàm console.log('Hi') được gọi và in ra 'Hi'.
   Sau đó trình duyệt đọc đến setTimeout(), nó sẽ thực hiện đếm thời gian (1000ms = 1s) trước khi gọi hàm được truyền vào
   setTimeout(); sau khi đếm xong 1s, thì hàm bên trong setTimeout sẽ được gọi và in ra 'there'.
   
* How about this one, can you guess ?
```
console.log('Hi');

setTimeout(function () {
  console.log('there');
}, 0);
console.log('Hi again');
```
   Đoạn code trên sẽ in ra kết quả là:
   ```
   Hi
   Hi again
   there
   ```
   Ở đoạn code này trình duyệt vẫn đọc chương trình theo thứ tự, tuy nhiên khi đọc đến hàm setTimeout() thì trình duyệt sẽ thực hiện đếm 
   thời gian và trả về hàm được truyền bên trong setTimeout() để chờ thực thi ngay khi các hàm thông thường khác trong chương trình thực
   thi xong (ở đây là hàm console.log in ra 'Hi again').
   
##  1.3. Event Loop
* Tìm hiểu về Event loop, và giải thích lại đoạn code trên theo ý hiểu của em. 
   Event Loop là một cơ chế trong JavaScript cho phép đưa các hàm đợi vào một hàng danh sách chờ thực thi (queue) và gọi các hàm này ra khi các điều kiện của nó được thỏa mãn. 
   Trong Javascript, ngoài luồng chạy chính là Stack, khi chạy trong trình duyệt, Javascript được hỗ trợ thêm Event Table, Event Queue là các cơ chế cho phép JS thực hiện xử lý bất đồng bộ.
   
* Ví dụ khi trình duyệt chạy chương trình trên, toàn bộ đoạn code sẽ được coi là một hàm thực thi ta gọi là main() và được gọi vào stack để thực thi; khi thực thi main(), trình duyệt sẽ đọc các hàm trong main() theo thứ tự từ trên xuống, đầu tiên console.log('Hi') được gọi vào stack và thực thi, sau khi thực thi xong thì xóa console.log() và trở về main tiếp tục gọi hàm phía dưới là setTimeout();
   
   setTimeout() được gửi đến stack để thực thi, khi đó trình duyệt sẽ gửi hàm callback của nó vào trong một Event Table cùng với một sự kiện quy định khi sự kiện xảy ra thì hàm sẽ được gọi (trong trường hợp này là sự kiện khi thời gian chờ hết); lúc này setTimeout() đã được thực thi xong và được xóa khỏi stack, trình duyệt trỏ về main() và tiếp tục thực hiện console.log('Hi again'), thực thi xong thì xóa hàm và trở về main(), lúc này main() không còn hàm nào cần thực hiện nữa, main() được thực thi xong, trình duyệt xóa main() khỏi stack, stack rỗng; 
   
   Trong khi đó Event Table nhận thời gian trễ là 0ms, hàm sẽ được gọi luôn từ Event Table và được đưa đến Event Queue, đây là nơi hàm sẽ chờ để được gửi đến stack thực thi; JS có cơ chế liên tục kiểm tra stack có rỗng không và nếu rỗng thì kiểm tra Event Queue có hàm đợi không; do đó lúc này stack rỗng và trong Event Queue có hàm đợi console.log('there') sẽ được gọi lên stack thực thi.

##  1.4 Callbacks
* Tìm hiểu về callback funtions trong JS:
   Callback function là hàm được truyền vào một hàm khác như một tham số đầu vào và được gọi sau đó tùy thuộc vào hàm chứa nó.

* Người ta nói callback functions đóng gói tính liên tục của chương trình. Theo em chương trình dưới sẽ được chạy liên tục ra sao? Ví dụ (1) => (2) => (3)
```
// (1)
setTimeout(function () {
  // (2)
}, 1000);
// (3)
```
   Chương trình này sẽ được thực hiện theo thứ tự liên tục: (1) thực thi main(); (2) thực thi setTimeout(), gửi callback function và timer 1000ms đến Event Table; (3) kết thúc main(), stack rỗng, kiểm tra Event Queue có hàm đợi không để gọi thực thi.
Như vậy ở đây chương trình được chạy liên tục sau khi đã thực thi setTimeout mà không cần chờ callback function bên trong setTimeout được thực thi xong.

###   1.4.1 Nested/Chained Callbacks
* Set đoạn code sau, khi người dùng click vào btn thì điều gì xảy ra?
```
// (0)
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  // (1)
  setTimeout(function () {
    // (2)
  }, 1000);
  // (3)
});
```
   Khi người dùng click btn thì hàm bên trong addEventListener sẽ được gọi thực thi, hàm này thực thi sẽ thực thi hàm setTimeout() bên trong nó, hàm bên trong setTimeout() sẽ được thực thi sau thời gian chờ 1000ms.

* Theo em những điểu bất lợi của callbacks là gì ? liên quan đến: code readability, code security, handle errors code, code reusability 
   
   Nguy cơ bảo mật, an ninh khi sử dụng lại và gọi hàm từ bên ngoài: Không điều khiển và làm chủ được quá trình thực thi của hàm.
   
   Khó dự đoán trước hướng chạy của chương trình khi có nhiều callback lồng nhau.
   
   Khi code có nhiều hàm callback lồng nhau, sẽ dẫn đến khả năng khó đọc và maintain code sau này; nếu có lỗi xảy ra cũng gây khó khăn cho việc tìm và sửa lỗi.
   

###  1.5 Promises
* Tìm hiểu về Promises:

   Promise là một đối tượng dùng để biểu diễn sự thực thi thành công hay thất bại của một quá trình bất đồng bộ.

* What is a future value?

   Future value: là giá trị trả về mong đợi của Promise, biểu diễn giá trị sẽ được nhận được trong tương lai nếu một điều kiện nào đó được thỏa mãn.

* Promise value ?

   Là giá trị trả về thực tế của Promise khi nó được thực hiện. Cụ thể chính là giá trị của tham số truyền vào hàm resolve() hay reject() khi Promise được tạo

* Promise Events ?

   Là sự kiện được thực thi bên trong Promise, Promise dựa theo việc event được thực hiện thành công hay thất bại mà quyết định sẽ thực hiện hành động tiếp theo (gọi hàm trong .then() hay .catch()) 

* How to get Promise value?
```
var p = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve('troi dep, di choi thoi');
   }, 500);
   setTimeout(function() {
      reject('troi mua, huy');
   }, 1500);
   
})

p.then(function f1(val1){console.log(val1)}, function f2(val2) {console.log(val2)});
```
   Promise value ở đây chính là 'troi dep, di choi thoi' và 'troi mua, huy', bằng cách truyền tham số vào các hàm callback f1, f2 của p.then() thì promise value sẽ được gán vào tham số của một trong hai hàm này tùy theo trạng thái của Promise, rồi console.log ta được các giá trị này được in ra.

* How to handle error in Promise ?

   use Promise.prototype.then(undefined, function (err) {}) or Promise.prototype.catch(function (err) {})
* How to chain Promises ?

   .then() liên tiếp nhau
* Promise.all

   Là method cho phép kiểm tra cùng lúc nhiều Promise, trả về một Promise đã resolve khi tất cả promise được kiểm tra resolved, Promise.all reject với lý do của promise đầu tiên reject trong số các promise được truyền vào.
   
* Promise.race

   Method nhận vào một mảng các promise và trả về một promise có trạng thái phụ thuộc vào trạng thái của promise đầu tiên xử lý xong (promise đầu tiên trả về resolved hay rejected)
   
* finally 

   Promise.prototype.finally() là method có tham số truyền vào là một callback function mà sẽ thực thi dù cho Promise trả về resolved hay rejected, sau đó method sẽ trả về một Promise khác.
