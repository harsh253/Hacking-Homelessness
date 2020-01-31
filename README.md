**You can check out the working demo at http://ec2-3-6-76-229.ap-south-1.compute.amazonaws.com:3000**

### Before setting up locally make sure you have the following installed

* Yarn
* Node.js
* npm
* mongodb

### If you do not have the above packages, install them

**Node.js installation**
1. `sudo apt-get update`
2. `sudo apt-get install nodejs`
3. `sudo apt-get install npm`
This will install node.js and npm

**Yarn installation**
1. `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
2. `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
3. `sudo apt-get update && sudo apt-get install yarn`
This will install yarn package

**MongoDB installation**
1. `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10`
2. `echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`
3. `sudo apt-get update`
4. `sudo apt-get install -y mongodb-org`
This will install latest stable version of mongodb

### Steps to setup locally

1. `git clone https://github.com/harsh253/Hacking-Homelessness.git`
2. `cd hacking-homelessness`
3. `git checkout final`
4. `npm install`
5. `npm install create-react-app`
6. `cd server`
7. `npm install`
8. `cd ../`
9. `cd dumpDB`
10. `bash mongo_import.sh`
11. `cd server`
12. `nodemon`
13.  Open a new terminal and navigate to the directory hacking-homelessness. `cd hacking-homelessness`
14. `yarn start`

>If you get an error like 'Something is already running on the port 3000'. 

>Just type Y and press Enter

The app should be up and running
