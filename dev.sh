docker stop dev-antd-mobile-roadhog
docker rm dev-antd-mobile-roadhog
docker run --name dev-antd-mobile-roadhog \
-d -p 8001:8001 \
-v /Users/newband/Documents/github/antd-mobile-roadhog:/app \
deploy:6.0 \
yarn run dev