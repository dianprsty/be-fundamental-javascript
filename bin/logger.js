#!/usr/bin/env node
import winston from "winston";
import winstonTelegram from "winston-telegram";
import "../env.js";

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({ filename: "combined.log" }),
    new winstonTelegram({
      token: process.env.TELEGRAM_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
    }),
  ],
  format: winston.format.simple(),
});

logger.log("info", "winstion logger is running");
logger.log({
  level: "warn",
  message: "another winston log with warn level",
});
logger.error("an error log");
logger.debug("use this to debug");
