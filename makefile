.PHONY: help install dev

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Setup all project dependencies
	npm i

dev: ## Start webpack-dev-server
	npm run wpds

analyse:
	NODE_ENV=analyse ./node_modules/.bin/webpack --config webpack.config.js -p
