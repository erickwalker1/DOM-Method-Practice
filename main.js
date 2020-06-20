const button = document.createElement('button')

let buttonText = document.createTextNode("Remove")

button.appendChild(buttonText)

document.body.append(button)

const main = document.createElement('main')

document.body.appendChild(main)

const img = document.createElement('img')

img.className += "image"

img.setAttribute('src','https://blogs.forbes.com/ogdenpayne/files/2017/12/nipsey-cropped.jpg')

img.setAttribute("width", "300")
img.setAttribute("height", "300")

main.append(img)

const a = document.createElement('a')

a.className += "link"

const link = document.createTextNode('The Marathon Continues')

a.append(link)

a.href = "themarathonclothing.com"

main.append(a) 


button.addEventListener("click", function(){
      document.body.removeChild(main)
}) 