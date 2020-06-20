import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../index";
import "mocha";
import { Item } from "../model/item";
import { getModelForClass } from "@typegoose/typegoose";

chai.use(chaiHttp);

const testMessage = { title: "test", message: "test", column: 1 };
const ItemMongoose = getModelForClass(Item);

describe("items", () => {
  beforeEach(function (done) {
    ItemMongoose.create({
      title: "Test",
      message: "testing message",
      column: 1
    } as Item);
    done();
  });
  afterEach(function (done) {
    ItemMongoose.collection.drop();
    done();
  });

  it("should POST and create a SINGLE item,", (done) => {
    chai
      .request(server)
      .post("/item")
      .set("content-type", "application/json")
      .send(testMessage)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("should GET all items", (done) => {
    chai
      .request(server)
      .get("/item")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a("array");
        expect(res.body[0]).to.have.property("_id");
        expect(res.body[0]).to.have.property("title");
        expect(res.body[0]).to.have.property("message");
        expect(res.body[0]).to.have.property("column");
        done();
      });
  });

  it("should DELETE a SINGLE item", function (done) {
    chai
      .request(server)
      .get("/item")
      .end(function (err, res) {
        chai
          .request(server)
          .delete("/item")    
          .set("content-type", "application/json")
          .send(res.body[0])
          .end(function (error, res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a("object");
            expect(res.body).to.have.property("title");
            expect(res.body).to.have.property("message");
            expect(res.body).to.have.property("column");
            expect(res.body).to.have.property("_id");
            done();
          });
      });
  });
});
