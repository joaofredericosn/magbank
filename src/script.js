$(document).ready(function () {

    $('.mag-faq-title').text('Cartão de crédito e débito');
    
    $('.mag-faq .mag-icon-and-text').first().css('color', '#fff')

    $('.mag-faq .mag-icon-and-text').on('click', function () {

       const content = $(this).find('i').data('content');
       $('.mag-faq-title').text(content);

       $('.mag-faq .mag-icon-and-text').css('color', '#a8a8a8');

       $(this).css('color', '#fff');
   });
});