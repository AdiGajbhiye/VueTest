<template>
  <f7-page name="home">
    <f7-button fill color="green" @click="onAdd">Add new Employee</f7-button>
    <Employee v-for="item in allEmployees" v-bind:key="item.id" v-bind:employee="item" />
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Employee from "../components/employee.vue";

export default {
  name: "home",
  components: {
    Employee
  },
  computed: mapGetters(["allEmployees"]),
  methods: {
    ...mapActions(["fetchEmployees"]),
    onAdd() {
      const employee = {
        employee_name: "",
        employee_age: "",
        employee_salary: ""
      };
      this.$f7router.navigate("/form/", {
        props: { employee: employee, edit: false }
      });
    }
  },
  created() {
    this.fetchEmployees();
  }
};
</script>
