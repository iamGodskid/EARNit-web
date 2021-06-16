 var storage = [];
 
function formSub(){
  
  var username = document.getElementById("username").value;
  var useremail = document.getElementById("useremail").value;
  
  storage.push(username, useremail);
  
  username = null;
  useremail = null;
  
  window.localStorage.setItem("user", JSON.stringify(storage[0]));
  
  window.localStorage.setItem("email", JSON.stringify(storage[1]));
  
  window.open("home.html");
}
function details(){
  
  document.getElementById("user_name").innerHTML = JSON.parse(window.localStorage.getItem("user"));
  
  document.getElementById("user_num").innerHTML = JSON.parse(window.localStorage.getItem("email"));
  
}
function next(){
  vidArr = [
    "(www.AMonpointTV.com)_Adekunle_Gold_-_Ire_.mp4", "(www.AMonpointV.com)_Chelsea_vs_Tottenham_2-1_.mp4", "(www.AMonpointV.com)_Leicester_vs_Chelsea_2-2_.mp4"];
    
    var video = new Video();
    video.src = "";

    for(i = 1; i<=1; i++){
      var vidplay = Math.floor(Math.random()*vidArr.lenght+1);
      video.src += vidplay;
    }

}