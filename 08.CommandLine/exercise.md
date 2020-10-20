## Command Line Basics Exercise:

* Make a new folder named "Animals".
  => mkdir Animals

* Inside of "Animals" , add two directories:
  "AwesomeAnimals" and "SketchyAnimals".
  => mkdir AwesomeAnimals SketchyAnimals

* Inside of "AwesomeAnimals" add the following files:
  "Capybara.js", "ArcticFox.html", and "TreeFrog.txt".
  => touch Capybara.js ArcticFox.html TreeFrog.txt

* Inside of "SketchyAnimals" add the following files: "BrownRecluse.html" and 
  "BulletAnt.js"
  => touch BrownRecluse.html BulletAnt.js

* Also, inside of "SketchyAnimals", create a "Snakes" directory. Snakes are extra sketchy.
  => mkdir Snakes
  
* Inside the "Snakes" directory, create the following files:
  "Cobra.css" and "ReticulatedPython.py"
  => touch Cobra.css ReticulatedPython.py

* You have a change of heart and decide that bullet Ants are no longer sketchy. Remove the "BulletAnt.js" file.
  => rm BulletAnt.js 

* All animal life goes extinct. Delete the entire "Animals" directory.
  => rm -rf Animals

  **Bonus: See if you can do this without ever changing directories (without using cd)**
$ cd 8.CommandLine/
=> 8.CommandLine
$ ls
exercise.md     hello.html      message.txt
=> 8.CommandLine
$ mkdir Animals
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ cd Animals
=> Animals
$ mkdir AwesomeAnimals SketchyAnimals
=> Animals
$ ls
AwesomeAnimals  SketchyAnimals
=> Animals
$ cd AwesomeAnimals/
=> AwesomeAnimals
$ touch Capybara.js ArcticFox.html TreeFrog.txt
=> AwesomeAnimals
$ ls
ArcticFox.html  Capybara.js     TreeFrog.txt
=> AwesomeAnimals
$ cd..
bash: cd..: command not found
=> AwesomeAnimals
$ cd ..
=> Animals
$ cd SketchyAnimals/
=> SketchyAnimals
$ touch BrownRecluse.html BulletAnt.js
=> SketchyAnimals
$ ls
BrownRecluse.html BulletAnt.js
=> SketchyAnimals
$ mkdir Snakes
=> SketchyAnimals
$ ls
BrownRecluse.html BulletAnt.js Snakes
=> SketchyAnimals
$ cd Snakes/
=> Snakes
$ touch Cobra.css ReticulatedPython.py
=> Snakes
$ ls
Cobra.css ReticulatedPython.py
=> Snakes
$ cd ..
=> SketchyAnimals
$ ls
BrownRecluse.html BulletAnt.js Snakes
=> SketchyAnimals
$ rm BulletAnt.js 
=> SketchyAnimals
$ ls
BrownRecluse.html Snakes
=> SketchyAnimals
$ rm -rf Animals
=> SketchyAnimals
$ cd ..
=> Animals
$ rm -rf Animals
=> Animals
$ cd ..
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ rm -rf Animals
=> 8.CommandLine
$ mkdir Animals
=> 8.CommandLine
$ mkdir Animals/AwesomeAnimals
=> 8.CommandLine
$ mkdir Animals/SketchyAnimals
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ ls Animals
AwesomeAnimals  SketchyAnimals
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ touch Animals/AwesomeAnimals/Capybara.js
=> 8.CommandLine
$ touch Animals/AwesomeAnimals/ArcticFox.html
=> 8.CommandLine
$ touch Animals/AwesomeAnimals/TreeFrog.txt
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ ls Animals/AwesomeAnimals/
ArcticFox.html  Capybara.js     TreeFrog.txt
=> 8.CommandLine
$ ls Animals/SketchyAnimals/BrownRecluse.html
ls: Animals/SketchyAnimals/BrownRecluse.html: No such file or directory
=> 8.CommandLine
$ touch Animals/SketchyAnimals/BrownRecluse.html
=> 8.CommandLine
$ touch Animals/SketchyAnimals/BulletAnt.js
=> 8.CommandLine
$ ls Animals/SketchyAnimals/
BrownRecluse.html BulletAnt.js
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ mkdir Animals/SketchyAnimals/Snakes
=> 8.CommandLine
$ touch Animals/SketchyAnimals/Snakes/Cobra.css
=> 8.CommandLine
$ touch Animals/SketchyAnimals/Snakes/ReticulatedPython.py
=> 8.CommandLine
$ ls Animals/SketchyAnimals/Snakes/
Cobra.css ReticulatedPython.py
=> 8.CommandLine
$ ls
Animals exercise.md hello.html message.txt
=> 8.CommandLine
$ rm Animals/SketchyAnimals/BulletAnt.js 
=> 8.CommandLine
$ rm -rf Animals
=> 8.CommandLine
$ 
