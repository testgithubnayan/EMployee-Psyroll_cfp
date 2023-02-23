$(document).ready(function () {
  $(document).ready(function () {
    $.get("http://localhost:3000/employees", function (data) {
      console.log(data); // arry of objects similar to arr in this filea

      // all your table code sits here
    });
  });

  const arr = [
    {
      name: "ABC",
      Department: "HR",
      Age: "23",
      Gender: "M",
      Salary: 10000,
    },
    {
      name: "ABC",
      Department: "HR",
      Age: "23",
      Gender: "M",
      Salary: 10000,
    },
    {
      name: "ABC",
      Department: "HR",
      Age: "23",
      Gender: "M",
      Salary: 10000,
    },
    {
      name: "ABC",
      Department: "HR",
      Age: "23",
      Gender: "M",
      Salary: 10000,
    },
    {
      name: "ABC",
      Department: "HR",
      Age: "23",
      Gender: "M",
      Salary: 10000,
    },
    {
      name: "ABC",
      Department: "HR",
      Age: "23",
      Gender: "M",
      Salary: 10000,
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    // 1) to create a <tr> for every object in the array

    const tr = `<tr>
          <td>${arr[i].name}</td>
           <td>${arr[i].Department.map(department => {
             return `<span>${department}</span>`;
           })}</td>
            <td>${arr[i].Age}</td>
             <td>${arr[i].Gender}</td>
              <td>${arr[i].Salary}</td>
          </tr>`;
    $(".tablebody").append(tr);
  }
});
