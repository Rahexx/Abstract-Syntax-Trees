import * as data from './ast';

const astJson = data.default.ast;
const selfCloseTag = ["img", "input", "frame", "area", "base", "br", "embed", "iframe", "source", "track"];

function checkSelfClosingTag(tag) {
    let flag = false;

    for (let i = 0; i < selfCloseTag.length; i++) {

        flag = tag === selfCloseTag[i] ? true : false;
        if (flag) break;
    }

    return flag;

}

function renderAttributess(attributes) {
    let text = "";

    for (let i = 0; i < attributes.length; i++) {
        for (const key in attributes[i]) {
            if (key === "name") text += `${attributes[i][key]}=`;
            if (key === "value") text += '"' + attributes[i][key] + '" ';
        }
    }

    return text
}

function renderChildren(children) {
    let text = "";
    let flag = true;

    for (const key in children) {

        if (children[key].nodeType == "element") {
            text += createStartTag(children[key]);
        }

        if (children[key].nodeType === "text") {
            text += children[key].value;
        }
    }
    return text
}

function createStartTag(object) {

    let tag = "";
    let textAtribut = renderAttributess(object.attributes);
    let children = renderChildren(object.children);

    if (!checkSelfClosingTag(object.tagName)) {
        tag += `<${object.tagName} ${textAtribut}>${children}</${object.tagName}>`;
    } else {
        tag += `<${object.tagName} ${textAtribut}/>`;
    }

    return tag;
}

function exportString() {
    let htmlText = "";
    htmlText += createStartTag(astJson);
    return htmlText;
}

export {
    exportString
};