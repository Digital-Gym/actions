<script setup>
import {ref} from 'vue'

import Button from 'primevue/button';
import Menu from 'primevue/menu';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const menu = ref();

const items = ref([
  {
    label: "Main",
    items: [
      {label: 'Home', icon: 'pi pi-plus' },
      {label: 'Search', icon: 'pi pi-search' },
      {label: 'Drop database', icon: 'pi pi-database'}
    ]
  },
  {
    label: "Misc",
    items: [
      {label: 'Donate', icon: "pi pi-gift"}
    ]
  }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const data = ref([
  {name: "Bob", age: 20, networth: 1000000, isMarried: "No"},
  {name: "Xonda", age: 20, networth: 696969, isMarried: "No bitches"},
  {name: "Tema", age: 20, networth: 228228, isMarried: "No hoes"}
])
</script>

<template>
  <div class="sidebar flex justify-content-center">
      <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
        <template #submenuheader="{ item }">
          <span class="text-secondary font-bold text-sm">{{ item.label }}</span>
        </template>
      </Menu>
  </div>

  <main class="flex flex-column justify-content-center align-items-center">
    
    <h1>Home</h1>
    <RouterLink class='btn' :to="{name: 'about'}">
      <Button label="About" rounded />
    </RouterLink>

    <DataTable :value="data" tableStyle="min-width: 50rem">
      <Column field="name" header="Name"></Column>
      <Column field="age" header="Age"></Column>
      <Column field="networth" header="Wealth">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.networth) }}
        </template>
      </Column>
      <Column field="isMarried" header="Is Married?"></Column>
    </DataTable>

  </main>
  
</template>

<style scoped>
.sidebar{
  position: fixed;
  left: 3%;
  top: 6%;
}

</style>