<template>
    <div id="app">
        <section>
            <person-list :persons="persons"></person-list>

            <h1 class="loading" v-if="loading">loading</h1>
        </section>
    </div>
</template>
<script>
import Service from './api/service.js';
import PersonList from './components/PersonList.vue';

export default {
    name: 'App',
    components: { PersonList },
    data() {
        return { personGroups: [], persons: [], loading: false };
    },
    mounted() {
        this.service = new Service();
        this.fetchPersons();
    },
    methods: {
        async fetchPersons() {
            this.loading = true;
            this.persons = await this.service.getPersons();
            this.loading = false;
        }
    }
};
</script>
<style lang="less" src="./app.less" scoped></style>