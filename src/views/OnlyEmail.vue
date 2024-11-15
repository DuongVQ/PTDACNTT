<template>
    <div class="wrapper">
        <!-- Body -->
        <div class="wrapper-checkinform">
            <div class="check-in-form">
                <h1>Điểm danh bằng Email</h1>
                <form @submit.prevent="checkIn">
                    <div class="form-group">
                        <label for="email">Nhập email hoặc số điện thoại*</label>
                        <input v-model="inputValue" type="text" id="email" placeholder="nguyenvana@gmail.com" />
                    </div>

                    <!-- Btn check -->
                    <button type="submit" @click="handleCheck" class="submit-btn">
                        Điểm danh
                        <div class="star-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                version="1.1"
                                style="
                                    shape-rendering: geometricPrecision;
                                    text-rendering: geometricPrecision;
                                    image-rendering: optimizeQuality;
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                "
                                viewBox="0 0 784.11 815.53"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path
                                        class="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="star-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                version="1.1"
                                style="
                                    shape-rendering: geometricPrecision;
                                    text-rendering: geometricPrecision;
                                    image-rendering: optimizeQuality;
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                "
                                viewBox="0 0 784.11 815.53"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path
                                        class="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="star-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                version="1.1"
                                style="
                                    shape-rendering: geometricPrecision;
                                    text-rendering: geometricPrecision;
                                    image-rendering: optimizeQuality;
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                "
                                viewBox="0 0 784.11 815.53"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path
                                        class="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="star-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                version="1.1"
                                style="
                                    shape-rendering: geometricPrecision;
                                    text-rendering: geometricPrecision;
                                    image-rendering: optimizeQuality;
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                "
                                viewBox="0 0 784.11 815.53"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path
                                        class="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="star-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                version="1.1"
                                style="
                                    shape-rendering: geometricPrecision;
                                    text-rendering: geometricPrecision;
                                    image-rendering: optimizeQuality;
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                "
                                viewBox="0 0 784.11 815.53"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path
                                        class="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="star-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                version="1.1"
                                style="
                                    shape-rendering: geometricPrecision;
                                    text-rendering: geometricPrecision;
                                    image-rendering: optimizeQuality;
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                "
                                viewBox="0 0 784.11 815.53"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path
                                        class="fil0"
                                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                </form>
            </div>
        </div>

        <!-- Modal thanks for joined -->
        <Modal @close="handleCheck" :modalActive="modalActive">
            <div class="modal-content">
                <h1>Thông báo điểm danh!</h1>
                <p v-if="errorMessage" style="color: red; margin-top: 20px;">{{ errorMessage }}</p>
                <div v-else style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <img src="../images/checkok.gif" alt="" style="width: 100px; height: 100px;">
                    <p>
                        Cảm ơn bạn
                        <span class="participant"> {{ fullName }} </span> <br>
                        Đã đến đúng giờ đi làm!
                    </p>
                </div>
            </div>
        </Modal>
    </div>
    <router-view />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import Modal from '../modal/ModalCheckEmail.vue';
import { getToken } from '../api/authToken.js';

const inputValue = ref('');
const fullName = ref<string | null>(null);

// set token
let token = getToken();
// error message
const errorMessage = ref('');

// Handle submit check (main)
const checkIn = async () => {
    errorMessage.value = '';
    try {
        const response = await axios.patch(
            `https://api.viphaui.com/api/v1/users/checkin?q=${inputValue.value}`,
            { value: inputValue.value },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        fullName.value = response.data.data.fullName;
        if (!fullName.value) {
            errorMessage.value = "Bạn đã nhập sai! Vui lòng nhập lại.";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
            errorMessage.value = "Bạn đã nhập sai! Vui lòng nhập lại.";
        } else {
            console.error('Unexpected error:', error);
            errorMessage.value = "Bạn đã nhập sai! Vui lòng nhập lại.";
        }
    }
};

const modalActive = ref(false);

// Check null input
const handleCheck = () => {
    if (inputValue.value === '') {
        return;
    }
    modalActive.value = !modalActive.value;
    return { modalActive, handleCheck };
};

// Name's page
onMounted(() => {
    document.title = 'Checkin email hoặc số điện thoại';
});
</script>

<style lang="scss" scoped src="../assets/OnlyEmail.scss"></style>
