import { _decorator, Component, Node, resources, SpriteFrame, Sprite, Prefab, instantiate } from "cc";
const { ccclass, property } = _decorator;

@ccclass("singleton")
export class singleton {
    public static instance: singleton;
    public spriteframe: any;
    public prefabs: any;
    private constructor() { }
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new singleton();
            this.instance.preload()
        }
        return this.instance;
    }
    public preload() {
        resources.preloadDir("background");
    }
    public loader(dirname: string, imagename: string, type: any) {
        if (type == SpriteFrame) {
            return new Promise<SpriteFrame>((resolve, reject) => {
                resources.load(dirname + "/" + imagename + "/spriteFrame", type, (err, items) => {
                    this.spriteframe = items;
                    resolve(this.spriteframe);
                });
            });
        }
        else {
            return new Promise<any>((resolve, reject) => {
                resources.load(dirname + "/" + imagename, Prefab, (err, prefab) => {
                    this.prefabs = prefab;
                    resolve(this.prefabs)
                });
            });
        }
    }
}
