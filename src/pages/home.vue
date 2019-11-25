<template>
<f7-page name="home">
 {{ employees }}
</f7-page>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      employees: []
    }
  },
  created() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then(res => this.employees = res)
      .catch(err => console.log(err));
  }
}
</script>
