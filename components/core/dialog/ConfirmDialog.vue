<template>
  <v-dialog
    v-model="active"
    eager
    max-width="290"
  >
    <v-card>
      <v-container>
        Prompt Message
        <br>
        <v-btn
          color="green darken-1"
          text
          @click="clickYes"
        >
          Agree
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="clickNo"
        >
          Disagree
        </v-btn>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ConfirmDialog',
    data() {
      return {
        active: false,
      }
    },
    methods: {
      show() {
        this.active = true;
        return new Promise(async (resolve, reject) => {
          this.$on('resolve', () => {
            resolve();
          });

          this.$on('reject', () => {
            reject();
          });
        })
      },
      hide() {
        this.active = false;
      },
      clickYes() {
        this.$emit('resolve');
      },
      clickNo() {
        this.$emit('reject');
      },
    }
  }
</script>

<style scoped>

</style>
