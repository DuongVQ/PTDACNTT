<template>
    <n-notification-provider>
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
                            <i class="fa-solid fa-people-roof"></i>
                        </div>
                        <input v-model="newUser.generation" type="number" id="generation" placeholder="Khóa đào tạo..." />
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
                        <input
                            v-model="newUser.phoneNumber"
                            type="text"
                            id="phone"
                            placeholder="Nhập số điện thoại..."
                        />
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
    </n-notification-provider>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, defineComponent } from 'vue';
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
            if (error.response.data) {
            }
        } else if (error.request) {
            console.error('Không nhận được phản hồi từ server:', error.request);
        } else {
            console.error('Lỗi trong quá trình xử lý yêu cầu:', error.message);
        }
    }
};
</script>

<style lang="scss" scoped>
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
        background: white;
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
                font-size: 28px;
                margin: 0;
                margin-top: 22px;
                background: linear-gradient(45deg, rgb(255, 177, 89), rgb(255, 155, 67));
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
            }

            span {
                position: absolute;
                top: 18px;
                right: -10px;
                font-size: 32px;
                cursor: pointer;
                &:hover {
                    color: #f19e61;
                }
            }
        }

        .form-group {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 15px 0;
            border: 2px solid #f19e61;
            color: #444;
            border-radius: 5px;
            overflow: hidden;

            .icon_form-group {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                border-right: 2px solid #70707015;
                color: #f19e61;
            }

            input {
                font-size: 16px;
                padding: 15px 15px;
                border: none;
                outline: none;
                flex: 1;

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

            button {
                background: linear-gradient(45deg, rgb(255, 232, 156), rgb(255, 162, 0), rgb(255, 106, 0));
                box-shadow: 6px 0px 0px #f69000;
                position: relative;
                padding: 8px 35px;
                margin-top: 20px;
                font-size: 18px;
                font-weight: 500;
                color: white;
                border: 3px solid #ffb47f;
                border-radius: 8px;
                box-shadow: 0 0 0 #fec1958c;
                transition: all 0.3s ease-in-out;
                margin-bottom: 30px;
                cursor: pointer;
            }
    
            .star-1 {
                position: absolute;
                top: 20%;
                left: 20%;
                width: 25px;
                height: auto;
                filter: drop-shadow(0 0 0 #fd7718);
                z-index: -5;
                transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
            }
    
            .star-2 {
                position: absolute;
                top: 45%;
                left: 45%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 0 #fd7718);
                z-index: -5;
                transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
            }
    
            .star-3 {
                position: absolute;
                top: 40%;
                left: 40%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 0 #fd7718);
                z-index: -5;
                transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
            }
    
            .star-4 {
                position: absolute;
                top: 20%;
                left: 40%;
                width: 8px;
                height: auto;
                filter: drop-shadow(0 0 0 #fd7718);
                z-index: -5;
                transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
            }
    
            .star-5 {
                position: absolute;
                top: 25%;
                left: 45%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 0 #fd7718);
                z-index: -5;
                transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
            }
    
            .star-6 {
                position: absolute;
                top: 5%;
                left: 50%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 0 #fd7718);
                z-index: -5;
                transition: all 0.8s ease;
            }
    
            button:hover {
                background: transparent;
                color: #fd9e18;
                box-shadow: 0 0 50px #fd9e18;
            }
    
            button:hover .star-1 {
                position: absolute;
                top: -80%;
                left: -30%;
                width: 25px;
                height: auto;
                filter: drop-shadow(0 0 10px #fd7718);
                z-index: 2;
            }
    
            button:hover .star-2 {
                position: absolute;
                top: -25%;
                left: 10%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 10px #fd7718);
                z-index: 2;
            }
    
            button:hover .star-3 {
                position: absolute;
                top: 55%;
                left: 25%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 10px #fd7718);
                z-index: 2;
            }
    
            button:hover .star-4 {
                position: absolute;
                top: 30%;
                left: 80%;
                width: 8px;
                height: auto;
                filter: drop-shadow(0 0 10px #fd7718);
                z-index: 2;
            }
    
            button:hover .star-5 {
                position: absolute;
                top: 25%;
                left: 115%;
                width: 15px;
                height: auto;
                filter: drop-shadow(0 0 10px #fd7718);
                z-index: 2;
            }
    
            button:hover .star-6 {
                position: absolute;
                top: 5%;
                left: 60%;
                width: 5px;
                height: auto;
                filter: drop-shadow(0 0 10px #fd7718);
                z-index: 2;
            }
    
            .fil0 {
                fill: #fd7718;
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
