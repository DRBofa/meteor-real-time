<template>
  <div>
    <h1>
      <center>Vuejs Validated Methods និងការហៅMethodដោយimport ពីទីតាំដើម </center>
    </h1>
    <br>
    <hr>
    <div>
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="form.name"
          class="form-control"
          placeholder="Enter name"
        >
        <small class="form-text text-muted">Type your name!</small>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input
          v-model.number="form.age"
          class="form-control"
          placeholder="Enter age"
        >
        <small class="form-text text-muted">Enter the number It can't be string !</small>
      </div>

      <div class="form-group">
        <label>Gender</label>
        <input
          v-model="form.gender"
          class="form-control"
          placeholder="Enter gender"
        >
        <small class="form-text text-muted">the value M or F</small>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          placeholder="Enter Email"
        >
        <small class="form-text text-muted">Type of emails</small>
      </div>

      <button
        @click="btnSubmit"
        class="btn btn-primary"
      >Submit</button>
    </div>
  </div>
</template>

<script>
import { insertCustomer } from "../imports/methods/customerMethods";
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        gender: "",
        email: ""
      }
    };
  },
  methods: {
    btnSubmit() {
      insertCustomer.call(this.form, (error, result) => {
        if (result) {
          console.log(result);
        } else console.log(error);
      });
    }
  }
};
</script>

<style>
</style>