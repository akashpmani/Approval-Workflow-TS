FROM postgres:16.1-bookworm
RUN apt -y update && apt -y upgrade && apt -y autoremove && apt -y autoclean
RUN apt -y install apt-utils iputils-ping curl nano telnet
RUN apt -y install wget
EXPOSE 5432
CMD ["postgres"]