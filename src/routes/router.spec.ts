import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import server from '~/index';
chai.use(chaiHttp);

describe('Item routes', () => {

it("should add an item,", done => {
    chai
      .request(server)
      .post("/upload/text")
      .set("content-type", "application/json")
      .send({ textLayout: "hello" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).equal("You've sent the text: hello");
        done();
      });
  });

});