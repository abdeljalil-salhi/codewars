@ECHO OFF
TITLE CodeWars @abdeljalil-salhi
COLOR 07
:RESTART
CLEAR || CLS
ECHO ======================================================
ECHO /                  CodeWars Commit                   \
ECHO ======================================================
SET /P message="$ ~>"
IF "%message%"=="" GOTO RESTART
ECHO ======================================================
git add .
git commit -m "Add the '%message%' problem"
git push
ECHO ======================================================
ECHO commited: Add the '%message%' problem
PAUSE
CLEAR || CLS