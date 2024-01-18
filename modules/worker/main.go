package main

import (
	"log"
	"main/db"
	"time"
)

func main() {
	err := db.ConnectDB()
	if err != nil {
		log.Fatal("Error while connecting Database", err)
	}

	defer db.CloseDB()

	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			processData()
		}
	}
}

func processData() {
	currentTime := time.Now()
	log.Printf("Processing data at: %s\n", currentTime.Format("2006-01-02 15:04:05"))
	count, err := db.GetUserStatistics()
	if err != nil {
		log.Fatal("Error fetching user statistics:\n", err)
	}
	log.Printf("User count: %d\n", count)

}
