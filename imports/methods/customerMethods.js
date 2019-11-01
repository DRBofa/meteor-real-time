import Customer from "../collections/customers";
import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { RestMethodMixin } from "meteor/simple:rest-method-mixin";

export const insertCustomer = new ValidatedMethod({
  name: "customer.insert",
  validate: new SimpleSchema({
    name: {
      type: String,
      max: 50
    },
    age: {
      type: Number,
      min: 15,
      max: 70
    },
    gender: {
      type: String,
      max: 1,
      allowedValues: ["M", "F"]
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validator(),
  mixins: [RestMethodMixin],
  restOptions: {
    url: "/insertCustomer",
    httpMethod: "GET",
    getArgsFromRequest(request) {
      // console.log(typeof request.query.age);
      // return [request.query];

      let doc = {
        name: request.query.name,
        age: parseInt(request.query.age),
        gender: request.query.gender,
        email: request.query.email
      };
      return [doc];
    }
  },
  run(doc) {
    console.log("run:", doc);
    return Customer.insert(doc);
  }
});
export const findCustomer = new ValidatedMethod({
  name: "customer.find",
  validate: null,
  mixins: [RestMethodMixin],
  restOptions: {
    url: "/findCustomer",
    httpMethod: "GET"
  },
  run() {
    return Customer.find().fetch();
  }
});
