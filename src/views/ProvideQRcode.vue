<template>
    <div class="wrapper">
        <!-- Right -->
        <div class="check-in-form">
            <h1>Cấp mã QR</h1>
            <form @submit.prevent="checkIn" class="wrapper-form">
                <!-- Box input -->
                <div class="form-group">
                    <label for="email" style="font-size: 18px; color: orange; margin: 20px 0; line-height: 30px">
                        Hãy nhập email hoặc số điện thoại để cấp mã QR cho nhân viên
                    </label>
                    <input v-model="inputValue" type="text" id="email" placeholder="Nhập email hoặc số điện thoại..." />
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
                </a>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// yarn add vue3-toastify
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';
import QRCode from 'qrcode';
import Modal from '../modal/ModalProvideQRcode.vue';

// =====================yarn add vue-recaptcha=====================
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

        const response = await axios.get(`https://api.viphaui.com/api/v1/users/renew-qr?q=${inputValue.value}`, 
            {
                headers: {
                    recaptcha: recaptchaResponse,
                },
            },
        );

        // Check valid ID
        if (response.data.data.id) {
            modalActive.value = true
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
    if(modalActive.value) {
        modalActive.value = false
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
