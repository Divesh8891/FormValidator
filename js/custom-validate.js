function formValid(obj) {
    var $errorClass = 'has-error';
    var $requireClass = 'data-val-required';
    var $requireRegexClass = 'data-val-regex';
    var $spanId = 'data-valmsg-for';
    var selector = obj.selector + ' .form-group .form-control';


    if (obj.event == 'click') {
        $('.form-group').removeClass($errorClass);
        $('.form-group').find('.text-danger').html('');

        $(selector).each(function (i, option) {

            $(this).parents('.form-group').removeClass($errorClass);
            $(this).parents('.form-group').find('.text-danger').html('');
            if ($(this).parents('.form-group').is(":visible")) {
                var optionId = $(option).attr('name');
//                if (!$(option).parent().hasClass('input-group')) {
                if ($(option).attr($requireClass)) {
                    if (optionId != undefined) {
                        console.log($(option).attr('type'))
                        if ($(option).attr('type') == 'checkbox' && $(option).attr('type') == 'radio') {
                            if ($(option).val() == '') {
                                $(this).parents('.form-group').addClass($errorClass);
                                $(this).parents('.form-group').find('.text-danger').html($(option).attr($requireClass));
                            }
                        } else if ($(option).prop('checked') == false) {
                            $(this).parents('.form-group').addClass($errorClass);
                            $(this).parents('.form-group').find('.text-danger').html($(option).attr($requireClass));
                        } else {
                            if ($(option).attr($requireRegexClass + '-pattern')) {
                                var re = new RegExp($(option).attr($requireRegexClass + '-pattern'));
                                if (re.test($(option).val()) == false) {
                                    $(this).parents('.form-group').addClass($errorClass);
                                    $(this).parents('.form-group').find('.text-danger').html($(option).attr($requireRegexClass));
                                } else {
                                    $(this).parents('.form-group').removeClass($errorClass);
                                    $(this).parents('.form-group').find('.text-danger').html('');
                                }
                            } else {
                                $(this).parents('.form-group').removeClass($errorClass);
                                $(this).parents('.form-group').find('.text-danger').html('');

                            }
                        }
                    }
                }
//                }
//                else {
//                    var fileVal = $('.fileinput-filename').text();
//                    var $option = $('.input-group').parent().find('input[type="file"]');
//                    var $this = $('.input-group');
//                    if (fileVal == '') {
//                        flag = false;
//                        $this.parent().addClass($errorClass);
//                        var errorText = $option.attr($requireClass)
//                        $this.parent().find('.text-danger').html(errorText);
//                    }
//                    else {
//                        if ($option.attr($requireRegexClass + '-pattern')) {
//                            var re = new RegExp($option.attr($requireRegexClass + '-pattern'));
//                            if (re.test(fileVal) == false) {
//                                $this.parent().addClass($errorClass);
//                                $this.parent().find('.text-danger').html($option.attr($requireRegexClass));
//                            }
//                            else {
//                                $this.parent().removeClass($errorClass);
//                                $this.parent().find('.text-danger').html('');
//                            }
//                        }
//                        else {
//                            $(this).parents('.form-group').removeClass($errorClass);
//                            $(this).parents('.form-group').find('.text-danger').html('');
//
//                        }
//
//
//                        //    }
//                    }

//                }
            }
        });

    }

    //if (obj.event == 'tab') {

    $(selector).blur(function (e) {
        var option = this;
        var optionId = $(option).attr('name');
        if ($(option).attr($requireClass)) {
            if ($(option).val() == '') {
                $(option).parent().addClass($errorClass);
                $(option).parent().find('.text-danger').html($(option).attr($requireClass));
            } else {
                if ($(option).attr($requireRegexClass + '-pattern')) {
                    var re = new RegExp($(option).attr($requireRegexClass + '-pattern'));
                    if (re.test($(option).val()) == false) {
                        $(this).parents('.form-group').addClass($errorClass);
                        $(this).parents('.form-group').find('.text-danger').html($(option).attr($requireRegexClass));
                    } else {
                        $(this).parents('.form-group').removeClass($errorClass);
                        $(this).parents('.form-group').find('.text-danger').html('');
                    }
                } else {
                    $(this).parents('.form-group').removeClass($errorClass);
                    $(this).parents('.form-group').find('.text-danger').html('');

                }
            }

        }


    });


    $(selector).on("keyup", function (e) {
        var option = this;
        var optionId = $(option).attr('name');
        if ((e.which == 9) || (e.keyCode == 9)) {
            console.log("tab");
            if ($(option).attr($requireClass)) {
                if ($(option).val() == '') {
                    $(option).parent().addClass($errorClass);
                    $(option).parent().find('.text-danger').html($(option).attr($requireClass));
                } else {
                    if ($(option).attr($requireRegexClass + '-pattern')) {
                        var re = new RegExp($(option).attr($requireRegexClass + '-pattern'));
                        if (re.test($(option).val()) == false) {
                            $(this).parents('.form-group').addClass($errorClass);
                            $(this).parents('.form-group').find('.text-danger').html($(option).attr($requireRegexClass));
                        } else {
                            $(this).parents('.form-group').removeClass($errorClass);
                            $(this).parents('.form-group').find('.text-danger').html('');
                        }
                    } else {
                        $(this).parents('.form-group').removeClass($errorClass);
                        $(this).parents('.form-group').find('.text-danger').html('');

                    }
                }

            }

        }

    });
}

//}
