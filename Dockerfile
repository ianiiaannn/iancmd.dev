FROM ubuntu

RUN apt update && apt install snapd build-essential
RUN snap install hugo
COPY . /workspaces/hugo

WORKDIR /workspaces/hugo/themes/poison
RUN git pull

WORKDIR /workspaces/hugo/

CMD hugo server --navigateToChanged
