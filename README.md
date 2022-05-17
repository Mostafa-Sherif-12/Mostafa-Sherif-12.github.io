# Ez Lang
## Video Demo: ??URL??
## Description:
**Ez lang is a website that helps language learners start their journey by helping them tackle the first obstacle they will face; which is learning the letters**, alphabet or syllables of a new language. For English speakers it might be easy to learn languages such as Spanish, french or german; because they all use the same latin alphabet, with slight modifications of course, but for someone whose native language is Korean for example he/she will have to start by learning the alphabet then how to write it in order to progress further in the language and write words then sentences. Therefore I had the idea of creating a website that does just that by presenting the letters of a certain language, their spelling and how they're written.
## Idea:
What made me pursue this idea is knowing the struggle of learning a new language from scratch; as someone who natively speaks Arabic, learned to speak English & French and now is trying to learn Japanese, I struggled with learning the letters a lot and never found **a source specifically for learning the letters of a language**. Sure there are videos online and you can search to find images, however videos were a hassle to stop, resume, replay, etc. and photos just aren't complete (no sound & static). So I had the idea of creating a source for learning the letters of a language, you choose which language you want to learn and it will present you with the letters. What made this idea feasible, on a multilingual scale, is that **it only focuses on the letters of a language (shape identification, spelling & writing)**, it doesn't translate the meaning of words, it doesn't show you the grammar nor teach you sentences that you can say without even knowing how to write letters yet. **It is a source that language learners can rely on when they start learning a new language by introducing them to the letters** (the basic writing blocks) of that language.
## Design choices:
After the idea became clear in my mind, the next thing was choosing how to implement it. The choices that were suitable for such project were either a Flask application or a website. Being comfortable with Flask I was tempted to use it at first, but as I thought more and more about this project, it became clear to me that it isn't important to generate html dynamically nor to store data in a SQL database, **the most important aspect is presenting data on the website/app to the user in a clean, simple and easy to use format**. This made me think more about the html tags and CSS styling of the website rather than the users submissions, different routes and storing/updating data, then it became obvious that what I'm imagining is more of a website rather than a Flask application, and the programming/functions/conditions can be done using JavaScript instead. Therefore, I settled on making it a website using html/CSS/JavaScript rather than Flask as it would be more suitable.
## Components
### 1.html:
The html pages are the most essential and complex part of this project; as they contain most of the information that the user will be looking for when accessing the website. They are designed display their content in a way that's organized, uniform and easy to grasp from the user's perspective. There are 5 html pages in this project, the first one is **index.html** which is the homepage of the website, it consists of 2 parts:
1) the title and a brief description of the website's function.
2) the body with clickable buttons to redirect the user from the homepage to the page of the chosen language.

The rest of the html pages represent the languages available, each of which has a general structure of:
1) the title with the name of the language and any helpful notes or specifications about that language.
2) the main part which is a table containing all the letters of that language in a button that **when clicked plays the spelling of that letter**, a gif of how the letter is written, a word using that letter (to establish how the letter looks in a word) and a photo of the word's meaning.
3) the final part is a button that when clicked takes the user back to the homepage; so that he/she can access other languages.

Initially I wanted to add buttons that can redirect the user to any other language page in all html pages, but if this project would be expanded (up-scaled); for example to include 20 languages instead of 4, that would mean that each html page for the 20 languages will be modified to include 20 different buttons in the last section of the page, which will be time consuming and won't be aesthetically pleasing. Which takes me to the next point which is **the simplicity and ease of adding new languages to the website**, a web developer who knows the language can simply make an html page with the same template as all the other language pages, fill in the letters, add a button to redirect from the homepage to the new language and that's it!

*Note-1:* the main part of the language pages also contains a numbers table which I added for learners to see new numbers shapes; if they differ from the default English ones that everybody knows (0123456789).

*Note-2:* the website assumes that the user is fluent in English, a more refined version of the website would include the ability to choose the display language for the website from the homepage, however this can be also addressed using available modern tools such as browsers that can translate web pages.
### 2.CSS & styling:
In addition to organizing the website's content using html tags (div, table, hr, etc.), CSS was also used to make the site aesthetically pleasing. The website has a dark theme that extends over the homepage and all of the language pages, which gives the website a clean, elegant and modern look. Bootstrap (v4.6 to be exact) was also used to give the html elements a good and modern design.
### 3.JavaScript:
As the goal of the website was only to present the letters of a certain language, some simple functions were implemented using JavaScript. Firstly, It was used to redirect the users from one page to another using buttons (instead of the regular old-looking href html tag), which reinforces the modern look of the website. Secondly, It was used to play the sounds for the letters of a language when the button, on which the letter is shown, is clicked. At first I tried to implement this by having a different "name" attribute for each button, this soon proved problematic as I needed to write a function for each letter per language page, so I searched for a better way to implement this, then I stumbled upon CS50's web programming lecture talking about JavaScript and watched it. After watching it, I found somethings that might be helpful in my situation and tried them, the most useful of which were `document.getElementsByName("").forEach();` and the concept of **data sets** that can be added as unique html attributes then accessed later in JavaScript to uniquely identify every member of that html element (for example buttons), which made it possible for one function to identify all the different letters on every single page of the website! The final piece of the puzzle was to actually play the sound. By learning how to use placeholders in JavaScript and the audio object and its methods (such as `Audio.play();`), it was finally possible to play all the letters sounds with just one function.

### 4.Other components:
In addition to this *README.md* file, the directory where the website is located should also contain:
- 5 html pages (1 index page & 4 language pages)
- a JavaScript file (*script.js*)
- a CSS file (*style.css*)
- a gif image used on the index page
- 3 folders (images, sounds & writing)
    - *images/* contains the images for words
    - *sounds/* contains the letter sounds
    - *writing/* contains gif images about writing the letters

### Finally thank you for reading and this was **Ez Lang**!
---
---
---
