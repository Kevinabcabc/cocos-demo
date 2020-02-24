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
      cap: cc.Sprite,
      capAtlas: cc.SpriteAtlas,
      bord: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    showbord(){
        cc.log('enter show obrd')
        var bordnode = cc.instantiate(this.bord);
        this.node.addChild(bordnode);
        bordnode =  bordnode.getComponent('bord');
        bordnode.show('tiptip ', function(){
            cc.log('ok enter')
        })
    },

    onClickBtn(target,data){
        cc.log(data);

        cc.log(this.cap)
        cc.log(this.capAtlas)
        switch (data) {
            case 'brown':
                this.cap.spriteFrame = this.capAtlas.getSpriteFrame('brown')
                break;
            case 'red':
                this.cap.spriteFrame = this.capAtlas.getSpriteFrame('red')
                break;
            case 'green':
                this.cap.spriteFrame = this.capAtlas.getSpriteFrame('green')
                break;
            case 'change':
                cc.director.loadScene('paza')
                break;
            default:
                break;
        }
    },



    // update (dt) {},
});
