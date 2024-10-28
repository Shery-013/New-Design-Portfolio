function displayLiveTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayLiveTime, 1000);
displayLiveTime(); 



document.getElementById("audio-link").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    var audio = new Audio('./image/img/audio.mp3');
    audio.play();
    setTimeout(function() {
        window.location.href = "index.html";
    }, 300);
});


document.getElementById("audio-link1").addEventListener("click", function(event) {
    event.preventDefault();
    
    var audio = new Audio('./image/img/audio.mp3');
    audio.play();
      setTimeout(function() {
        window.location.href = "about.html";
    }, 300);
});


document.getElementById("audio-link2").addEventListener("click", function(event) {
    event.preventDefault();
    
    var audio = new Audio('./image/img/audio.mp3');
    audio.play();
     setTimeout(function() {
        window.location.href = "project.html";
    }, 300);
});


document.getElementById("audio-link3").addEventListener("click", function(event) {
    event.preventDefault();
    
    var audio = new Audio('./image/img/audio.mp3');
    audio.play();
     setTimeout(function() {
        window.location.href = "https://www.facebook.com/profile.php?id=100027527411269"; 
    }, 300);
});


document.getElementById("audio-link4").addEventListener("click", function(event) {
    event.preventDefault();
    
    var audio = new Audio('./image/img/audio.mp3');
    audio.play();
     setTimeout(function() {
        window.location.href = "https://www.linkedin.com/in/abdur-raheem-shery-274491221/"; 
    }, 300);
});


document.getElementById("audio-link5").addEventListener("click", function(event) {
    event.preventDefault();
    
    var audio = new Audio('./image/img/audio.mp3');
    audio.play();
     setTimeout(function() {
        window.location.href = "about.html";
    }, 300);
});