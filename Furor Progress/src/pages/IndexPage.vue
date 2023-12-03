<template>
  <q-page class="q-pa-md column">
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="[
        { label: 'Horizontal (default)', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' },
      ]"
      color="amber"
      flat
      bordered
    />
    <q-table
      flat
      bordered
      title="Crud"
      :rows="rows"
      :columns="columns"
      row-key="name"
      dark
      color="amber"
      :separator="separator"
      :filter="filter"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input
          borderles
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          color="lime-11"
          bg-color="blue-grey-1"
          filled
        >
          <template v-slot:append>
            <q-icon name="search" color="amber" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

// const columns = [
//   {
//     name: "name",
//     required: true,
//     label: "Dessert (100g serving)",
//     align: "left",
//     field: (row) => row.name,
//     format: (val) => `${val}`,
//     sortable: true,
//   },
//   {
//     name: "calories",
//     align: "center",
//     label: "Calories",
//     field: "calories",
//     sortable: true,
//   },
//   { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
//   { name: "carbs", label: "Carbs (g)", field: "carbs" },
//   { name: "protein", label: "Protein (g)", field: "protein" },
//   { name: "sodium", label: "Sodium (mg)", field: "sodium" },
//   {
//     name: "calcium",
//     label: "Calcium (%)",
//     field: "calcium",
//     sortable: true,
//     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
//   },
//   {
//     name: "iron",
//     label: "Iron (%)",
//     field: "iron",
//     sortable: true,
//     sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
//   },
// ];
// const rows = [
//   {
//     name: "Frozen Yogurt",
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0,
//     sodium: 87,
//     calcium: "14%",
//     iron: "1%",
//   },
//   {
//     name: "Ice cream sandwich",
//     calories: 237,
//     fat: 9.0,
//     carbs: 37,
//     protein: 4.3,
//     sodium: 129,
//     calcium: "8%",
//     iron: "1%",
//   },
//   {
//     name: "Eclair",
//     calories: 262,
//     fat: 16.0,
//     carbs: 23,
//     protein: 6.0,
//     sodium: 337,
//     calcium: "6%",
//     iron: "7%",
//   },
//   {
//     name: "Cupcake",
//     calories: 305,
//     fat: 3.7,
//     carbs: 67,
//     protein: 4.3,
//     sodium: 413,
//     calcium: "3%",
//     iron: "8%",
//   },
//   {
//     name: "Gingerbread",
//     calories: 356,
//     fat: 16.0,
//     carbs: 49,
//     protein: 3.9,
//     sodium: 327,
//     calcium: "7%",
//     iron: "16%",
//   },
//   {
//     name: "Jelly bean",
//     calories: 375,
//     fat: 0.0,
//     carbs: 94,
//     protein: 0.0,
//     sodium: 50,
//     calcium: "0%",
//     iron: "0%",
//   },
//   {
//     name: "Lollipop",
//     calories: 392,
//     fat: 0.2,
//     carbs: 98,
//     protein: 0,
//     sodium: 38,
//     calcium: "0%",
//     iron: "2%",
//   },
//   {
//     name: "Honeycomb",
//     calories: 408,
//     fat: 3.2,
//     carbs: 87,
//     protein: 6.5,
//     sodium: 562,
//     calcium: "0%",
//     iron: "45%",
//   },
//   {
//     name: "Donut",
//     calories: 452,
//     fat: 25.0,
//     carbs: 51,
//     protein: 4.9,
//     sodium: 326,
//     calcium: "2%",
//     iron: "22%",
//   },
//   {
//     name: "KitKat",
//     calories: 518,
//     fat: 26.0,
//     carbs: 65,
//     protein: 7,
//     sodium: 54,
//     calcium: "12%",
//     iron: "6%",
//   },
// ];
// const columns = [
//   {
//     name: "name_uz",
//     required: true,
//     label: "Name uz",
//     align: "left",
//     field: (row) => row.name_uz,
//     format: (val) => `${val}`,
//     sortable: true,
//   },
//   {
//     name: "cost",
//     align: "center",
//     label: "Narxi",
//     field: "cost",
//     sortable: true,
//   },
//   { name: "Manzili", label: "Address", field: "address", sortable: true,  align: "center"},
// ];

// const rows = [
//   {
//     name_uz: "11",
//     cost: 11.0,
//     address: "11",
//   },
//   {
//     name_uz: "string 23131",
//     cost: 231321.0,
//     address: "string 23131",
//   },
//   {
//     name_uz: "string",
//     cost: 0.0,
//     address: "string",
//   },
//   // Yana boshqa ma'lumotlar ...
// ];

const columns = [
  {
    name: "id",
    label: "Product ID",
    field: "id",
    sortable: true,
    align: "left",
  },
  {
    name: "product_type_id",
    label: "Product Type ID",
    field: "product_type_id",
    sortable: true,
    align:'left'
  },
  {
    name: "name_uz",
    required: true,
    label: "Mahsulot nomi",
    align: "left",
    field: (row) => row.name_uz,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "cost",
    align: "center",
    label: "Mahsulot Narxi",
    field: "cost",
    sortable: true,
  },
  {
    name: "address",
    label: "Manzili",
    field: "address",
    sortable: true,
  },

  {
    name: "created_date",
    label: "Created Date",
    field: "created_date",
    sortable: true,
    format: (val) => new Date(val).toLocaleDateString(),
  },
];

const rows = [
  {
    "id": 15526,
    "product_type_id": 0,
    "name_uz": "string",
    "cost": 0,
    "address": "string",
    "created_date": 1701420648000
  },
  {
    "id": 15528,
    "product_type_id": 0,
    "name_uz": "string",
    "cost": 0,
    "address": "string",
    "created_date": 1701495211000
  },
  {
    "id": 15417,
    "product_type_id": 2,
    "name_uz": "new product 9",
    "cost": 12,
    "address": "somewhere 9",
    "created_date": 1701236885000
  },
  {
    "id": 15422,
    "product_type_id": 2,
    "name_uz": "new product 16",
    "cost": 12,
    "address": "somewhere 16",
    "created_date": 1701236885000
  },
  {
    "id": 15428,
    "product_type_id": 2,
    "name_uz": "new product 19",
    "cost": 12,
    "address": "somewhere 19",
    "created_date": 1701236885000
  },
  {
    "id": 15429,
    "product_type_id": 2,
    "name_uz": "new product 20",
    "cost": 12,
    "address": "somewhere 20",
    "created_date": 1701236885000
  },
  {
    "id": 15431,
    "product_type_id": 2,
    "name_uz": "new product 22",
    "cost": 12,
    "address": "somewhere 22",
    "created_date": 1701236885000
  },
  {
    "id": 15432,
    "product_type_id": 2,
    "name_uz": "new product 23",
    "cost": 12,
    "address": "somewhere 23",
    "created_date": 1701236885000
  },
  {
    "id": 15436,
    "product_type_id": 2,
    "name_uz": "new product 28",
    "cost": 12,
    "address": "somewhere 28",
    "created_date": 1701236885000
  },
  {
    "id": 15439,
    "product_type_id": 2,
    "name_uz": "new product 0",
    "cost": 12,
    "address": "somewhere 0",
    "created_date": 1701236913000
  },
  {
    "id": 15440,
    "product_type_id": 2,
    "name_uz": "new product 1",
    "cost": 12,
    "address": "somewhere 1",
    "created_date": 1701236913000
  },
  {
    "id": 15444,
    "product_type_id": 2,
    "name_uz": "new product 29",
    "cost": 12,
    "address": "somewhere 29",
    "created_date": 1701236913000
  },
  {
    "id": 15445,
    "product_type_id": 2,
    "name_uz": "new product 3",
    "cost": 12,
    "address": "somewhere 3",
    "created_date": 1701236913000
  },
  {
    "id": 15449,
    "product_type_id": 2,
    "name_uz": "new product 6",
    "cost": 12,
    "address": "somewhere 6",
    "created_date": 1701236913000
  },
  {
    "id": 15450,
    "product_type_id": 2,
    "name_uz": "new product 7",
    "cost": 12,
    "address": "somewhere 7",
    "created_date": 1701236913000
  },
  {
    "id": 15454,
    "product_type_id": 2,
    "name_uz": "new product 10",
    "cost": 12,
    "address": "somewhere 10",
    "created_date": 1701236913000
  },
  {
    "id": 15455,
    "product_type_id": 2,
    "name_uz": "new product 12",
    "cost": 12,
    "address": "somewhere 12",
    "created_date": 1701236913000
  },
  {
    "id": 15459,
    "product_type_id": 2,
    "name_uz": "new product 17",
    "cost": 12,
    "address": "somewhere 17",
    "created_date": 1701236913000
  },
  {
    "id": 15460,
    "product_type_id": 2,
    "name_uz": "new product 16",
    "cost": 12,
    "address": "somewhere 16",
    "created_date": 1701236913000
  },
  {
    "id": 15464,
    "product_type_id": 2,
    "name_uz": "new product 20",
    "cost": 12,
    "address": "somewhere 20",
    "created_date": 1701236913000
  },
  {
    "id": 15465,
    "product_type_id": 2,
    "name_uz": "new product 22",
    "cost": 12,
    "address": "somewhere 22",
    "created_date": 1701236913000
  },
  {
    "id": 15470,
    "product_type_id": 2,
    "name_uz": "new product 1",
    "cost": 12,
    "address": "somewhere 1",
    "created_date": 1701236969000
  },
  {
    "id": 15471,
    "product_type_id": 2,
    "name_uz": "new product 2",
    "cost": 12,
    "address": "somewhere 2",
    "created_date": 1701236969000
  },
  {
    "id": 15475,
    "product_type_id": 2,
    "name_uz": "new product 5",
    "cost": 12,
    "address": "somewhere 5",
    "created_date": 1701236969000
  },
  {
    "id": 15477,
    "product_type_id": 2,
    "name_uz": "new product 8",
    "cost": 12,
    "address": "somewhere 8",
    "created_date": 1701236969000
  },
  {
    "id": 15481,
    "product_type_id": 2,
    "name_uz": "new product 12",
    "cost": 12,
    "address": "somewhere 12",
    "created_date": 1701236969000
  },
  {
    "id": 15482,
    "product_type_id": 2,
    "name_uz": "new product 13",
    "cost": 12,
    "address": "somewhere 13",
    "created_date": 1701236969000
  },
  {
    "id": 15485,
    "product_type_id": 2,
    "name_uz": "new product 17",
    "cost": 12,
    "address": "somewhere 17",
    "created_date": 1701236969000
  },
  {
    "id": 15487,
    "product_type_id": 2,
    "name_uz": "new product 16",
    "cost": 12,
    "address": "somewhere 16",
    "created_date": 1701236969000
  },
  {
    "id": 15490,
    "product_type_id": 2,
    "name_uz": "new product 23",
    "cost": 12,
    "address": "somewhere 23",
    "created_date": 1701236969000
  },
  {
    "id": 15492,
    "product_type_id": 2,
    "name_uz": "new product 25",
    "cost": 12,
    "address": "somewhere 25",
    "created_date": 1701236969000
  },
  {
    "id": 15496,
    "product_type_id": 2,
    "name_uz": "new product 26",
    "cost": 12,
    "address": "somewhere 26",
    "created_date": 1701236969000
  },
  {
    "id": 15497,
    "product_type_id": 2,
    "name_uz": "new product 29",
    "cost": 12,
    "address": "somewhere 29",
    "created_date": 1701236969000
  },
  {
    "id": 15286,
    "product_type_id": 2,
    "name_uz": "new product 6",
    "cost": 12,
    "address": "somewhere 6",
    "created_date": 1701195789000
  },
  {
    "id": 15293,
    "product_type_id": 2,
    "name_uz": "new product 3",
    "cost": 12,
    "address": "somewhere 3",
    "created_date": 1701236170000
  },
  {
    "id": 15298,
    "product_type_id": 2,
    "name_uz": "new product 10",
    "cost": 12,
    "address": "somewhere 10",
    "created_date": 1701236170000
  },
  {
    "id": 15302,
    "product_type_id": 2,
    "name_uz": "new product 14",
    "cost": 12,
    "address": "somewhere 14",
    "created_date": 1701236170000
  },
  {
    "id": 15307,
    "product_type_id": 2,
    "name_uz": "new product 18",
    "cost": 12,
    "address": "somewhere 18",
    "created_date": 1701236170000
  },
  {
    "id": 15313,
    "product_type_id": 2,
    "name_uz": "new product 23",
    "cost": 12,
    "address": "somewhere 23",
    "created_date": 1701236170000
  },
  {
    "id": 15318,
    "product_type_id": 2,
    "name_uz": "new product 29",
    "cost": 12,
    "address": "somewhere 29",
    "created_date": 1701236170000
  },
  {
    "id": 15321,
    "product_type_id": 2,
    "name_uz": "new product 0",
    "cost": 12,
    "address": "somewhere 0",
    "created_date": 1701236182000
  },
  {
    "id": 15327,
    "product_type_id": 2,
    "name_uz": "new product 6",
    "cost": 12,
    "address": "somewhere 6",
    "created_date": 1701236182000
  },
  {
    "id": 15331,
    "product_type_id": 2,
    "name_uz": "new product 13",
    "cost": 12,
    "address": "somewhere 13",
    "created_date": 1701236182000
  },
  {
    "id": 15336,
    "product_type_id": 2,
    "name_uz": "new product 17",
    "cost": 12,
    "address": "somewhere 17",
    "created_date": 1701236182000
  },
  {
    "id": 15341,
    "product_type_id": 2,
    "name_uz": "new product 22",
    "cost": 12,
    "address": "somewhere 22",
    "created_date": 1701236182000
  },
  {
    "id": 15346,
    "product_type_id": 2,
    "name_uz": "new product 26",
    "cost": 12,
    "address": "somewhere 26",
    "created_date": 1701236182000
  },
  {
    "id": 15349,
    "product_type_id": 2,
    "name_uz": "new product 0",
    "cost": 12,
    "address": "somewhere 0",
    "created_date": 1701236867000
  },
  {
    "id": 15354,
    "product_type_id": 2,
    "name_uz": "new product 5",
    "cost": 12,
    "address": "somewhere 5",
    "created_date": 1701236867000
  },
  {
    "id": 15359,
    "product_type_id": 2,
    "name_uz": "new product 10",
    "cost": 12,
    "address": "somewhere 10",
    "created_date": 1701236867000
  },
  {
    "id": 15364,
    "product_type_id": 2,
    "name_uz": "new product 15",
    "cost": 12,
    "address": "somewhere 15",
    "created_date": 1701236867000
  },
  {
    "id": 15369,
    "product_type_id": 2,
    "name_uz": "new product 21",
    "cost": 12,
    "address": "somewhere 21",
    "created_date": 1701236867000
  },
  {
    "id": 15371,
    "product_type_id": 2,
    "name_uz": "new product 22",
    "cost": 12,
    "address": "somewhere 22",
    "created_date": 1701236867000
  },
  {
    "id": 15374,
    "product_type_id": 2,
    "name_uz": "new product 24",
    "cost": 12,
    "address": "somewhere 24",
    "created_date": 1701236867000
  },
  {
    "id": 15378,
    "product_type_id": 2,
    "name_uz": "new product 29",
    "cost": 12,
    "address": "somewhere 29",
    "created_date": 1701236867000
  },
  {
    "id": 15381,
    "product_type_id": 2,
    "name_uz": "new product 1",
    "cost": 12,
    "address": "somewhere 1",
    "created_date": 1701236881000
  },
  {
    "id": 15386,
    "product_type_id": 2,
    "name_uz": "new product 7",
    "cost": 12,
    "address": "somewhere 7",
    "created_date": 1701236881000
  },
  {
    "id": 15390,
    "product_type_id": 2,
    "name_uz": "new product 12",
    "cost": 12,
    "address": "somewhere 12",
    "created_date": 1701236881000
  },
  {
    "id": 15397,
    "product_type_id": 2,
    "name_uz": "new product 18",
    "cost": 12,
    "address": "somewhere 18",
    "created_date": 1701236881000
  },
  {
    "id": 15401,
    "product_type_id": 2,
    "name_uz": "new product 24",
    "cost": 12,
    "address": "somewhere 24",
    "created_date": 1701236881000
  },
  {
    "id": 15405,
    "product_type_id": 2,
    "name_uz": "new product 27",
    "cost": 12,
    "address": "somewhere 27",
    "created_date": 1701236881000
  },
  {
    "id": 15411,
    "product_type_id": 2,
    "name_uz": "new product 2",
    "cost": 12,
    "address": "somewhere 2",
    "created_date": 1701236885000
  },
  {
    "id": 15416,
    "product_type_id": 2,
    "name_uz": "new product 6",
    "cost": 12,
    "address": "somewhere 6",
    "created_date": 1701236885000
  },
  {
    "id": 15418,
    "product_type_id": 2,
    "name_uz": "new product 8",
    "cost": 12,
    "address": "somewhere 8",
    "created_date": 1701236885000
  },
];

export default defineComponent({
  methods: {
    addRow() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      } else {
        this.data.push(this.editedItem);
      }
      this.close()
    },
    deleteItem(item) {
      const index = this.data.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.data.splice(index, 1);
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  setup() {
    return {
      columns,
      rows,
      separator: ref("vertical"),
      filter: ref(""),
    };
  },
});
</script>
