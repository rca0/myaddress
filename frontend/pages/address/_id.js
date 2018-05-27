import axios from 'axios'
const url = 'http://localhost:8080/api/v1/address'  

export default {
  data: () => ({
    valid: true,
    city: '',
    cityRules: [
      v => !!v || 'Campo obrigatório',
      v => (v && v.length <= 18) || 'Este campo deve ter até 18 caracteres.'
    ],
    state: '',
    stateRules: [
      v => !!v || 'Campo obrigatório',
      v => (v && v.length <= 18) || 'Este campo deve ter até 18 caracteres.'
    ],
    zipcode: '',
    zipcodeRules: [
      v => !!v || 'Campo obrigatório',
      v => (v && v.length <= 10) || 'Este campo deve ter até 10 caracteres.'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        axios.post(url, {
          city: this.city,
          state: this.state,
          zipcode: this.zipcode
        }, {headers: {'Content-Type': 'application/json'}}).then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error.response)
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
