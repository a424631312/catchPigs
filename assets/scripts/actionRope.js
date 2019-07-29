// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        startPositionY: -600,
        endPositonY : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.node.y = this.startPositionY;
        this.isDoing = false;
    },

    update (dt) {
    	
    },

    onClick: function () {
        if (this.isDoing === true) {
            return;
        };
        this.isDoing = true;
        var firstAction = cc.moveTo(0.5, 0, this.endPositonY);
        var secondAction = cc.moveTo(0.5, 0, this.startPositionY);
        var callFunc = cc.callFunc(function () {
            this.isDoing = false;
        }.bind(this));
        var seq = cc.sequence(firstAction, secondAction, callFunc);

        this.node.runAction(seq);
    },

});
