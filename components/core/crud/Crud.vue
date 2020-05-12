<template>
  <div>
    <Grid
      ref="grid"
      v-on:rowAction="handleGridRowAction"
    />
    <ModalForm
      ref="modalForm"
      v-on:action="handleFormAction"
    />
    <ConfirmDialog ref="removeDialog"/>
  </div>
</template>

<script>
  import Grid from '@/components/core/grid/Grid';
  import Modal from '@/components/core/modal/Modal';
  import ModalForm from '@/components/core/form/ModalForm';
  import ConfirmDialog from '@/components/core/dialog/ConfirmDialog';

  export default {
    name: 'Crud',
    components: {ConfirmDialog, ModalForm, Modal, Grid},
    data() {
      return {
        grid: null,
        modalForm: null,
        removeDialog: null
      }
    },
    mounted() {
      this.grid = this.$refs.grid;
      this.modalForm = this.$refs.modalForm;
      this.removeDialog = this.$refs.removeDialog;

      this.load();
    },
    methods: {
      load() {
        this.grid.load();
      },
      handleGridRowAction({action, id}) {
        switch (action) {
          case 'edit':
            this.handleGridRowEditAction(id);
            break;
          case 'delete':
            this.handleGridRowDeleteAction(id);
            break;
        }
      },
      handleGridRowEditAction(id) {
        this.$refs.modalForm.show(id);
      },
      handleGridRowDeleteAction(id) {
        this.removeDialog.show()
          .then(() => {
            this.modalForm.form.delete(id).then((result) => {
              console.log(result);
              this.removeDialog.hide();
              this.$refs.grid.load();
            });
          })
          .catch(() => {
            this.removeDialog.hide();
          });
      },
      handleFormAction({action}) {
        switch (action) {
          case 'save':
            this.handleFormSaveAction();
            break;
          case 'close':
            this.handleFormCloseAction();
            break;
          default:
            this.$emit('formAction', {action});
            break;
        }
      },
      handleFormSaveAction() {
        this.modalForm.form.save().then((result) => {
          console.log(result);
          this.modalForm.hide();
          this.grid.load();
        });
      },
      handleFormCloseAction() {
        this.modalForm.hide();
      },
    }
  }
</script>
