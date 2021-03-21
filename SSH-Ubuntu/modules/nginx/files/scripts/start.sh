#!/usr/bin/env bash

i=`ps -eaf | grep -i nginx | grep -v grep | grep -v bash | wc -l`
rm -r /var/www/html

if [[ $i > 0 ]]
then
  echo "ngnix is running"
else
  echo "Starting nginx"
  /etc/init.d/nginx start
  /etc/init.d/nginx status
fi 
