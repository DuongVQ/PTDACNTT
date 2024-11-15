<template>
    <div class="wrapper">
        <!-- Right -->
        <div class="check-in-form">
            <h1>Thay đổi ảnh đại diện</h1>
            <div v-if="isLoading">Đang kiểm tra liên kết...</div>
            <div v-else>
                <!-- If user pick yes -->
                <div v-if="isLinkValid">
                    <form @submit.prevent="handleCheck" v-if="showForm" class="wrapper-form">
                        <div class="form-group">
                            <label
                                for="email"
                                style="font-size: 18px; color: orange; margin: 20px 0; line-height: 30px"
                            >
                                Lưu ý: Liên kết này chỉ có thể sử dụng 1 lần và sẽ hết hạn sau 2 tiếng nếu không sử
                                dụng.
                            </label>
                            <label class="custum-file-upload" for="file">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                        <g
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                            id="SVGRepo_tracerCarrier"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                fill=""
                                                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">
                                    <span>Click để tải lên ảnh</span>
                                </div>
                                <input type="file" id="file" @change="onFileSelected" accept="image/*" />
                            </label>
                        </div>
                        <div v-if="previewUrl" class="image-preview">
                            <img :src="previewUrl" alt="Ảnh xem trước" />
                        </div>
                        <button type="submit">
                            Cập nhật
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

                <!-- If user pick no -->
                <div v-else>
                    <p>Liên kết đã hết hạn. Vui lòng liên hệ với quản trị viên để cấp liên kết mới.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

// get token
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('q');

const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);

const userName = ref('');
const isLinkValid = ref(false);
const isLoading = ref(true);
const showForm = ref(false);

// Check link
const checkLinkInitial = async () => {
    try {
        const response = await axios.get(`https://api.viphaui.com/api/v1/users/check-link?answer=true`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.data.data.fullName) {
            isLinkValid.value = true;
            userName.value = response.data.data.fullName;
            const userConfirmed = confirm(`Có phải bạn ${userName.value} muốn upload ảnh?`);

            if (userConfirmed) {
                await checkLinkConfirm(true);
                showForm.value = true;
            } else {
                await checkLinkConfirm(false);
            }
        } else {
            console.log('Liên kết không hợp lệ từ API');
            isLinkValid.value = false;
        }
    } catch (error: any) {
        console.error('Lỗi khi kiểm tra liên kết:', error);
        console.log(error.message);
        console.log(error.request);

        isLinkValid.value = false;
    } finally {
        isLoading.value = false;
    }
};

// Function to send confirmation result
const checkLinkConfirm = async (answer: boolean) => {
    try {
        const response = await axios.get(`https://api.viphaui.com/api/v1/users/check-link?answer=${answer}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.data.answer === false && !answer) {
            // Nếu liên kết bị từ chối (answer=false)
            isLinkValid.value = false;
        }
    } catch (error) {
        console.error('Lỗi khi gửi kết quả xác nhận:', error);
    }
};

// Select img
const onFileSelected = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (file) {
        selectedFile.value = file;
        previewUrl.value = URL.createObjectURL(file);
    }
};

// Handle update image
const handleCheck = async () => {
    if (!selectedFile.value) {
        alert('Vui lòng chọn một ảnh trước khi cập nhật.');
        return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile.value);

    try {
        const response = await axios.patch(`https://api.viphaui.com/api/v1/users/update-image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            toast.success('Cập nhật thành công!');
        } else {
        }
    } catch (error) {
        console.error('Lỗi khi tải ảnh:', error);
    }
};

onMounted(() => {
    checkLinkInitial();
});

// Name's page
onMounted(() => {
    document.title = 'Upload ảnh nhân viên';
});
</script>

<style lang="scss" scoped src="../assets/UpdateImage.scss"></style>
