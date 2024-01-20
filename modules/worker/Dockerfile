FROM golang:1.21.3 AS build

WORKDIR /app
COPY go.mod .
COPY go.sum .
COPY .env .
RUN go mod download
COPY . .
RUN go build -o main .

# Runtime stage
FROM golang:1.21.3
WORKDIR /app
COPY .env .
COPY --from=build /app/main .
CMD ["./main"]