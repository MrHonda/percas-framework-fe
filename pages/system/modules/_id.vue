<template>
  <div>
    <Form
      v-bind="form"
      v-on:action="onAction"
    />
  </div>
</template>

<script>
  import Form from '~/components/core/form/Form';

  export default {
    components: {Form},
    data() {
      return {
        form: {
          title: 'Form',
          parts: {
            'part1': [
              [
                {
                  name: 'name',
                  type: 'text',
                  text: 'Name',
                  icon: 'mdi-text',
                  value: 'system',
                  col: 6
                },
                {
                  name: 'link',
                  type: 'text',
                  text: 'Link',
                  icon: 'mdi-text',
                  value: '/system',
                  col: 6
                }
              ]
            ]
          },
          actions: [
            {name: 'save', icon: 'mdi-content-save', text: 'Save', color: 'primary', style: {}},
            {name: 'close', icon: 'mdi-close', text: 'Close', color: '', style: {text: true}}
          ]
        }
      }
    },
    methods: {
      onAction({action, values}) {
        console.log(action);
        console.log(values);
      }
    }
  }
</script>

<style scoped>

</style>
