import { Meteor } from "meteor/meteor";

// Item
import "../imports/collections/items";
import "../imports/publications/items";
import "../imports/methods/UpdateItem";

Meteor.startup(() => {
  // Update the current time
  // Meteor.call("UpdateTime");
  Item.insert({ name: "Bona" });
  // console.log(`The time is now ${Time.findOne().time}`);
});
