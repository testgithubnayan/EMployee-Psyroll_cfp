$(document).ready(function () {
  $.get("http://localhost:3000/employees", function (data, textStatus, jqXHR) {
    console.log(data);
  });
});
