// $(".button").click(function(){
//      console.log("HI Sir");
//      console.log($(".input").val(

// ));

// });

$(document).ready(function () {
  let vechiles = [];
  $("#employeeform").on("submit", function (event) {
    event.preventDefault();

    let name = $("#name").val();
    let pic = $('input[name="pic"]:checked').val();
    let car = $("#cars").val();
    let desc = $("#desc").val();

    $("input[type='checkbox']:checked").each(function () {
      vechiles.push($(this).val());
    });
    let obj = {
      name: name,
      pic: pic,
      car: car,
      desc: desc,
      vec: JSON.stringify(vechiles),
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/employees",
      data: obj,
      success: function () {
        alert("data posted succesfully");
      },
      error: function () {
        alert("error in posting");
      },
    });
    return false;
  });
});
