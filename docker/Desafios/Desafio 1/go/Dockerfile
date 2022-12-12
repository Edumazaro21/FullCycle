FROM golang:1.20rc1-alpine3.17 AS builder

WORKDIR /usr/local/go/src/app

COPY hello.go .

RUN go build

FROM scratch

COPY --from=builder /usr/local/go/src/app /

ENTRYPOINT [ "./app" ]