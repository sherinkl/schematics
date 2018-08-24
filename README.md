#npm install -g @angular-devkit/schematics-cli
#schematics blank --name=hellp-world
#schematics schematic --name=hellp-world

Rule 1: For schematics, use the same versions of your cli generated project! its important

#npm run build

#schematics .:my-world //executes in memory
#schematics .:my-world --debug false
#npm install ../my-world //you can add this schematics to your project. "helloworld-sample\node_modules\my-world"
#ng generate my-world:my-world --force //(name of npm package, name of code generator)
#schematics my-world:my-world
