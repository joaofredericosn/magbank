$(document).ready(function () {

    $('.mag-faq-title').text('Cartão de crédito e débito');

   $('.mag-faq .mag-icon-and-text i').on('click', function () {
       const content = $(this).data('content');
       $('.mag-faq-title').text(content);
   });
});