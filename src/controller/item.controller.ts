import { prop, getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { Item } from "@model/item";
import { Context } from "koa";

export default class ItemController {
  public static ItemModel: ReturnModelType<typeof Item> = getModelForClass(
    Item
  );

  public static async getItems(ctx: Context): Promise<void> {
    ctx.body = await ItemController.ItemModel.find({}).exec();
    ctx.status = 200;
  }

  public static async getItem(ctx: Context): Promise<void> {
    ctx.body = await ItemController.ItemModel.findById(ctx.body.id).exec();
    ctx.status = 200;
  }

  public static async createItem(ctx: Context): Promise<void> {
    const itemCount: Item[] = await ItemController.ItemModel.find({}).exec();
    if( itemCount.length < 20){
      ctx.body = await ItemController.ItemModel.create({ title: ctx.body.title, message: ctx.body.message, column: ctx.body.column } as Item);
      ctx.status = 200;
    }  else {
      ctx.body = "Items in database exceed 20. Remove some to add more.";
      ctx.status = 409;
    }
  }

  public static async updateItem(ctx: Context): Promise<void> {
    ItemController.ItemModel.updateOne({ _id: ctx.body.id }, {[ctx.body.updateField]: ctx.body.updateValue});
    ctx.status = 200;
  }

  public static async deleteItem(ctx: Context): Promise<void> {
    ItemController.ItemModel.deleteOne({_id: ctx.body._id}).exec();
    ctx.status = 200;
  }
}
