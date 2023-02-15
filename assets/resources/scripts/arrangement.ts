import { _decorator, Component, Prefab, instantiate, UITransform, math } from 'cc';
import { PUNKS } from './constants';
import { pucks } from './pucks';
import { jsons, json_1 } from './json';
const { ccclass, property } = _decorator;
@ccclass('arrangement')
export class arrangement extends Component {
    @property({ type: Prefab })
    prefab: Prefab = null;
    json = jsons();
    json_1 = json_1();
    start() {
        console.log([this.json, this.json_1]);

        this.getpattern(5);
    }
    getpattern(n: number) {
        var y = 0;
        var offset = 0;
        var count = 0;
        let startPos = this.node.getComponent(UITransform).width * 0.5;
        var pattern
            ;
        for (let i = 0; i < (n - Math.floor(n / 2)); i++) {
            if (count == 0) { pattern = this.json[i]; console.log(pattern) } else { pattern = this.json_1[i - 1]; console.log(pattern) }

            for (let j = 0; j < n; j++) {

                if (j < n - i) {
                    let a = instantiate(this.prefab)
                    a.getComponent(pucks).setcolor(pattern[j].color)
                    offset = a.getComponent(UITransform).height;
                    a.setPosition((offset * i * 0.5 + offset * j) - offset * 0.5 * (n - 1), y, 0)
                    this.node.addChild(a);
                }
            }
            if (i == (n - Math.floor(n / 2) - 1) && count == 0) {
                i = 0;
                y = 0;
                count = 1;
            }
            (count == 1) ? y = y - offset : y = y + offset;
        }
    }

    update(deltaTime: number) {

    }
}

