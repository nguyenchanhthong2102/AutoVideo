
function HandleVideo(){
    var videos=document.querySelectorAll('.video-item');
    var iframe=document.querySelector('#iframe');
    var videoplay=document.querySelector('.videoplay')
    var popupVideo=document.querySelector('.popup-video');
    var button=document.querySelector('.close');
    videos.forEach(function(video){
        video.addEventListener('click',function(){
            popupVideo.style.visibility='visible';
            iframe.style.visibility='visible';
            let dataID=video.getAttribute('data-video-src');
            videoplay.setAttribute('src',`https://www.youtube.com/embed/${dataID}?autoplay=1`)
        })
   
        })
    function closeVideo(){
        popupVideo.style.visibility='hidden';
        iframe.style.visibility='hidden';
        videoplay.setAttribute('src','');
    }
    iframe.addEventListener('click',function(){
        closeVideo();
    })
    button.addEventListener('click',function(){
        closeVideo();
    })
}
HandleVideo();




