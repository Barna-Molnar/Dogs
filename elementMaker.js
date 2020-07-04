export function elementMaker(name, attributes, children) {
    var element = document.createElement(name)
    if (typeof attributes == "object") {
        Object.keys(attributes).forEach(attribute => {
            element[attribute] = attributes[attribute]
        })
    }
    if (children && children.length > 0) {
        children.forEach(child => {
            element.appendChild(child)
        })
    }
    return element
}