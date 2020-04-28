// Tài liệu đã sẵn sàng khi được tải
$(document).ready(() => { 
    // Hàm được thực hiện khi chuột đưa vào phần tử chứa class "menu"
    $(".menu" ).hover( function(){
        // Hiển thị phần tử chứa class "nav-menu"
        $(".nav-menu").slideDown(1000);
    }, function() {
        // Ẩn phần tử class "nav-menu" kh chuột ko đưa vào nữa.
        $(".nav-menu").slideUp();
    }); 
    // Hàm được thực hiện khi chuột đưa vào phần tử chứa class "btn"
    $(".btn").hover( function() {
        // Thêm class "btn-hover" vào phần tử 
        $(this).addClass('btn btn-hover');
    }, function() {
        // Ẩn class "btn-hover" khi chuột đưa ra khỏi phần tử 
        $(this).removeClass("btn-hover");
    });
    // Xử lý event cho HTML form
    $(".postText").focus();
    // Hàm chạy khi người dùng vừa thao tác khỏi bàn phím
    $(".postText").on("keyup", function(event) {
        // Gắn biến bằng thao tác người dùng trong chính phần tử ấy 
        var post = $(event.currentTarget).val();
        var remaining = 140 - post.length;
        $('.characters').html(remaining);
        // Khi người người dùng tương tác quá số từ cho phép
        if (remaining <= 0) {
            $(".wordcount").addClass("red");
        } else {
            $(".wordcount").removeClass("red");
        }
        
    });
});

