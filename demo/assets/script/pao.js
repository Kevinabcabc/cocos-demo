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
        pao: cc.AudioClip,
        bg:{
            type: cc.AudioClip,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log('onload')
        // cc.audioEngine.play(this.bg,false,0.1)
    },

    start () {

    },

    qipao(target,data){
        cc.audioEngine.play(this.pao,false,1)
    }   
    // update (dt) {},
});
