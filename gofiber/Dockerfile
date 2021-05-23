
FROM golang:1.16 AS build

WORKDIR /go/src/gofiber

COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .


FROM alpine:latest

WORKDIR /app

COPY --from=build /go/src/gofiber/app .

EXPOSE 3005

CMD ["./app"]