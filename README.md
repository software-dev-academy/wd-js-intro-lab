# Web Development – Javascript mini-lab

In this workshop you will get started with the basics of JavaScript. At your disposal is an HTML file [`sample_page.html`](sample_page.html) which will be the document we will be working on throughout. It contains the boilerplate HTML elements, a `div` and a `p` element with some text. 

#### Interactive JavaScript
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

#### JavaScript in HTML
Of course, we don't want to write the JavaScript manually every time we load a page so let's do another approach where we include the JavaScript in the HTML instead.

Head over to the sample_page.html (open it in your editor/IDE) and write a `<script>` element inside the `<body>` element *at the end*. And inside the `<script>` write the code we wrote in the console before:

```javascript
var paragraph = document.getElementById("my-paragraph");
```
If you now refresh the page in the browser and write `paragraph;` in the console you will see that the variable is defined, even when you reload the page. That means the JavaScript that is written in the HTML is run every time we load the document.

**Question I**
 What happens if we move the  `<script>` element to the beginning of the `<body>` element instead of the end? And why do you think this happens? 

#### JavaScript in separate file
The problem with writing JavaScript code inside the HTML is that it makes the document harder to read since it mixes code for structure and code for behaviour. It also makes it harder to reuse the same JavaScript code for other documents. So it is generally considered best practice to write the JavaScript in a separate file and linking to it in the HTML instead.

Create a new file called `script.js` in the same folder as your HTML file. Move the contents of the `<script>`  element (but not the `<script>` element itself) to your newly created script file. Afterwards, you can remove the `<script>` element. Now link to the script file in the HTML file by writing (inside the `<head>` element):
```
<script src="script.js"></script>
```
And if we go back to the browser, refresh the page and write `paragraph;` in the console, we'll see that the variable is...

...null

If you made a good guess at Question I you should be able to figure out what happened here as well. That's right – the script is executed before the `<p>` element is loaded so it cannot find the element and therefore, `getElementById` returns null.

The solution to this problem is to:
**1:** Wrap your code in a function, so:
```javascript
var paragraph = document.getElementById("my-paragraph");
```
becomes
```javascript
function main() {
    var paragraph = document.getElementById("my-paragraph");
}
```
**2:** Add the following line below:
```
document.addEventListener("DOMContentLoaded", main);
```
You don't have to worry too much about what the second line does, we'll cover it eventually. Refresh your browser, write `paragraph` in the console and if you've done everything correctly you should see...

...undefined. Well this didn't go as expected... or did it?

**Question II**
Why does it show undefined? Did the main function not run? And why is this actually a desired behaviour? Tip: this doesn't have to do with JavaScript specifically, but programming in general. Java also has its variation of this rule.

To come around this problem (which isn't actually a problem – it's a feature :)) we can have JavaScript print the element to the console for us. Just add (in the main function):
```javascript
console.log(paragraph);
```
And if you refresh the page you will see that the`<p>` element is already printed out in the console. And if you try to write `paragraph` it will be undefined, which it should be.
