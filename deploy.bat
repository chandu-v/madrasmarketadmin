copy .\web.config .\dist\madras-market-admin\
git init
git remote add origin https://github.com/chandu-v/madrasmarketplaceadmin-deploy
git config user.email chandu_boss@hotmail.com
git config user.name chandu
git add .
git commit -m 'update'
git push --set-upstream origin master -f
pause