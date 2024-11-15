<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal-content" :class="{ 'animate-fade-in': isVisible, 'animate-fade-out': !isVisible }">
            <div class="title">
                <h3>Thêm nhân viên mới</h3>
                <span @click="closeModal">&times;</span>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <div class="icon_form-group">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <input v-model="newUser.fullName" type="text" id="name" placeholder="Nhập tên nhân viên..." />
                </div>
                <div class="form-group">
                    <div class="icon_form-group">
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <input v-model="newUser.generation" type="number" id="generation" placeholder="Năm sinh..." />
                </div>
                <div class="form-group">
                    <div class="icon_form-group">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                    <input
                        v-model="newUser.facebook"
                        type="text"
                        id="facebook"
                        placeholder="Nhập liên kết facebook..."
                    />
                </div>
                <div class="form-group">
                    <div class="icon_form-group">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <input v-model="newUser.phoneNumber" type="text" id="phone" placeholder="Nhập số điện thoại..." />
                </div>
                <div class="form-group">
                    <div class="icon_form-group">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <input v-model="newUser.email" type="email" id="email" placeholder="Nhập email..." />
                </div>
                <div class="wrapper-btn">
                    <button type="submit" class="btn-primary">
                        Thêm
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
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

const newUser = ref({
    fullName: '',
    generation: '',
    facebook: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'USER',
});

// Modal display control state and effects
const isVisible = ref(true);

const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'userAdded', newUser: any): void;
}>();

const props = defineProps<{ token: string }>();

const closeModal = () => {
    isVisible.value = false;

    setTimeout(() => {
        emit('close');
    }, 300);
};

const handleSubmit = async () => {
    if (!newUser.value.fullName || newUser.value.fullName.length > 30) {
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newUser.value.email || !emailPattern.test(newUser.value.email)) {
        return;
    }

    if (!newUser.value.facebook || typeof newUser.value.facebook !== 'string') {
        return;
    }

    if (!newUser.value.generation) {
        return;
    }

    if (!newUser.value.phoneNumber) {
        return;
    }

    try {
        const response = await axios.post('https://api.viphaui.com/api/v1/users', newUser.value, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`,
            },
        });

        emit('userAdded', response.data);

        closeModal();
    } catch (error: any) {
        if (error.response) {
            console.error('Lỗi từ phía server:', error.response.status);
            console.error('Chi tiết lỗi:', error.response.data);
            toast.error(`Đã có lỗi xảy ra: ${error.response.status}`, {
                autoClose: 3000,
            })
        } else if (error.request) {
            console.error('Không nhận được phản hồi từ server:', error.request);
            toast.error(`Đã có lỗi xảy ra: ${error.request}`, {
                autoClose: 3000,
            })
        } else {
            console.error('Lỗi trong quá trình xử lý yêu cầu:', error.message);
            toast.error(`Đã có lỗi xảy ra: ${error.message}`, {
                autoClose: 3000,
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
    z-index: 11;

    .modal-content {
        background: rgb(255, 251, 247);
        padding: 0 40px;
        border-radius: 8px;
        width: 400px;
        transform: scale(0.9);
        transition: transform 0.3s ease-out, opacity 0.3s ease-out;

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 30px;

            h3 {
                font-size: 26px;
                font-weight: 600;
                font-family: 'Montserrat';
                margin: 0;
                margin-top: 22px;
                color: #ffa564;
            }

            span {
                position: absolute;
                top: 18px;
                right: -10px;
                font-size: 32px;
                cursor: pointer;
                color: #f19d61a2;
                transition: all 0.1s ease;

                &:hover {
                    color: #ffa564;
                }
            }
        }

        .form-group {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 15px 0;
            border: 2px solid #ffa564;
            color: #444;
            border-radius: 5px;
            overflow: hidden;

            .icon_form-group {
                width: 50px;
                height: 40px;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 2px solid #fed0afad;
                color: #ffa564;
            }

            input {
                flex: 1;
                border: none;
                outline: none;
                font-size: 16px;
                padding: 15px 15px;
                background-color: transparent;
                font-family: "Montserrat";
                font-weight: 500;
                &::placeholder {
                    color: #a1babf;
                }
            }

            select {
                border: none;
                outline: none;
                font-size: 16px;
                flex: 1;
                padding: 0 15px;
            }
        }

        // Btn
        /* From Uiverse.io by Peary74 */
        .wrapper-btn {
            width: 100%;
            text-align: center;

            // Css btn
            /* From Uiverse.io by MuhammadHasann */
            button {
                position: relative;
                padding: 10px 35px;
                margin: 10px auto 30px;
                background: #ffa564;
                font-size: 18px;
                font-weight: 600;
                font-family: 'Montserrat';
                color: #fffef0;
                border-radius: 8px;
                border: 3px solid #ffa564;
                box-shadow: 0 0 0 #ffa5648c;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
                width: 100%;
            }

            .star-1 {
                position: absolute;
                top: 20%;
                left: 20%;
                width: 25px;
                height: auto;
                filter: drop-shadow(0 0 0 #fffdef);
                z-index: -5;
                transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
            }

            .star-2 {
                position: absolute;
                top: 45%;
                left: 45%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 0 #fffdef);
                z-index: -5;
                transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
            }

            .star-3 {
                position: absolute;
                top: 40%;
                left: 40%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 0 #fffdef);
                z-index: -5;
                transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
            }

            .star-4 {
                position: absolute;
                top: 20%;
                left: 40%;
                width: 8px;
                height: auto;
                filter: drop-shadow(0 0 0 #fffdef);
                z-index: -5;
                transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
            }

            .star-5 {
                position: absolute;
                top: 25%;
                left: 45%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 0 #fffdef);
                z-index: -5;
                transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
            }

            .star-6 {
                position: absolute;
                top: 5%;
                left: 50%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 0 #fffdef);
                z-index: -5;
                transition: all 0.8s ease;
            }

            button:hover {
                background: transparent;
                color: #ffa564;
                box-shadow: 0 0 25px #ffa5648c;
            }

            button:hover .star-1 {
                position: absolute;
                top: -80%;
                left: -30%;
                width: 25px;
                height: auto;
                filter: drop-shadow(0 0 10px #fffdef);
                z-index: 2;
            }

            button:hover .star-2 {
                position: absolute;
                top: -25%;
                left: 10%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 10px #fffdef);
                z-index: 2;
            }

            button:hover .star-3 {
                position: absolute;
                top: 55%;
                left: 25%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 10px #fffdef);
                z-index: 2;
            }

            button:hover .star-4 {
                position: absolute;
                top: 30%;
                left: 80%;
                width: 8px;
                height: auto;
                filter: drop-shadow(0 0 10px #fffdef);
                z-index: 2;
            }

            button:hover .star-5 {
                position: absolute;
                top: 25%;
                left: 115%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 10px #fffdef);
                z-index: 2;
            }

            button:hover .star-6 {
                position: absolute;
                top: 5%;
                left: 60%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 10px #fffdef);
                z-index: 2;
            }

            .fil0 {
                fill: #ffc987;
            }
        }
    }

    // Effect in-out
    .animate-fade-in {
        transform: scale(1);
        opacity: 1;
    }
    .animate-fade-out {
        transform: scale(0.9);
        opacity: 0;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}
</style>
