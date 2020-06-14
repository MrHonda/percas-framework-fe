<template>
  <v-form
    v-if="form"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          :label="form.fields.name.name"
          v-model="form.fields.name.value"
          :prepend-inner-icon="form.fields.name.icon"
          outlined
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          :label="form.fields.link.name"
          v-model="form.fields.link.value"
          :prepend-inner-icon="form.fields.link.icon"
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
          v-for="button in form.buttons"
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
      id: null,
      form: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$axios.$get('http://localhost:8000' + this.$route.path).then(response => {
      this.form = response;
    });
  },
  methods: {
    onButtonClick(action) {
      switch (action) {
        case 'save':
          this.save(action);
          break;
        case 'cancel':
          this.cancel();
          break;
      }
    },
    save(action = 'save') {
      const data = {};
      for (const key in this.form.fields) {
        if (this.form.fields.hasOwnProperty(key)) {
          const field = this.form.fields[key];
          data[field.key] = field.value;
        }
      }
      const request = {
        action: action,
        fields: data
      };
      this.$axios.$post('http://localhost:8000' + this.$route.path, request).then(() => {
        this.cancel();
      });
    },
    cancel() {
      const pathParts = (_.trim(this.$route.path, '/')).split('/');
      pathParts.pop();
      this.$router.push('/' + pathParts.join('/'));
    }
  }
}
</script>

<style scoped>

</style>
