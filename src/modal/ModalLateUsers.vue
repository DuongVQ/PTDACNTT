<template>
    <div class="modal-overlay">
        <div class="modal-content">
            <h3>Danh sách nhân viên đến muộn</h3>
            <button @click="$emit('close')" class="close-button">Đóng</button>
            <ul>
                <li v-for="user in lateUsers" :key="user.id">
                    <strong>{{ user.fullName }}</strong> - Check-in lúc: {{ new Date(user.createdAt).toLocaleTimeString() }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        lateUsers: {
            type: Array as PropType<{ id: string; fullName: string; createdAt: string | Date }[]>,
            required: true,
        },
    },
});
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>
