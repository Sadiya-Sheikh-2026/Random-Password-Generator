# Random-Password-Generator
A repository for a simple web app that allows users to generate a safe random password for their various accounts that they may have.

## Proposal
My workplace deals with a large amount of confidential data that must be accessed using secure usernames and passwords on various platforms. Cybersecurity has recently been highlighted as a key aim for the organisation and part of this includes using more secure passwords to avoid leaks of confidential information that can lead to reputational damage. It can be hard to come up with a random collection of numbers or letters for a password which would generally be very secure option so instead you have people using easily guessable passwords for ease such as their name or birthday month. In order to reduce the burden of coming up with new passwords and wondering if they are secure enough, it would be so much easier if they were able to create a random password at the click of a button. This is where this very application comes into play. The aim of this app is to reduce colleagues' workloads and increase cybersecurity by creating a random collection of letters, numbers and special characters instantly. 

To represent the average user I created a user persona in figma which can be seen here:

![image of user persona](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/Steve_persona_template.png)

As seen above, it would be extremely helpful to have the password generator app as it would help the entire team to become more cybersecure. There is a continuous use case for the app as new members will inevitably join the team and will need to set up accounts on various platforms. Also, some platforms require users to change passwords often so it will also be of use then. Following this, I decided that it was appropriate to proceed with creating this web application.

## Design and Prototype
When thinking about the design of the application I aimed to make it look as simple as possible so that users are not afraid of using the app. Given that the average user will be someone like Steve who has many other tasks and responsibilities, I wanted to reduce the number of buttons and options so that the user does not have to spend a lot of time on the app. In order to do this I decided that only basic information would be collected and that the app would be visually simple. The basic information needed would include the length of the desired password and also what should be included in the password such as numbers, special characters or upper case letters. To simplify the app I decided to include checkboxes for the inclusion of particular characters and a simple text field to enter the length of the password as a number. After that the user simply needs to click a 'Generate password' button and the password is displayed. When thinking about the layout of these items I felt that a more vertical appearance would be most intuitive to use as it subconciously allows the user to flow through each option and then the output. 

To prototype my ideal app I used Figma to create a colour static prototype of my application. This can be seen here: 

![image of user persona](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/app_interface_prototype.png)

This successfuly shows the basic structure of the application I aimed to create.

## Project Management 
I first decided to set out my project into stages. They can overall be grouped into; preparation, code development, testing and launch. The overall plan can be seen visually here:  

![image of user persona](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/project_timeline.png)

To handle the process smoothly, I used GitHub issues to manage the project. To me the most intuitive way to log the tasks that needed to be completed was a Kanban so I used GitHub Projects to create a Kanban view of my tickets so that I can keep track of the tickets. I edited the view to add an extra column called 'Postponed for later version' so that additional features can be kept track of and don't take up space in the 'to-do' section. An example of the Kanban in the middle of my project can be seen here:

![image of user persona](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/kanban.png)

For the GitHub issues I also customised the labels to better suit the project. The various labels and their descriptions can be seen here: 

![image of user persona](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/issue_labels.png)

## Code production steps
For this web app I needed to create 3 files; a HTML file, a JavaScript (JS) file and a CSS file. The HTML file is needed to create the form that the user can provide inputs for, the JS file takes these inputs and contains a random password generator function which produces the output and the CSS file is used to set the style for the app such as colours and fonts. I used Visual Studio Code to write these scripts and pushed them to the repository at each stage.

The most basic version of the app requires just the HTML file and JS file so I focussed on these first before creating the CSS file at the end. The steps I took to create these files can be found below:

1. HTML file creation - I began by creating a HTML file that contained just an area to enter the length of the password and a button that later can be clicked to generate a password. This was part of the 'Preparation' stage so the aim at this point was to just have something that can be added to the repository. In the head section of the file I specified what the name of the application should be as well as other meta data. At this point I had not set the style of the web app as I had not created a CSS file for that yet.
2. I then created the initial JS file which simply took the user input for the length of the password and also made the 'generate password' button clickable. Again this was part of the 'Preparation' stage so only these functionalities were added just so that there was a JS file ready to push to the repository.
3. The next step was to link the HTML file to the JS file. I did this by using the line `<script src="app.js"></script>` after closing the body section of the HTML file as recommended in the course. I checked this locally before pushing by seeing if the button is clickable which it was. I then pushed this change to the repository.
4. Next the main coding stage began. I first expanded the HTML file, particularly the form section of the body to add further fields to the app such as checkboxes for the options available and an output box where the generated password is displayed. I also included the unique id tag in each item so that I can refer to them in the JS file so that user inputs can be used. Again I checked locally if this was visible and then pushed the change.
5. Next, I worked on the JS file by referring to the unique ID tags and allowing the program to capture the user inputs from the number input for the length of the password and the checkboxes for uppercase letters, special characters and numbers.
6. I then created the generateRandomPassword function in the JS file which uses if statements to create the pool of characters to choose from for the password and then I used Math.random to create a random combination of the pool which is the password. Then I made sure that this value was visible in the output box. I tested this locally before pushing.
7. The app is now functioning which is great but it looked bland and unappealing as it was plain. To fix this I created the CSS file. I named the file app.css and I set out the styles for the app such as the sizes of each box and the fonts for the text. I also set the colours using hex codes and preloaded colours and was able to almost match my prototype. I also centred the app to take up the middle 50% of the screen rather than it being skewed on one side as this looks more professional.
8. To apply these style changes I had to link this CSS file in the HTML file. I did so by adding the line `<link rel="stylesheet" href="app.css">` to the head section of the HTML file. I then refreshed the web app and was able to see the changes so I pushed the changes for both the files.
9. The app is now complete!

## Testing the app
### Initial basic test
After completing the initial HTML and JavaScript codes I decided to test out the app for myself. I began by launching it locally from my computer and the application looked as expected. I then ticked all the checkboxes and clicked the 'Generate Password' button and the application seemed to work as intended as you can see here:

![image of the initial app after selecting all possible options and generating password](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/app_test_1.png)

However, with further testing I noticed that when selecting just to include special characters or just to include numbers, the results were not as expected which can be seen below:

![image of the initial app after selecting the 'special characters' option](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/app_test_1.2.png)

![image of the initial app after selecting the 'numbers' option](https://github.com/Sadiya-Sheikh-2026/Random-Password-Generator/blob/main/images/app_test_1.3.png)

From this I was able to see that there was a bug in the JavaScript file which had swapped the funcitonality of the two buttons. Following this I was able to edit the file to fix the bug. 
After every code change whether it was a change to the HTML, JS or CSS file I always did a local test to see if the changes had been implemented. For example, after I had written and linked the CSS file, I refreshed the app and was able to see if the colours now appeared and if the fonts had updated. 

### Other tests
Due to time constraints I was unable to fdo further testing such as unittests and Test Driven Development but if there was more time I would have implemented these. 
