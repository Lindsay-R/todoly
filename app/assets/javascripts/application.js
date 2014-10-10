// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
//  $.get("/todos").then(function(response) {
//    console.log(response);
//
//  });




  $(document).on("ready", function () {
    var promiseOfResult = $.getJSON("/todos");
    // The request happens sometime in here

    var format_todo_item = function (todo) {
      var todo_item_var =
        "<li>" + todo["todo_item"] + "</li>";

      return todo_item_var;

    };

    var whatToDoWhenItSucceeds = function (jsonResponse) {
      var todo_items_var = jsonResponse.map(format_todo_item );

      $('.js-output ul').html(todo_items_var);
    };

    promiseOfResult.success(whatToDoWhenItSucceeds);

    // whatToDoWhenItSucceeds is called
  });








  $('body').append("");



  $('form').on('submit', function(e) {
    e.preventDefault();
    var todo =$('#todo').val();


    $.ajax({
      type: "POST",
      url: "/todos",
      data: {
        todo_item: todo
      }
    });



//    console.log(todo);

    $('#todo-form').append("<div class='pop'>"+ todo + "<button class='complete'>"+ 'complete' +'</button>' + "<button class='remove'>"+ 'delete' +'</button>' +'</div>');

    if ( $( "input:first" ).val() != "" ) {
      $( '#alert' ).append('<div class="created-alert">'+ 'Todo Created' + '</div>').show().fadeOut( 3000 );
      return;
    }

  });

  $("#hide").click(function(){
    $("#alert").hide();
  });



  $(document).on("click", ".pop .remove", function() {
    $( '.alert-delete' ).append('<div class="created-alert">'+ 'Todo Deleted' + '</div>').show().fadeOut( 3000 );
    $(this).closest('.pop').empty().hide();

  });

  $("#hide-delete").click(function(){
    $(".alert-delete").hide();
  });


  $(document).on("click", ".pop .complete", function() {
    $( '.alert-complete' ).append('<div class="created-alert">'+ 'Todo Completed' + '</div>').show().fadeOut( 3000 );
    $(this).closest('.pop').appendTo('#completed-todos');

  });

  $(".hide-complete").click(function(){
    $(".alert-complete").hide();
  });


});