let p = fetch("http://goweather.xyz/weather/Berlin");
p.then((response1) => {
  console.log(response1.status);
  console.log(response1.ok);
  return response1.json();
}).then((value2) => {
  console.log(value2);
});
// request headers

// let res = fetch(url,{
//     headers:{
//         authentcation: 'secret'
//     }
// });


