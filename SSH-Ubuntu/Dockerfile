FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install nodejs nano npm curl openssh-server nginx -y
RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN node -v
RUN npm --version

RUN npm install create-react-app

RUN mkdir /var/run/sshd
RUN echo 'root:1234' | chpasswd

RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN mkdir -p /var/www/html
RUN chown -R $USER:$USER /var/www/html
RUN chmod -R 777 /var/www/html

RUN echo "<html><head><title>Welcome to ssh-ubuntu.com</title></head><body><h1>Welcome to ssh-ubuntu.com</h1></body></html>" > /var/www/html/index.html

RUN service ssh restart && bash
RUN service nginx configtest && bash
RUN service nginx restart && bash

EXPOSE 22 80 3000
CMD ["/usr/sbin/sshd", "-D"]