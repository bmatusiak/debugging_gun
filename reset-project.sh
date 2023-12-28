
rm -rf ./node_modules
rm -rf ./*/node_modules
rm -rf ./package-lock.json
rm -rf ./*/package-lock.json

rm -rf ./radata*

cd ./gun
git reset --hard
git clean -f
git pull