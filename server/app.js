// const express = require('express')
// const serveStatic =  require('serve-static')
// const path = require('path')
import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'

const app = express()
app.use(serveStatic(path.join(path.resolve(), 'client/dist')))
const port = process.env.PORT || 80
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
