$(document).ready(function () {

    moment.locale('fa')
    var days = moment().daysInMonth()
    for (let i = 1; i <= days; i++) {
        const optionDay = '<option value="' + i + '">' + i + '</option>'
        $('#day').append(optionDay).val();
    }

    var month = moment()._locale._jMonths
    for (let i = 0; i < month.length; i++) {
        const optionMonth = '<option value="' + month[i] + '">' + month[i] + '</option>'
        $('#month').append(optionMonth).val();
    }

    const year = moment().year()
    for (let i = year; i >= 1340; i--) {
        console.log(year)
        const optionYear = '<option value="' + i + '">' + i + '</option>'
        $('#year').append(optionYear).val()
    }

    $(".owl-carousel").owlCarousel({
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
    });

    $(".faq-question").on('click', function () {
        if ($(this).parent().is('.open')) {
            $(this).closest(".faq").find('.faq-answer-container').css({ border: '0', padding: '0' }).animate({ height: '0', opacity: '0' }, 150)
            $(this).css({ borderRadius: '8px 8px 8px 8px' })
            $(this).closest('.faq').removeClass('open')
        } else {
            var newHeight = $(this).closest('.faq').find('.p-text-faq').height() + 'px';
            $(this).closest(".faq").find('.faq-answer-container').css({ border: '1px solid #eeebeb', padding: '15px' }).animate({ height: newHeight, opacity: '1' }, 200)
            $(this).css({ borderRadius: '8px 8px 0 0' })
            $(this).closest('.faq').addClass('open')
        }

    })


    // $(".marital").on('click', function () {
    //     if($(this).is('.married')) {
    //         $('.single').attr('checked', "true");
    //         console.log('single')
    //     } else if($(this).is('.single')) {
    //         $('.single').attr('checked', "true");
    //         console.log('married')
    //     }

    // })

    // $("input:checkbox").click(function(){
    //     var group = "input:checkbox[name='"+$(this).attr("name")+"']";
    //     $(group).attr("checked",false);

    //     $(this).attr("checked",true);
    // });



    var captcha = new $.Captcha({
        selector: "#captcha",
        text: null,
        randomText: true,
        randomColours: true,
        width: 244,
        height: 163,
        colour1: null,
        colour2: null,
        font: 'normal 40px "Comic Sans MS", cursive, sans-serif',
        onFailure: function () {
            alert("Failure!");
        },
        onSuccess: function () {
            alert("CORRECT!!!");
        }
    });
    captcha.generate();
    captcha.validate();


    $('#myform').validate({
        rules: {
            firstname: {
                required: true,
                minlength: 2,

            },
            lastname: {
                required: true,
                minlength: 2,

            }, education: {
                required: true,
                minlength: 2,

            },
            fieldofstudy: {
                required: true,
                minlength: 2,
                
            }, resume: {
                required: true,
                minlength: 20,
            },
            email: {
                required: true,
                email: true
            },
        },
        errorClass: "invalid",
        validClass: "success",
        messages: {
            email: {
                email: "Your email address must be in the format of name@domain.com"
            }
        }
    });

    $('#myform').submit(function (event) {
        var formData = {
            firstname: $("#first-name").val(),
            lastname: $("#last-name").val(),
            education: $("#education").val(),
            fieldofstudy: $("#field-of-study").val(),
            day: $("#day").val(),
            month: $("#month").val(),
            year: $("#year").val(),
            marital: $(`input[name="marital"]:checked`).val(),
            resume: $(".input-resume").val(),
            myfile: $("#upfile").val(),
            fixnumber: $("#fix-number").val(),
            phonenumber: $("#phone-number").val(),
            email: $("#email").val(),
        };
        $.ajax({
            type: "POST",
            url: "https://postman-echo.com/post",
            data: formData,
            encode: true,
        }).done(function (data) {
            console.log(data);
        });

        event.preventDefault();


    })

})
