
window.addEventListener('DOMContentLoaded',()=>{
    //navigation bar
    window.onscroll = ( )=>{
        
        if (document.body.scrollTop > 10 ) {
        document.getElementById("Nav").classList.add ("color");
        } else {
        document.getElementById("Nav").classList.remove ( "color");
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
//Nav
const links=document.getElementsByClassName('links');
for(const item of links)
{
    item.addEventListener('click',()=>{
        document.getElementsByClassName('clicked')[0].classList.remove('clicked')
        item.classList.add('clicked')
    })
}
///////////////////////////////////// ////////////////////////////////////////////////////////
    const section=document.getElementsByClassName('SectionContent');
    for(const item of section)
    {
       item.addEventListener("mouseover",()=>{
        item.style.backgroundImage = `url("https://pal-melaminat.ro/wp-content/uploads/2019/03/PAL-Melaminat-Albastru-Royal-01125-BS-Kronospan.jpeg")`
    })
        item.addEventListener("mouseout",()=>{
           item.style.backgroundImage= `url( "https://th.bing.com/th/id/OIP.zPJHC4W2oJQG3YHn0cGPCgHaE7?pid=ImgDet&rs=1")`;
    
        })
 }
//////////////////////////////////////////////////////////////
const ProcessScheduler={
image:"https://th.bing.com/th/id/R.2936ef6f9280e74d6062ab1fbf7f64e9?rik=RL5IE%2fShevt3Gg&riu=http%3a%2f%2fwww.tutorialspoint.com%2foperating_system%2fimages%2fprocess_state.jpg&ehk=hhF6wXevMj5cQXCYYHsItAH1s9yRJZjRzN01cm1oygQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
link:"https://github.com/Nesma-Osama/Process-Scheduler-",
icon:"https://e7.pngegg.com/pngimages/869/487/png-clipart-bullet-computer-icons-arrow-angle-image-file-formats-thumbnail.png",
header:'Process-Scheduler',
title:'Software Simulation'
}
const Paint={
    image:"https://image.freepik.com/vector-gratis/conjunto-formas-geometricas-basicas_29937-5225.jpg",
    link:"https://github.com/Nesma-Osama/Paint-for-Kids",
    icon:"https://e7.pngegg.com/pngimages/869/487/png-clipart-bullet-computer-icons-arrow-angle-image-file-formats-thumbnail.png",
    header:'Paint-For-Kids',
    title:'OOP Project'
    }
    const TasksApp ={
        image:"https://www.softwaresuggest.com/blog/wp-content/uploads/2019/12/to-do-list-app-2-1024x409.png",
        link:"https://github.com/Nesma-Osama/Tasks-App",
        icon:"https://e7.pngegg.com/pngimages/869/487/png-clipart-bullet-computer-icons-arrow-angle-image-file-formats-thumbnail.png",
        header:'TO DO APP',
        title:'React Native'
        }
        const AESEncryptionAndDecryption ={
            image:"https://th.bing.com/th/id/OIP.wFG-Zzjg3jT_eYZVZ0MG7QHaDj?pid=ImgDet&rs=1",
            link:"https://github.com/Nesma-Osama/-AES-encryption-and-decryption.",
            icon:"https://e7.pngegg.com/pngimages/869/487/png-clipart-bullet-computer-icons-arrow-angle-image-file-formats-thumbnail.png",
            header:'AES-Encryption-And-Decryption. ',
            title:'Logic Design'
            }
            const Portfolio ={
                image:"https://th.bing.com/th/id/R.4ce2ce4ac0fe241ec8641bfb63fe7b02?rik=NMzX4RA0oUu2UA&pid=ImgRaw&r=0",
                link:"https://github.com/Nesma-Osama/Personal-Portfolio",
                icon:"https://e7.pngegg.com/pngimages/869/487/png-clipart-bullet-computer-icons-arrow-angle-image-file-formats-thumbnail.png",
                header:'Personal Portfolio ',
                title:'Front End'
                }
////
//put into arrays
    const ALL=[Paint,ProcessScheduler,TasksApp,AESEncryptionAndDecryption,Portfolio]
    const C =[Paint,ProcessScheduler]
    const DataStructures=[ProcessScheduler]
    const FrontEnd=[TasksApp,Portfolio]
    const React=[TasksApp]
    const LogicDesign=[AESEncryptionAndDecryption]

const procont=document.getElementsByClassName('linked');

procont[0].classList.add('procolor');
print()
for(const item of procont)
{
    item.addEventListener('click',()=>{
    document.getElementsByClassName('procolor')[0].classList.remove('procolor')
    item.classList.add('procolor')
  

    print()
       }
        )
        
      
}

function print()
{
   const props= document.getElementsByClassName('procolor')[0]

    let arr
    let st='' 
    if(props.innerHTML==='ALL')
    arr=ALL
   else if(props.innerHTML==='C++')
   arr=C
   else if(props.innerHTML==='Data Structures')
   arr=DataStructures
   else if(props.innerHTML==='Front-End')
   arr=FrontEnd
   else if(props.innerHTML==='Logic Design') 
   arr=LogicDesign
    else
    arr=React

    for(const item of arr )
    {
        st+=`<div class="project">`
  
        st+=`<img src="${item.image}" width=270 height=180 class="image"/>`
     
        st+=`<div class="content">`
        st+=`<div class='textcontainer'>`
        st+=`<h4>${item.header}</h4>`
        st+=`<p>${item.title}</p>`
        st+='</div>'
        st+=`<a href="${item.link}" target="_blanck"><img src="${item.icon}" title="Click here to go GitHub code" width=25 height=25></a>`
        st+='</div>'
        st+='</div>'
    }
    
 let div1=document.createElement('div')
div1.innerHTML=st,
div1.className='sectionProjects'
document.getElementsByClassName('Projects')[0].removeChild(document.getElementsByClassName('Projects')[0].firstChild)

document.getElementsByClassName('Projects')[0].appendChild(div1)

}



})





