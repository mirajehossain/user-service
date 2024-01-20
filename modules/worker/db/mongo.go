package db

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	mongoClient    *mongo.Client
	dbName         = "opika"
	collectionName = "users"
)

func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}
}

func ConnectDB() error {
	LoadEnv()
	dbURI := os.Getenv("MONGO_URI")
	fmt.Println(dbURI)
	if dbURI == "" {
		log.Fatal("MONGODB_URL environment variable is not set.")
	}
	clientOptions := options.Client().ApplyURI(dbURI)
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		return err
	}
	err = client.Ping(context.Background(), nil)
	if err != nil {
		return err
	}

	log.Println("Connected to Database")
	mongoClient = client

	return nil
}

func CloseDB() {
	if mongoClient != nil {
		err := mongoClient.Disconnect(context.Background())
		if err != nil {
			log.Println("Error closing Database")
		} else {
			log.Println("Close Database connection")
		}
	}
}
