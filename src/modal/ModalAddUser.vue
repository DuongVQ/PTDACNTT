<template>
  <n-notification-provider>
    <div class="modal-overlay" @click.self="closeModal">
      <div
        class="modal-content"
        :class="{ 'animate-fade-in': isVisible, 'animate-fade-out': !isVisible }"
      >
        <div class="title">
          <h3>Thêm thành viên mới</h3>
          <span @click="closeModal">&times;</span>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <div class="icon_form-group">
              <i class="fa-solid fa-user"></i>
            </div>
            <input
              v-model="newUser.fullName"
              type="text"
              id="name"
              placeholder="Nhập tên thành viên..."
            />
          </div>
          <div class="form-group">
            <div class="icon_form-group">
              <i class="fa-solid fa-people-roof"></i>
            </div>
            <input
              v-model="newUser.generation"
              type="number"
              id="generation"
              placeholder="Khóa học..."
            />
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
          <button type="submit" class="btn-primary">
            Thêm
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
        </form>
      </div>
    </div>
  </n-notification-provider>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, defineComponent } from "vue";
import axios from "axios";

const newUser = ref({
  fullName: "",
  generation: 0,
  facebook: "",
  email: "",
  phoneNumber: "",
  password: "",
  role: "USER",
});

// Modal display control state and effects
const isVisible = ref(true);

const emit = defineEmits<{
  (e: "close"): void;
  (e: "userAdded", newUser: any): void;
}>();

const props = defineProps<{ token: string }>();

const closeModal = () => {
  isVisible.value = false;

  setTimeout(() => {
    emit("close");
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

  if (!newUser.value.facebook || typeof newUser.value.facebook !== "string") {

    return;
  }

  if (!newUser.value.generation) {

    return;
  }

  if (!newUser.value.phoneNumber) {

    return;
  }

  try {
    const response = await axios.post("https://api.viphaui.com/api/v1/users", newUser.value, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
    });

    emit("userAdded", response.data);


    closeModal();
  } catch (error: any) {
    if (error.response) {
      console.error("Lỗi từ phía server:", error.response.status);
      console.error("Chi tiết lỗi:", error.response.data);
      if (error.response.data) {

      }
    } else if (error.request) {
      console.error("Không nhận được phản hồi từ server:", error.request);

    } else {
      console.error("Lỗi trong quá trình xử lý yêu cầu:", error.message);

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
      margin-bottom: 50px;
      h3 {
        font-size: 28px;
        margin: 0;
        margin-top: 22px;
        background: linear-gradient(45deg, rgb(134, 128, 255), rgb(67, 224, 255));
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
          color: #007bff;
        }
      }
    }

    .form-group {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 20px 0 30px;
      border: 2px solid #5ce7ff73;
      color: #444;
      border-radius: 5px;

      .icon_form-group {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        border-right: 2px solid #70707015;

        i {
          background: linear-gradient(45deg, rgb(134, 128, 255), rgb(47, 192, 221));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
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
