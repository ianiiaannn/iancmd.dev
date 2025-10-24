FROM debian

RUN apt update && apt install wget build-essential ffmpeg git -y

RUN rm -rf /var/lib/apt/lists/*

ENV HUGO_VERSION="0.151.2"

RUN arch=$(dpkg --print-architecture); \
    wget -O /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${arch}.deb
RUN dpkg -i /tmp/hugo.deb

COPY . /workspaces/hugo

WORKDIR /workspaces/hugo/

CMD ["hugo", "server", "--navigateToChanged"]
