import { _decorator, Component, Node, Sprite, SpriteFrame, Prefab, instantiate, NodePool } from "cc";
import { singleton } from "./singleton";
const { ccclass, property } = _decorator;

@ccclass("loadbgimages")
export class loadbgimages extends Component {
    nodepool: NodePool = null;
    prefab: any;
    start() {
        this.load();
    }
    load() {
        singleton
            .getInstance()
            .loader("background", "bg", SpriteFrame).then(item =>
                this.node.getComponent(Sprite).spriteFrame = item)
        singleton
            .getInstance()
            .loader("background", "loading icon", Prefab).then(item => {
                this.prefab = instantiate(item); this.node.addChild(this.prefab);
            })
        singleton
            .getInstance()
            .loader("background", "logo", SpriteFrame).then(item => {
                setTimeout(() => {
                    this.node.getChildByName("loading icon").active = false;
                    this.node.getChildByName('logo').getComponent(Sprite).spriteFrame = item;

                }, 2000);
            })


    }

    update(deltaTime: number) { }
}
