async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 3000);
  });
  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 5000);
  });
  console.log("fetching Delhi weather is in progress");
  let delW = await delhiWeather;
  console.log(delW);
  console.log("fetching banglore weather is in progress");
  let bangW = await bangloreWeather;
  console.log(bangW);
  return [delW, bangW];
}
console.log("welcome to control room");
let a = harry();
a.then((value) => {
  console.log(value);
});
