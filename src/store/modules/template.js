import template from '../../apis/template'
import store from '..';

// initial state
const state = {
  tree: [],
  tpl_components:[],
  errors:[]
}

// getters
const getters = {}

// actions
const actions = {
  getTreeData ({ commit }, args) {
    template.getTemplateTree(args.template_id, args.assignment_id, (error, tree) => {
      if(error)
        commit('setError', error)
      else
      commit('setTree', tree)
    })
  },

  getComponentConfiguration ({ commit }, component_id) {
    template.getComponentConfiguration(component_id, (error, component_configs) => {
      // console.log(component_configs)
      if(error)
        commit('setError', error)
      else
      commit('setComponents', component_configs)
    })
  },

  getComponentData(state, component_id){
    return store.tpl_components[component_id];
  },

  throwError({commit}, error){
    commit('setError', error)
  }
}

// mutations
const mutations = {
  setTree (state, tree) {
    state.tree = tree
  },
  setComponents(state, configs) {
    let idx = state.tpl_components.findIndex((item => item.component_id === configs.component_id));
    if(idx != -1) state.tpl_components.splice(idx, 1, configs)
    else state.tpl_components.push(configs)
  },
  setError (state, error) {
    state.errors.push(error)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}