clear
git status
echo -n "confirm(y/n): "
read check
if [ $check == "y" ]
then
    git add .
    git commit -m "$1"
    git push
else 
    echo "access denied !!"
fi