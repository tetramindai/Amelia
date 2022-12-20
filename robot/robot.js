class Robot {
    static DEFAULT_ROOT = "https://www.wikipedia.org";

    constructor(root = null) {
        this._root = (root != null && root !== "" && typeof root === "string") ? root : Robot.DEFAULT_ROOT;
        this._todo = {};
    }

    start() {

    }

    stop() {

    }
}