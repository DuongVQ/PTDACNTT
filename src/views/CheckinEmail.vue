<template>
    <div class="wrapper">
        <!-- Header -->
        <div class="header" :class="{ collapsed: isMenuHidden }">
            <div class="list-menu">
                <RouterLink to="/" class="logo">
                    <img src="../assets/Logo-HighLands-Coffee.webp" alt="" :class="{ hidden: isMenuHidden }" />
                    <h2 :class="{ hidden: isMenuHidden }">HILANDS COFFEE</h2>
                </RouterLink>
                <RouterLink
                    to="/dashboard"
                    class="btn-menu"
                    :class="{ active: route.path === '/', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-house"></i>
                    <span>Trang chủ</span>
                </RouterLink>
                <RouterLink
                    to="/checkin-qr"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-qr', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-qrcode"></i>
                    <span>Checkin QR</span>
                </RouterLink>
                <RouterLink
                    to="/checkin-face"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-face', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-user-check"></i>
                    <span>Checkin Face</span>
                </RouterLink>
                <RouterLink
                    to="/checkin-phone"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-phone', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-envelope"></i>
                    <span>Checkin Email</span>
                </RouterLink>
                <a href="/" @click="logout" class="btn-menu logout" :class="{ hidden: isMenuHidden }">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span>
                </a>
            </div>
            <div class="hidden-menu" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

        <!-- Navbar -->
        <div class="nav-bar"></div>

        <!-- Body -->
        <div class="check-in-form">
            <h1>Check-in phone-email</h1>
            <form @submit.prevent="checkIn">
                <div class="form-group">
                    <label for="email">Nhập email hoặc số điện thoại*</label>
                    <input v-model="inputValue" type="text" id="email" placeholder="nguyenvana@gmail.com" />
                </div>

                <!-- Btn check -->
                <button type="submit" @click="handleCheck" class="submit-btn">
                    Check-in
                    <div class="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25">
                            <path
                                fill="#fd1853"
                                d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
      c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
      c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
      C475.116,213.899,475.116,136.489,427.313,88.686z"
                            ></path>
                        </svg>
                    </div>
                    <div class="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                            <path
                                fill="#fd1853"
                                d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
      c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
      c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
      C475.116,213.899,475.116,136.489,427.313,88.686z"
                            ></path>
                        </svg>
                    </div>
                    <div class="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="9" height="9">
                            <path
                                fill="#fd1853"
                                d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
      c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
      c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
      C475.116,213.899,475.116,136.489,427.313,88.686z"
                            ></path>
                        </svg>
                    </div>
                    <div class="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
                            <path
                                fill="#fd1853"
                                d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
      c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
      c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
      C475.116,213.899,475.116,136.489,427.313,88.686z"
                            ></path>
                        </svg>
                    </div>
                    <div class="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                            <path
                                fill="#fd1853"
                                d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
      c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
      c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
      C475.116,213.899,475.116,136.489,427.313,88.686z"
                            ></path>
                        </svg>
                    </div>
                    <div class="star-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="7" height="7">
                            <path
                                fill="#fd1853"
                                d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
      c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
      c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
      C475.116,213.899,475.116,136.489,427.313,88.686z"
                            ></path>
                        </svg>
                    </div>
                </button>
            </form>
        </div>

        <!-- Modal thanks for joined -->
        <Modal @close="handleCheck" :modalActive="modalActive">
            <div class="modal-content">
                <h1>Cảm ơn đã tham gia!</h1>
                <img src="../images/congratulation.gif" />
                <p>
                    Cảm ơn anh/chị
                    <span class="participant"> {{ fullName }} - Khóa: {{ course }} </span>
                    đã tham dự bữa tiệc sinh nhật của V.I.P English Club
                </p>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
// yarn add @font...
import '@fortawesome/fontawesome-free/css/all.css';

import Modal from '../modal/ModalCheckEmail.vue';

import { getToken } from '../api/authToken.js';

const inputValue = ref('');
const fullName = ref<string | null>(null);
const course = ref<string | null>(null);

const route = useRoute();
const router = useRouter();
const isMenuHidden = ref(false);

const logout = () => {
  localStorage.removeItem('authToken');

  router.push('/');
};

const toggleMenu = () => {
    isMenuHidden.value = !isMenuHidden.value;
    if (isMenuHidden.value) {
        document.body.style.paddingLeft = '70px';
    } else {
        document.body.style.paddingLeft = '280px';
    }
};

onMounted(() => {
    document.body.style.transition = 'padding-left 0.3s ease';
    document.body.style.paddingLeft = isMenuHidden.value ? '70px' : '280px';
});

onBeforeUnmount(() => {
    document.body.style.paddingLeft = '0';
    document.body.style.transition = '';
});

// set token
let token = getToken();

// Handle submit check (main)
const checkIn = async () => {
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
        course.value = response.data.data.generation;
        if (fullName.value === null) {
            return;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
        } else {
            console.error('Unexpected error:', error);
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
    document.title = 'Checkin email và số điện thoại';
});
</script>

<style lang="scss" scoped src="../assets/CheckPhone.scss"></style>
