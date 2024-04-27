


import { client as c } from "browser-net2";


class _CDPCaller {

    private client: c.Client = null;
    constructor() {
        this.client = new c.Client();
    }


    private async send(content: any = {}) {

        this.client.send("CDPHandler", content);

    }


    async exec(...cdpCommands: any[]) {
        if (cdpCommands[0] instanceof Array) {
            await this.send({
                commands: cdpCommands[0]
            });
        } else {
            const commands = cdpCommands.map((command) => {
                return command;
            });
            await this.send({
                commands: commands
            });
        }

    }


    // async start() {
    //     await this.sendPacket('start');
    // }

    // async stop() {
    //     await this.sendPacket('stop');
    // }


}


export const CDPCaller = new _CDPCaller()


