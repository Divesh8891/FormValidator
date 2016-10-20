$(document).ready(function () {
    $('#submitForm').bind('click', validateForm);


});
function validateForm() {
      formValid({
        selector: '.form-section',
        event: 'click'
    });
    var flag = $('.form-section .form-group').hasClass('has-error');
    if (!flag) {
        alert('Perfect! , write submit code now. ')
        }
}
