<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="city"
      :rules="cityRules"
      :counter="18"
      label="Cidade"
      required
    ></v-text-field>
    <v-text-field
      v-model="state"
      :rules="stateRules"
      :counter="18"
      label="Estado"
      required
    ></v-text-field>
    <v-text-field
      v-model="zipcode"
      :rules="zipcodeRules"
      :counter="10"
      label="Cep"
      required
    ></v-text-field>
    <v-btn @click="clear">LIMPAR</v-btn>
    <v-btn
      :disabled="!valid"
      @click="submit">
      SALVAR
    </v-btn>
  </v-form>
</template>

<script>
  import axios from 'axios'
  
  const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

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
          api.get('/api/v1/address', {
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
</script>

<style>
    .right_button {
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>