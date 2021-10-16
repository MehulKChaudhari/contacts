import dotenv from 'dotenv'
import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

app.use(express.json())
app.use(cors(corsOptions))