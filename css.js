let index = 100
let topElements = {
    header:{
        ref: document.getElementById("header"),
        grid(){
            this.ref["style"].width = 100 + "%"
            this.ref["style"].height = 100 / Object.keys(topElements).length + "%"
            this.ref["style"].background = "black" 
            this.ref["style"].position = "fixed"
            this.ref["style"].top = 0
            this.ref["style"].zIndex = 1
            this.ref["style"].fontSize = 0  
        },
        grid1(){
            let scroll = setInterval(function(){
              if (index > 34) {
                topElements.header.ref["style"].height = index / 3 + "%"
                topElements.body.ref["style"].top = topElements.header.ref["style"].height
                index -= .5
              } else{
                  clearInterval(scroll)
              }
             
            }, 15) 
        },
        grid2(){
            let scroll = setInterval(function(){
              if (index > 34) {
                topElements.header.ref["style"].height = index / 3 + "%"
                topElements.body.ref["style"].top = topElements.header.ref["style"].height
                index -= .5
              } else{
                  clearInterval(scroll)
              }
             
            }, 15) 
        } 
    },
    body:{
        ref: document.getElementById("body"),
        grid(){
            console.log(this)
            this.ref["style"].width = 100 + "%"
            this.ref["style"].minHeight = 100 / Object.keys(topElements).length * 2 + "%"
            this.ref["style"].background = "black"
            this.ref["style"].position = "absolute"
            this.ref["style"].marginTop = 0
            this.ref["style"].top = 0
            this.ref["style"].left = 0
            this.ref["style"].bottom = topElements.footer.ref["style"].height
            this.ref["style"].zIndex = -1
            this.ref["style"].fontSize = 0  
        }
    },
    footer:{
        ref: document.getElementById("footer"),
        grid(){
            this.ref["style"].width = 100 + "%"
            this.ref["style"].position = "absolute"
            this.ref["style"].bottom = 0
            this.ref["style"].height = 100 / (Object.keys(topElements).length * 2) + "%"
            this.ref["style"].background = "aqua"
            this.ref["style"].fontSize = 0  
        }
    }
}

let headerChildren = {
    el:{
        ref: document.getElementsByClassName("headerChild"),
        grid: function(){
            let index = 0
            while(index < headerChildren.el.ref.length){
                if(index === 0){
                    this.ref[index]["style"].width = 100 / this.ref.length + "%"
                    this.ref[index]["style"].height = 100 + "%"
                    this.ref[index]["style"].background = "#4a8af7"
                    this.ref[index]["style"].color = "white"
                    this.ref[index]["style"].display = "inline-block"
                    this.ref[index]["style"].fontSize = 0
                    
                } else {
                    this.ref[index]["style"].width = 100 / this.ref.length + "%"
                    this.ref[index]["style"].height = 100 + "%"
                    this.ref[index]["style"].background = "#4a8af7"
                    this.ref[index]["style"].color = "white"
                    this.ref[index]["style"].display = "inline-block"
                    this.ref[index]["style"].fontSize = 0
                }
                index++
            }
        }  
    }
}

let headerCText = {
    el:{
        ref: document.getElementsByClassName("headerChildText"),
        text: ["Video Collections", "Contact", "Articles"],
        grid: function(){
            let index = 0
            while(index < headerCText.el.ref.length){
                this.ref[index].innerHTML = this.text[index]
                index++
            }
        }  
    }
}

let bodyChildren = {
    el:{
        ref: document.getElementsByClassName("video"),
        grid: function(){
            let index = 0
            while(index < bodyChildren.el.ref.length){
                this.ref[index].style.width = 100 + "%"
                this.ref[index].style.height = 100 + "%"
                index++
            }
        }
    },
    elVideoPage: {
        ref: document.getElementsByClassName("videocontainer"),
        grid: function(){
            this.ref.style.width = 100 + "%"
            this.ref[index].style.height = 100 + "%"
        }
    },
    elContactPage: {
        ref: document.getElementsByClassName("container"),
        grid: function(){
            this.ref.style.width = 100 + "%"
            this.ref.style.top = 50 + "%"
        }
    },
    elArticlePage: {
        ref: document.getElementsByClassName("articles"),
        grid: function(){
            this.ref.style.position = "absolute"
            this.ref.style.top = 50 + "%"
            this.ref.style.color = "white"
            this.ref.style.fontSize = 20 + "px"
            this.ref.style.fontFamily = "Arial"
        }
    },
    elSidebar: {
        ref: document.getElementById("sidebar"),
        grid: function(){
            this.ref.style.position = "relative"
            this.ref.style.left = 0
            this.ref.style.bottom = 0
            this.ref.style.color = "white"
            this.ref.style.fontSize = 20 + "px"
            this.ref.style.fontFamily = "Arial"
            this.ref.style.background = "purple"
            this.ref.style.width = 10 + "%"
            this.ref.style.height = 100 + "%"
        }
    }
}

let footerChildren = {
    el:{
        ref: document.getElementsByClassName("footerChild"),
        grid: function(){
            let index = 0
            while(index < footerChildren.el.ref.length){
                this.ref[index].style.width = 100 / this.ref.length + "%"
                this.ref[index].style.height = 100 +"%"
                this.ref[index].style.background = "#a3b4d1"
                this.ref[index].style.display = "inline-block"
                index++
            }
        }  
    }
}

let {header, body, footer} = topElements 

function exe(obj){
    for(var item in obj){
        obj[item].grid()
    }
}   

document.getElementsByClassName("headerChild")[0].addEventListener("click", function(){
   document.getElementById("body").innerHTML += `
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>
    <iframe class = "video" src="http://www.youtube.com/embed/W7qWa52k-nE" frameborder="0" allowfullscreen>
          </iframe>`
});

document.getElementsByClassName("headerChild")[1].addEventListener("click", function(){
   document.getElementById("body").innerHTML = `
<div class = "container">
    <div class = contactcontainer">
        <form class = "contactform">
            <input type = "text">
            <input type = "text">
            <input type  = "submit">
        </form>
    </div>
</div>`
});

document.getElementsByClassName("headerChild")[2].addEventListener("click", function(){
   document.getElementById("body").innerHTML = `
    <div class = "articles">
        <div class = "article">
            <p>Hello How are you</p>
        </div>
        <div class = "article">
            <p>Hello How are you</p>
        </div>
        <div class = "article">
            <p>Hello How are you</p>
        </div>
        <div class = "article">
            <p>Hello How are you</p>
        </div>
        
    </div>`; 
});

(
    function(){
        exe(topElements)
        exe(headerChildren)
        exe(headerCText)
        exe(bodyChildren)
        exe(footerChildren)  
    }
)()


window.addEventListener("scroll", header.grid1)



