'use strict';

export default class extends think.controller.base {
    /**
     * some base method in here
     */
    __before(self) {
        console.log("before...........");
        self.assign('key', "hello world");
    }

    __after() {
        console.log("after...........");
    }
    __call(self) {
        return self.display();
    }
}