 # 指定我们的基础镜像是daocloud.io/nginx，版本是:last
 FROM daocloud.io/nginx
 # 指定制作我们的镜像的联系人信息（镜像创建者）
 MAINTAINER FELIX PAN <felixpmg.qq.com>

 # 删除 nginx 默认配置
 RUN rm /etc/nginx/conf.d/default.conf
 # 添加自定义的 default.conf 配置
 ADD default.conf /etc/nginx/conf.d/
 
 # 把dist文件夹copy到nginx root指定的路径
 COPY dist/  /usr/share/nginx/html/