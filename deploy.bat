@echo off

REM Add all changes
git add .
timeout 1

REM Commit with user-defined message (passed as an argument)
git commit -m "%~1"
timeout 1

REM Push changes
git push
timeout 1

REM Display status
git status
timeout 1

@REM REM Switch to main branch
@REM git checkout main
@REM timeout 1

@REM REM Merge develop into main
@REM git merge develop
@REM timeout 1

REM Push merged changes
git push
timeout 1

REM Display status
git status
timeout 1

REM Run build script
call npm run build
timeout 1

REM Deploy using Firebase
call npm run deploy
timeout 1

@REM REM Switch back to develop branch
@REM git checkout develop
@REM timeout 1
