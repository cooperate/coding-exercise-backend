import { v4 as uuidv4 } from 'uuid';

interface IItem {
    id: string;
    title: string;
    message: string;
    column: number;
} 

export class Item implements IItem {
   id: string;
   title: string;
   message: string;
   column: number;

   constructor(title: string, message: string, column: number) {
       this.id = uuidv4(); 
       this.title = title;
       this.message = message;
       this.column = column;
   }
} 