
FROM golang:1.16 AS build

WORKDIR /go/src/gogin

COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .


FROM alpine:latest

WORKDIR /app

COPY --from=build /go/src/gogin/app .

EXPOSE 3006

CMD ["./app"]