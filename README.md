# Solar system
This project is supposed to showcase our Solar system. It is composed of HTML template (wireframe) and a React App.

## Description
HTML template is made just with HTML and SCSS and serves to give an overview for the React app.

The first section of the React app is a display of planets rotating around the Sun, simplified without rotation on mobile. On desktop, if the users click the sun, the rotation stops.

The second section is a quiz of 10 questions, where the user can test their knowledge of the planets. After each answer, they can see which answer was correct. This quiz is an amended version of a tutorial for React and TypeScript quiz found [here](https://www.youtube.com/watch?v=F2JCjVSZlG). 
I completely reworked the API - instead of fetching the questions, I am fetching data from [this source](https://api.le-systeme-solaire.net/) and making my own questions. I also used SCSS instead of Styled Components, which I might change in the future.
I chose to do it this way, since this is my first TypeScript project. Like this I don't have to figure out everything from the start, but I am also learning a lot, as I had to amend the code and add to it.

## Stack
The app is made using React, TypeScript and SASS (SCSS).


## What's next
I will add information cards, so that the user can first learn about planets by clicking on them.

In the future, here are some possible additions I'm thinking about:
- adding the button to save score
- refacturing the questions so that they are created automatically and there's more of them
- adding the display of inner and outer planets separately so they can be shown to scale
- creating a 3D model of the planets

