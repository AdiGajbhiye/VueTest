<template>
  <f7-page name="form">
    <f7-navbar title="Edit" back-link="Back"></f7-navbar>

    <f7-block-title>Form Example</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        v-model="employee.employee_name"
      ></f7-list-input>
    </f7-list>

    <f7-list no-hairlines-md>
      <f7-list-input label="Age" type="text" placeholder="Your age" v-model="employee.employee_age"></f7-list-input>
    </f7-list>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="Salary"
        type="text"
        placeholder="Your salary"
        v-model="employee.employee_salary"
      ></f7-list-input>
    </f7-list>

    <f7-block strong>
      <f7-row tag="p">
        <f7-button class="col" fill @click="onSave">Save</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["employee"],
  methods: {
    ...mapActions(["updateEmployee"]),
    onSave() {
      this.updateEmployee(this.employee, this.employee.id);
    }
  }
};
</script>