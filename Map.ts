import { readFile } from 'fs/promises';
import { IHousehold } from './Interfaces/IHousehold';



export class Map {
	private _mapData: string;

    constructor(content: string) {
        this._mapData = content 
    }


    printMap(content: any ) {
        const map = new PrintMap
        
        const Burnaby = content.city.Burnaby;
        const Vancouver = content.city.Vancouver;
        const Richmond = content.city.Richmond;

        return map;
    }
    registerForShots(content) {
        let currentIntakeAge = 18;
        let houseHold = content.houseHold
        let isNotVaccinatedArray = [];
        for (let i = 0; i < houseHold.length; i++) {
            houseHold.forEach(person => {
                if(person[i].inhabitants.isVaccinated === true) {
                    return;
                } else if (person[i].inhabitants.isVaccinated === false) {
                    if(person[i].inhabitants.age < currentIntakeAge) {
                        return;
                    } else {
                        let personVac = person[i].inhabitants.fullName
                        isNotVaccinatedArray.push(personVac)
                    }
                } 
            });
        }

    }
    
    public static async create(filePath: string): Promise<Map> {
        const content = await readFile(filePath, { encoding: "utf8" });
        const object = JSON.parse(content);
        return new Map(object);
    }

    getMap(): string {
        return this._mapData;
    }
    
}


const generateData = async () => {
    try {
        const myMap = await Map.create("./data.json");
        console.log(myMap.getMap());
    } catch (error) {
        console.log(error);
    }
}

generateData();