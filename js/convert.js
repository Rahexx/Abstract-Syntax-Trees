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

function createTag(object) {
    let tag = "";
    let textAtribut = renderAttributess(object.attributes);

    if (!checkSelfClosingTag(object.tagName)) {
        tag += `<${object.tagName} ${textAtribut}></${object.tagName}>`;
    } else {
        tag += `<${object.tagName} ${textAtribut}/>`;
    }

    return tag;
}

function renderChildren(children) {
    let text = "";
    let flag = false;

    for (const key in children) {

        text += createTag(children[key]);
    }

    return text
}

function createStartTag(object) {
    let tag = "";
    let textAtribut = renderAttributess(object.attributes);
    let children = renderChildren(object.children);
    console.log(children);

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