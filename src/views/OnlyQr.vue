<template>
    <div class="wrapper">
        <!-- Body check face -->
        <div class="body-check">
            <h1>Check-in QR</h1>
            <qrcode-stream
                :style="{
                    width: '700px',
                    height: '420px',
                    borderRadius: '10px',
                    boxShadow: '0 0px 10px #55555575',
                    border: '3px solid #ffa564',
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
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
                        <img src="../images/checkok.gif" alt="" style="width: 100px; height: 100px" />
                        <p>
                            Cảm ơn bạn
                            <span class="participant"> {{ fullName }} </span> <br />
                            Đã đến đúng giờ đi làm!
                        </p>
                    </div>
                    <button class="close-btn" @click="closeModal">
                        ᰔThank you!
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { getToken } from '../api/authToken';
const showModal = ref(false);

const fullName = ref('');

const apiURL = 'https://api.viphaui.com/api/v1/users/checkin';

// set token
let token = getToken();

/*** detection handling ***/

const result = ref('');

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
                    showModal.value = true;

                    setTimeout(() => {
                        showModal.value = false;
                    }, 3000);
                } else if (!fullName.value) {
                    toast.error('Không tìm thấy thông tin người dùng.', {
                        autoClose: 2000,
                    });
                } else {
                    console.log('Không tìm thấy thông tin người dùng.');
                }
            } else {
                console.log('Có lỗi xảy ra khi gửi yêu cầu.');
                toast.error('Không tìm thấy thông tin người dùng.', {
                    autoClose: 2000,
                });
            }
        } catch (error: any) {
            console.error('Lỗi khi gửi yêu cầu: ', error);
            toast.error('Không tìm thấy thông tin người dùng.', {
                autoClose: 2000,
            });
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

<style scoped lang="scss" src="../assets/OnlyQr.scss"></style>
