<template>
  <v-data-table
    :headers="headers"
    :items="rows"
    :items-per-page="5"
    :hide-default-header="true"
  >
    <template v-slot:top>
      <div class="d-flex">
        <div class="headline py-2 px-1 flex-grow-1">Grid</div>
        <div>
          <v-btn text outlined color="success" @click="emitGlobalAction('add', {})">
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
          <v-list-item link @click="emitRowAction('edit', item.id)">
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
    props: {
      headers: {
        type: Array,
        required: true
      },
      rows: {
        type: Array,
        required: true
      }
    },
    methods: {
      emitRowAction(action, id) {
        this.$emit('rowAction', {action, id});
      },
      emitGlobalAction(action, data) {
        this.$emit('globalAction', {action, data});
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
