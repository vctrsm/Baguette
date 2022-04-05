# 🥖 - Baguette
## Yet another multipurpose Discord bot

Baguette is another multiputpose Discord bot, which will 
soon feature everything for all your Discord server needs.

## 🗺 - Baguette's roadmap

#### Done:

✅ - **NEW!** Own command handler!

#### In progress (⌨ = Currently writing, ⌛ = On queue):

⌨ - Beautiful help command

⌨ - Moderation commands

⌛ - Fun commands

⌛ - Economy system

⌛ - AI Chatbot

⌛ - Utility commands

⌛ - Music system

## 🎛 - Self-Hosting

In order to self-host, you need to read the LICENSE file, but if you're too lazy, it basically says:

Credit me in order to use this project, or else, it'll be taken down :)

No self-hosting guide yet!

## 💻 - Contributing

Want to contribute? Great! Make sure to have git installed from here: https://git-scm.com/

Click the “Fork” button at the top right.

You’ll now have your own copy of that repository in your github account.

Open a terminal/shell.

Type
```sh
$ git clone git@github.com:username/Baguette
```
where username is your username.

You’ll now have a local copy of your version of that repository.

Change into that project directory (Baguette):
```sh
$ cd Baguette-master
```
Add a connection to the original owner’s repository.

```sh
$ git remote add myfriend git://github.com/vctrsm/Baguette
```
Note the distinction between git@github.com: in the first case and git://github.com/ in the second case. The former is for the case that you have write access to the repository, whereas the latter is what to do when you only want read access.
```sh
$ git remote add repo_nickname git://github.com/myfriend/the_repo
```
To check this remote add set up:
```sh
$ git remote -v
```
Make changes to files.
```sh
git add 
```
and 
```sh
git commit
```
those changes
```sh
git push 
```
them back to github. These will go to your version of the repository.

Note: if you get an error like:
```sh
error: src refspec master does not match any.
error: failed to push some refs to 'git@github.com:username/the_repo'
```
Then try
```sh
git push origin HEAD:gh-pages 
```

Typing
```sh
git show-ref
```
can show what reference to put after HEAD.

Go to your version of the repository on github.

Click the “Pull Request” button at the top.

Note that myepository will be on the left and your repository will be on the right.

Click the green button “Create pull request”. Give a succinct and informative title, in the comment field give a short explanation of the changes and click the green button “Create pull request” again.

Pulling others’ changes
Before you make further changes to the repository, you should check that your version is up to date relative to your friend’s version.

Go into the directory for the project and type:
```sh
$ git pull Baguette master
```

This will pull down and merge all of the changes that I have made.

Now push them back to your github repository.
```sh
$ git push
```
If you followed all of these steps, congratulations! You have contributed on making Baguette better!
