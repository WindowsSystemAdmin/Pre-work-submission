# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ethan Lin

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/canary-fixed-magnesium

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Added a volume slider to adjust volume

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X]
<img src="https://cdn.glitch.com/834fe0dd-1afa-41c7-aa28-23e05fa09eee%2Fezgif.com-gif-maker%20(1).gif?v=1616618627973" width="250"><br>
<img src="https://cdn.glitch.com/834fe0dd-1afa-41c7-aa28-23e05fa09eee%2Fezgif.com-gif-maker%20(2).gif?v=1616618723209" width="250"><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    w3schools.com, tutorialspoint.com, geeksforgeeks.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    I think that the most challenging thing that I encountered in this submission is debugging. As I add certain elements to my project I have to test it to make sure that it is working like it is supposed to. Sometimes when it does not work I need to find where the source of the error is and fix it. One of the features I implement was to randomise the sequence of buttons when a new game is played. I used the Math. random function to each element in the array to accomplish that. The first time I implemented the function was under the playcluesequence function, when I played the game it would randomise the buttons every single time the clue was played. I had to process the script line by line as it would when executed, it took me a while to find the problem, but I eventually found it. I then realised that I needed to randomise the array elements in the global variables so that they can be randomised only once.  Debugging can be challenging to me sometimes, but with more and more experience I can understand the problem and find ways to apply solutions to the problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
   I understand that HTML works with JavaScript and Cascading style Script but is it possible to use HTML with other programming languages with or without JavaScript and Cascading Style Script? How does web pages/ web application communicate and interact with the server? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
   If I had a few more hours, I would like to add some of the optional features mentioned above, like adding more than one sound to each button. This is something that I have never tried before, but if I had more time, I would like to experiment with adding chords to each button!  I also would like to make the overall appearance of the project more presentable and colourful. Lastly, if I had more time, I would create different levels in the game, which includes increasing the time the clues are played and decreasing the amount the time a player has to repeat the pattern back.


## License

    Copyright Ethan Lin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
