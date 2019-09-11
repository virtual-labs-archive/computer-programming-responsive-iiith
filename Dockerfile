# Usage: Pulling Ubuntu-16.04
FROM ubuntu:16.04

# Usage: File Author/Maintainer
MAINTAINER vlead-systems "systems@vlabs.ac.in"

# Usage: Setting proxy environment
#ENV http_proxy "http://proxy.iiit.ac.in:8080"
#ENV https_proxy "http://proxy.iiit.ac.in:8080"

# Usage: Updating system
RUN apt-get update

# Usage: Installing dependencies for system operations
RUN apt-get install -y git sudo net-tools wget apache2 make rsync

RUN mkdir computer-programming-responsive-iiith

COPY src/ /computer-programming-responsive-iiith/src

WORKDIR ./computer-programming-responsive-iiith/src

# Usage: Running make
RUN make 

# Usage: Copying lab sources into web server path
RUN rm -rf /var/www/html/*
RUN rsync -a ../build/ /var/www/html/

EXPOSE 80
EXPOSE 443

# Usage: Setting permissions in /var/www 
RUN chmod -R 755 /var/www/html/*

CMD /usr/sbin/apache2ctl -D FOREGROUND