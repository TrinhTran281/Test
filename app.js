// ex 1
// function reserveString(str)
// {
//     var strReserve = "";
//     for(var i = str.length - 1; i >= 0;i--)
//     {
//         strReserve += str[i];
//     }
//     return strReserve;
// }
// var str = prompt("Enter string");
// console.log(reserveString(str));

// ex 2
// function firstLetter(str)
// {
//     return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
//         return l.toUpperCase();
//     })
// }
// var str = prompt("Enter string");
// console.log(firstLetter(str));

// ex 3
// function setChar(arr)
// {
//     var newArr = [];
//     for(var i = 0;i < arr.length;i++)
//     {
//         if(newArr.indexOf(arr[i]) == -1)
//         {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// var arr = prompt("Enter array").split(",");
// console.log(setChar(arr));

// ex 4
// function C()
// {
//     var n = prompt("Enter the name of staff"),
//     a = Number(prompt("Enter the age")),
//     s = prompt("Enter the salary"),
//     p = prompt("Enter the position")
//     var obj = {id: `${Number(staff.length) + 1}`, name: n, salary: s, position: p};
//     staff.push(obj);
// }
// function R()
// {
//     for(var i in staff)
//     {
//         console.log(`${staff[i].name}\n${staff[i].age}\n${staff[i].salary}\n${staff[i].position}`);
//     }
// }
// function U()
// {
//     var pos = prompt("Enter the position you want to update");
//     for(var i = 0;i < staff.length;i++)
//     {
//         if(pos == staff[i].id)
//         {
//             var newName = prompt("Enter new name");
//             var newSalary = prompt("Enter new salary");
//             var newPosition = prompt("Enter new position");
//             staff[i].name = newName;
//             staff[i].salary = newSalary;
//             staff[i].position = newPosition;
//         }
//     }
// }
// function D()
// {
//     var del = prompt("Enter the position you want to delete");
//     for(var i = 0;i < staff.length;i++)
//     {
//         if(del == staff[i].id)
//         {
//             staff.splice(i,1);
//         }
//     }
// }

// var staff = [
//     {
//         id: 1,
//         name: 'Clemy Nguyen',
//         age: 21,
//         salary: '500$',
//         position: 'staff'
//     },
//     {
//         id: 2,
//         name: 'Eirlys Tran',
//         age: 22,
//         salary: '300$',
//         position: 'staff'
//     },
//     {
//         id: 3,
//         name: 'Aurora',
//         age: 20,
//         salary: '100$',
//         position: 'staff'
//     }
// ];
// while(true)
// {
//     var input = prompt("Choose C/R/U/D");
//     if(input == "c")
//     {
//         C();
//     }
//     else if(input == "r")
//     {
//         R();
//     }
//     else if(input == "u")
//     {
//         U();
//     }
//     else if(input == "d")
//     {
//         D();
//     }
//     else if(input == "e")
//     {
//         break;
//     }
// }

// ex 5
//     function checkDate(str)
//     {
//         var temp = str.split("/");
//         var day = parseInt(temp[0],10);
//         var month = parseInt(temp[1],10);
//         var year = parseInt(temp[2],10);
//         if(month == 4 || month == 6 || month == 9 || month == 11)
//         {
//             if(day >= 1 && day < 30)
//             {
//                 return `${str} là ngày hợp lệ. Ngày tiếp theo là ${day + 1}/${month}/${year}`;
//             }
//             else if(day == 30)
//             {
//                 return `${str} là ngày hợp lệ. Ngày tiếp theo là ${1}/${month + 1}/${year}`;
//             }
//         }
//         else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
//         {
//             if(day >= 1 && day < 31)
//             {
//                 return `${str} là ngày hợp lệ. Ngày tiếp theo là ${day + 1}/${month}/${year}`;
//             }
//             else if(day == 31)
//             {
//                 return `${str} là ngày hợp lệ. Ngày tiếp theo là ${1}/${month + 1}/${year}`;
//             }
//         }
//         else if(month == 2)
//         {
//             if(day >= 1 && date < 28)
//             {
//                 return `${str} là ngày hợp lệ. Ngày tiếp theo là ${day + 1}/${month}/${year}`;
//             }
//             else if(day == 28)
//             {
//                 return `${str} là ngày hợp lệ. Ngày tiếp theo là ${1}/${month + 1}/${year}`;
//             }
//         }
//     }
// var str = prompt("Enter Date");
// console.log(checkDate(str));
