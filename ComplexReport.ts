import { IReportMaker } from "./Interfaces/IReportMaker";
import { Map } from "./Map"

export class ComplexReport implements IReportMaker{
    private _map: string // would be data from index.js, so create Map
    private queue = new Queue(50);
    constructor(map: Map) {
        this._map = map;
    }
    printDetails(): string {
        const map = this._map;
        let complesData = [];
        map.forEach( () => {
            const waitTime = this.queue.getCurrentWaitTime();
            const queue = this.queue.getQueueList();
            complesData.push(waitTime, queue);

        });
    }
    
}