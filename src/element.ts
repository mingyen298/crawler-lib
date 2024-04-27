// import * as CDP from '../general/protocol/cdp/cdp.js';
// import { Communicator } from './communicator/communicator';
import { CDPCaller } from './system/cdp_caller.js';


class CrawlerElementBase extends Element {

    constructor() {
        super();

    }
    getRect() {
        return this.getBoundingClientRect();
    }


    get x(): number {
        return this.getBoundingClientRect().x;
    }

    get y(): number {
        return this.getBoundingClientRect().y;
    }

    get width(): number {
        return this.getBoundingClientRect().width;
    }

    get height(): number {
        return this.getBoundingClientRect().height;
    }

    get right(): number {
        return this.getBoundingClientRect().right;
    }

    get bottom(): number {
        return this.getBoundingClientRect().bottom;
    }

    get top(): number {
        return this.getBoundingClientRect().top;
    }

    get left(): number {
        return this.getBoundingClientRect().left;
    }

    get centerX(): number {
        const rect = this.getBoundingClientRect();
        return rect.left + (rect.width / 2)
    }

    get centerY(): number {
        const rect = this.getBoundingClientRect();
        return rect.top + (rect.height / 2)
    }


}


export class CrawlerElement extends CrawlerElementBase {
    constructor() {
        super();

    }

    find(xpath: string): CrawlerElement {
        var node = document.evaluate(xpath, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);

        return node as CrawlerElement

    }

    async flash(duration: number = 250) {
        return new Promise((resolve) => {
            // var css = document.styleSheets[0];
            for (let i = 0; i < document.styleSheets.length; i++) {
                var css = document.styleSheets.item(i);
                try {
                    css.insertRule(`
                @keyframes show-pointer-ani {{
                      0% {{ opacity: 1; transform: scale(2, 2);}}
                      25% {{ transform: scale(5,5) }}
                      50% {{ transform: scale(3, 3);}}
                      75%: {{ transform: scale(2,2) }}
                      100% {{ transform: scale(1, 1); opacity: 0;}}
                }}`, css.cssRules.length);
                    break;
                } catch (e) {
                    console.log(e)
                }
            };
            const uid = Math.random().toString(8).substring(2, 9);
            var _d = document.createElement('div');
            _d.style.all = `position:absolute;z-index:99999999;padding:0;margin:0;left:${this.centerX - 8}px; top: ${this.centerY - 8}px;opacity:1;width:16px;height:16px;border-radius:50%;background:red;animation:show-pointer-ani ${duration / 1000}s ease 1;`;
            _d.id = uid;
            document.body.insertAdjacentElement('afterbegin', _d);
            setTimeout(() => {
                document.getElementById(uid).remove();
                resolve(null);
            }, duration);
        })

    }

    // async mouseClick() {
    //     await this.flash();
    //     await CDPCaller.exec(
    //         CDP.Input.dispatchMouseEvent({ type: "mousePressed", x: this.centerX, y: this.centerY, modifiers: 0, button: "left", buttons: 1, clickCount: 1 }),
    //         CDP.Input.dispatchMouseEvent({ type: "mouseReleased", x: this.centerX, y: this.centerY, modifiers: 0, button: "left", buttons: 1, clickCount: 1 })
    //     );


    // }

    inViewport(topOffset: number = 0, bottomOffset: number = 0): boolean {
        const rect = this.getRect();

        return (
            rect.top >= topOffset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight + bottomOffset || document.documentElement.clientHeight + bottomOffset) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    async sendKeys(text: string) {
        this.focus();
        text.split('').forEach(async (char) => {
            await CDPCaller.exec({ name: 'Input.dispatchKeyEvent', args: { type: 'char', text: char } });
        });
    }
    focus() {
        this.focus();
    }
}



