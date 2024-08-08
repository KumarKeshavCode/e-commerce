"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console(), // print logs to console.
        new winston_1.transports.File({
            dirname: 'logs',
            filename: 'console.log',
        })
        //new transports.Console()  //uncomment this to print logs to console as well.
    ],
    //transports :[new transports.console()],
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] : ${level} : ${message}`;
    })),
});
exports.default = logger;
