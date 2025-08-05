const Question = [
  {
    id: 1,
    ques: "What does HTML stand for?",
    option: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Text Module Language",
      "None of the above"
    ],
    Ans: "HyperText Markup Language"
  },
  {
    id: 2,
    ques: "Which HTML tag is used to define an internal style sheet?",
    option: ["<style>", "<css>", "<script>", "<link>"],
    Ans: "<style>"
  },
  {
    id: 3,
    ques: "What does CSS stand for?",
    option: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets"
    ],
    Ans: "Cascading Style Sheets"
  },
  {
    id: 4,
    ques: "Which property is used to change the background color?",
    option: ["color", "background-color", "bg-color", "background"],
    Ans: "background-color"
  },
  {
    id: 5,
    ques: "Which HTML attribute is used to define inline styles?",
    option: ["class", "style", "font", "styles"],
    Ans: "style"
  },
  {
    id: 6,
    ques: "Inside which HTML element do we put the JavaScript?",
    option: ["<script>", "<js>", "<javascript>", "<code>"],
    Ans: "<script>"
  },
  {
    id: 7,
    ques: "How do you write 'Hello World' in an alert box?",
    option: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');"
    ],
    Ans: "alert('Hello World');"
  },
  {
    id: 8,
    ques: "Which symbol is used for comments in JavaScript?",
    option: ["//", "/*", "<!--", "#"],
    Ans: "//"
  },
  {
    id: 9,
    ques: "Which event occurs when the user clicks on an HTML element?",
    option: ["onmouseclick", "onchange", "onclick", "onmouseover"],
    Ans: "onclick"
  },
  {
    id: 10,
    ques: "Which tag is used to make a numbered list?",
    option: ["<ul>", "<ol>", "<li>", "<list>"],
    Ans: "<ol>"
  },
  {
    id: 11,
    ques: "Which company developed JavaScript?",
    option: ["Netscape", "Microsoft", "Google", "IBM"],
    Ans: "Netscape"
  },
  {
    id: 12,
    ques: "What does the 'DOM' stand for in web development?",
    option: [
      "Document Object Model",
      "Data Object Model",
      "Digital Output Manager",
      "Document Oriented Model"
    ],
    Ans: "Document Object Model"
  },
  {
    id: 13,
    ques: "Which HTTP method is used to fetch data?",
    option: ["GET", "POST", "PUT", "DELETE"],
    Ans: "GET"
  },
  {
    id: 14,
    ques: "Which method converts JSON data into JavaScript object?",
    option: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "objectify()"],
    Ans: "JSON.parse()"
  },
  {
    id: 15,
    ques: "Which HTML element is used for navigation?",
    option: ["<nav>", "<header>", "<menu>", "<section>"],
    Ans: "<nav>"
  },
  {
    id: 16,
    ques: "Which tag is used to embed an image in HTML?",
    option: ["<image>", "<img>", "<pic>", "<photo>"],
    Ans: "<img>"
  },
  {
    id: 17,
    ques: "Which tag is used to create a hyperlink?",
    option: ["<a>", "<link>", "<href>", "<hyper>"],
    Ans: "<a>"
  },
  {
    id: 18,
    ques: "Which protocol is used for secure web communication?",
    option: ["HTTP", "HTTPS", "FTP", "SMTP"],
    Ans: "HTTPS"
  },
  {
    id: 19,
    ques: "What is the default port number for HTTP?",
    option: ["443", "21", "80", "22"],
    Ans: "80"
  },
  {
    id: 20,
    ques: "Which CSS property controls the text size?",
    option: ["font-style", "text-size", "font-size", "size"],
    Ans: "font-size"
  },
  {
    id: 21,
    ques: "Which unit is used in CSS for relative font size?",
    option: ["px", "cm", "em", "inch"],
    Ans: "em"
  },
  {
    id: 22,
    ques: "Which tool is used for version control?",
    option: ["Git", "Figma", "JIRA", "Slack"],
    Ans: "Git"
  },
  {
    id: 23,
    ques: "Which command is used to initialize a git repository?",
    option: ["git init", "git start", "git create", "git new"],
    Ans: "git init"
  },
  {
    id: 24,
    ques: "React is a ___ library.",
    option: ["Backend", "Database", "UI", "Styling"],
    Ans: "UI"
  },
  {
    id: 25,
    ques: "Which hook is used for state management in React?",
    option: ["useEffect", "useState", "useRef", "useContext"],
    Ans: "useState"
  },
  {
    id: 26,
    ques: "Which method is used to add elements to an array in JavaScript?",
    option: ["add()", "append()", "push()", "insert()"],
    Ans: "push()"
  },
  {
    id: 27,
    ques: "In React, JSX stands for?",
    option: [
      "JavaScript Syntax Extension",
      "Java Standard XML",
      "JavaScript XML",
      "Java Syntax Expression"
    ],
    Ans: "JavaScript XML"
  },
  {
    id: 28,
    ques: "Which CSS framework provides utility-first classes?",
    option: ["Bootstrap", "Material UI", "Tailwind CSS", "Foundation"],
    Ans: "Tailwind CSS"
  },
  {
    id: 29,
    ques: "What is used to make web pages responsive?",
    option: ["Media Queries", "HTML5", "Flexbox", "Bootstrap"],
    Ans: "Media Queries"
  },
  {
    id: 30,
    ques: "Which HTTP status code means 'Not Found'?",
    option: ["200", "403", "404", "500"],
    Ans: "404"
  },
  {
    id: 31,
    ques: "Which property is used to align text to center in CSS?",
    option: ["text-style", "text-align", "align", "font-align"],
    Ans: "text-align"
  },
  {
    id: 32,
    ques: "Which input type is used for email fields?",
    option: ["text", "email", "password", "mail"],
    Ans: "email"
  },
  {
    id: 33,
    ques: "What is the extension for JavaScript files?",
    option: [".js", ".jsx", ".json", ".java"],
    Ans: ".js"
  },
  {
    id: 34,
    ques: "Which HTML tag is used to define a table?",
    option: ["<table>", "<tbl>", "<tab>", "<data>"],
    Ans: "<table>"
  },
  {
    id: 35,
    ques: "Which attribute is used to set image path in HTML?",
    option: ["src", "href", "link", "path"],
    Ans: "src"
  },
  {
    id: 36,
    ques: "Which tag is used to create a dropdown list?",
    option: ["<select>", "<option>", "<dropdown>", "<list>"],
    Ans: "<select>"
  },
  {
    id: 37,
    ques: "Which keyword is used to declare a constant in JS?",
    option: ["var", "let", "const", "static"],
    Ans: "const"
  },
  {
    id: 38,
    ques: "How to add a comment in HTML?",
    option: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
    Ans: "<!-- comment -->"
  },
  {
    id: 39,
    ques: "Which of the following is not a frontend language?",
    option: ["JavaScript", "HTML", "CSS", "Python"],
    Ans: "Python"
  },
  {
    id: 40,
    ques: "What is the default display of a <div> element?",
    option: ["inline", "block", "inline-block", "none"],
    Ans: "block"
  },
  {
    id: 41,
    ques: "Which language is used to interact with databases?",
    option: ["SQL", "HTML", "CSS", "PHP"],
    Ans: "SQL"
  },
  {
    id: 42,
    ques: "Which attribute is used to open link in new tab?",
    option: ["target='_blank'", "open='new'", "window='tab'", "blank='true'"],
    Ans: "target='_blank'"
  },
  {
    id: 43,
    ques: "Which CSS property makes text bold?",
    option: ["font-weight", "font-style", "font-bold", "text-weight"],
    Ans: "font-weight"
  },
  {
    id: 44,
    ques: "How do you declare a JavaScript function?",
    option: [
      "function = myFunction()",
      "function myFunction()",
      "let function myFunction()",
      "define myFunction()"
    ],
    Ans: "function myFunction()"
  },
  {
    id: 45,
    ques: "Which method is used to remove last element of an array?",
    option: ["pop()", "remove()", "delete()", "shift()"],
    Ans: "pop()"
  },
  {
    id: 46,
    ques: "Which HTML tag is used to insert a line break?",
    option: ["<break>", "<br>", "<lb>", "<line>"],
    Ans: "<br>"
  },
  {
    id: 47,
    ques: "Which tag represents a paragraph in HTML?",
    option: ["<para>", "<p>", "<paragraph>", "<text>"],
    Ans: "<p>"
  },
  {
    id: 48,
    ques: "Which method is used to access an element by ID in JS?",
    option: ["getElementById()", "querySelector()", "getID()", "getElement()"],
    Ans: "getElementById()"
  },
  {
    id: 49,
    ques: "Which file is commonly used to define project dependencies?",
    option: ["package.json", "index.js", "main.js", "config.json"],
    Ans: "package.json"
  },
  {
    id: 50,
    ques: "Which library is used for making HTTP requests in React?",
    option: ["Axios", "Bootstrap", "JQuery", "Redux"],
    Ans: "Axios"
  },
   {
    id: 51,
    ques: "What does HTML stand for?",
    option: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "High Text Machine Language"],
    Ans: "Hyper Text Markup Language"
  },
  {
    id: 52,
    ques: "Which HTML tag is used to define an internal style sheet?",
    option: ["<style>", "<css>", "<script>", "<link>"],
    Ans: "<style>"
  },
  {
    id: 53,
    ques: "Which HTML tag is used to insert an image?",
    option: ["<image>", "<img>", "<pic>", "<src>"],
    Ans: "<img>"
  },
  {
    id: 54,
    ques: "What is the correct HTML element for the largest heading?",
    option: ["<h6>", "<head>", "<h1>", "<heading>"],
    Ans: "<h1>"
  },
  {
    id: 55,
    ques: "Which attribute is used to provide an alternative text for an image?",
    option: ["alt", "title", "src", "longdesc"],
    Ans: "alt"
  },
  {
    id: 56,
    ques: "Which element is used to create a hyperlink?",
    option: ["<a>", "<link>", "<href>", "<url>"],
    Ans: "<a>"
  },
  {
    id: 57,
    ques: "What is the correct HTML element to insert a line break?",
    option: ["<break>", "<br>", "<lb>", "<hr>"],
    Ans: "<br>"
  },
  {
    id: 58,
    ques: "Which tag is used to define a table row?",
    option: ["<td>", "<th>", "<tr>", "<table>"],
    Ans: "<tr>"
  },
  {
    id: 59,
    ques: "Which tag is used to define an unordered list?",
    option: ["<ol>", "<li>", "<ul>", "<list>"],
    Ans: "<ul>"
  },
  {
    id: 60,
    ques: "What is the correct way to open a link in a new tab?",
    option: ['target="_blank"', 'target="newtab"', 'href="newtab"', 'blank="true"'],
    Ans: 'target="_blank"'
  },
  {
    id: 61,
    ques: "Which tag is used to create a checkbox in HTML?",
    option: ["<checkbox>", "<input type='check'>", "<input type='checkbox'>", "<check>"],
    Ans: "<input type='checkbox'>"
  },
  {
    id: 62,
    ques: "What is the correct HTML for creating a text input field?",
    option: ["<input type='text'>", "<textinput>", "<input type='textbox'>", "<textfield>"],
    Ans: "<input type='text'>"
  },
  {
    id: 63,
    ques: "Which tag is used for inserting a horizontal line?",
    option: ["<hr>", "<line>", "<hline>", "<breakline>"],
    Ans: "<hr>"
  },
  {
    id: 64,
    ques: "Which attribute specifies the URL of the page the link goes to?",
    option: ["href", "src", "link", "url"],
    Ans: "href"
  },
  {
    id: 65,
    ques: "Which HTML element defines the title of a document?",
    option: ["<meta>", "<head>", "<title>", "<header>"],
    Ans: "<title>"
  },
  {
    id: 66,
    ques: "Which HTML tag is used to define a paragraph?",
    option: ["<p>", "<para>", "<text>", "<paragraph>"],
    Ans: "<p>"
  },
  {
    id: 67,
    ques: "Which input type is used for a password field?",
    option: ["text", "password", "pass", "hidden"],
    Ans: "password"
  },
  {
    id: 68,
    ques: "What is the correct HTML for making a checkbox pre-checked?",
    option: ["checked='checked'", "check='true'", "selected", "default='yes'"],
    Ans: "checked='checked'"
  },
  {
    id: 69,
    ques: "Which tag is used to define a drop-down list?",
    option: ["<dropdown>", "<select>", "<option>", "<list>"],
    Ans: "<select>"
  },
  {
    id: 70,
    ques: "How can you make a numbered list?",
    option: ["<ul>", "<ol>", "<dl>", "<list>"],
    Ans: "<ol>"
  },
  {
    id: 71,
    ques: "Which tag is used to define a cell in a table?",
    option: ["<td>", "<tr>", "<th>", "<cell>"],
    Ans: "<td>"
  },
  {
    id: 72,
    ques: "How do you add a comment in HTML?",
    option: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    Ans: "<!-- comment -->"
  },
  {
    id: 73,
    ques: "Which tag is used to play video files in HTML?",
    option: ["<video>", "<media>", "<movie>", "<vid>"],
    Ans: "<video>"
  },
  {
    id: 74,
    ques: "Which element is used for the main content of the document?",
    option: ["<main>", "<body>", "<content>", "<section>"],
    Ans: "<main>"
  },
  {
    id: 75,
    ques: "What is the correct HTML for adding a background color?",
    option: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<bgcolor='yellow'>", "<body bg='yellow'>"],
    Ans: "<body style='background-color:yellow;'>"
  },
  {
    id: 76,
    ques: "Which element represents a section of navigation links?",
    option: ["<nav>", "<menu>", "<link>", "<navigate>"],
    Ans: "<nav>"
  },
  {
    id: 77,
    ques: "Which HTML tag is used to define italic text?",
    option: ["<italic>", "<i>", "<em>", "<it>"],
    Ans: "<i>"
  },
  {
    id: 78,
    ques: "Which tag defines emphasized text with importance?",
    option: ["<i>", "<em>", "<strong>", "<bold>"],
    Ans: "<strong>"
  },
  {
    id: 79,
    ques: "Which tag is used to embed an iframe?",
    option: ["<iframe>", "<frame>", "<embed>", "<window>"],
    Ans: "<iframe>"
  },
  {
    id: 80,
    ques: "Which doctype declaration is correct for HTML5?",
    option: ['<!DOCTYPE html>', '<!DOCTYPE HTML PUBLIC>', '<DOCTYPE html>', '<html doctype>'],
    Ans: '<!DOCTYPE html>'
  },
  {
  id: 81,
  ques: "What does CSS stand for?",
  option: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
  Ans: "Cascading Style Sheets"
},
{
  id: 82,
  ques: "Which HTML tag is used to link an external CSS file?",
  option: ["<link>", "<style>", "<script>", "<css>"],
  Ans: "<link>"
},
{
  id: 83,
  ques: "Which property is used to change the text color in CSS?",
  option: ["font-color", "color", "text-color", "style-color"],
  Ans: "color"
},
{
  id: 84,
  ques: "What is the correct CSS syntax to make all `<p>` elements bold?",
  option: ["p {font-weight: bold;}", "p {text-weight: bold;}", "<p style='bold'>", "bold p"],
  Ans: "p {font-weight: bold;}"
},
{
  id: 85,
  ques: "Which property is used to change the background color?",
  option: ["color", "bgcolor", "background-color", "background"],
  Ans: "background-color"
},
{
  id: 86,
  ques: "What is the default position value of an HTML element?",
  option: ["static", "relative", "absolute", "fixed"],
  Ans: "static"
},
{
  id: 87,
  ques: "Which unit is relative to the font-size of the element?",
  option: ["px", "%", "em", "pt"],
  Ans: "em"
},
{
  id: 88,
  ques: "What does `z-index` property in CSS control?",
  option: ["Text size", "Stacking order", "Element width", "Opacity"],
  Ans: "Stacking order"
},
{
  id: 89,
  ques: "How can you make a list not display bullets?",
  option: ["list-style-type: none;", "bullet: none;", "list: hidden;", "text-decoration: none;"],
  Ans: "list-style-type: none;"
},
{
  id: 90,
  ques: "Which value of `position` places an element relative to the browser window?",
  option: ["static", "fixed", "absolute", "relative"],
  Ans: "fixed"
},
{
  id: 91,
  ques: "Which CSS property is used to control spacing between letters?",
  option: ["letter-spacing", "word-spacing", "line-height", "font-spacing"],
  Ans: "letter-spacing"
},
{
  id: 92,
  ques: "Which selector selects all elements of a given class?",
  option: [".classname", "#classname", "*classname", "classname"],
  Ans: ".classname"
},
{
  id: 93,
  ques: "Which property makes text italic?",
  option: ["font-weight", "font-style", "text-transform", "text-style"],
  Ans: "font-style"
},
{
  id: 94,
  ques: "What is the correct syntax to make a div take up the full width of its parent?",
  option: ["width: 100%;", "width: auto;", "display: full;", "max-width: 100%;"],
  Ans: "width: 100%;"
},
{
  id: 95,
  ques: "How do you make a class in CSS?",
  option: [".myclass {}", "#myclass {}", "myclass {}", "class.myclass {}"],
  Ans: ".myclass {}"
},
{
  id: 96,
  ques: "Which property is used to add space inside an element’s border?",
  option: ["margin", "spacing", "padding", "gap"],
  Ans: "padding"
},
{
  id: 97,
  ques: "Which property sets the outer space of an element?",
  option: ["padding", "margin", "border", "outline"],
  Ans: "margin"
},
{
  id: 98,
  ques: "What value of display hides an element but keeps it in DOM?",
  option: ["visibility: hidden;", "display: none;", "opacity: 0;", "hide: true;"],
  Ans: "visibility: hidden;"
},
{
  id: 99,
  ques: "Which property controls the size of text?",
  option: ["font-size", "text-size", "size", "text-style"],
  Ans: "font-size"
},
{
  id: 100,
  ques: "Which keyword is used for inheritance in CSS?",
  option: ["inherit", "extend", "include", "pass"],
  Ans: "inherit"
},
{
  id: 101,
  ques: "Which property defines how the background image will be repeated?",
  option: ["background-repeat", "repeat", "image-repeat", "bg-repeat"],
  Ans: "background-repeat"
},
{
  id: 102,
  ques: "What value makes a background image not repeat?",
  option: ["repeat-x", "no-repeat", "none", "repeat-none"],
  Ans: "no-repeat"
},
{
  id: 103,
  ques: "How can you apply a style to all `<h1>` and `<h2>` elements?",
  option: ["h1, h2 {}", "h1 h2 {}", "#h1, #h2 {}", ".h1, .h2 {}"],
  Ans: "h1, h2 {}"
},
{
  id: 104,
  ques: "Which shorthand property sets margin on all sides?",
  option: ["margin", "padding", "space", "box"],
  Ans: "margin"
},
{
  id: 105,
  ques: "What is the use of `opacity` in CSS?",
  option: ["Control visibility", "Make text bold", "Rotate element", "Set padding"],
  Ans: "Control visibility"
},
{
  id: 106,
  ques: "Which pseudo-class is used to style a link when hovered?",
  option: [":hover", ":focus", ":visited", ":active"],
  Ans: ":hover"
},
{
  id: 107,
  ques: "Which CSS property can add shadow to text?",
  option: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
  Ans: "text-shadow"
},
{
  id: 108,
  ques: "Which property is used to round the corners of an element?",
  option: ["border-radius", "corner-style", "radius", "border-style"],
  Ans: "border-radius"
},
{
  id: 109,
  ques: "Which function in CSS is used for transitions?",
  option: ["transition", "animation", "transform", "duration"],
  Ans: "transition"
},
{
  id: 110,
  ques: "Which CSS property allows elements to float left or right?",
  option: ["float", "align", "position", "clear"],
  Ans: "float"
}

];

export default Question;