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
                <img src="../images/simple-user-default-icon-free-png.webp" alt="">
                <div class="list-navbarMenu">
                    <div class="item-navbarMenu">
                        <i class="fa-solid fa-pen-to-square"></i>
                        Chức năng 1
                    </div>
                    <div class="item-navbarMenu">
                        <i class="fa-solid fa-pen-to-square"></i>
                        Chức năng 2
                    </div>
                    <div class="item-navbarMenu">
                        <i class="fa-solid fa-pen-to-square"></i>
                        Chức năng 3
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

        <!-- Body check face -->
        <div class="body-check">
            <h1>Check-in QR</h1>
            <qrcode-stream
                :style="{
                    width: '100%',
                    maxWidth: '700px',
                    height: '420px',
                    borderRadius: '10px',
                    border: '2px solid rgb(0, 170, 255)',
                    boxShadow: '0 0px 10px #55555575',
                    overflow: 'hidden',
                }"
                @error="onError"
                @detect="onDetect"
            />

            <!-- Display modal Thanks for join -->
            <div v-if="showModal" class="modal">
                <div class="modal-content">
                    <div class="title">
                        <h2>Thông báo điểm danh</h2>
                        <span class="close" @click="closeModal">&times;</span>
                    </div>
                    <p>
                        Cảm ơn bạn 
                        <span>
                            {{ fullName }}
                        </span>
                        <!-- - Năm:
                        <span>
                            {{ generation }}
                        </span> -->
                        <br />
                        Đã đến đúng giờ đi làm!
                    </p>
                    <button class="close-btn" @click="closeModal">
                        Thank you
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';
import { useRoute, useRouter } from 'vue-router';
// yarn add @font...
import '@fortawesome/fontawesome-free/css/all.css';
import { getToken } from '../api/authToken';
const showModal = ref(false);

const fullName = ref('');
const generation = ref('');

const apiURL = 'https://api.viphaui.com/api/v1/users/checkin';

// set token
let token = getToken();

/*** detection handling ***/

const result = ref('');
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


const closeModal = () => {
    showModal.value = false;
};

async function onDetect(detectedCodes: any) {
    if (detectedCodes.length > 0) {
        const scannedId = detectedCodes[0].rawValue;
        result.value = scannedId;

        try {
            const response = await fetch(`${apiURL}/${scannedId}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isCheckin: true }),
            });

            if (response.ok) {
                const data = await response.json();

                if (data && data.message) {
                    fullName.value = data.data.fullName;
                    generation.value = data.data.generation;
                    showModal.value = true;

                    setTimeout(() => {
                        showModal.value = false;
                    }, 3000);
                } else {
                    console.log('Không tìm thấy thông tin người dùng.');
                }
            } else {
                console.log('Có lỗi xảy ra khi gửi yêu cầu.');
            }
        } catch (error: any) {
            console.error('Lỗi khi gửi yêu cầu: ', error);
        }
    }
}

/*** error handling ***/
const error = ref('');

function onError(err: any) {
    error.value = `[${err.name}]: `;

    if (err.name === 'NotAllowedError') {
        error.value += 'you need to grant camera access permission';
    } else if (err.name === 'NotFoundError') {
        error.value += 'no camera on this device';
    } else if (err.name === 'NotSupportedError') {
        error.value += 'secure context required (HTTPS, localhost)';
    } else if (err.name === 'NotReadableError') {
        error.value += 'is the camera already in use?';
    } else if (err.name === 'OverconstrainedError') {
        error.value += 'installed cameras are not suitable';
    } else if (err.name === 'StreamApiNotSupportedError') {
        error.value += 'Stream API is not supported in this browser';
    } else if (err.name === 'InsecureContextError') {
        error.value += 'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
    } else {
        error.value += err.message;
    }
}

// Name's page
onMounted(() => {
    let isVisible = false;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const menuIconHeader = document.querySelector('.menuIcon-header') as HTMLElement;

    if (window.innerWidth <= 767 && navbar) {
        navbar.style.display = 'none';
    }

    if (menuIconHeader && navbar) {
        menuIconHeader.addEventListener('click', () => {
            if (!isVisible) {
                navbar.style.display = 'flex';
                navbar.style.right = '-100%';
                setTimeout(() => {
                    navbar.style.transition = 'right 0.5s ease';
                    navbar.style.right = '0';
                }, 0);
                isVisible = true;
            } else {
                navbar.style.right = '-100%';
                setTimeout(() => {
                    navbar.style.display = 'none';
                }, 500);
                isVisible = false;
            }
        });
    }
    document.title = 'Checkin QR';
});
</script>

<style scoped lang="scss" src="../assets/CheckQr.scss"></style>
