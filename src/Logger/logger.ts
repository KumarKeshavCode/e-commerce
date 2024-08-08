import { createLogger,transports, format } from "winston";


const logger = createLogger({

    transports:[
        new transports.Console(),  // print logs to console.
        new transports.File({ 
            dirname: 'logs',
            filename : 'console.log',
            })

        //new transports.Console()  //uncomment this to print logs to console as well.
    ],
    //transports :[new transports.console()],
    format : format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({timestamp ,level ,message})=>{
            return `[${timestamp}] : ${level} : ${message}`;
        })
        ),
   



});

export  default logger;