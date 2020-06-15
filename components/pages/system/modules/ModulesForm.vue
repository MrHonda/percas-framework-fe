<template>
  <v-form v-if="form">
    <v-row>
      <v-col cols="12" md="6">
        <Field :field="form.fields.name" />
      </v-col>
      <v-col cols="12" md="6">
        <Field :field="form.fields.link" />
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="auto">
        <FormButtton
          v-for="button in form.buttons"
          :key="button.key"
          :button="button"
          @click="onButtonClick"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import Field from '@/components/core/form/fields/Field';
import FormButtton from '@/components/core/form/FormButtton';

export default {
  name: 'ModulesForm',
  components: {FormButtton, Field},
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
