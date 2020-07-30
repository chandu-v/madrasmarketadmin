
copy .\web.config .\dist\madras-market-admin\
cd .\dist\madras-market-admin\
git init
git remote rm origin
git remote add origin https://github.com/chandu-v/madrasmarketplaceadmin-deploy
git config user.email chandu_boss@hotmail.com
git config user.name chandu
git add .
git commit -a
git push --set-upstream origin master -f
cd ..
cd ..
git add .
git commit -a
git push
pause
