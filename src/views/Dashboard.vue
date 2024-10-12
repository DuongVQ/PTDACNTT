<template>
    <div class="wrapper">
        <!-- Header -->
        <div class="header" :class="{ collapsed: isMenuHidden }">
            <div class="list-menu">
                <RouterLink to="/" class="logo">
                    <img src="../assets/Logo-HighLands-Coffee.webp" alt="" :class="{ hidden: isMenuHidden }" />
                    <h2 :class="{ hidden: isMenuHidden }">HILANDS COFFEE</h2>
                </RouterLink>
                <RouterLink
                    to="/dashboard"
                    class="btn-menu"
                    :class="{ active: route.path === '/dashboard', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-house"></i>
                    <span>Trang chủ</span>
                </RouterLink>
                <RouterLink
                    to="/checkin-qr"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-qr', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-qrcode"></i>
                    <span>Checkin QR</span>
                </RouterLink>
                <RouterLink
                    to="/checkin-face"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-face', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-user-check"></i>
                    <span>Checkin Face</span>
                </RouterLink>
                <RouterLink
                    to="/checkin-email"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-email', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-envelope"></i>
                    <span>Checkin Email</span>
                </RouterLink>
                <a href="/" @click="logout" class="btn-menu logout" :class="{ hidden: isMenuHidden }">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span>
                </a>
            </div>
            <div class="hidden-menu" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

        <!-- Navbar -->
        <div class="nav-bar"></div>

        <!-- Content -->
        <div class="content">
            <!-- Header content -->
            <div class="header-content">
                <h3>Danh sách nhân viên</h3>

                <!-- List btn controll -->
                <div class="list-controll">
                    <!-- Btn reload -->
                    <button class="reload-content" @click="reloadMembers">
                        <span class="tooltip-text">Tải lại</span>
                        <i class="fa-solid fa-rotate-right"></i>
                    </button>

                    <!-- Btn sort name -->
                    <button class="sort" @click="sortByName">
                        <span class="tooltip-text">Sắp xếp</span>
                        <i class="fa-solid fa-arrow-down-a-z"></i>
                    </button>

                    <!-- Export to Excel -->
                    <button class="excel" @click="exportToExcel">
                        <span class="tooltip-text">Xuất Excel</span>
                        <i class="fa-solid fa-file-export"></i>
                    </button>

                    <!-- Search box -->
                    <div class="search">
                        <input type="text" name="" id="" placeholder="Search..." v-model="searchQuery" />
                        <button class="btn-search">
                            <span class="tooltip-text">Search</span>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Display mode -->
            <div class="display-mode">
                <button class="add-member" @click="showModal = true">
                    Thêm
                    <span>
                        <i class="fa-solid fa-plus"></i>
                    </span>
                    <router-view />
                </button>
                <form>
                    <label>
                        <input type="radio" name="display-mode" value="all-members" v-model="filterMode" />
                        Tất cả
                    </label>
                    <label>
                        <input type="radio" name="display-mode" value="checked" v-model="filterMode" />
                        Đã Điểm danh
                    </label>
                    <label>
                        <input type="radio" name="display-mode" value="not-checked" v-model="filterMode" />
                        Chưa Điểm danh
                    </label>
                </form>
            </div>

            <!-- List members join -->
            <div class="wrapper-table">
                <table class="table-list_member">
                    <!-- Header table -->
                    <tr>
                        <td class="headerTable-list_member">STT</td>
                        <td class="headerTable-list_member">Họ và tên</td>
                        <td class="headerTable-list_member">Khóa</td>
                        <td class="headerTable-list_member">Email</td>
                        <td class="headerTable-list_member">Số điện thoại</td>
                        <td class="headerTable-list_member">Trạng thái</td>
                    </tr>

                    <!-- Content table -->
                    <tr v-for="(member, index) in paginatedMembers" :key="member.id">
                        <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                        <td>
                            <a
                                :href="member.facebook || '#'"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="info-facebook"
                            >
                                {{ member.fullName }}
                            </a>
                        </td>
                        <td>{{ member.generation }}</td>
                        <td :title="member.email">{{ member.email }}</td>
                        <td>{{ member.phoneNumber }}</td>
                        <td
                            style="
                                display: grid;
                                align-items: center;
                                justify-content: center;
                                grid-template-columns: 100px 100px;
                                grid-template-rows: auto auto;
                                gap: 10px;
                            "
                        >
                            <button @click="handleSeeUser(member)">
                                <i class="fa-solid fa-eye"></i>
                                Xem
                                <router-view />
                            </button>
                            <button @click="handleUpdateUser(member)">
                                <i class="fa-solid fa-pen-to-square"></i>
                                Update
                                <router-view />
                            </button>
                            <button v-if="member.image && !member.isAccessImage" @click="handleApproveImage(member)">
                                Duyệt ảnh
                                <router-view />
                            </button>
                            <button v-if="member.image && !member.isAccessImage" @click="generateLink(member)">
                                Tạo link
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Controll page -->
            <div class="controll-page">
                <!-- prev page -->
                <button @click="prevPage" :disabled="currentPage === 1">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <!-- choose page -->
                <button @click="changePage(1)" :class="{ active: currentPage === 1 }">1</button>
                <button v-if="currentPage > 3">...</button>
                <button
                    v-for="page in pagesToShow"
                    :key="page"
                    @click="changePage(page)"
                    :class="{ active: currentPage === page }"
                >
                    {{ page }}
                </button>
                <button v-if="currentPage < totalPages - 2">...</button>
                <button @click="changePage(totalPages)" :class="{ active: currentPage === totalPages }">
                    {{ totalPages }}
                </button>

                <!-- next page -->
                <button @click="nextPage" :disabled="currentPage === totalPages">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <ModalAddUser v-if="showModal" @close="showModal = false" @userAdded="handleUserAdded" :token="token" />
        <ModalSeeUser v-if="showModalSeeUser" :user="selectedUser" @close="showModalSeeUser = false" :token="token" />
        <ModalUpdateUser
            v-if="showModalUpdateUser"
            :user="selectedUser"
            :token="token"
            @close="showModalUpdateUser = false"
            @userUpdated="handleUserUpdated"
        />
        <ModalApproveImage
            v-if="showModalApproveImage"
            :user="selectedUser"
            :token="token"
            @close="showModalApproveImage = false"
            @imageApproved="handleImageApproved"
        />
    </div>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import ModalAddUser from '../modal/ModalAddUser.vue';
import ModalSeeUser from '../modal/ModalSeeUser.vue';
import ModalUpdateUser from '../modal/ModalUpdateUser.vue';
import ModalApproveImage from '../modal/ModalApproveImage.vue';

import { getToken } from '../api/authToken.js';

const route = useRoute();
const router = useRouter();
const isMenuHidden = ref(false);

const navigateToCheckinEmail = () => {
    router.push('/checkin-phone');
};

const logout = () => {
    localStorage.removeItem('authToken');

    router.push('/');
};

const toggleMenu = () => {
    isMenuHidden.value = !isMenuHidden.value;
    if (isMenuHidden.value) {
        document.body.style.paddingLeft = '70px';
    } else {
        document.body.style.paddingLeft = '280px';
    }
};

onMounted(() => {
    document.body.style.transition = 'padding-left 0.3s ease';
    document.body.style.paddingLeft = isMenuHidden.value ? '70px' : '280px';
});

onBeforeUnmount(() => {
    document.body.style.paddingLeft = '0';
    document.body.style.transition = '';
});

// modal add
const showModal = ref(false);

// modal see
const showModalSeeUser = ref(false);
const selectedUser = ref<Member | null>(null);

// modal update
const showModalUpdateUser = ref(false);

// modal ApproveImage
const showModalApproveImage = ref(false);

// type of data
interface Member {
    id: string;
    fullName: string;
    generation: number;
    email: string;
    facebook: string;
    phoneNumber: string;
    isCheckin: boolean;
    isAccessImage: boolean;
    image: string;
    createdAt: Date | string;
}
const members = ref<Member[]>([]);

// sort name A->Z
const isSortedAsc = ref(true);
// search name
const searchQuery = ref('');
// filter display mode
const filterMode = ref('all-members');

// count page
const currentPage = ref(1);
const itemsPerPage = 5; // max 5
let countMem = 100;
let countPage = 1;
let totalUsers = ref(0);

// set token
let token = getToken();

const fetchParticipants = async () => {
    try {
        const response = await axios.get(
            `https://api.viphaui.com/api/v1/users?page=${countPage}&sort=createdAt:desc&limit=${countMem}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        members.value = response.data.data.users;

        // get total users
        totalUsers.value = response.data.data.total;
    } catch (error: any) {
        if (error.response) {
            console.error('Lỗi từ phía server:', error.response);
        } else if (error.request) {
            console.error('Không nhận được phản hồi từ server:', error.request);
        } else {
            console.error('Lỗi trong quá trình xử lý yêu cầu:', error.message);
        }
    }
};
// call function
fetchParticipants();

// Export file Excel
const exportToExcel = () => {
    let count = 1;
    const ws = XLSX.utils.json_to_sheet(
        members.value.map((member) => ({
            STT: count++,
            ID: member.id,
            'Họ và tên': member.fullName,
            Khóa: member.generation,
            'Số điện thoại': member.phoneNumber,
            Email: member.email,
            'Trạng thái': member.isCheckin ? 'Đã check-in' : 'Chưa check-in',
            'Ngày đăng ký': member.createdAt,
        })),
    );

    // Set align-center & boder
    const range: any = ws['!ref'] ? XLSX.utils.decode_range(ws['!ref']) : null;
    for (let R = range.s.r; R <= range.e.r; ++R) {
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cell_ref = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[cell_ref]) continue;
            ws[cell_ref].s = {
                alignment: { horizontal: 'center', vertical: 'center' },
                border: {
                    top: { style: 'thin' },
                    bottom: { style: 'thin' },
                    left: { style: 'thin' },
                    right: { style: 'thin' },
                },
            };
        }
    }

    // Set width of column
    ws['!cols'] = [
        { wch: 10 },
        { wch: 40 },
        { wch: 30 },
        { wch: 10 },
        { wch: 20 },
        { wch: 40 },
        { wch: 20 },
        { wch: 30 },
    ];

    // add row, col
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Danh sách thành viên');

    // export name-file
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'danh_sach_thanh_vien.xlsx');
};

// Sort name function
const sortByName = () => {
    members.value.sort((a, b) => {
        if (isSortedAsc.value) {
            return a.fullName.localeCompare(b.fullName);
        } else {
            return b.fullName.localeCompare(a.fullName);
        }
    });
    // revert
    isSortedAsc.value = !isSortedAsc.value;
};

// Button reload
const reloadMembers = () => {
    fetchParticipants();
    currentPage.value = 1;
};

// Filter check-in
const filterByCheckStatus = computed(() => {
    if (filterMode.value === 'checked') {
        return members.value.filter((member) => member.isCheckin);
    } else if (filterMode.value === 'not-checked') {
        return members.value.filter((member) => !member.isCheckin);
    } else {
        return members.value;
    }
});

// Search with key word
const filteredMembers = computed(() => {
    return filterByCheckStatus.value.filter((member) =>
        member.fullName.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
});

// Calculate total number of pages
const totalPages = computed(() => {
    return Math.ceil(filteredMembers.value.length / itemsPerPage);
});

const pagesToShow = computed(() => {
  if (totalPages.value <= 5) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);
  } else {
    if (currentPage.value <= 3) {
      return [2, 3, 4];
    } else if (currentPage.value >= totalPages.value - 2) {
      return [totalPages.value - 3, totalPages.value - 2, totalPages.value - 1];
    } else {
      return [currentPage.value - 1, currentPage.value, currentPage.value + 1];
    }
  }
});

// Member number
const paginatedMembers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredMembers.value.slice(start, end);
});

// Buttons controll page
const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

// add new user
const handleUserAdded = (newUser: Member) => {
    members.value.push(newUser);
    fetchParticipants();
};

// see user
const handleSeeUser = (user: Member) => {
    selectedUser.value = user;
    showModalSeeUser.value = true;
};

// assign information
const handleUpdateUser = (user: Member) => {
    selectedUser.value = user;
    showModalUpdateUser.value = true;
};

// function update user
const handleUserUpdated = (updatedUser: any) => {
    const index = members.value.findIndex((member) => member.id === updatedUser.id);
    if (index !== -1) {
        members.value[index] = updatedUser;
    }
    fetchParticipants();
};

// Browse photos
const handleApproveImage = (user: Member) => {
    selectedUser.value = user;
    showModalApproveImage.value = true;
};

// ImageApproved
const handleImageApproved = (updatedUser: any) => {
    const index = members.value.findIndex((member) => member.id === updatedUser.id);
    if (index !== -1) {
        members.value[index] = updatedUser;
    }
    fetchParticipants();
};

const generateLink = async (member: Member) => {
    try {
        const response = await axios.get(`https://api.viphaui.com/api/v1/users/generate-link?q=${member.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        const domain = window.location.origin;

        const linkToken = response.data.data.token;
        const link = `${domain}/UpdateImage?q=${linkToken}&id=${member.id}`;

        // Copy link vào clipboard
        await navigator.clipboard.writeText(link);
    } catch (error) {
        console.error('Lỗi khi tạo link:', error);
    }
};

// Name's page
onMounted(() => {
    document.title = 'Trang chủ Admin';
});
</script>

<style lang="scss" scoped src="../assets/ListCheck.scss"></style>
