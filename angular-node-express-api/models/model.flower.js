
class FlowerModel
{
  constructor(guid, uid, no, price, discount, img, status)
  {
    this.guid=guid;
    this.uid = uid;
    this.no = no;
    this.price = price;
    this.discount = discount;
    this.img = img;
    this.status = status;
  }
}

module.exports = FlowerModel;
