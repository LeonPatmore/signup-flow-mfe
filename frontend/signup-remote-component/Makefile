setup:
	npm install
	npm run build

remove-wiremock:
	docker rm -f wiremock

start-wiremock: remove-wiremock
	docker run -d \
      -p 5050:8080 \
      --name wiremock \
      -v $(CURDIR)/mock:/home/wiremock \
      wiremock/wiremock:3.4.2

run: start-wiremock
	npm run dev
