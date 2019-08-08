/**
 * @package apis
 * Module in charge of all the operations related to api calls
 *
 * @author akumar
 * @copyright Copyright &copy; 2019, SproutLoud Media Networks
 */

 // import dependencies
 import axios from '../helpers/interceptor'

// export all functions related to api calls
export default {

    /**
     * @method getTemplate - get the template data from api
     * 
     * @param {string} template_id 
     * @param {string} assignment_id 
     * @param {function} cb - callback function
     * 
     * @returns {object} template data object | error object 
     */
    getTemplateTree (template_id, assignment_id, cb) {
        axios.get(`http://localhost:3000/data`)
        .then(response => cb(null, response.data))
        .catch(function (error) {
            // handle error
            window.console.log(error);
            cb(error, null)
        })
    },
    getComponentConfiguration (component_id, cb) {
        axios.get(`http://localhost:3000/${component_id}`)
        .then(response => cb(null, response.data))
        .catch(function (error) {
            // handle error
            window.console.log(error);
            cb(error, null)
        })
    },
}
