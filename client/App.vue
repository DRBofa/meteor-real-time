<template>
  <div>
    <div v-if="!$subReady.Item">Loading...</div>
    <div v-else>

      Enter name
      <input
        v-model="name"
        placeholder="Name"
      >
      <button @click="updateItem">Update Item</button>
      <p>items:</p>
      {{items}}

    </div>
  </div>
</template>

<script>
import "../imports/collections/items";

export default {
  data() {
    return {
      name: "Jame"
    };
  },
  // Vue Methods
  methods: {
    updateItem() {
      Meteor.call("updateItem", { name: this.name, _id: "MCQpLwPc9EwvLXAHo" }); // not Meteor reactive
    }
  },
  // Meteor reactivity
  meteor: {
    // Subscriptions - Errors not reported spelling and capitalization.
    $subscribe: {
      Item: []
    },
    // A Minimongo cursor on the Item collection is added to the Vue instance
    items() {
      // Here you can use Meteor reactive sources like cursors or reactive vars
      // as you would in a Blaze template helper
      return Item.find().fetch();
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
}
</style>