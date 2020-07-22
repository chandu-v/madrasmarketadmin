# npm run build-prod
pause
cp .\web.config .\dist\madras-market-admin\
pause
mv .\dist\madras-market-admin\
pause
git init
pause
git remote add origin https://github.com/chandu-v/madrasmarketplaceadmin-deploy
pause
git config user.email chandu_boss@hotmail.com
pause
git config user.name chandu
pause
git add .
pause
git commit -m 'update'
pause
git push -f
pause
