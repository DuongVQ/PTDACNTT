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
                    to="/checkin-email"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-email', hidden: isMenuHidden }"
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

        <!-- Body check face -->
        <div class="body-check">
            <h1>Check-in khuôn mặt</h1>
            <video ref="videoElement" id="videoElement" autoplay></video>
            <canvas ref="canvasElement" id="canvasElement" class="hidden"></canvas>

            <!-- Display modal Thanks for join -->
            <div v-if="showModal" class="modal">
                <div class="modal-content">
                    <div class="title">
                        <h2>Đã điểm danh nhân viên</h2>
                        <span class="close" @click="closeModal">&times;</span>
                    </div>
                    <p>
                        Họ tên:
                        <span>
                            {{ fullName }}
                        </span>
                        - Tuổi:
                        <span>
                            {{ generation }}
                        </span>
                        <br />
                        Bạn đã đến đúng giờ!
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
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';

import { getToken } from '../api/authToken';

const videoElement = ref<HTMLVideoElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const showModal = ref(false);

const fullName = ref('');
const generation = ref('');
let intervalId: number | null = null;

const apiURL = 'https://api.viphaui.com/api/v1/users/checkin-face';

// set token
let token = getToken();

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

// Camera startup function
const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoElement.value) {
                videoElement.value.srcObject = stream;
            }
        } catch (error) {
            console.error('Lỗi khi truy cập webcam: ', error);
        }
    }
};

// Function to take photo and send photo to API using POST method with token
const captureAndSendFrame = async () => {
    if (videoElement.value && canvasElement.value) {
        const canvas = canvasElement.value;
        const context = canvas.getContext('2d');
        const video = videoElement.value;

        if (context) {
            // Update canvas size according to video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas image to Blob (JPEG)
            const imageBlob = await new Promise<Blob | null>((resolve) => {
                canvas.toBlob((blob) => resolve(blob), 'image/jpeg');
            });

            // If there is a Blob, proceed to upload the image to the API
            if (imageBlob) {
                const formData = new FormData();
                formData.append('image', imageBlob, 'snapshot.jpg');

                try {
                    const response = await fetch(apiURL, {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: formData,
                    });

                    const data = await response.json();

                    if (data.data.fullName && data.data.generation) {
                        // Assign value from API to modal
                        fullName.value = data.data.fullName;
                        generation.value = data.data.generation;
                        showModal.value = true;

                        // Stop capturing while modal is shown
                        if (intervalId) {
                            clearInterval(intervalId);
                            intervalId = null;
                        }

                        // Hide modal after 3 seconds and stop scanning for 2 seconds
                        setTimeout(() => {
                            showModal.value = false;

                            // Stop scanning for 2 seconds before resuming
                            setTimeout(() => {
                                startCapture(); // Restart capturing after 2 seconds
                            }, 2000);
                        }, 3000);
                    }
                } catch (error) {
                    console.error('Lỗi khi gửi ảnh: ', error);
                }
            }
        }
    }
};

// Function to start capturing frames
const startCapture = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            captureAndSendFrame();
        }, 1000);
    }
};

// Manually close modal and restart capture after 2 seconds
const closeModal = () => {
    showModal.value = false;
    setTimeout(() => {
        startCapture(); // Resume capturing after the modal is manually closed and 2 seconds have passed
    }, 2000);
};

onMounted(() => {
    startCapture();
    startCamera();
});

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
    document.title = 'Checkin khuôn mặt';
});
</script>

<style scoped lang="scss" src="../assets/CheckFace.scss"></style>
