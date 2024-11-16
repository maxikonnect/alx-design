/*export default function getNeighborhoodsList(){
    this.getNeighborhoodsList = ['Martha', 'Soma'];

    const self = this;

    this.addNeighbour = (newNeighBour)=>{
        self.getNeighborhoodsList.push(newNeighBour);
        return this.getNeighborhoodsList;
    }
} */

export default class getNeighborhoodsList{
    constructor(){
        this.getNeighborhoodsList = ['Martha', 'Soma'];
    }
    addNeighbour(newNeighBour){
        this.getNeighborhoodsList.push(newNeighBour);
        return this.getNeighborhoodsList;
    }
}