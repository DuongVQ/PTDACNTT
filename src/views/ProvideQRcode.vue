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
                    :class="{ active: route.path === '/dashboard', hidden: isMenuHidden }"
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
                <img src="../images/simple-user-default-icon-free-png.webp" alt="" />
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
                        <RouterLink to="/provide-qr">
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
        <!-- Right -->
        <div class="wrapper-checkin-form">
            <div class="check-in-form">
                <h1>Cấp mã QR</h1>
                <form @submit.prevent="checkIn" class="wrapper-form">
                    <!-- Box input -->
                    <div class="form-group">
                        <label for="email" style="font-size: 18px; color: orange; margin: 20px 0; line-height: 30px">
                            Hãy nhập email hoặc số điện thoại để cấp mã QR cho nhân viên
                        </label>
                        <input
                            v-model="inputValue"
                            type="text"
                            id="email"
                            placeholder="Nhập email hoặc số điện thoại..."
                        />
                    </div>

                    <!-- ReCaptCha -->
                    <RecaptchaV2
                        @widget-id="handleWidgetId"
                        @error-callback="handleErrorCalback"
                        @expired-callback="handleExpiredCallback"
                        @load-callback="handleLoadCallback"
                    />

                    <div id="recaptcha-element"></div>
                    <!-- Btn submit -->
                    <button type="submit" @click="handleCheck">
                        Lấy mã QR
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

        <!-- Modal renew Qr -->
        <Modal @close="handleCheck" :modalActive="modalActive">
            <div class="modal-content">
                <h1>Mã QR được cấp lại!</h1>
                <div class="slot"></div>
                <div v-if="qrCode">
                    <img :src="qrCode" alt="QR Code" />
                </div>
                <p>Hãy lưu mã QR lại nhé!</p>
                <a href="qrCode" download="qr-code.png">
                    <!-- Button renew qr -->
                    <button>
                        Tải xuống
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
                </a>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';
import QRCode from 'qrcode';
import Modal from '../modal/ModalProvideQRcode.vue';

// =====================npm i vue-recaptcha=====================
import { RecaptchaV2 } from 'vue3-recaptcha-v2';

const handleWidgetId = (widgetId: number) => {
    console.log('Widget ID: ', widgetId);
};
const handleErrorCalback = () => {
    console.log('Error callback');
};
const handleExpiredCallback = () => {
    console.log('Expired callback');
};
const handleLoadCallback = (response: unknown) => {
    console.log('Load callback', response);
};

// =====================================================

const inputValue = ref('');
const qrCode = ref<string | null>(null);
const modalActive = ref(false);

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

// Handle checkin
const checkIn = async () => {
    try {
        // Check recaptchar
        const recaptchaResponse = (document.getElementById('g-recaptcha-response') as HTMLInputElement)?.value;

        if (!recaptchaResponse) {
            toast.error('Vui lòng xác nhận reCAPTCHA!', {
                autoClose: 3000,
            });
            return;
        }

        const response = await axios.get(`https://api.viphaui.com/api/v1/users/renew-qr?q=${inputValue.value}`, {
            headers: {
                recaptcha: recaptchaResponse,
            },
        });

        // Check valid ID
        if (response.data.data.id) {
            modalActive.value = true;
            qrCode.value = await QRCode.toDataURL(response.data.data.id);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
            modalActive.value = false;
            toast.error('Không tìm thấy số điện thoại hoặc email!', {
                autoClose: 3000,
            });
            return;
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

// Check null input
const handleCheck = () => {
    if (inputValue.value === '') {
        toast.error('Vui lòng nhập email hoặc số điện thoại!', {
            autoClose: 3000,
        });
        return;
    }
    if (modalActive.value) {
        modalActive.value = false;
    }
};

// Name's page
onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    document.title = 'Trang cấp mã QR';

    window.onloadCallback = function () {
        console.log('reCAPTCHA script loaded', window.grecaptcha);
        const recaptchaElement = document.getElementById('recaptcha-element');
        if (window.grecaptcha && recaptchaElement) {
            window.grecaptcha.render(recaptchaElement, {
                sitekey: '6LevYEgqAAAAAMWhoKBhZSBJ9JJvPL7mDEFz6Orr',
            });
        } else {
            console.error('grecaptcha chưa được tải hoặc phần tử không tồn tại.');
        }
    };
});
</script>

<style lang="scss" scoped src="../assets/ProvideQRcode.scss"></style>
