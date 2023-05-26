let windowWidth=window.innerWidth;
let windowHeight=window.innerHeight;

if(windowWidth>=windowHeight){
    document.querySelector('.container').style.width='50vh';
    document.querySelector('.container').style.height='90vh';
}else{
    document.querySelector('.container').style.width='95vw';
    document.querySelector('.container').style.height='95vh';

    document.querySelector('.logo').style.fontSize='220%';
    document.querySelector('.search').style.fontSize='320%';
}

const apiKey='FOKAxTcEHXFDo24fKxofoWELqvUPJYbd';
let urlMask=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=`;
let url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=`;



document.querySelector('.go').addEventListener('click',(e)=>{
        e.preventDefault();
        let query= document.querySelector('.input').value.trim();
        url+=query;
        getData();
});





async function getData(){
    try{
    //requesting data
    let response =await fetch(url);
    let content = await response.json();
    const data=content.data;
    console.log(data);
    const status=content.meta.status;
    //error check
    if(!(status===200)){
        throw new Error('something went wrong');
    }else{
        console.log('200');
    }
    //injecting data
    for(i=0;i<10;i++){

        let inject=document.createElement('div');
        inject.classList.add('test');
        let img=document.createElement('img');
        img.setAttribute('width','100%');
        img.setAttribute('height','100%');
        img.src=`${data[i].images.downsized.url}`;

        inject.append(img);
        document.querySelector('.content').insertAdjacentElement("afterbegin",inject);
        
    };
    
    }catch(err){
        console.log(err);
        alert('something went wrong!!');
    }

    //resetting url
    url=urlMask;
}
