let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=>{
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("img");
  img.setAttribute("src", link);
});

async function getImage(){
  try{
    let res = await axios.get(url2);
    return res.data.message;
  }catch(error){
    console.log("Error: ", error);
    return "NO IMAGE FOUND!, PLEASE ENTER A VALID URL";
  }
}