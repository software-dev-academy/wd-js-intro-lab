# Web Development – Javascript mini-lab

In this workshop you will get started with the basics of JavaScript. At your disposal is an HTML file [`sample_page.html`](sample_page.html) which will be the document we will be working on throughout. It contains the boilerplate HTML elements, a `div` and a `p` element with some text. 

#### 1. Interactive JavaScript
Start out by opening the document in your browser and also opening the your browser's *Developer Tools*. In most browsers this can be done by pressing `Shift` +`Ctrl` + `I` (Windows/Linux) or `Cmd` + `Shift` + `C` (Mac). If it doesn't work, check [this page](https://debugbrowser.com), it has instructions for the most common browsers. If you've done it correctly you should see something like this (this is Chrome's dev. tool, it might look a bit different on other browsers):

<img src="images/dev-tools-chrome.png">

The tabs we are focusing on first is "Elements" and "Console". *Elements*  show us the current structure of our HTML document. *Console* allows us to dynamically write JavaScript which will be applied to the document. Head over to the *Console* tab and write the following:
```javascript
var paragraph = document.getElementById("my-paragraph");
```
press Enter and then write:
```javascript
paragraph;
```
You should now see that the variable *paragraph* contains our paragraph element. Congratulations, you just successfully wrote some JavaScript! But, if you reload the page and write `paragraph;` again you will see that the variable is no longer is defined.
