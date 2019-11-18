Meteor.methods({
  updateItem(doc) {
    Item.update({ _id: doc._id }, { $set: doc });
  },
  deleteItem(id) {
    return Item.remove({ _id: id });
  }
});
