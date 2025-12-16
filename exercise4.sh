
echo "Hello, Full Stack Developer!"
mkdir -p logs
touch logs/app.log
date >> logs/app.log

output

Harsha@Harsha MINGW64 ~/devtraining (main)
$ cd ~/devtraining

Harsha@Harsha MINGW64 ~/devtraining (main)
$ bash exercise4.sh
Hello, Full Stack Developer!

Harsha@Harsha MINGW64 ~/devtraining (main)
$ ls
README.md     exercise2.md  file1.txt          logs/
execrise3.md  exercise3.md  file1_backup.txt   script.sh
exercise1.md  exercise4.sh  file2_renamed.txt

Harsha@Harsha MINGW64 ~/devtraining (main)
$ ls logs
app.log

Harsha@Harsha MINGW64 ~/devtraining (main)
$ cat logs/app.logs
cat: logs/app.logs: No such file or directory

Harsha@Harsha MINGW64 ~/devtraining (main)
$ cat logs/app.log
Tue Dec 16 18:37:11 IST 2025

