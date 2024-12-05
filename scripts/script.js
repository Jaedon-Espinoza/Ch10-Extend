/*
    Student Name: Jaedon Espinoza
    File Name: script.js
    Date: 12/3/2024
*/

$(document).ready(function() {
    $('.hide').click(function() {
      var $article = $(this).closest('article');
      $article.find('p').hide();
    });
  
    $('.show').click(function() {
      var $article = $(this).closest('article');
      $article.find('p').show();
    });
  });
  