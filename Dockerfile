FROM python:3
WORKDIR /usr/src/app
ADD . .
EXPOSE 80
CMD python3 -m http.server 80