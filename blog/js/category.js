function showContent(category) {
  var contentDiv = document.getElementById("content");
  
  if (category === "c_cpp") {
    contentDiv.innerHTML = "<p>这是C/C++内容。</p>";
  } else if (category === "python") {
    contentDiv.innerHTML = "<p>这是Python内容。</p>";
  } else if (category === "pcb") {
    contentDiv.innerHTML = "<p>这是PCB内容。</p>";
  } else if (category === "open_source") {
    contentDiv.innerHTML = "<p>这是开源内容。</p>";
  }
}
