<template>
    <div class="signup-container">
        <h2>Đăng ký nhân viên</h2>
        <form @submit.prevent="handleSignUp">
            <div class="form-group">
                <label for="fullName">Họ và tên</label>
                <input type="text" v-model="formData.fullName" id="fullName" required />
            </div>

            <div class="form-group">
                <label for="generation">Năm sinh</label>
                <input type="number" v-model="formData.generation" id="generation" required />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="formData.email" id="email" required />
            </div>

            <div class="form-group">
                <label for="facebook">Facebook</label>
                <input type="url" v-model="formData.facebook" id="facebook" />
            </div>

            <div class="form-group">
                <label for="phoneNumber">Số điện thoại</label>
                <input type="text" v-model="formData.phoneNumber" id="phoneNumber" required />
            </div>

            <div class="form-group">
                <label for="image">Ảnh đại diện</label>
                <input type="file" @change="handleFileChange" id="image" accept="image/*" />
            </div>

            <button type="submit" class="submit-button">Đăng ký</button>
        </form>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
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

const errorMessage = ref('');
const successMessage = ref('');

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

    errorMessage.value = '';
    successMessage.value = '';

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
            successMessage.value = 'Đăng ký thành công!';
        }
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage.value = error.response.data.message;
        } else {
            errorMessage.value = 'Có lỗi xảy ra trong quá trình đăng ký.';
        }
    }
};


// Name's page
onMounted(() => {
    document.title = 'Đăng ký nhân viên';
});
</script>

<style scoped>
.signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #218838;
}

.error-message {
    color: red;
    margin-top: 10px;
}

.success-message {
    color: green;
    margin-top: 10px;
}
</style>
