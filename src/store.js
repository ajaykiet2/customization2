import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        groups:[
            {
                group_id: "TG001",
                label: "Default Group",
                components:["CM001","CM002","CM003"]
            },
        ],
        components:[
            {
              component_id: "CM001",
              component_name: "linetext1_CUS",
              component_type: "select",
              actionText: "Ajay Kumar",
              label: "Simple Text",
              required: true,
              helpText: "name is required",
              suggestions:["Honda", "Suzuki", "BMW", "Audi"]
            },
            {
              component_id: "CM002",
              component_name: "linetext1_CUS",
              component_type: "text",
              actionText: "Ajay Kumar",
              label: "Merge Tag Component",
              required: false,
              helpText: "name is required",
              suggestions:[]
            },
            {
              component_id: "CM003",
              component_name: "linetext1_CUS",
              component_type: "textarea",
              actionText: "Ajay Kumar",
              label: "Textarea",
              required: true,
              helpText: "name is required"
            }
        ],
    },
    mutations:{

    },
    actions:{

    }
});