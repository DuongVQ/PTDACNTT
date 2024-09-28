<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <div @click="close" class="icon-close">&times;</div>
                    <slot></slot>
                    <button @click="close">
                        ᰔThank you!
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
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['modalActive'],
    setup(props, { emit }) {
        const close = () => {
            emit('Close');
        };

        watch(
        () => props.modalActive,
        (newVal) => {
            if (newVal) {
            setTimeout(() => {
                close();
            }, 3000); 
            }
        }
        );
        return { close };
    },
};
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}
.modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
.modal-animation-inner-leaver-to {
    transform: scale(0.8);
}
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    background-color: #413a3a5a;
    .modal-inner {
        position: relative;
        max-width: 640px;
        width: 80%;
        box-shadow: 0 0 10px #353535bc;
        background-color: #fff;
        border-radius: 20px;
        padding: 64px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon-close {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            &:hover {
                color: crimson;
            }
        }
    }
}
button {
    background: linear-gradient(45deg, rgb(156, 174, 255), rgb(0, 179, 255), rgb(0, 204, 255));
    box-shadow: 6px 0px 0px #00c1f6;
    position: relative;
    padding: 12px 35px;
    font-size: 20px;
    font-weight: 500;
    color: white;
    border: 3px solid #00cdf6;
    border-radius: 8px;
    box-shadow: 0 0 0 #fec1958c;
    transition: all 0.3s ease-in-out;
    margin: 0 auto;
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
    color: #0087f6;
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
</style>