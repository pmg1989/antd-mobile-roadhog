docker stop nginx-antd-mobile-roadhog
docker rm nginx-antd-mobile-roadhog
docker build -t nginx/antd-mobile-roadhog .
docker run --name nginx-antd-mobile-roadhog \
-d -p 80:80 \
-v "$PWD"/dist:/usr/share/nginx/html \
nginx/antd-mobile-roadhog