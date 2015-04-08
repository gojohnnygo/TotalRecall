$(function(){
  var students = new Students();
  students.fetch();
  var sView = new StudentView({el: $('#main'),collection: students});
});

