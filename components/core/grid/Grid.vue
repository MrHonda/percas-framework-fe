<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    :hide-default-header="true"
  >
    <template v-slot:top>
      <div class="d-flex">
        <div class="headline py-2 px-1 flex-grow-1">Grid</div>
        <div>
          <v-btn text outlined color="success">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn text outlined color="primary">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
          <v-menu
            offset-x
            left
          >
            <template v-slot:activator="{ on }">
              <v-btn text outlined v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Edit selected</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-delete</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Delete selected</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </template>
    <template v-slot:header="{ props: { headers } }">
      <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index" :style="{width: header.width, minWidth: header.width}">
          <div class="d-flex align-center" :style="{maxWidth: header.width}">
            <div class="d-flex flex-grow-1">
              <div class="mr-2 text-truncate">
                <div class="subtitle-2 text-truncate">{{header.text}}</div>
                <div class="font-weight-regular text-truncate">Filtered</div>
              </div>
              <div v-if="header.sortable" class="sort-icons">
                <div>
                  <v-btn icon x-small>
                    <v-icon size="20">mdi-chevron-up</v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn icon x-small>
                    <v-icon size="20">mdi-chevron-down</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div>
              <v-menu
                :close-on-content-click="false"
                offset-x
                left
              >
                <template v-slot:activator="{ on }">
                  <v-btn icon small v-on="on">
                    <v-icon size="20">mdi-filter</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-container>
                    <v-text-field outlined label="Filter" clearable dense>
                    </v-text-field>
                    <v-text-field outlined label="Filter" clearable dense>
                    </v-text-field>
                    <div class="text-center">
                      <v-btn color="primary">
                        Filter
                      </v-btn>
                      <v-btn text>
                        Clear
                      </v-btn>
                    </div>
                  </v-container>

                </v-card>
              </v-menu>
            </div>
          </div>
        </th>
      </tr>
      </thead>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-menu
        offset-x
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn text icon small v-on="on">
            <v-icon size="20">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'Grid',
    data() {
      return {
        headers: [
          {
            text: 'Desert',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          {text: 'Calories', value: 'calories'},
          {text: 'Fat (g)', value: 'fat'},
          {text: 'Carbs (g)', value: 'carbs'},
          {text: 'Protein (g)', value: 'protein'},
          {text: 'Iron (%)', value: 'iron'},
          {text: '', value: 'actions'}
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>

<style scoped lang="scss">
</style>
