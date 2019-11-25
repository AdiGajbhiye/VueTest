<template>
<f7-card name="employee-form" class="demo-card-header-pic">
  <f7-list form>
  <!-- Text Input -->
  <f7-list-item>
    <f7-label>Name</f7-label>
    <f7-input type="text" placeholder="Name"/>
  </f7-list-item>
  <!-- Password -->
  <f7-list-item>
    <f7-label>Name</f7-label>
    <f7-input type="password" placeholder="Password"/>
  </f7-list-item>
  <!-- Select -->
  <f7-list-item>
    <f7-label>Gender</f7-label>
    <f7-input type="select">
      <option value="1">Male</option>
      <option value="1">Female</option>
    </f7-input>
  </f7-list-item>
  <!-- Switch -->
  <f7-list-item>
    <f7-label>Switch</f7-label>
    <f7-input type="switch" @change="onChange"></f7-input>
  </f7-list-item>
  <!-- Range -->
  <f7-list-item>
    <f7-label>Range</f7-label>
    <f7-input type="range" min="0" max="100" step="1" value="90"></f7-input>
  </f7-list-item>
  <!-- Textarea -->
  <f7-list-item>
    <f7-label>Textarea</f7-label>
    <f7-input type="textarea" placeholder="Textarea"></f7-input>
  </f7-list-item>
</f7-list>
</f7-card>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: "employee-form",
  props: ["employee"],
  methods: {
    ...mapActions(['deleteEmployee']),
    onDelete() {
      this.deleteEmployee(this.employee.id);
    }
  }
}
</script>
