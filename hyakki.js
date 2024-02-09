function checkPassword(event) {
            if (event.keyCode === 13) {
                var password = document.getElementById("passwordInput").value;
                if (password === "warbacillus") {
                    window.location.href = "https://reysouza.github.io/Hyakki/report.html";
                } else if (password === "karasawa") {
                    window.location.href = "https://reysouza.github.io/Hyakki/karasawa.html";
                } else if (password === "731"){
                    window.location.href = "https://reysouza.github.io/Hyakki/731.html";
                } else if (password === "lunachama"){
                    window.location.href = "https://reysouza.github.io/Hyakki/lunaflama.html";
            } else {
                  window.location.href = "https://reysouza.github.io/Hyakki/bestiary.html";
       }
      }
}
  
