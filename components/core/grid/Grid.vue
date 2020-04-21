<template>
  <v-data-table
    :headers="headers"
    :items="rows"
    :hide-default-header="true"
    :items-per-page="pagination.rowsPerPage"
    :server-items-length="pagination.rowsCount"
    :page="pagination.currentPage"
    show-select
  >
    <template v-slot:top>
      <div class="d-flex">
        <div class="headline py-2 px-1 flex-grow-1" v-html="title"></div>
        <div>
          <template v-for="action in gridActions">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  text
                  outlined
                  :key="action.key"
                  :color="action.color"
                  @click="emitGridAction(action.key)"
                >
                  <v-icon>{{action.icon}}</v-icon>
                </v-btn>
              </template>
              <div>{{action.text}}</div>
            </v-tooltip>
          </template>
<!--          <v-menu-->
<!--            offset-x-->
<!--            left-->
<!--          >-->
<!--            <template v-slot:activator="{ on }">-->
<!--              <v-btn text outlined v-on="on">-->
<!--                <v-icon>mdi-dots-vertical</v-icon>-->
<!--              </v-btn>-->
<!--            </template>-->
<!--            <v-list>-->
<!--              <v-list-item link>-->
<!--                <v-list-item-icon>-->
<!--                  <v-icon>mdi-pencil</v-icon>-->
<!--                </v-list-item-icon>-->
<!--                <v-list-item-content>-->
<!--                  <v-list-item-title>Edit selected</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--              </v-list-item>-->
<!--              <v-list-item link>-->
<!--                <v-list-item-icon>-->
<!--                  <v-icon>mdi-delete</v-icon>-->
<!--                </v-list-item-icon>-->
<!--                <v-list-item-content>-->
<!--                  <v-list-item-title>Delete selected</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--              </v-list-item>-->
<!--            </v-list>-->
<!--          </v-menu>-->
        </div>
      </div>
    </template>
    <template v-slot:header="{ props: { headers } }">
      <thead>
      <tr>
        <th v-for="header in headers" :key="header.key" :style="{width: header.width, minWidth: header.width, textAlign: header.align}">
          <div class="d-flex align-center" :style="{maxWidth: header.width}">
            <div class="d-flex flex-grow-1">
              <div class="mr-2 text-truncate align-self-center">
                <div class="subtitle-2 text-truncate" v-html="header.text"></div>
                <div class="font-weight-regular text-truncate"></div>
              </div>
<!--              <div v-if="header.sortable" class="sort-icons">-->
<!--                <div>-->
<!--                  <v-btn icon x-small>-->
<!--                    <v-icon size="20">mdi-chevron-up</v-icon>-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <v-btn icon x-small>-->
<!--                    <v-icon size="20">mdi-chevron-down</v-icon>-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </div>-->
            </div>
<!--            <div>-->
<!--              <v-menu-->
<!--                :close-on-content-click="false"-->
<!--                offset-x-->
<!--                left-->
<!--              >-->
<!--                <template v-slot:activator="{ on }">-->
<!--                  <v-btn icon small v-on="on">-->
<!--                    <v-icon size="20">mdi-filter</v-icon>-->
<!--                  </v-btn>-->
<!--                </template>-->
<!--                <v-card>-->
<!--                  <v-container>-->
<!--                    <v-text-field outlined label="Filter" clearable dense>-->
<!--                    </v-text-field>-->
<!--                    <v-text-field outlined label="Filter" clearable dense>-->
<!--                    </v-text-field>-->
<!--                    <div class="text-center">-->
<!--                      <v-btn color="primary">-->
<!--                        Filter-->
<!--                      </v-btn>-->
<!--                      <v-btn text>-->
<!--                        Clear-->
<!--                      </v-btn>-->
<!--                    </div>-->
<!--                  </v-container>-->

<!--                </v-card>-->
<!--              </v-menu>-->
<!--            </div>-->
          </div>
        </th>
      </tr>
      </thead>
    </template>
    <template v-slot:body="{ items }">
      <tbody>
      <tr v-for="row in items" :key="row.id">
        <td v-for="column in row.columns" :key="column.key" :style="{textAlign: column.align}">
          <template v-if="column.type === 'actions'">
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
                <v-list-item
                  v-for="action in column.value"
                  :key="action.key"
                  link
                  @click="emitRowAction(action.key, row.id)"
                >
                  <v-list-item-icon>
                    <v-icon>{{action.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{action.text}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-else>
            <div v-html="column.value"></div>
          </template>
        </td>
      </tr>
      </tbody>
    </template>
<!--    <template v-slot:item.actions="{ item }">-->
<!--      <v-menu-->
<!--        offset-x-->
<!--        left-->
<!--      >-->
<!--        <template v-slot:activator="{ on }">-->
<!--          <v-btn text icon small v-on="on">-->
<!--            <v-icon size="20">mdi-dots-vertical</v-icon>-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <v-list>-->
<!--          <v-list-item link @click="emitRowAction('edit', item.id)">-->
<!--            <v-list-item-icon>-->
<!--              <v-icon>mdi-pencil</v-icon>-->
<!--            </v-list-item-icon>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title>Edit</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--          <v-list-item link>-->
<!--            <v-list-item-icon>-->
<!--              <v-icon>mdi-delete</v-icon>-->
<!--            </v-list-item-icon>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title>Delete</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-menu>-->
<!--    </template>-->
  </v-data-table>
</template>

<script>
  export default {
    name: 'Grid',
    props: {
      title: {
        type: String,
        required: true
      },
      headers: {
        type: Array,
        required: true
      },
      rows: {
        type: Array,
        required: true
      },
      pagination: {
        type: Object,
        required: true
      },
      gridActions: {
        type: Array,
        required: false,
        default: []
      }
    },
    methods: {
      emitRowAction(action, id) {
        this.$emit('rowAction', {action, id});
      },
      emitGridAction(action, data) {
        this.$emit('gridAction', {action, data});
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
