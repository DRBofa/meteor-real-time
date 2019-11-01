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
    {{customers}}
  </div>
</template>

<script>
import axios from "axios";
import {
  insertCustomer,
  findCustomer
} from "../imports/methods/customerMethods";
export default {
  data() {
    return {
      customers: [],
      form: {
        name: "Jame",
        age: 20,
        gender: "F",
        email: "jmae@slfs.com"
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/findCustomer")
        .then(response => {
          this.customers = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.error(e);
        });
    },
    async btnSubmit() {
      // console.log(typeof this.form.age);
      axios
        .get("http://localhost:3000/insertCustomer", {
          params: this.form
        })
        .then(doc => {
          console.log(doc);
        })
        .catch(e => {
          console.error("Error :", e);
        });
    }
  }
};
</script>

<style>
</style>