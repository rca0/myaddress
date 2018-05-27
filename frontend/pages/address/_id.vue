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

<script src="./_id.js"></script>

<style>
    .right_button {
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>