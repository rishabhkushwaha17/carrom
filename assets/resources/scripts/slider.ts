import { _decorator, Component, Node, Slider } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('slider')
export class slider extends Component {
    @property(Slider)
    slider: Slider = null



    onLoad() {
        this.slider.node.on('slide', (a) => { }, this)
    }
    start() {

    }

    update(deltaTime: number) {

    }
}

