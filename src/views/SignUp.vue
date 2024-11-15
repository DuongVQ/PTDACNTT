<template>
    <div class="container-signup">
        <div class="wrapper">
            <div class="left">
                <img src="../images/poster.jpg" alt="" />
            </div>
            <div class="signup-container">
                <h1>Đăng ký nhân viên</h1>
                <form @submit.prevent="handleSignUp">
                    <div class="form-group">
                        <div class="icon-form">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <input
                            type="text"
                            v-model="formData.fullName"
                            id="fullName"
                            placeholder="Nhập họ và tên"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <div class="icon-form">
                            <i class="fa-regular fa-calendar-days"></i>
                        </div>
                        <input
                            type="number"
                            v-model="formData.generation"
                            id="generation"
                            placeholder="Nhập năm sinh"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <div class="icon-form">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <input type="email" v-model="formData.email" id="email" placeholder="Nhập email" required />
                    </div>

                    <div class="form-group">
                        <div class="icon-form">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <input type="url" v-model="formData.facebook" placeholder="Nhập link Facebook" id="facebook" />
                    </div>

                    <div class="form-group">
                        <div class="icon-form">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <input
                            type="text"
                            v-model="formData.phoneNumber"
                            placeholder="Nhập số điện thoại"
                            id="phoneNumber"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <div class="icon-form">
                            <i class="fa-solid fa-image"></i>
                        </div>
                        <input type="file" @change="handleFileChange" id="image" accept="image/*" />
                    </div>

                    <button type="submit" class="submit-button">
                        Đăng ký
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

// Khởi tạo các biến reactive
const formData = ref({
    fullName: '',
    generation: '',
    email: '',
    facebook: '',
    phoneNumber: '',
    image: null as File | null,
});

// Hàm xử lý khi người dùng chọn ảnh
const handleFileChange = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    formData.value.image = file;
};

// Hàm xử lý đăng ký
const handleSignUp = async () => {
    // Hiển thị hộp thoại xác nhận
    const isConfirmed = window.confirm('Bạn có chắc chắn muốn đăng ký với thông tin đã nhập không?');

    if (!isConfirmed) {
        // Nếu người dùng chọn "Cancel", dừng lại
        return;
    }

    try {
        // Chuẩn bị dữ liệu gửi đi
        const data = new FormData();
        data.append('fullName', formData.value.fullName);
        data.append('generation', formData.value.generation.toString());
        data.append('email', formData.value.email);
        data.append('facebook', formData.value.facebook);
        data.append('phoneNumber', formData.value.phoneNumber);
        if (formData.value.image) {
            data.append('image', formData.value.image);
        }

        // Gửi yêu cầu đăng ký
        const response = await axios.post('https://api.viphaui.com/api/v1/users/signup', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            toast.success("Đăng kí thành công!", {
                autoClose: 3000,
            })
        }
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            console.log(error.response.data.message);
            
        } else {
            toast.success("Có lỗi xảy ra trong quá trình đăng ký.", {
                autoClose: 3000,
            })
        }
    }
};

// Name's page
onMounted(() => {
    document.title = 'Đăng ký nhân viên';
});
</script>

<style lang="scss" scoped src="../assets/SignUp.scss"></style>
