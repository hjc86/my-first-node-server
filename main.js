// require('http')
// var url = require('url');
// var fetch = require('node-fetch')


// $(document).ready(function(){



//     async function callUnsplash() {
//         var response1 = await fetch("https://source.unsplash.com/500x500/?water").then(response=> {return response.url});
//         var response2 = await fetch("https://source.unsplash.com/500x500/?horse").then(response=> {return response.url});
        
//         var pics = [response1, response2];
//         // console.log(pics)
//         return pics
//     };
    
//     callUnsplash().then(response => { 
//         $('#img1').attr("src", response[0]);
//         $('#img2').attr("src", response[1]);

//     })   

// });


function getUnsplashImg(subject){
    let base_url = "https://source.unsplash.com/500x500/?";   
    return fetch(base_url + subject);
}

// function getUnsplashImg(subject){
//     const req = new XMLHttpRequest()
//     let base_url = "https://source.unsplash.com/500x500/?";  
//     return new Promise(resolve=>{
//             let req = new XMLHttpRequest(); 
//             req.open("GET", base_url+subject);
//             resolve(req.send());
//         }
// )}



async function getImages(){ 
    pic_array =[await getUnsplashImg("water"), await getUnsplashImg("fire")];
    console.log(pic_array);
    return pic_array
}


$(document).ready(function(){   
    getImages().then(response=>{ 
        $("#img1").attr("src", response[0].url)
        $("#img2").attr("src", response[1].url)
        console.log(response)
    });
})  


