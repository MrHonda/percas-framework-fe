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
              <v-form>
                <v-text-field
                  outlined
                  label="Login"
                  id="login"
                  name="login"
                  prepend-inner-icon="mdi-account"
                  dense
                  type="text"
                />
                <v-text-field
                  outlined
                  label="Password"
                  id="password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  dense
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary">
                <v-icon left>mdi-login</v-icon> Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    layout: 'empty'
  }
</script>

<style scoped>

</style>
