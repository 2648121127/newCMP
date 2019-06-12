$(function(){
    $('#orderId1').click(function() {
        $('#modalSlideUp').modal('show');
        // var size = $('input[name=slideup_toggler]:checked').val()
        // var modalElem = $('#modalSlideUp');
        // if (size == "mini") {
        //     $('#modalSlideUpSmall').modal('show')
        // } else {
        //     $('#modalSlideUp').modal('show')
        //     if (size == "default") {
        //         modalElem.children('.modal-dialog').removeClass('modal-lg');
        //     } else if (size == "full") {
        //         modalElem.children('.modal-dialog').addClass('modal-lg');
        //     }
        // }
    });
    $("#delOk").on('click',function(){
        $('#orderId1').parent('td').parent('tr').remove();
        $('#modalSlideUp').modal('hide')
    })
    // $("#orderId1").on('click',function(){
    //     $(this).parent('td').parent('tr').remove();
    // })
    //console.log($("orderId1").parent('td').parent('tr'))
    //if(!confirm('您是否确定要删除此记录？')){return  false;}
})