# My-Tier Ultimate
***The data is my-tier than the sword!***

> A Front-End Project by [Bret Merritt](https://github.com/bretm9)

[Link to website](https://my-tier-ultimate.herokuapp.com/)
---
## Contents
1. [Overview](#overview)
1. [Setup](#setup)
1. [Technologies](#technologies)
1. [Design](#design)
1. [Evolution](#evolution)
1. [Challenges](#challenges)
1. [Successes](#successes)
---

## Overview

  This application was the final project of Module 3 in the Front-End Development program at Turing School of Software and Design. Through creating this website, I utilized TypeScript and React, alongside React Testing Library to develop a Super Smash Bros Ultimate wins tracker and tier-list generator application. I had 4 days to come up with my own unique app idea (MVP), plan, and build out this fully featured original app while working to hone all the technologies taught in this module of Turing.
  
  This app's goal is to help intermediate Super Smash Bros Ultimate players find out who their best character's are. The website displays all the characters from Super Smash Bros Ultimate along with their names. This data was accessed from [leocabeza's Smash Bros Unofficial API](https://github.com/leocabeza/smashbros-unofficial-api). The app allows users to track their wins and losses, and see useful stats for each character such as their tier ranks and win percentages. It also has a "mains" view where the user can store their favorite characters, and a tier-list view where the user can see exactly where all of their played characters rank in relation to each other.

> [Back to the top](#my-tier-ultimate)
---
## Setup

This website is deployed! Visit [this link](https://my-tier-ultimate.herokuapp.com/) to view it online.

  If you want to get it up and running on your local machine, follow these instructions:
    * Clone down this repo.
    * `cd` into the newly created repo.
    * Run `npm install` in the terminal.
    * Run `npm start` in the terminal.
    * If a browser window doesn't automatically open, navigate to `http://localhost:3000/` in your browser.

> [Back to the top](#my-tier-ultimate)
---
 ## Technologies
  - TypeScript
  - React
  - Router
  - React Testing Library
  - Jest
  - Continuous Integration
  - Fetch API
  - localStorage
  - userEvent
  - SASS
  - Git

> [Back to the top](#my-tier-ultimate)
---
## Design

  On the homepage, the user is presented with all the characters from Super Smash Bros Ultimate. There are options to track wins (+), losses (-), and main or unmain a character. When the user adds a win or loss, the win percentage is posted in the bottom-middle of the character card to indicate that character's win/loss ratio. 

  <img width="840" alt="Screen Shot 2020-11-09 at 7 17 14 PM" src="https://user-images.githubusercontent.com/14350203/98619297-31d46380-22c0-11eb-86c2-86cd658454aa.png">

  The search bar on the homepage will filter out characters by name as soon as the user starts typing. This makes it easier to find your main on the homepage. 

  <img width="840" alt="Screen Shot 2020-11-09 at 7 14 31 PM" src="https://user-images.githubusercontent.com/14350203/98619333-43b60680-22c0-11eb-9d56-057446e317c8.png">

  Clicking the `Mains` button will link to the Mains view. This view is very similar to the character container on the homepage, except it only shows characters that the user has mained. If the user unmains a character in this view, it will disappear from the page. The search bar is also functional in this view, and will filter mained characters by their name.

  <img width="840" alt="Screen Shot 2020-11-09 at 7 14 00 PM" src="https://user-images.githubusercontent.com/14350203/98619369-54667c80-22c0-11eb-9860-fe52b69a143f.png">

  The tier-list view is unique in that it only shows characters that you have tracked wins and/or losses for. It shows characters in the order of their tier. This view is greatly inspired by common Super Smash Bros tier lists, even when it comes to color choices and ranking names.

  <img width="840" alt="Screen Shot 2020-11-09 at 7 16 15 PM" src="https://user-images.githubusercontent.com/14350203/98619404-66e0b600-22c0-11eb-9340-f815ed623ce7.png">
  
  I'm proud to say that the app has been deisgned with accessibility in mind, and has recieved a 100% in accessibility in the Chrome Lighthouse Audit:
  
  <img width="840" alt="Screen Shot 2020-11-10 at 9 22 02 PM" src="https://user-images.githubusercontent.com/14350203/98842574-027c3e80-2407-11eb-9123-513eeab1546b.png">

> [Back to the top](#my-tier-ultimate)
---
## Evolution

  For this project I used a [GitHub Project Board](https://github.com/bretm9/my-tier-ultimate/projects/1) to plan out my course-of-action, and wireframes to visualise my design.
  
  <img width="840" alt="Screen Shot 2020-11-05 at 3 45 38 PM" src="https://user-images.githubusercontent.com/14350203/98619465-87107500-22c0-11eb-8216-c51c3dc663c7.png">

  <img width="840" alt="Screen Shot 2020-11-05 at 3 45 58 PM" src="https://user-images.githubusercontent.com/14350203/98619485-92fc3700-22c0-11eb-8c47-6a8eecdcbce4.png">

  <img width="840" alt="Screen Shot 2020-11-05 at 3 46 40 PM" src="https://user-images.githubusercontent.com/14350203/98619537-ae674200-22c0-11eb-95a4-313cc559f95f.png">

> [Back to the top](#my-tier-ultimate)
---
## Challenges  
 
  This project was a tough one since I only had a few days to create a fully fledged app based on my own original idea using the tools I'd learned in the last 6 weeks. Aside from React, TypeScript, and React Testing Library, I made it a focus to create an appealing visual aesthetic for both desktop and mobile using SASS. 
  
  In the past, my React projects have been fully focused on logic, and therefore the styling has been put on the back-burner. For this project, I wanted something that I was proud to showcase both the technical design, and the visual design. With such limited time, getting the CSS to play nicely definitely was a challenge, but I'm pleased to say I'm quite proud of the end-result.
 
> [Back to the top](#my-tier-ultimate)
---
## Successes
 
  A really encouraging aspect of this project was that the logic behind all the components only took me a day to develop. I was able to quickly whip up a react app that showcased my original app idea. This makes me feel confident in my ability to prototype project ideas to find new and creative apps to develop in React. 
  
  I also was happy with how the end product closely resembles my wireframe. It's easy to visualize want I *want* but making it into a reality is always tough, and sometime sacrifices make the end-product look much different than originally planned. This time I was really glad to see my end-product match nearly identically to my original wireframes!
  
> [Back to the top](#my-tier-ultimate)
 ---
