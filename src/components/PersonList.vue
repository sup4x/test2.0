<template>
    <div class="list">
        <div class="card" v-for="person in persons" :key="person.id">
            <table style="width: 100%">
                <tr>
                    <td style="width: 1%">
                        <img class="card-avatar" :src="person.avatar" />
                    </td>
                    <td>
                        <div>
                            <b>{{ person.name }}</b>
                        </div>
                        <div>{{ person.position }}</div>
                    </td>
                    <td style="width: 0">
                        <div class="badge">999</div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        persons: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
<style lang="less">
.list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.card {
    padding: 0.5rem;
    background: white;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);

    &-avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 9999px;
        border: 1px solid #eee;
        margin-right: 1rem;
    }
}
</style>