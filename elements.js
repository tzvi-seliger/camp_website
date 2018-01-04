
//Top Level Elements
let structure = [
  "div",
  "div",
  "div"
]
let [header, body, footer] = structure
let topElements = {
    header: {
        styles:{
            background: "blue",
            borderRadius: 1000 + "px",
            width: 1000 + "px",
            height: 1000 + "px",
        }
    },
    body: {
        styles:{
            background: "pink",
            borderRadius: 1000 + "px",
            width: 1000 + "px",
            height: 1000 + "px",
        }
    },
    footer: {
        styles:{
            background: "orange",
            borderRadius: 1000 + "px",
            width: 1000 + "px",
            height: 1000 + "px",
        }
    }
}
//Top Level Elements Children
let headerChildren = [
  "input", "textarea", "div", "input", "textarea", "div", "input", "textarea", "div", "input", "textarea", "div" 
]
let bodyChildren = [
  "input", "textarea", "div", "input", "textarea", "div", "input", "textarea", "div", "input", "textarea", "div" 
]
let footerChildren = [
  "input", "textarea", "div", "input", "textarea", "div", "input", "textarea", "div", "input", "textarea", "div" 
]
//create new Element
var $ = (elname) => document.createElement(elname)
//add node to html doc
var add = (child) => document.body.appendChild(child)
//add and create an element
var make = (el) => add($(el))
// append element to another element
var append = (el, children) => {
  var el = $(el)
  var child = children.map((item) => $(item))
  child.forEach((item) => el.appendChild(item))
  return el
}
//create text
var text = (txt) => document.createTextNode(txt)
//using append to attach children to top level elements
let headerElement = append(header, headerChildren)
let bodyElement = append(body, bodyChildren)
let footerElement = append(footer, footerChildren)
// add top level elements to document
add(headerElement)
add(bodyElement)
add(footerElement)


structure.forEach(function(item){
    for(var element in topElements){
        for(var styler in element.styles)
      item["style"].styler = element.styles[styler]
    } 
})
