<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="title">
                <h3>
                    <i class="fa-regular fa-folder-open"></i>
                    Cập nhật thông tin
                </h3>
                <span @click="closeModal">&times;</span>
            </div>

            <form @submit.prevent="handleSubmit">
                <!-- Box input file img -->
                <div class="wrapper-folder">
                    <div class="folder">
                        <div class="front-side">
                            <div class="tip"></div>
                            <div class="cover"></div>
                        </div>
                        <div class="back-side cover"></div>
                    </div>
                    <label class="custom-file-upload">
                        <input type="file" @change="handleImageUpload" accept="image/*" class="updateImg" />
                        Choose a file
                        <div v-if="previewImage">
                            <img :src="previewImage" alt="User Image" class="preview-image" />
                        </div>
                    </label>
                </div>

                <!-- Info need to update -->
                <div class="list-form">
                    <!-- Name -->
                    <div class="form-group">
                        <label>Họ và tên</label>
                        <input v-model="updatedUser.fullName" type="text" required />
                    </div>

                    <!-- Generation -->
                    <div class="form-group">
                        <label>Năm sinh</label>
                        <input v-model="updatedUser.generation" type="number" required />
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <label>Email</label>
                        <input v-model="updatedUser.email" type="email" required />
                    </div>

                    <!-- Phone -->
                    <div class="form-group">
                        <label>Số điện thoại</label>
                        <input v-model="updatedUser.phoneNumber" type="text" required />
                    </div>

                    <!-- Status -->
                    <div class="form-group">
                        <label>Trạng thái</label>
                        <select v-model="updatedUser.isCheckin">
                            <option :value="true">Đã điểm danh</option>
                            <option :value="false">Chưa điểm danh</option>
                        </select>
                    </div>

                    <!-- Btn submit -->
                    <button type="submit" class="btn-primary">
                        Lưu thông tin
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
import { ref, defineProps, defineEmits } from 'vue';
import axios from 'axios';

const props = defineProps<{ user: any; token: string }>();
const emit = defineEmits<{ (e: 'close'): void; (e: 'userUpdated', updatedUser: any): void }>();

// use old Information
const updatedUser = ref({ ...props.user });

// Processing uploaded images
const previewImage = ref<string | null>(null);
const imageFile = ref<File | null>(null);

const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
        const file = target.files[0];
        previewImage.value = URL.createObjectURL(file);
        imageFile.value = file;
    }
};

const closeModal = () => {
    emit('close');
};

const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('fullName', updatedUser.value.fullName);
    formData.append('email', updatedUser.value.email);
    formData.append('phoneNumber', updatedUser.value.phoneNumber);
    formData.append('generation', updatedUser.value.generation.toString());
    formData.append('isCheckin', updatedUser.value.isCheckin.toString());

    if (imageFile.value) {
        formData.append('image', imageFile.value);
    }

    try {
        const response = await axios.patch(`https://api.viphaui.com/api/v1/users/${props.user.id}`, formData, {
            headers: {
                Authorization: `Bearer ${props.token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        emit('userUpdated', response.data);

        closeModal();
    } catch (error) {
        console.error('Lỗi khi cập nhật thông tin:', error);
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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;

    .modal-content {
        background-color: white;
        padding: 0 45px;
        border-radius: 8px;
        width: 510px;

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 30px;

            h3 {
                font-size: 23px;
                margin: 0;
                margin-top: 22px;
                color: #ffac71;

                @media (max-width: 767px) {
                    font-size: 18px;
                }
            }

            span {
                position: absolute;
                top: 18px;
                right: 0px;
                font-size: 35px;
                cursor: pointer;
                color: #f19d61a2;
                transition: all 0.1s ease;

                &:hover {
                    color: #ffa564;
                }
                @media (max-width: 767px) {
                    top: 15px;
                    font-size: 30px;
                }
            }
        }

        form {
            display: flex;
            align-items: start;
            gap: 30px;

            @media (max-width: 767px) {
                flex-direction: column;
            }

            .list-form {
                flex: 1;
                @media (max-width: 767px) {
                    width: 100%;
                }
            }
            .form-group {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                label {
                    font-size: 18px;
                    font-weight: 600;
                    color: #ffae74;
                }
                input,
                select {
                    padding: 5px 10px;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid #ffa564;
                    font-size: 18px;
                    color: #444;
                }
            }

            // Btn
            /* From Uiverse.io by Peary74 */
            // Css btn
            /* From Uiverse.io by MuhammadHasann */
            button {
                position: relative;
                padding: 10px 35px;
                margin: 10px auto 30px;
                background: #ffa564;
                font-size: 18px;
                font-weight: 500;
                font-family: 'Roboto';
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

        .updateImg {
            border: 1px solid #007bff;
            background-color: transparent;
        }

        .preview-image {
            max-width: 100px;
            margin-top: 10px;
        }
    }
}

/* From Uiverse.io by 3bdel3ziz-T */
.wrapper-folder {
    --transition: 350ms;
    --folder-W: 120px;
    --folder-H: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    background: #3bd4ff;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(58, 58, 58, 0.2);
    width: 185px;
    margin: 30px auto;
    height: calc(var(--folder-H) * 1.7);
    position: relative;
}

.folder {
    position: absolute;
    top: -20px;
    left: calc(50% - 60px);
    animation: float 2.5s infinite ease-in-out;
    transition: transform var(--transition) ease;
}

.folder:hover {
    transform: scale(1.05);
}

.folder .front-side,
.folder .back-side {
    position: absolute;
    transition: transform var(--transition);
    transform-origin: bottom center;
}

.folder .back-side::before,
.folder .back-side::after {
    content: '';
    display: block;
    background-color: white;
    opacity: 0.5;
    z-index: 0;
    width: var(--folder-W);
    height: var(--folder-H);
    position: absolute;
    transform-origin: bottom center;
    border-radius: 15px;
    transition: transform 350ms;
    z-index: 0;
}

.wrapper-folder:hover .back-side::before {
    transform: rotateX(-5deg) skewX(5deg);
}
.wrapper-folder:hover .back-side::after {
    transform: rotateX(-15deg) skewX(12deg);
}

.folder .front-side {
    z-index: 1;
}

.wrapper-folder:hover .front-side {
    transform: rotateX(-40deg) skewX(15deg);
}

.folder .tip {
    background: linear-gradient(135deg, #ff9a56, #ff6f56);
    width: 80px;
    height: 20px;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: -10px;
    z-index: 2;
}

.folder .cover {
    background: linear-gradient(135deg, #ffe563, #ffc663);
    width: var(--folder-W);
    height: var(--folder-H);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.custom-file-upload {
    font-size: 1.1em;
    color: #ffffff;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background var(--transition) ease;
    display: inline-block;
    padding: 10px 35px;
    position: relative;
}

.custom-file-upload:hover {
    background: rgba(255, 255, 255, 0.4);
}

.custom-file-upload input[type='file'] {
    display: none;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>
