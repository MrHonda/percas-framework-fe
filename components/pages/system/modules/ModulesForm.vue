<template>
  <Form ref="form" :path="path" v-on:loaded="onLoaded">
    <template v-if="form">
      <v-row>
        <v-col cols="12" md="6">
          <Field :field="form.fields.name" />
        </v-col>
        <v-col cols="12" md="6">
          <Field :field="form.fields.link" />
        </v-col>
      </v-row>
    </template>
  </Form>
</template>

<script>
import Field from '@/components/core/form/fields/Field';
import Form from '@/components/core/form/Form';

export default {
  name: 'ModulesForm',
  components: {Form, Field},
  data() {
    return {
      path: '/system/modules',
      form: null,
    };
  },
  methods: {
    onLoaded() {
      this.form = this.$refs.form.form;
    }
  }
}
</script>

<style scoped>

</style>
