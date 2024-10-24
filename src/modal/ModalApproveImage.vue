<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <div class="title">
                <h3>
                    <i class="fa-regular fa-folder-open"></i>
                    Duyệt ảnh
                </h3>
                <span @click="closeModal">&times;</span>
            </div>
            <div class="user-info">
                <span>Link Facebook: </span>
                <a :href="user.facebook" target="_blank">http://www.facebook.com/viper</a>
                <div class="wrapper-img">
                    <img :src="`https://api.viphaui.com/${previewImage}`" alt="User Image" class="user-image" />
                </div>
            </div>
            <button @click="approveImage" class="btn-primary">
                Duyệt
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
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, defineComponent } from 'vue';
import axios from 'axios';

const props = defineProps<{ user: any; token: string }>();
const emit = defineEmits<{ (e: 'close'): void; (e: 'imageApproved', user: any): void }>();

const previewImage = ref(props.user.image);

const closeModal = () => {
    emit('close');
};

const approveImage = async () => {
    try {
        const response = await axios.post(
            `https://api.viphaui.com/api/v1/users/browse-image?q=${props.user.id}`,
            { isAccessImage: true },
            {
                headers: {
                    Authorization: `Bearer ${props.token}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        emit('imageApproved', response.data);
        closeModal();
    } catch (error: any) {
        console.error('Lỗi khi duyệt ảnh:', error.response ? error.response.data : error.message);
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
        padding: 0 20px;
        border-radius: 8px;
        width: 500px;
        display: flex;
        flex-direction: column;

        @media (max-width: 767px) {
            width: 350px;
        }
        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 20px;

            h3 {
                font-size: 23px;
                margin: 0;
                margin-top: 22px;
                background: linear-gradient(45deg, rgb(134, 128, 255), rgb(67, 224, 255));
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;

                @media (max-width: 767px) {
                    font-size: 18px;
                }
            }
            span {
                position: absolute;
                top: 12px;
                right: 0px;
                font-size: 35px;
                cursor: pointer;
                &:hover {
                    color: #007bff;
                }
                @media (max-width: 767px) {
                    top: 15px;
                    font-size: 30px;
                }
            }
        }
    }

    .user-info {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;

        a {
            width: 100%;
            padding: 10px 0;
            font-size: 20px;
            text-decoration: none;
            border-bottom: 1px solid rgb(0, 225, 255);
        }

        span {
            font-size: 18px;
            margin-right: auto;
            background: linear-gradient(45deg, rgb(134, 128, 255), rgb(67, 224, 255));
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        .wrapper-img {
            height: 270px;
            margin: 20px;
            padding: 20px;
            border: 2px solid rgb(0, 234, 255);
            border-radius: 10px;

            .user-image {
                width: 453px;
                height: 100%;
                object-fit: contain;

                @media (max-width: 767px) {
                    width: 305px;
                }
            }
        }
    }

    // Btn
    /* From Uiverse.io by Peary74 */
    button {
        background: linear-gradient(45deg, rgb(156, 174, 255), rgb(0, 179, 255), rgb(0, 204, 255));
        box-shadow: 6px 0px 0px #00c1f6;
        position: relative;
        padding: 12px 35px;
        font-size: 18px;
        font-weight: 500;
        color: white;
        border: 3px solid #00cdf6;
        border-radius: 8px;
        box-shadow: 0 0 0 #fec1958c;
        transition: all 0.3s ease-in-out;
        margin-bottom: 30px;
    }

    .star-1 {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 25px;
        height: auto;
        filter: drop-shadow(0 0 0 #fd1853);
        z-index: -5;
        transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }

    .star-2 {
        position: absolute;
        top: 45%;
        left: 45%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 0 #fd1853);
        z-index: -5;
        transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-3 {
        position: absolute;
        top: 40%;
        left: 40%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 0 #fd1853);
        z-index: -5;
        transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-4 {
        position: absolute;
        top: 20%;
        left: 40%;
        width: 8px;
        height: auto;
        filter: drop-shadow(0 0 0 #fd1853);
        z-index: -5;
        transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-5 {
        position: absolute;
        top: 25%;
        left: 45%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 0 #fd1853);
        z-index: -5;
        transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-6 {
        position: absolute;
        top: 5%;
        left: 50%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 0 #fd1853);
        z-index: -5;
        transition: all 0.8s ease;
    }

    button:hover {
        background: transparent;
        background: linear-gradient(45deg, rgb(134, 128, 255), rgb(67, 224, 255));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        box-shadow: 0 0 50px #18b8fd;
    }

    button:hover .star-1 {
        position: absolute;
        top: -80%;
        left: -30%;
        width: 25px;
        height: auto;
        filter: drop-shadow(0 0 10px #fd1853);
        z-index: 2;
    }

    button:hover .star-2 {
        position: absolute;
        top: -25%;
        left: 10%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 10px #fd1853);
        z-index: 2;
    }

    button:hover .star-3 {
        position: absolute;
        top: 55%;
        left: 25%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 10px #fd1853);
        z-index: 2;
    }

    button:hover .star-4 {
        position: absolute;
        top: 30%;
        left: 80%;
        width: 8px;
        height: auto;
        filter: drop-shadow(0 0 10px #fd1853);
        z-index: 2;
    }

    button:hover .star-5 {
        position: absolute;
        top: 25%;
        left: 115%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 10px #fd1853);
        z-index: 2;
    }

    button:hover .star-6 {
        position: absolute;
        top: 5%;
        left: 60%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 10px #fd1853);
        z-index: 2;
    }

    .fil0 {
        fill: #fd1853;
    }
}
</style>
