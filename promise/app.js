// function saveToDB(data){
//   return new Promise((resolve,reject)=>{
//     let internet = Math.floor(Math.random() * 10)+1;
//     if(internet > 4){
//       resolve("Success: Data is saved!");
//     }else{
//       reject("Failure: weak connection");
//     }
//   })
// }

// saveToDB("apna college")
// .then((result)=>{
//   console.log("Data 1 saved!");
//   console.log(result);
//   return saveToDB("Hello World");
// })
// .then((result)=>{
//     console.log("Data 2 saved!");
//     console.log(result);
//     return saveToDB("Shivangi");
//   })
// .then((result)=>{
//   console.log("Data 3 saved!");
//   console.log(result);
// })
// .catch((error)=>{
//   console.log("Promise was Rejected!");
//   console.log(error);
// })

let h1 = document.querySelector("h1");

function changeColor(color, delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      h1.style.color = color;
      resolve("color Changed!");
    },delay);
  });
}

changeColor("red", 1000)
.then(()=>{
  console.log("red color!");
  return changeColor("orange", 1000);
})
.then(()=>{
  console.log("Orange color!");
  return changeColor("green", 1000);
})
.then(()=>{
  console.log("Green color!");
  return changeColor("blue", 1000);
})
.then(()=>{
  console.log("blue color!");
})
.catch((err)=>{
  console.log("Error occured: ", err);
})
