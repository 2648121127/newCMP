(function($){
    'use strict';
    var AboutForm = {
        init:function(){
            this.AboutValidate();
            this.RevalidateValidate();
            //this.AboutSelect2();
        },
        AboutValidate:function () {
            $('#form_traditional_validation').validate({
                errorElement: 'span',
                errorClass: 'error',
                focusInvalid: false,
                ignore: "",
                rules: {
                    form1Name: {
                        minlength: 2,
                        required: true
                    },
                    form1Email: {
                        required: true,
                        email: true
                    },
                    form1Url: {
                        required: true,
                        url: true
                    },
                    form1Password: {
                        required: true,
                        password: true
                    },
                    gendericonic:{
                        required: true
                    },
                    fenlei:{
                        required: true
                    }
                },
                messages:{
                    fenlei: "请输入网卡分类"
                }
            });
        },
        RevalidateValidate:function(){
            $('.select2',"#form_traditional_validation").change(function () {
                $('#form_traditional_validation').validate({
                    errorElement: 'span',
                    errorClass: 'error',
                    focusInvalid: false,
                    ignore: "",
                    rules: {
                        form1Name: {
                            minlength: 2,
                            required: true
                        },
                        form1Email: {
                            required: true,
                            email: true
                        },
                        form1Url: {
                            required: true,
                            url: true
                        },
                        form1Password: {
                            required: true,
                            password: true
                        },
                        gendericonic:{
                            required: true
                        },
                        fenlei:{
                            required: true
                        }
                    },
                    messages:{
                        fenlei: "请输入网卡分类"
                    }
                }).element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        },
        AboutSelect2:function(){
            //下拉框添加搜索框
            $.fn.select2 && $('[data-init-plugin="select2"]').each(function() {
                $(this).select2({
                    minimumResultsForSearch: ($(this).attr('data-disable-search') == 'true' ? -1 : 1)
                }).on('select2-opening', function() {
                    $.fn.scrollbar && $('.select2-results').scrollbar({
                        ignoreMobile: false
                    })
                });
            });
        }
    }
    AboutForm.init();
})(window.jQuery);
$(function(){
    //AboutForm.init();
})

