// const Input = {};

export enum MouseButton {
    None = "none",
    Left = "left",
    Right = "right",
    Middle = "middle",
    Bac = "back",
    Forward = "forward"
};

class Input { }

export function dispatchMouseEvent(args = {}) {
    const name = Input.name + "." + dispatchMouseEvent.name;
    const command = { name: name, args: args };

    return command;
}

export function dispatchKeyEvent(args = {}) {
    const name = Input.name + "." + dispatchKeyEvent.name;
    const command = { name: name, args: args };

    return command;
}


export function dispatchTouchEvent(args = {}) {
    const name = Input.name + "." + dispatchTouchEvent.name;
    const command = { name: name, args: args };

    return command;
}

