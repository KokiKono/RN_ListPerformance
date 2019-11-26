server-start:
	cd server && node index.js
setup:
	cd native && npm install
	cd server && npm install
native-start:
	cd native && react-native run-ios
start:
	$(MAKE) server-start
	$(MAKE) native-start