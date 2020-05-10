<template>
  <Modal ref="modal">
    <Form
      ref="form"
      v-on:action="$emit('action', $event)"
    />
  </Modal>
</template>

<script>
  import Modal from '@/components/core/modal/Modal';
  import Form from '@/components/core/form/Form';

  export default {
    name: 'ModalForm',
    components: {Form, Modal},
    data() {
      return {
        modal: null,
        form: null
      }
    },
    mounted() {
      this.modal = this.$refs.modal;
      this.form = this.$refs.form;
    },
    methods: {
      show(id) {
        this.modal.show();
        this.form.load(id);
      },
      hide() {
        this.modal.hide();
      }
    }
  }
</script>

<style scoped>

</style>
