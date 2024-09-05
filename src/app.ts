import { Express } from "express";
import express from 'express';
import bodyParser from "body-parser";

const cors = require('cors');

export const app:Express = express();
app.use(bodyParser.json());
app.use(cors());