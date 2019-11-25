<template>
<f7-page name="home">
  <Employee v-for="item in allEmployees" v-bind:key="item.id" v-bind:employee="item"/>
</f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Employee from '../components/employee.vue';

export default {
  name: "home",
  components: {
    Employee
  },
  computed: mapGetters(['allEmployees']),
  methods: {
    ...mapActions(['fetchEmployees', 'addEmployee', 'updateEmployee', 'deleteEmployee'])
  },
  created() {
    this.fetchEmployees();
  }
}
</script>
