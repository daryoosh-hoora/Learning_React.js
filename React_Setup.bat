@echo on

echo React Batch Tools by datisONE copyright 2022, https://www.hoora.info/

echo 1. Node.js installing...
echo -----------------------------------------------
winget install -i OpenJS.NodeJS.LTS

echo 2. Npm updating...
echo -----------------------------------------------
npm install -g npm@latest

echo 3. create-react-app installing...
echo -----------------------------------------------
npm install -g create-react-app

echo 3. VSCode installing...
echo -----------------------------------------------
winget install -i microsoft.visualstudiocode

echo Happy Done.
