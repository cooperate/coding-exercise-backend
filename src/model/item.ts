import { prop } from "@typegoose/typegoose";

interface IItem {
    title: string;
    message: string;
    column: number;
} 

export class Item implements IItem {
   @prop()
   title: string;
   @prop()
   message: string;
   @prop()
   column: number;

   constructor(title: string, message: string, column: number) {
       this.title = title;
       this.message = message;
       this.column = column;
   }
} 