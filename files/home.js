$(document).ready(function () {
  $.get("http://localhost:3000/employees", function (data, textStatus, jqXHR) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log("hi");
      let departments = JSON.parse(data[i].departments);
      let cost = `<tr>
      
      <td>${data[i].name} </td>
      <td>${data[i].Gender} </td>
      <td>
        ${departments.map(department => {
          return `<span style=" color:  black ; background-color:  yellowgreen; border-radius: 25px;"> ${department}</span>`;
        })}
      </td>;
      <td>${data[i].salary} </td>
      <td>${data[i].startDate} </td>
      <td> <img
      id="1"
      onclick="remove(this)"
      src="./icons/delete-black-18dp.svg"
      alt="delete"
    />
               <img
                  id="1"
                  onclick="update(this)"
                  src="./icons/create-black-18dp.svg"
                  alt="edit"
                /></td>
      
      </tr>`;
      $(".tablebody").append(cost);
    }

    //   for (let i = 0; i < data.length; i++sss) {
    //     // 1) to create a <tr> for every object in the array

    //     const tr = `<tr>
    //     <td>${data[i].pic}</td>
    //           <td>${data[i].name}</td>
    //           <td>${data[i].Gender}</td>
    // <td>
    //   $
    //   {data[i].Department.map(department => {
    //     return `<span>${department}</span>`;
    //   })}
    // </td>;

    //           </tr>`;
    //     $(".tablebody").append(tr);
    //   }
    //   console.log(data);
  });
});
