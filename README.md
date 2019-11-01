# Read

- [Run](#To-run-this-Project)
- [Meteor+Vue](#1-Meteor-with-Vue)
- [Validated Methods](#2-Validated-Methods)

# meteor-validartedMethod-calling-method

# To run this Project

```bash
meteor npm i
```

```bash
meteor
```

# 1 Meteor with Vue

## 1.1 Document

### https://guide.meteor.com/vue.html

```bash
meteor npm install --save vue
```

```bash
meteor add akryum:vue-component
```

# 2 Validated Methods

## 2.1 Documents (ការគ្រប់គ្រង methods​)

### https://guide.meteor.com/methods.html

## 2.2 NOTE

### ហាមបង្កើត collections និង methods ក្នុង Folder server ដែលស្ថិតនៅ Root

### យើងត្រូវការដំឡើង Package មួយចំនួនទៀត

```bash
meteor npm install --save simpl-schema
```

#### https://www.npmjs.com/package/simpl-schema

### បើយើងចង់ Validate ទៅលើ collections យើងត្រូវតម្លើង package collection2

```bash
meteor add aldeed:collection2
```

#### https://github.com/aldeed/meteor-collection2

# [Add simple rest method-mixnin](https://atmospherejs.com/simple/rest-method-mixin)
```bash
meteor add simple:rest-method-mixin
```
[Usage backEnd](imports/methods/customerMethods.js)

[Usage frontEnd](client/App.vue)

# [បើកច្រកឲ្យគេ Access API](https://atmospherejs.com/simple/json-routes)
```bash
meteor add simple:json-routes
```
[Usage configuration](/server/main.js)

copy code bellow past to `/server/main.js`

```js
JsonRoutes.setResponseHeaders({
  "Cache-Control": "no-store",
  Pragma: "no-cache",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With"
});
```