const paragraph = document.getElementById("my-paragraph");
const words = paragraph.innerHTML.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 8) {
    words[i] = "<span class='highlight'>" + words[i] + "</span>";
  }
}

paragraph.innerHTML = words.join(" ");
