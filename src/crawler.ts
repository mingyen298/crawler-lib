

import { CDPCaller } from './system/cdp_caller.js';
import { CrawlerElement } from './element.js';



class Crawler {
    constructor() {

    }

    find(xpath: string): CrawlerElement {
        var node = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);

        return node as CrawlerElement

    }



    // async sendKeys(text:string) {
    //     text.split('').forEach(async (char) => {
    //         await CDPCaller.exec({ name: 'Input.dispatchKeyEvent', args: { type: 'char', text: char } });
    //     });
    // }


    focus(element:CrawlerElement) {
        element.focus();
    }

    // async scrollIntoView(element:CrawlerElement,topOffset:number=0,bottomOffset:number=0) {

    //     return new Promise(async (resolve) => {
    //         var rect;
    //         const swipeAmount = 25;
    //         var amount;
    //         while(!element.inViewport(topOffset,bottomOffset)) {
    //             rect = element.getRect();
    //             if ( rect.top < 0){
    //                 amount = swipeAmount;
    //             }else {
    //                 amount = -swipeAmount;
    //             }
    //             await this.swipe2(amount);
    //             await util.sleep(100);
    //             console.log('scrollIntoView');
    //         }
            
    //         resolve(null);
    //     });

    // }

    // /**
    //  * @param {Element} element 
    //  */
    // async click(element:CrawlerElement) {
    //     await element.flash();
    //     // const nextY = startY + (window.innerHeight * (amount / 100));
    //     await CDPCaller.exec(
    //         CDP.Input.dispatchTouchEvent({ type: 'touchStart', touchPoints: [{ x:element.centerX , y: element.centerY }] }),
    //         CDP.Input.dispatchTouchEvent({ type: 'touchEnd', touchPoints: [] })
    //     );
    // }
    // /**
    //  * 模擬人滑動時的操作，看起來會比較自然
    //  * @param {number} amount 
    //  */
    // async swipe1(amount = -25) {
    //     const startY = window.innerHeight / 2;
    //     const startX = window.innerHeight / 2;
    //     const nextY = startY + (window.innerHeight * (amount / 100));
    //     await CDPCaller.exec(
    //         CDP.Input.dispatchTouchEvent({ type: 'touchStart', touchPoints: [{ x: 100, y: startY }] }),
    //         CDP.Input.dispatchTouchEvent({ type: 'touchMove', touchPoints: [{ x: 100, y: nextY }] }),
    //         CDP.Input.dispatchTouchEvent({ type: 'touchEnd', touchPoints: [] }),
    //     );
    //     await util.sleep(100);
    //     await CDPCaller.exec(
    //         CDP.Input.dispatchTouchEvent({ type: 'touchStart', touchPoints: [{ x: 100, y: nextY }] }),
    //         CDP.Input.dispatchTouchEvent({ type: 'touchCancel', touchPoints: [] }),
    //     );
    //     await util.sleep(100);
    // }
    // /**
    //  * 固定跨度滑起來很死板
    //  * @param {number} amount 
    //  */
    // async swipe2(amount = -25) {
    //     const startY = window.innerHeight / 2;
    //     const nextY = startY + (window.innerHeight * (amount / 100));
    //     await CDPCaller.exec(
    //         CDP.Input.dispatchTouchEvent({ type: 'touchStart', touchPoints: [{ x: 100, y: startY }] }),
    //         CDP.Input.dispatchTouchEvent({ type: 'touchMove', touchPoints: [{ x: 100, y: nextY }] }),
    //         CDP.Input.dispatchTouchEvent({ type: 'touchCancel', touchPoints: [] })
    //     );
    // }

}


export { Crawler };

