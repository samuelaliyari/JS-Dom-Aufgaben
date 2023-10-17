


const firstDiv = document.getElementById("info");
firstDiv.innerHTML = "<h1>Hello World!</h1><h2>How are you?</h2>"

document.write("<div id=container></div>")
const container = document.getElementById("container")

container.innerHTML = "<p>Start of the element</p> "

document.write(firstDiv.innerHTML);

document.write("end of the element");