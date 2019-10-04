const FlowerModel = require("../models/model.flower");
let Validator = require('fastest-validator');


let flowers = {};
let counter = 0;


let flowerValidator = new Validator();


const flowerVSchema ={
      guid: {type: "string", min: 3},
      uid : {type: "int"},
      no: {type: "string" , min : 1, max: 50},
      price : {type: "int"},
      discount : {type: "int"},
      img: {type: "string"},
      status: {type: "string"},

}

class FlowerService {

  static create (data) {

    var vres = flowerValidator.validate(data, flowerVSchema);

    if (!(vres === true)) {
      let errors = {}, item;

      for (const index in vres) {
        item = vres[index];

        errors[item.field] = item.message;
      }

      throw {
        name: "ValidationError",
        message: errors
      };


      let flower = new FlowerModel(data.guid,data.uid, data.no, data.price, data.discount, data.img, data.status)

      flower.uid = counter++;

      flowers[flower.uid] = flower;
      return flowers;
    }

  }

    static retrieve(uid){
      if(flowers[uid] != null)
      {
        return flowers[uid];
      }
      else
      {
        throw new Error('Unable to retrieve a customer by (uid:'+ uid +')');
      }
    }

  static update(uid, data)
  {
    if(flowers[uid] != null)
    {
      const flower = flowers[uid];

      Object.assign(flower, data);
    }
    else
    {
      throw new Error('Unable to retrieve a customer by (uid:'+ cuid +')');
    }
  }


  static delete(uid)
  {
    if(flowers[uid] != null)
    {
      delete flowers[uid];
    }
    else
    {
      throw new Error('Unable to retrieve a customer by (uid:'+ cuid +')');
    }
  }

}

module.exports = FlowerService;
