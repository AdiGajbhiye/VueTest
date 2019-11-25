const state = {
  employees: []
};

const getters = {
  allEmployees: (state) => state.employees
};

const actions = {
  fetchEmployees({ commit }) {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then(res => commit('setEmployees', res))
      .catch(err => console.log(err));
  },

  addEmployee({ commit }, employee) {
    fetch('http://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        body: JSON.stringify(employee)
      })
      .then(res => res.json())
      .then(res => commit('addEmployee', res))
      .catch(err => console.log(err));
  },

  updateEmployee({ commit }, employee, id) {
    fetch(`http://dummy.restapiexample.com/api/v1/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(employee)
      })
      .then(res => res.json())
      .then(res => commit('updateEmployee', res))
      .catch(err => console.log(err));
  },

  deleteEmployee({ commit }, id) {
    fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, { method: 'DELETE' })
      .then(res => commit('deleteEmployee', id))
      .catch(err => console.log(err));
  },
};

const mutations = {
  setEmployees: (state, employees) => state.employees = employees,
  addEmployee: (state, employee) => state.employees.push(employee),
  updateEmployee: (state, newEmployee, id) => state.employees = state.employees.map(employee => (employee.id === id) ? newEmployee : employee),
  deleteEmployee: (state, id) => state.employees = state.employees.filter(employee => employee.id != id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
