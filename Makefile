dev:
	npm start
bootstrap:
	npm ci && npm start
build:
	npm run build
analyze:
	npm run analyze
deps:
	npm ci
test:
	npm test
test-watch:
	npm run test-watch
lint:
		npm run lint
lint.strict:
		npm run lint.strict
lint.fix:
		npm run lint.fix
check-types:
		npm run check-types
