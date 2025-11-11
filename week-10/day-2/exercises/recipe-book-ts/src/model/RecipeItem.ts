// import {v4} from "uuid";

export interface RecipeType{
     id:string;
     title:string;
     ingredients:string[];
     instructions:string;
     isFavorite:boolean;
}

export class RecipeItem {

    public id:string;
    public title:string;
    public ingredients:string[];
    public instructions:string;
    public isFavorite:boolean;
    
    constructor(id:string,title:string,ingredients:string[],instructions:string,isFavorite:boolean) {
       this.id = id;
        this.title=title;
        this.ingredients=ingredients;
        this.instructions=instructions;
        this.isFavorite=isFavorite
    }

    getAllInfo():string {
        return `INFO: ${this.id}, ${this.title}, ${this.ingredients}, ${this.instructions}, ${this.isFavorite},`
    }
}

