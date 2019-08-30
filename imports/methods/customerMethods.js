import Customer from "../collections/customers";
import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";

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
  run(doc) {
    return Customer.insert(doc);
  }
});
