docker stop nginx-antd-mobile-roadhog
docker rm nginx-antd-mobile-roadhog
docker run --name nginx-antd-mobile-roadhog \
-d -p 80:80 \
-v /Users/newband/Documents/github/antd-mobile-roadhog/dist:/usr/share/nginx/html \
nginx/antd-mobile-roadhog