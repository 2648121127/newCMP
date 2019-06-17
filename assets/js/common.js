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
                    },
                    dirtype:{
                        required: true
                    },
                    dealerid:{
                        required: true
                    },
                    uid:{
                        required: true
                    },
                    haspool:{
                        required: true
                    },
                    packagetype:{
                        required: true
                    },
                    packageid:{
                        required: true
                    },
                    num:{
                        required: true
                    },
                    fileup:{
                        required: true
                    },
                    speedValue:{
                        required: true
                    },
                    innertype:{
                        required: true
                    },
                    datesel:{
                        required: true
                    }
                },
                messages:{
                    fenlei: "该字段不能为空!",
                    dirtype:'该字段不能为空!',
                    dealerid:'该字段不能为空!',
                    uid:'该字段不能为空!',
                    haspool: "该字段不能为空!",
                    packagetype:'该字段不能为空!',
                    packageid:'该字段不能为空!',
                    num:'该字段不能为空!',
                    fileup:'该字段不能为空!',
                    speedValue:'该字段不能为空!',
                    innertype:'该字段不能为空!',
                    datesel:'该字段不能为空!',
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
                        },
                        dirtype:{
                            required: true
                        },
                        dealerid:{
                            required: true
                        },
                        uid:{
                            required: true
                        },
                        haspool:{
                            required: true
                        },
                        packagetype:{
                            required: true
                        },
                        packageid:{
                            required: true
                        },
                        fileup:{
                            required: true
                        },
                        speedValue:{
                            required: true
                        },
                        innertype:{
                            required: true
                        }
                    },
                    messages:{
                        fenlei: "该字段不能为空!",
                        dirtype:'该字段不能为空!',
                        dealerid:'该字段不能为空!',
                        uid:'该字段不能为空!',
                        haspool: "该字段不能为空!",
                        packagetype:'该字段不能为空!',
                        packageid:'该字段不能为空!',
                        fileup:'该字段不能为空!',
                        speedValue:'该字段不能为空!',
                        innertype:'该字段不能为空!',
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

