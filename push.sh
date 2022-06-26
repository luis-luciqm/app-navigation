#!/bin/bash

echo "Digite o commit: "
read commit

git add .
git commit -m "$commit"
git push --set-upstream origin main

sleep 2

clear

git status 
sleep 2 

clear
