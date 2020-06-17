<template>
  <v-form v-if="form">
    <slot />
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
  name: 'Form',
  components: {FormButtton, Field},
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: null,
      form: null
    };
  },
  computed: {
    fullPath() {
      return `${_.trimEnd(this.path, '/')}/${this.id}`;
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.$axios.$get('http://localhost:8000' + this.fullPath).then(response => {
      this.form = response;
      this.$emit('loaded');
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
      this.$axios.$post('http://localhost:8000' + this.fullPath, request).then(() => {
        this.cancel();
      });
    },
    cancel() {
      const pathParts = (_.trim(this.fullPath, '/')).split('/');
      pathParts.pop();
      this.$router.push('/' + pathParts.join('/'));
    }
  }
}
</script>

<style scoped>

</style>
