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
                    },
                    action:{
                        required: true
                    },
                    quota:{
                        required: true
                    },
                    type:{
                        required: true
                    },
                    realdataList:{
                        required: true
                    },
                    psdudodataList:{
                        required: true
                    },
                    isdisabled:{
                        required: true
                    },
                    time:{
                        required: true
                    },
                    apiname:{
                        required: true
                    },
                    realdata:{
                        required: true
                    },
                    pseudodata:{
                        required: true
                    },
                    totalflow:{
                        required: true
                    },
                    opttype:{
                        required: true
                    },
                    name:{
                        required: true
                    },
                    groupid:{
                        required: true
                    },
                    appkey:{
                        required: true
                    },
                    secret:{
                        required: true
                    },
                    category:{
                        required: true
                    },
                    Dangerplacetype:{
                        required: true
                    },
                    citysid:{
                        required: true
                    },
                    filepath:{
                        required: true
                    },
                    fee:{
                        required: true
                    },
                    datemonth:{
                        required: true
                    },
                    countdate:{
                        required: true
                    },
                    pool:{
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
                    action:'该字段不能为空!',
                    quota:'该字段不能为空!',
                    type:'该字段不能为空!',
                    realdataList:'该字段不能为空!',
                    psdudodataList:'该字段不能为空!',
                    isdisabled:'该字段不能为空!',
                    time:'该字段不能为空!',
                    apiname:'该字段不能为空!',
                    realdata:'该字段不能为空!',
                    pseudodata:'该字段不能为空!',
                    totalflow:'该字段不能为空!',
                    opttype:'该字段不能为空!',
                    name:'该字段不能为空!',
                    groupid:'该字段不能为空!',
                    appkey:'该字段不能为空!',
                    secret:'该字段不能为空!',
                    category:'该字段不能为空!',
                    Dangerplacetype:'该字段不能为空!',
                    citysid:'该字段不能为空!',
                    filepath:'请输入文件路径!',
                    fee:'请输入费用!',
                    datemonth:'该字段不能为空!',
                    countdate:'该字段不能为空!',
                    pool:'该字段不能为空!',

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


$.extend($.validator.messages, {
    required: "必选字段",
    remote: "请修正该字段",
    email: "请输入正确格式的电子邮件",
    url: "请输入合法的网址",
    date: "请输入合法的日期",
    dateISO: "请输入合法的日期 (ISO).",
    number: "请输入合法的数字",
    digits: "只能输入整数",
    creditcard: "请输入合法的信用卡号",
    equalTo: "请再次输入相同的值",
    accept: "请输入拥有合法后缀名的字符串",
    maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
    minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
    rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
    range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
    max: $.validator.format("请输入一个最大为 {0} 的值"),
    min: $.validator.format("请输入一个最小为 {0} 的值")
});
/*------表单验证-----end*/


/*-----上传按钮样式设置------start*/
function uploadStyle(){
    $('.showFileName').hide();
    $("#upload").on("change", "input[type='file']", function() {
        var filePath = $(this).val();
        var arr = filePath.split('\\');
        var fileName = arr[arr.length - 1];
        $('.showFileName').show();
        if(filePath) {
            $(".showFileName").html("已选择文件名：" + fileName);
        } else {
            $(".showFileName").html("");
            return false
        }
    });
}
uploadStyle();

/*-----上传按钮样式设置------end */
