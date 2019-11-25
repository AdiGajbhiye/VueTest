<template>
<f7-page name="home">
  {{ allEmployees }}
</f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "home",
  data() {
    return {
      employees: []
    }
  },
  computed: mapGetters(['allEmployees']),
  methods: {
    ...mapActions(['fetchEmployees', 'addEmployee', 'updateEmployee', 'deleteEmployee'])
  },
  created() {
    // this.fetchEmployees();
    // this.addEmployee({
    //   "name": "test123",
    //   "salary": "123",
    //   "age": "23"
    // });
    // this.updateEmployee({
    //   "name": "test123",
    //   "salary": "123",
    //   "age": "23"
    // }, 719);
    // this.deleteEmployee(719);
  }
}
</script>
