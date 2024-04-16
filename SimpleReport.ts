import { IReportMaker } from "./Interfaces/IReportMaker";
import { Map } from "./Map";
import { Queue } from "./Queue";
export class SimpleReport implements IReportMaker {
    private _map: string // would be data from index.js, so create Map
    private queue = new Queue(50);
    constructor(map: Map) {
        this._map = map;
    }
    printDetails(): string {
        const map = this._map;
        let simpleData = [];
        map.forEach(clinic => {
            const queue = this.queue.getQueueList();
            simpleData.push( queue);

        });
    }
    
}