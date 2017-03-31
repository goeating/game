$(function () {
    //游戏充值 选择后金额变化
    $('.game-radio').on('change',function () {
        $('#money').text($('.game-radio[name="card"]:checked').val());
    });
    //注册
    $('#code-btn').on('click',function () {
        var Reg = /(13|14|15|18)[0-9]{9}/;
        var index = 60;
        var timeout=function () {
            if(index==0){
                clearTimeout();
                $('#code-btn').removeClass('disabled').addClass('button-dark').prop('disabled',false).text("获取验证码");
            }else{
                setTimeout(function () {
                    index--;
                    $('#code-btn').text(index+"秒后重试");
                    timeout();
                },1000)
            }
        };
        if($('#phone').val()==""||!Reg.test($('#phone').val())){
            $.toast("请认真填写手机号码！",1000);
        }else{
            $('#code-btn').removeClass('button-dark').addClass('disabled').prop('disabled',true);
            timeout();
            //发送手机号
            $.post('',{
                // $('#phone').val()
            },function (res) {

            });
        }
    });

    //上传头像
    $(document).on('pageInit','#info-head',function () {
        var oFReader = new FileReader();
        var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
        oFReader.onload = function (oFREvent) {
            // ajax上传
            // var formdata = new FormData;
            // $.post();
            $('#upload-img').attr('src',oFREvent.target.result);
        };
        $('#upload').on('change',function () {
            if(this.files.length === 0){
                return;
            }
            var oFile = this.files[0];
            if(!rFilter.test(oFile.type)){
                $.toast("请选择图片！",1000);
                return;
            }
            oFReader.readAsDataURL(oFile);
        });
    });
    //生日日历
    $("#info-birthday").calendar({
        value: ['2017-01-01'],
        onChange: function () {

        }
    });

    //性别选择
    $("#info-sex").picker({
        toolbarTemplate: '<header class="bar bar-nav">\
            <button class="button button-link pull-right close-picker">确定</button>\
            <h1 class="title">请选择性别</h1>\
            </header>',
        cols: [
            {
                textAlign: 'center',
                values: ['男', '女']
            }
        ],
        onClose: function () {
            console.log($("#info-sex").val());
        }
    });

    //上传身份证
    $(document).on('pageInit','#security-id',function () {
        var oFReader = new FileReader();
        var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
        oFReader.onload = function (oFREvent) {
            // ajax上传
            // var formdata = new FormData;
            // $.post();
            $('#id-img').attr('src',oFREvent.target.result);
            $('.id-upload-box .item-media').show();
        };
        $('#id-upload').on('change',function () {
            if(this.files.length === 0){
                return;
            }
            var oFile = this.files[0];
            if(!rFilter.test(oFile.type)){
                $.toast("请选择图片！",1000);
                return;
            }
            oFReader.readAsDataURL(oFile);
        });
    });

 
    $.init()
});