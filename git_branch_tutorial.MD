//GIT BRANCHING TUTORIAL//

//DISPLAY GIT BRANCHES IN IDE TERMINAL

~ git branch
(*asterisk by branch name to let you know current checked out branch)

//UPDATE MASTER BRANCH BEFORE BRANCHING

~ git pull origin master

//CONSOLIDATED COMMAND TO CREATE BRANCH + BRANCH CHECKOUT

~git checkout -b <new-branch-name>
	
//WHEN READY TO COMMIT NEW CODE IN THE NEW BRANCH

~git add .
~git commit -m "message"
~git push origin <new-branch-name>
*make sure you commit changes before checking out another branch, can cause merge issues

//ON GITHUB REPOSITORY PAGE

-If option below GITHUB navbar doesn’t show "compare and pull" request button, 
manually click branches hyperlink next to branch dropdown button. 
From this screen, pull request button is visible per branch.

//ON PULL REQUEST PAGE

-Confirm MERGE FROM branch (new branch) and MERGE TO branch are correct. If merge conflicts exist, confirm which code
will be kept inside IDE, and commit that code.

//CLICK CREATE PULL REQUEST BUTTON

//HAVE SOMEONE OR YOURSELF MERGE PULL REQUEST

//IN IDE TERMINAL 

~git branch
~git checkout master
~git pull origin master

//PR COMPLETE, BRANCHES UPDATED