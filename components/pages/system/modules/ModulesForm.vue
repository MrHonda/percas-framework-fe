<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          :label="fields.name.name"
          v-model="fields.name.value"
          :prepend-inner-icon="fields.name.icon"
          outlined
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          :label="fields.link.name"
          v-model="fields.link.value"
          :prepend-inner-icon="fields.link.icon"
          outlined
        />
      </v-col>
    </v-row>
    <v-row
      justify="end"
    >
      <v-col
        cols="auto"
      >
        <v-btn
          v-for="button in buttons"
          :key="button.key"
          :color="button.color"
          :outlined="button.outlined"
          class="ml-2"
          @click="onButtonClick(button.key)"
        >
          <v-icon left v-text="button.icon" />
          {{button.name}}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'ModulesForm',
  data() {
    return {
      fields: {},
      buttons: {},
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.fields = {
      'name': {
        key: 'name',
        name: 'Name',
        icon: 'mdi-tag',
        value: 'Module ' + this.id
      },
      'link': {
        key: 'link',
        name: 'Link',
        icon: 'mdi-tag',
        value: 'module-' + this.id
      }
    }
    this.buttons = {
      'save': {
        key: 'save',
        name: 'Save',
        icon: 'mdi-content-save',
        color: 'primary',
        outlined: false
      },
      'cancel': {
        key: 'cancel',
        name: 'Cancel',
        icon: 'mdi-cancel',
        color: 'default',
        outlined: true
      }
    }
  },
  methods: {
    onButtonClick(key) {
      switch (key) {
        case 'save':
          break;
        case 'cancel':
          const pathParts = (_.trim(this.$route.path, '/')).split('/');
          pathParts.pop();
          this.$router.push('/' + pathParts.join('/'));
          break;
      }
      console.log(key);
    }
  }
}
</script>

<style scoped>

</style>
