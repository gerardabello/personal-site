FROM alpine:3.5

RUN apk add --no-cache openssh-client tar curl

# install caddy
RUN curl --silent --show-error --fail --location \
    --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
    "https://caddyserver.com/download/linux/amd64" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy \
    && chmod 0755 /usr/bin/caddy \
    && /usr/bin/caddy -version

EXPOSE 80 443 2015 
WORKDIR /srv
COPY ./dist .
ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "./Caddyfile", "--log", "stdout"]
