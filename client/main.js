import Vue from "vue";
import App from "./App.vue";
import "./main.html";
import VueMeteorTracker from "vue-meteor-tracker"; // here!
Vue.use(VueMeteorTracker); // here!

Meteor.startup(() => {
  new Vue({
    el: "#app",
    ...App
  });
});
