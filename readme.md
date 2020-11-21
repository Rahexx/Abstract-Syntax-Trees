# [Abstract-Syntax-Trees](https://github.com/Rahexx/Abstract-Syntax-Trees)

> This is a practical project from Opanuj JavaScript course, the project is about convert Abstract Syntax Trees(AST) to String.

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Examples](#examples)
- [Status](#status)

## Technologies

- HTML5
- CSS3
- Javascript

## Setup

1. Clone this repo `https://github.com/Rahexx/Abstract-Syntax-Trees.git`
2. Go into project folder
3. Make sure you have Node.js with npm from [nodejs.org](https://nodejs.org/en/) or via [nvm](https://github.com/nvm-sh/nvm) | [n](https://github.com/tj/n)
4. Download all needed packages to run properly this project `$npm install -g parcel-bundler`
5. To start the program enter into the terminal `parcel index.html`

## Examples

CardVerify code by using

```
before convert ast to String:

"ast": {
        "nodeType": "element",
        "tagName": "div",
        "attributes": [{
            "name": "class",
            "value": "profile"
        }],
        "children": [{
                "nodeType": "element",
                "tagName": "img",
                "attributes": [{
                        "name": "class",
                        "value": "profile__avatar"
                    },
                    {
                        "name": "src",
                        "value": "https://www.thispersondoesnotexist.com/image"
                    },
                    {
                        "name": "alt",
                        "value": "Avatar"
                    }
                ]
            },
            {
                "nodeType": "element",
                "tagName": "div",
                "attributes": [{
                    "name": "class",
                    "value": "profile__details"
                }],
            }
        ]
    }

after convert ast to String:

<div class="profile" ><img class="profile__avatar" src="https://www.thispersondoesnotexist.com/image" alt="Avatar" /><div class="profile__details" ></div></div>

```

## Status

Project is _finished_.
