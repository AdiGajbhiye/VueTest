<template>
  <f7-page name="form">
    <f7-navbar v-bind:title="display" back-link="Back"></f7-navbar>

    <f7-block-title>Form Example</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        v-bind:value="employee.employee_name"
        @input="employee.employee_name = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="Age"
        type="text"
        placeholder="Your age"
        v-bind:value="employee.employee_age"
        @input="employee.employee_age = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <f7-list no-hairlines-md>
      <f7-list-input
        label="Salary"
        type="text"
        placeholder="Your salary"
        v-bind:value="employee.employee_salary"
        @input="employee.employee_salary = $event.target.value"
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
  props: ["employee", "edit"],
  data() {
    return {
      display: ""
    };
  },
  created() {
    this.display = this.edit ? "Edit" : "Add";
  },
  methods: {
    ...mapActions(["updateEmployee", "addEmployee"]),
    onSave() {
      if (this.edit) this.updateEmployee(this.employee, this.employee.id);
      else this.addEmployee(this.employee);
    }
  }
};
</script>