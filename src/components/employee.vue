<template>
<f7-card name="employee" class="demo-card-header-pic">
  <f7-card-content :padding="true">
    <f7-block>
      <f7-row>
        <f7-col>{{ employee.employee_name }}</f7-col>
        <f7-col>Age: {{ employee.employee_age }}</f7-col>
        <f7-col>Salary: {{ employee.employee_salary }}</f7-col>
        <f7-col>
          <f7-button fill color="blue">Edit</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill color="red" @click="onDelete">Delete</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-card-content>
</f7-card>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: "employee",
  props: ["employee"],
  methods: {
    ...mapActions(['deleteEmployee']),
    onDelete() {
      this.deleteEmployee(this.employee.id);
    }
  }
}
</script>
