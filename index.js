'use strict'

var express = require("express")
var fetchUrl = require("fetch").fetchUrl
var cheerio = require('cheerio')

const port     = process.env.PORT || 8080

var app = express()



app.listen(port, function () {
    console.log(`db heroes scrapper deployed on PORT : ${port}`)
  })
