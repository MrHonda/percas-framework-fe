<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
      style="width: 350px;"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-card class="elevation-12">
            <v-card-text>
              <v-form @keyup.native.enter="submit">
                <v-text-field
                  outlined
                  label="Login"
                  id="login"
                  name="login"
                  prepend-inner-icon="mdi-account"
                  dense
                  type="text"
                  v-model="username"
                />
                <v-text-field
                  outlined
                  label="Password"
                  id="password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  dense
                  type="password"
                  v-model="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" @click="submit">
                <v-icon left>mdi-login</v-icon>
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import SecurityApi from '@/api/security.api';

  export default {
    layout: 'empty',
    data() {
      return {
        securityApi: new SecurityApi(this.$axios),
        username: '',
        password: ''
      };
    },
    methods: {
      async submit() {
        this.securityApi.login(this.username, this.password)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error.response);
          });
      },
    }
  }
</script>

<style scoped>

</style>
