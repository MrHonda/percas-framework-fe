<template>
  <v-data-table
    :headers="headers"
    :items="rows"
    hide-default-header
  >
    <template v-slot:header="{ props: { headers } }">
      <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.key"
          v-html="header.text"
        ></th>
        <th></th>
      </tr>
      </thead>
    </template>
    <template v-slot:body="{ items }">
      <tbody>
      <tr
        v-for="row in rows"
        :key="row.id"
      >
        <template
          v-for="column in row.columns"
        >
          <td
            :key="column.key"
            v-html="column.value"
          ></td>
        </template>
        <td>
          <div
            v-for="action in row.actions"
            :key="action.key"
            v-text="action.text"
            @click="$emit('rowAction', {action: action.key, id: row.id})"
          ></div>
        </td>
      </tr>
      </tbody>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    name: 'Grid',
    data() {
      return {
        headers: [],
        rows: []
      }
    },
    methods: {
      load() {
        this.headers = [
          {key: 'col1', text: 'Column 1'},
          {key: 'col2', text: 'Column 2'},
          {key: 'col3', text: 'Column 3'},
        ];

        this.rows = [];

        for (let i = 1; i <= 5; i++) {
          this.rows.push(
            {
              id: i,
              columns: [
                {key: 'col1', value: `Value ${i}.1`},
                {key: 'col2', value: `Value ${i}.2`},
                {key: 'col3', value: `Value ${i}.3`},
              ],
              actions: [
                {key: 'edit', text: 'Edit'},
                {key: 'delete', text: 'Delete'},
              ]
            }
          )
        }
      }
    }
  }
</script>
<!--<template>-->
<!--  <v-data-table-->
<!--    :headers="headers"-->
<!--    :items="rows"-->
<!--    :hide-default-header="true"-->
<!--    :items-per-page="pagination.rowsPerPage"-->
<!--    :server-items-length="pagination.rowsCount"-->
<!--    :page="pagination.currentPage"-->
<!--  >-->
<!--    <template v-slot:top>-->
<!--      <div class="d-flex">-->
<!--        <div class="headline py-2 px-1 flex-grow-1" v-html="title"></div>-->
<!--        <div>-->
<!--          <template v-for="action in gridActions">-->
<!--            <v-tooltip bottom>-->
<!--              <template v-slot:activator="{ on }">-->
<!--                <v-btn-->
<!--                  v-on="on"-->
<!--                  text-->
<!--                  outlined-->
<!--                  :key="action.key"-->
<!--                  :color="action.color"-->
<!--                  @click="emitGridAction(action.key)"-->
<!--                >-->
<!--                  <v-icon>{{action.icon}}</v-icon>-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <div>{{action.text}}</div>-->
<!--            </v-tooltip>-->
<!--          </template>-->
<!--          &lt;!&ndash;          <v-menu&ndash;&gt;-->
<!--          &lt;!&ndash;            offset-x&ndash;&gt;-->
<!--          &lt;!&ndash;            left&ndash;&gt;-->
<!--          &lt;!&ndash;          >&ndash;&gt;-->
<!--          &lt;!&ndash;            <template v-slot:activator="{ on }">&ndash;&gt;-->
<!--          &lt;!&ndash;              <v-btn text outlined v-on="on">&ndash;&gt;-->
<!--          &lt;!&ndash;                <v-icon>mdi-dots-vertical</v-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;              </v-btn>&ndash;&gt;-->
<!--          &lt;!&ndash;            </template>&ndash;&gt;-->
<!--          &lt;!&ndash;            <v-list>&ndash;&gt;-->
<!--          &lt;!&ndash;              <v-list-item link>&ndash;&gt;-->
<!--          &lt;!&ndash;                <v-list-item-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;                  <v-icon>mdi-pencil</v-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;                </v-list-item-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;                <v-list-item-content>&ndash;&gt;-->
<!--          &lt;!&ndash;                  <v-list-item-title>Edit selected</v-list-item-title>&ndash;&gt;-->
<!--          &lt;!&ndash;                </v-list-item-content>&ndash;&gt;-->
<!--          &lt;!&ndash;              </v-list-item>&ndash;&gt;-->
<!--          &lt;!&ndash;              <v-list-item link>&ndash;&gt;-->
<!--          &lt;!&ndash;                <v-list-item-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;                  <v-icon>mdi-delete</v-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;                </v-list-item-icon>&ndash;&gt;-->
<!--          &lt;!&ndash;                <v-list-item-content>&ndash;&gt;-->
<!--          &lt;!&ndash;                  <v-list-item-title>Delete selected</v-list-item-title>&ndash;&gt;-->
<!--          &lt;!&ndash;                </v-list-item-content>&ndash;&gt;-->
<!--          &lt;!&ndash;              </v-list-item>&ndash;&gt;-->
<!--          &lt;!&ndash;            </v-list>&ndash;&gt;-->
<!--          &lt;!&ndash;          </v-menu>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
<!--    <template v-slot:header="{ props: { headers } }">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th v-if="options.selectable" style="width: 56px;">-->
<!--          <v-checkbox :indeterminate="partialRowsSelected" :input-value="allRowsSelected"-->
<!--                      @change="selectAllRows"></v-checkbox>-->
<!--        </th>-->
<!--        <th v-for="header in headers" :key="header.key"-->
<!--            :style="{width: header.width, minWidth: header.width, textAlign: header.align}">-->
<!--          <div class="d-flex align-center text-truncate" :style="{maxWidth: header.width}">-->
<!--            <div class="d-flex flex-grow-1 text-truncate">-->
<!--              <div class="mr-2 text-truncate align-self-center">-->
<!--                <div class="subtitle-2 text-truncate" v-html="header.text"></div>-->
<!--                <div class="font-weight-regular text-truncate" v-text="getFilterValues(header.filters)"></div>-->
<!--              </div>-->
<!--              <div v-if="header.sortable" class="sort-icons">-->
<!--                <div>-->
<!--                  <v-btn icon x-small :class="{active: isSortedBy(header.key, 'asc')}"-->
<!--                         @click="applySort(header.key, 'asc')">-->
<!--                    <v-icon size="20">mdi-chevron-up</v-icon>-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <v-btn icon x-small :class="{active: isSortedBy(header.key, 'desc')}"-->
<!--                         @click="applySort(header.key, 'desc')">-->
<!--                    <v-icon size="20">mdi-chevron-down</v-icon>-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div v-if="header.filters && header.filters.length">-->
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
<!--                    <template v-for="filter in header.filters">-->
<!--                      <v-text-field outlined :label="filter.text" clearable dense :key="filter.key"-->
<!--                                    v-model="filter.value" @keyup.enter="applyFilters">-->
<!--                      </v-text-field>-->
<!--                    </template>-->
<!--                    <div class="text-center">-->
<!--                      <v-btn color="primary" @click="applyFilters">-->
<!--                        Filter-->
<!--                      </v-btn>-->
<!--                      <v-btn text @click="clearFilters(header.filters)">-->
<!--                        Clear-->
<!--                      </v-btn>-->
<!--                    </div>-->
<!--                  </v-container>-->
<!--                </v-card>-->
<!--              </v-menu>-->
<!--            </div>-->
<!--          </div>-->
<!--        </th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--    </template>-->
<!--    <template v-slot:body="{ items }">-->
<!--      <tbody>-->
<!--      <tr v-for="row in items" :key="row.id" :class="{'v-data-table__selected': selectedRows.includes(row.id)}">-->
<!--        <td v-if="options.selectable" style="width: 56px;">-->
<!--          <v-checkbox v-model="selectedRows" :value="row.id" multiple></v-checkbox>-->
<!--        </td>-->
<!--        <td v-for="column in row.columns" :key="column.key" :style="{textAlign: column.align}">-->
<!--          <template v-if="column.type === 'actions'">-->
<!--            <v-menu-->
<!--              offset-x-->
<!--              left-->
<!--            >-->
<!--              <template v-slot:activator="{ on }">-->
<!--                <v-btn text icon small v-on="on">-->
<!--                  <v-icon size="20">mdi-dots-vertical</v-icon>-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <v-list>-->
<!--                <v-list-item-->
<!--                  v-for="action in column.value"-->
<!--                  :key="action.key"-->
<!--                  link-->
<!--                  @click="emitRowAction(action.key, row.id)"-->
<!--                >-->
<!--                  <v-list-item-icon>-->
<!--                    <v-icon>{{action.icon}}</v-icon>-->
<!--                  </v-list-item-icon>-->
<!--                  <v-list-item-content>-->
<!--                    <v-list-item-title>{{action.text}}</v-list-item-title>-->
<!--                  </v-list-item-content>-->
<!--                </v-list-item>-->
<!--              </v-list>-->
<!--            </v-menu>-->
<!--          </template>-->
<!--          <template v-else>-->
<!--            <div v-html="column.value"></div>-->
<!--          </template>-->
<!--        </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </template>-->
<!--  </v-data-table>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: 'Grid',-->
<!--    props: {-->
<!--      title: {-->
<!--        type: String,-->
<!--        required: true-->
<!--      },-->
<!--      headers: {-->
<!--        type: Array,-->
<!--        required: true-->
<!--      },-->
<!--      rows: {-->
<!--        type: Array,-->
<!--        required: true-->
<!--      },-->
<!--      sort: {-->
<!--        type: Object,-->
<!--        required: true-->
<!--      },-->
<!--      pagination: {-->
<!--        type: Object,-->
<!--        required: true-->
<!--      },-->
<!--      gridActions: {-->
<!--        type: Array,-->
<!--        required: false,-->
<!--        default: []-->
<!--      },-->
<!--      options: {-->
<!--        type: Object,-->
<!--        requred: false,-->
<!--        default: {}-->
<!--      }-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        selectedRows: []-->
<!--      }-->
<!--    },-->
<!--    computed: {-->
<!--      partialRowsSelected() {-->
<!--        return this.selectedRows.length > 0 && this.selectedRows.length !== this.rows.length;-->
<!--      },-->
<!--      allRowsSelected() {-->
<!--        return this.selectedRows.length > 0 && this.selectedRows.length === this.rows.length;-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      emitRowAction(action, id) {-->
<!--        this.$emit('rowAction', {action, id});-->
<!--      },-->
<!--      emitGridAction(action, data) {-->
<!--        this.$emit('gridAction', {action, data});-->
<!--      },-->
<!--      isSortedBy(key, direction) {-->
<!--        return this.sort.key === key && this.sort.direction === direction;-->
<!--      },-->
<!--      applySort(key, direction) {-->
<!--        console.log('applySort: ' + key + '; ' + direction);-->
<!--      },-->
<!--      applyFilters() {-->
<!--        console.log('applyFilters');-->
<!--      },-->
<!--      clearFilters(filters) {-->
<!--        for (const filter of filters) {-->
<!--          filter.value = '';-->
<!--        }-->
<!--      },-->
<!--      getFilterValues(filters) {-->
<!--        if (!filters) {-->
<!--          return '';-->
<!--        }-->

<!--        const values = [];-->
<!--        for (const filter of filters) {-->
<!--          if (filter.value) {-->
<!--            values.push(filter.value);-->
<!--          }-->
<!--        }-->

<!--        return values.join(', ');-->
<!--      },-->
<!--      selectAllRows(val) {-->
<!--        this.selectedRows = [];-->
<!--        if (val) {-->
<!--          for (const row of this.rows) {-->
<!--            this.selectedRows.push(row.id);-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  .sort-icons {-->
<!--    .active {-->
<!--      color: white;-->
<!--      background-color: var(&#45;&#45;v-primary-base);-->
<!--    }-->
<!--  }-->
<!--</style>-->
