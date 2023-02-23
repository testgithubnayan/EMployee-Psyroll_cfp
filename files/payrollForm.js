$(document).ready(function () {
  let departments = [];
  $("#employeeform").on("submit", function (event) {
    event.preventDefault();

    let name = $(".input").val();
    let pic = $('input[type="radio"]:checked').val();
    console.log(pic);
    let Gender = $("input[name='gender']:checked").val();

    let desc = $(".desc").val();
    let days = $("select[name='Day']").val();
    let month = $("select[name='Month']").val();
    let year = $("select[name='Year']").val();

    let salary = $("select[name='salary']").val();
    console.log(salary);

    $("input[type='checkbox']:checked").each(function () {
      departments.push($(this).val());
      console.log($(this).val());
    });

    let employeeObj = {
      id: Math.random(),
      name: name,

      pic: pic,
      Gender: Gender,
      salary: salary,
      departments: JSON.stringify(departments),
      desc: desc,
      startDate: days + " " + month + " " + year,
    };
    console.log(employeeObj);

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/employees",
      data: employeeObj,
      success: function (days) {
        alert("data succesfully");
      },
      error: function () {
        alert("error in posting");
      },
    });
    return false;
  });
});
