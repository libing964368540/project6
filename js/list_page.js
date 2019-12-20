$(function () {
    var $content = $('#content');
    function page(num, pageBox) {
        var pageInfo = '<div id="pages"> <div id="Pagination"></div> <div class="searchPage"> <span class="page-sum">共<strong class="allPage">' + num + '</strong>页</span>  </div> </div>';
        $(pageInfo).appendTo(pageBox);
        $content.find("#pages #Pagination").pagination(num, {
                load_first_page: false,
                callback: function (current_page) {
                    console.log(current_page)   //返回当前页码
                    // conTwo(dataId,current_page+1,6)
                    //这里可以自定义一个回调函数， 事件会触发 ，例如点击上一页 下一页。
                }
            }
        )
    }
    page(3, $content);
<!----------------------------改：----------------------------->
    //最小高度自适应
    minHeight();
    function minHeight() {
        var wh = $(window).height();
        var hh = $('#header').outerHeight();
        var th = $('#transit').outerHeight();
        $('#content .book-list').height(wh - (hh + th + 150));
    }
<!----------------------------改：----------------------------->
    // 列表点击：
    $content.find('.book-list').on('click', 'li', function () {
        top.window.location = "./show_page.html"
    })
});