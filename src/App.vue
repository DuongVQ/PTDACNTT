<template>
    <div class="container-loginAdmin">
        <div class="wrapper">
            <form @submit.prevent="handleLogin" ref="loginFormRef">
                <h1>Đăng nhập Admin</h1>

                <div class="input-box">
                    <input v-model="formLogin.account" type="text" placeholder="Nơi nhập email..." required />
                </div>

                <div class="input-box">
                    <input v-model="formLogin.password" type="password" placeholder="Nơi nhập password..." required />
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
                <div class="back-home">
                    <p>
                        <a href="/">Back to Home page</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { RecaptchaV2 } from 'vue3-recaptcha-v2';

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
const loginFormRef = ref<HTMLFormElement | null>(null);

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
        const recaptchaResponse = (document.getElementById('g-recaptcha-response'))?.value;

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

<style lang="scss" scoped src="./assets/LoginAdmin.scss"></style>
