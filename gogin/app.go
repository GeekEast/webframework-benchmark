package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)


func main() {
	r := gin.New()
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "gin")
	})

	r.Run(":3006")
}
