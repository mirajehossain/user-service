package db

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID     primitive.ObjectID `bson:"_id,omitempty"`
	Name   string             `bson:"name"`
	Email  string             `bson:"email"`
	UserID string             `bson:"userId"`
}

func GetUserStatistics() (int64, error) {
	filter := bson.M{}
	count, err := mongoClient.Database(dbName).Collection(collectionName).CountDocuments(context.Background(), filter)
	if err != nil {
		return 0, err
	}

	return count, nil
}
