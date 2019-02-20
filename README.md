# README

## Planning
I plan to follow the provided schedule setting aside. With exeption of the game engine, I will allow for one day for each component. As I anticipate the game engine itself may be challenging, I allowed for two days its completion. If i complete a component early I will move onto the next. Each component will be further broken down as outlined, focusing on one aspect of the project at a time.

I will break up the Javascript files as was recomended into app.js, events.js, api.js, and ui.js. I will also break up the CSS files to have one for color variables. This will help keep my code modular.

I think I will try to reprsent the game as an object that has an array for the board. I may fill the array initially with -1s to allow for an easy test case to see if the space is emtpty before adding the correct character to the array.

I will focus on extra flare or creative spin last, functionality and requirements come first.

I also plan to using the pomodoro method using a free app called "Be Focused," to avoid burnout.

## Schedule
[Provided Schedule](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/schedule.md)
```
WED 2/13 - Complete Planning and Set Up
THU 2/14 - Game UI Round 1
FRI 2/15 - Game Engine
SAT 2/16 - Game Engine
SUN 2/17 - Game UI Round 2
MON 2/18 - Authentication
TUE 2/19 - Game API
WED 2/19 - Final Touches
```

## User Stories
[Requirements](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/requirements.md)
I tried to create my user stories based on the requirements to ensure I was focused on what was important for the assignment.

```
1. As a user, I want to be able to sign-up, sign-in and log-out of my own account.
2. As a user, I want all forms to clear after I fill them to protect my information.
3. As a user, I want to be notified all actions, including successful/failed actions.
4. As a user, I want to be able to see when I am logged in.
5. As a user, I want to be able to change my password.
6. As a user, I want to be able to play a game of tic-tac-toe.
7. As a user, I want to see whos turn it currently is.
8. As a user, I want to be able to see if I won, lost or tied my opponent.
9. As a user, I want to be able to see how many games I've won and lost.
10. As a user, I want to be able to start a new game.
```

## Wireframes
I wanted to make my design simple to keep my focus on functionality over appearance. I also prefer a simple clean look.

[Sign-In/Out & Home Wireframes](https://i.imgur.com/XWsN3af.jpg)
[Game and Settings Wireframes](https://i.imgur.com/km7X8GW.jpg)
[Mobile Wireframe](https://i.imgur.com/kk9n3Mr.jpg)

## Technologies Used
```
1. Atom
2. Be Focused (pomodoro app)
3. HTML
4. CSS
5. Javascript
6. Bootstrap
```

## Development Process Story

# Phase 1: Project Planning
```
  During the planning process I reviewed the game project study, and made a
  rough schedule with timelines, based on the recommended schedule. I created
  a new user stories that more accurately reflected the project requirements
  and built new wireframes better capture the layout of my page.
```
# Phase 2: Set up
```
During this phase, I downloaded the template, created a git hub repository and
deployed a basic site to Github pages per the recomended schedule.
```
# Phase 3: Game UI Round 1
```
First I started by creating a simple board. I simply used a class training to
get the rough layout and altered it to meet my needs. I got a little distracted
here messing with css but then got myself back on track.

I added click handler to create an x on the board for each individual cell. I
later changed this to have one click handler that checked for the ID of the
cell rather each individual cell having thier own listener to recude the
amount of code.

The recomended schedule recomended checking if the click was a valid space and
not allow users to add and X or O to an invalid space. I thought it made more
sense to have a javascript board at this point and check validity based on the
board array.
```
# Phase 3: Game Engine
```
I first created a game object to mimic that of the api. I used an array for the
gameboard itself, two players and variable for the game being over.

At this point I added the validity check and for valid spaces.

I then created a boolean variable called player_xTurn that I orginially used to
swich turns. I later removed this and created a function to check for turn so
that my game only required a game array rather than needing to initalize a game
with additional variables.

Check for a winner. For this step I immediatley went to sudo code. I listed all
the winning combinations and tried to figure out if there was a mathamatical
way to find a winner. After a while I gave up and just decided to have an array
of all winning combinations. I originally decided to track each players moves
in a moves array, so that later I could create a feature to re-enact each game.

However, I didnt like to have to initalize the board with additional variables
so I wrote a funciton to get players moves and then check if it was a winning
combination.

I frequently ignored my pomodoro timer in this phase. I then tried to take
breaks at mile stones but ended up spending to many useless hours trying to
solve a problem that I could solve in minutes fresh and returned to the timer.
```
# Phase 4: Authentication
```
This phase was fairly quick as I used the auth files I had created in class and
just linked them up to the game API.

I had a couple issues here but found my answers within the issue que.
```

# Phase 5: Game API
```
This was the toughest phase as I had created variables that were not included
in the api and ended up just initalizing the game with my variables by altering
the store file. Then I'd only send the api the individual moves. I realized this
was flawed as it would be difficult to ever make this multiplayer/device or pick
up a game where you left off (Although I don't think anyone would ever care to),
because you'd lose all the variables needed for the game.

This is when I recreated my game logic to only require a gameboard array.
```
# Phase 6: Requirements
```
This phase was added in after I completed the API and realized that while I had
created the Authentication components I did not meet the requirements of the
sign-up/in/out. As the board needed to be hidden and the appropriate options
appear only when they should.
```
# Phase 7: Requirements 2.0
```
I also realized there was a requirement to visually display the results of
retrieving game statistics.

I then created a function to iterate through past games and display the users
stats on wins/loses/draws.
```
# Phase 8: Final Touches
```
I swapped the order of this styling first, troubleshooting and then creating
the READ ME as I had the time and I wanted my product to appear finished.
```
# Phase 9: Break This
```
As recommended by Jennifer Meade I posted my game link to be tested by my
peers for errors.
```
# Unsolved Problems
```
I wouldve liked to make my code a little more DRY and be more consistent on
variables.
```
# Future Changes / Additions
```
I wouldve liked to add a feature to highlight the winning row. 

I wouldve liked to make my game multiplayer from different devices. This is
why there is space under the new game button to allow for more menu items in
the future.

I would also like to add an option to face the computer.

Ability to add/change your user name, not just an email. Maybe even add a
profile picture.
```
