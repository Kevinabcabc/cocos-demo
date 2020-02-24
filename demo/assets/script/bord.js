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
     
    },

    start () {

    },

    show(tip,okCallback) {
        cc.log('show')
        console.log(tip,okCallback);
        
        this.okcallback(okCallback)
    },

    okcb(){

    },
    okcallback(callback){
        if(callback != null){
            console.log('ok callback is ready');
            this.okcb = callback
        }

    },

    ok(){
        this.okcb();
        // this.node.hide()
        cc.log(this)
    },


    canclecallback:()=>{
        this.hide()
    }

    

    // update (dt) {},
});
