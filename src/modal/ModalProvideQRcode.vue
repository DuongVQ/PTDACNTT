<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <div @click="close" class="icon-close">&times;</div>
                    <slot></slot>
                    <div class="slot"></div>
                    <button @click="close">Thoát</button>
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
    top: 0;
    left: 0;
    background-color: #6d6d6d1c;
    .modal-inner {
        position: relative;
        max-width: 500px;
        width: 80%;
        box-shadow: 0 0 10px #353535bc;
        background-color: #fff;
        border-radius: 10px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 35px;
            color: rgb(68, 115, 255);
            cursor: pointer;
            &:hover {
                color: rgb(40, 20, 220);
            }

            @media (max-width: 767px) {
                top: 10px;
            }
        }
    }
}
.slot {
    width: 100%;
    height: 0.5px;
    background-color: #4096ff;
    margin: 40px auto 20px;
}
button {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 12px 35px;
    border: none;
    border-radius: 4px;
    background: rgb(40, 126, 255);
    cursor: pointer;
    margin-right: 20px;
    margin-left: auto;
}
</style>