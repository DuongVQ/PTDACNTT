<template>
    <div class="container-loginAdmin">
        <div class="wrapper">
            <div class="left">
                <img src="../images/poster.jpg" alt="" />
            </div>
            <div class="right">
                <form @submit.prevent="handleLogin" ref="loginFormRef">
                    <h1>Đăng nhập Admin</h1>

                    <div class="input-box">
                        <div class="icon-form">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <input v-model="formLogin.account" type="text" placeholder="Nơi nhập email..." required />
                    </div>

                    <div class="input-box">
                        <div class="icon-form">
                            <i class="fa-solid fa-lock"></i>
                        </div>
                        <input
                            v-model="formLogin.password"
                            type="password"
                            placeholder="Nơi nhập password..."
                            required
                        />
                    </div>

                    <RecaptchaV2
                        @widget-id="handleWidgetId"
                        @error-callback="handleErrorCalback"
                        @expired-callback="handleExpiredCallback"
                        @load-callback="handleLoadCallback"
                    />

                    <div id="recaptcha-element"></div>

                    <button type="submit" class="btn" :disabled="loading">
                        Đăng nhập
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
    </div>
    <router-view></router-view>
</template>

<script setup>
import { RecaptchaV2 } from 'vue3-recaptcha-v2';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free';
import axios from 'axios';

const handleWidgetId = (widgetId) => {
    console.log('Widget ID: ', widgetId);
};
const handleErrorCalback = () => {
    console.log('Error callback');
};
const handleExpiredCallback = () => {
    console.log('Expired callback');
};
const handleLoadCallback = (response) => {
    console.log('Load callback', response);
};

const router = useRouter();
const formLogin = reactive({
    account: '',
    password: '',
});

const loading = ref(false);
const loginFormRef = (ref < HTMLFormElement) | (null > null);

// getItem local
onMounted(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
    }
});

const handleLogin = async () => {
    try {
        // Check null account-password
        if (!formLogin.account || !formLogin.password) {
            return;
        }

        // Check recaptchar
        const recaptchaResponse = document.getElementById('g-recaptcha-response')?.value;

        if (!recaptchaResponse) {
            return;
        }

        loading.value = true;

        const response = await axios.post(
            'https://api.viphaui.com/api/v1/auth/login',
            {
                account: formLogin.account,
                password: formLogin.password,
                recaptcha: recaptchaResponse,
            },
            {
                headers: {
                    recaptcha: recaptchaResponse,
                },
            },
        );

        if (response.data.message === 'login success') {
            localStorage.setItem('user', JSON.stringify(response.data));
            // setItem
            localStorage.setItem('authToken', response.data.token);

            router.replace('/dashboard');
        } else {
            return;
        }
    } catch (error) {
    } finally {
        loading.value = false;
    }
};

// Name's page
onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    document.title = 'Đăng nhập Admin';

    window.onloadCallback = function () {
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

<style lang="scss" scoped>
@import '@/assets/LoginAdmin.scss';
</style>
