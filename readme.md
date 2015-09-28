# GAME SELECTOR
This app suggests the best suited table top game to purchase or play. The user simply puts in the parameters such as time, number of people etc.. Additionally the dice images in the corners, links to a virtual dice/die page, which can be used to roll random 1-6 numbers.

![alt tag](http://i.imgur.com/RzpxtIV.png)

#Build process
The requirement was to build this project in a very short time frame of less than a week.
I want to try out and incorporate as many new feature that I have learned. These included __React__, __GULP__, __SASS__ and previously used features, Ruby on Rails, HTML5, CSS3 and Javascript.

###Firstly I made a wireframe
* In the centre is the main page where parameters are entered and results are displayed. I made a small real database with real games.
* On the left is the flow of data from back to front end. 
* On the right is a page called 'game', the user could select a game from listed results and see further details and reviews etc... This page has not been added to the app yet. There are no reviews and not enough detailed game data for this page (As i have used real data so far, I did not want to then add fake generated data).
* The dice feature was thought of, after the wireframe was made. So it does not appear in the wireframe. 

![alt tag](http://imgur.com/yExH5Gp.jpg)

##TECH - Learned, improved, frustrations

__Gulp__<br>
I immediately setup up Gulp with the following:

 * sass
 * uglify
 * connect
 * browserify
 * autoprefixer 

It was a huge time saver to be able to make a change to the code and have it instantly reload so I could see the effect. 

__Title__<br>
The title banner was a huge frustration. The issue was when the browser is resized, the text "GAME SELECTOR" would not keep its proportions to the background image. Also having the background image always stretching and fitting perfectly to the DIV was almost impossible. I found out that I could use 1 of 2 solutions.

* Divide it into 3 parts with the ends which have the screws as 2 separate images, and the centre piece enlarging which includes the title name.
* Move it to an image editor and make it into a single image.

I opted to make it a single image.

__React__<br>
I wanted to follow best practice - DRY (Don't Repeat Yourself). I needed at least 3 identical 1-10 dropdown boxes. So I thought this would be an ideal time to use a React custom tag. I built a custom tag i called '< Choice />' and then rendered it to the parameters box 3 times.

I found this great practice in using React. It effectively created exactly the dropdown boxes I wanted. It also reduced the repetition. Unfortunately this later became an issue when passing the data from these dropdown boxes to the back end. As such I ended up commenting out the React part of the code. It was great practice no the less.

__JS Logic__

The logic was fairly complicated. The Back-end would send 2 Hashes. 

 * __gameresult__: Hash of all games that could be played by user (=< time frame and difficulty level etc..)
 * __bestmatch__: Hash containing an aggregate score showing numerically how close the game parameters are to the user.

In Javascript, I took the 'bestmatch' hash and using this hash I ordered the 'gameresults', with those closest to user preferences first and those least suited last. Then in this order I appended the 'gameresults' hash to the results DIV in the markup.

JQuery was very useful for writing the functions to make this logic possible.
