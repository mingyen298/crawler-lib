


import { client as c } from "browser-net2";

enum Level {
    Log = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
};

class _Logger {
    private client: c.Client = null;
    constructor() {
        this.client = new c.Client();
    }


    private async send(content: any) {
        await this.client.send("LoggerHandler", content);
    }
    /**
     * @param {number} level
     * @param {string} content
     * @return {any}
     */
    private buildLog(level: Level, content: string) {
        return {
            level: level,
            content: content
        };
    }
    /**
     * @param {string} content
     */
    log(text: string) {
        const content = this.buildLog(Level.Log, text);
        this.send(content);
    }


    debug(text: string) {
        const content = this.buildLog(Level.Debug, text);
        this.send(content);
    }

    info(text: string) {

        const content = this.buildLog(Level.Info, text);
        this.send(content);
    }


    warn(text: string) {
        const content = this.buildLog(Level.Warn, text);
        this.send(content);
    }

    async error(text: string) {
        const content = this.buildLog(Level.Error, text);
        this.send(content);
    }

}


export const Logger = new _Logger()



