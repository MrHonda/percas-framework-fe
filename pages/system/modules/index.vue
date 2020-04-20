<template>
  <div>
  <Grid
    v-bind="grid"
    v-on:rowAction="onRowAction"
    v-on:globalAction="onGlobalAction"
  />
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <h1>{{rowId}}</h1>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Grid from '~/components/core/grid/Grid';

  export default {
    components: {Grid},
    data() {
      return {
        grid: {
          headers: [
            {text: 'Desert', sortable: true, value: 'name'},
            {text: 'Calories', value: 'calories'},
            {text: 'Fat (g)', value: 'fat'},
            {text: 'Carbs (g)', value: 'carbs'},
            {text: 'Protein (g)', value: 'protein'},
            {text: 'Iron (%)', value: 'iron'},
            {text: '', value: 'actions'}
          ],
          rows: [
            {
              id: 1,
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              iron: '1%',
            },
            {
              id: 2,
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              iron: '1%',
            },
          ],
        },
        dialog: false,
        rowId: 0,
      }
    },
    methods: {
      onRowAction({action, id}) {
        if(action === 'edit') {
          this.rowId = id;
          this.dialog = true;
        }
      },
      onGlobalAction({action, data}) {
        console.log(action, data);
      }
    }
  }
</script>
