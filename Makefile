build: node_modules
	node site.js

node_modules: package.json
	npm install

.PHONY: build
