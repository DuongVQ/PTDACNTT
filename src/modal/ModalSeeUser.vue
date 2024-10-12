<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>
                    <i class="fa-regular fa-folder-open"></i> 
                    Thông tin nhân viên
                </h3>
                <button @click="closeModal">&times;</button>
            </div>
            <div class="modal-body">
                <div v-if="user" class="wrapper-info">
                    <div class="list-info">
                        <p>
                            <strong style="margin-bottom: 10px;">Ảnh đại diện:</strong>
                            <div class="user-image">
                                <img :src="`https://api.viphaui.com/${user.image}`" alt="User Image" />
                            </div>
                        </p>
                        <p><strong>Tên:</strong> <span>{{ user.fullName }}</span></p>
                        <p><strong>Facebook:</strong> <a :href="user.facebook" target="_blank">http://www.facebook.com/employee</a></p>
                        <p><strong>Email:</strong> <span>{{ user.email }}</span></p>
                        <p><strong>Số điện thoại:</strong> <span>{{ user.phoneNumber }}</span></p>
                    </div>
                </div>
                <div v-else>
                    <p>Không có dữ liệu để hiển thị.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ user: any }>(); 
const emit = defineEmits<{
    (e: 'close'): void;
}>();

const closeModal = () => {
    emit('close');
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
        padding: 0 30px;
        padding-bottom: 20px;
        border-radius: 8px;
        width: 500px;
        max-width: 80%;

        .modal-header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            h3 {
                margin-top: 20px;
                margin-bottom: 0;
                font-size: 23px;
                color: #ff984f;

                @media (max-width:767px) {
                    font-size: 18px;
                }
            }

            button {
                position: absolute;
                top: 18px;
                right: 0;
                border: none;
                cursor: pointer;
                font-size: 30px;
                background-color: transparent;

                &:hover {
                    color: #ff984f;
                }

                @media (max-width:767px) {
                    top: 13px;
                }
            }
        }

        .wrapper-info {
            display: flex;
            justify-content: center;

            .user-image {
                width: 100%;
                height: 150px;
                display: flex;
                justify-content: center;
                padding: 10px 0;
                border-radius: 10px;
                border: 2px solid #ff984f;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .list-info {
                font-size: 18px;
                width: 100%;

                p {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    margin-top: 13px;
                    strong {
                        color: #ff984f;
                        margin-left: 5px;
                    }
                    span, a {
                        border-bottom: 1px solid #ff984f;
                        padding: 5px;
                        padding-top: 0;
                        text-decoration: none;
                    }
                    a {
                        color: #222;
                        &:hover {
                            color: rgb(0, 208, 255);
                        }
                    }
                } 
            }
        }
    }
}
</style>
