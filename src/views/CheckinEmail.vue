<template>
    <div class="wrapper">
        <!-- Header -->
        <div class="header" :class="{ collapsed: isMenuHidden }">
            <div class="list-menu">
                <RouterLink to="/dashboard" class="logo">
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
                    <span>Điểm danh bằng QR</span>
                </RouterLink>
                <!-- <RouterLink
                    to="/checkin-face"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-face', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-user-check"></i>
                    <span>Checkin Face</span>
                </RouterLink> -->
                <RouterLink
                    to="/checkin-email"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-email', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-envelope"></i>
                    <span>Điểm danh bằng Email</span>
                </RouterLink>
                <a href="/" @click="logout" class="btn-menu logout" :class="{ hidden: isMenuHidden }">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Đăng xuất</span>
                </a>
            </div>
            <div class="hidden-menu" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

        <!-- Navbar -->
        <div class="nav-bar">
            <div class="avata-admin">
                <img src="../images/simple-user-default-icon-free-png.webp" alt="">
                <div class="list-navbarMenu">
                    <div class="item-navbarMenu">
                        <RouterLink tag="a" to="/employee-qr" target="_blank">
                            <i class="fa-solid fa-qrcode"></i>
                            Quét QR
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <RouterLink tag="a" to="/employee-email" target="_blank">
                            <i class="fa-solid fa-envelope"></i>
                            Nhập email
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <RouterLink tag="a" to="/signup" target="_blank">
                            <i class="fa-solid fa-user-plus"></i>
                            Link đăng ký
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <RouterLink
                            to="/provide-qr"
                            
                        >
                            <i class="fa-solid fa-file-arrow-down"></i>
                            Cấp mã QR
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <a href="/" @click="logout" class="btn-menu logout">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            Đăng xuất
                        </a>
                    </div>
                </div>
            </div>
        </div>

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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import Modal from '../modal/ModalCheckEmail.vue';
import { getToken } from '../api/authToken.js';

const inputValue = ref('');
const fullName = ref<string | null>(null);

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

<style lang="scss" scoped src="../assets/CheckEmail.scss"></style>
