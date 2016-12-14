$(function() {

  // your code will go here
  $.ajax({
    url:'https://www.codeschool.com/users/stephanie56.json',
    dataType:'jsonp',
    success:function(data){
      var courseInfo = data.courses.completed;
      courseInfo.forEach(function(course){
        $("#badges").append("<div class='course'><h3>" +course.title +"</h3><img src='"+ course.badge +"' /><a class='btn btn-primary' href='"+ course.url +"' target='_blank'>See Course</a></div>");
      });
    }
  });

});
