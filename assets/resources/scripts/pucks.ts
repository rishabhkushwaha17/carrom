import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { PUNKS } from './constants';
const { ccclass, property } = _decorator;

@ccclass('pucks')
export class pucks extends Component {
    @property({ type: SpriteFrame })
    pucks: SpriteFrame[] = [null, null, null];
    start() {
    }
    setcolor(punk: PUNKS) {
        switch (punk) {
            case PUNKS.BLACK:
                this.node.getComponent(Sprite).spriteFrame = this.pucks[0];
                break;
            case PUNKS.RED:
                this.node.getComponent(Sprite).spriteFrame = this.pucks[1];
                break;
            case PUNKS.WHITE:
                this.node.getComponent(Sprite).spriteFrame = this.pucks[2];
                break;
        }
    }
    update(deltaTime: number) {

    }

}

