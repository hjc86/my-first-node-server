function getUnsplashImg(subject){
    let base_url = "https://source.unsplash.com/500x500/?";   
    return fetch(base_url + subject);
}

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
