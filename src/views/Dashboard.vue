<template>
    <div class="wrapper">
        <!-- Header -->
        <div class="header" :class="{ collapsed: isMenuHidden }">
            <div class="list-menu">
                <RouterLink to="/dashboard" class="logo">
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
                    <span>Điểm danh bằng QR</span>
                </RouterLink>
                <!-- <RouterLink
                    to="/checkin-face"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-face', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-user-check"></i>
                    <span>Checkin Face</span>
                </RouterLink> -->
                <RouterLink
                    to="/checkin-email"
                    class="btn-menu"
                    :class="{ active: route.path === '/checkin-email', hidden: isMenuHidden }"
                >
                    <i class="fa-solid fa-envelope"></i>
                    <span>Điểm danh bằng Email</span>
                </RouterLink>
                <a href="/" @click="logout" class="btn-menu logout" :class="{ hidden: isMenuHidden }">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Đăng xuất</span>
                </a>
            </div>
            <div class="hidden-menu" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

        <!-- Navbar -->
        <div class="nav-bar">
            <div class="avata-admin">
                <img src="../images/simple-user-default-icon-free-png.webp" alt="" />
                <div class="list-navbarMenu">
                    <div class="item-navbarMenu">
                        <RouterLink tag="a" to="/employee-qr" target="_blank">
                            <i class="fa-solid fa-qrcode"></i>
                            Quét QR
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <RouterLink tag="a" to="/employee-email" target="_blank">
                            <i class="fa-solid fa-envelope"></i>
                            Nhập email
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <RouterLink tag="a" to="/signup" target="_blank">
                            <i class="fa-solid fa-user-plus"></i>
                            Link đăng ký
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <RouterLink to="/provide-qr">
                            <i class="fa-solid fa-file-arrow-down"></i>
                            Cấp mã QR
                        </RouterLink>
                    </div>
                    <div class="item-navbarMenu">
                        <a href="/" @click="logout" class="btn-menu logout">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            Đăng xuất
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="main">
            <div class="detail">
                <div class="item-detail" style="border-left: 4px solid rgb(34, 188, 34)">
                    Số lượng nhân viên đã điểm danh <br />
                    <span> {{ checkedInCount }} / {{ members.length }} </span>
                </div>
                <div class="item-detail" style="border-left: 4px solid rgb(236, 32, 32)">
                    Số lượng nhân viên chưa điểm danh <br />
                    <span>
                        {{ notCheckedInCount }} / {{ members.length }}
                    </span>
                </div>
                <div class="item-detail" style="border-left: 4px solid #666" @click="openLateUsersModal">
                    Số lượng nhân viên đến muộn <br />
                    <span>
                        {{ lateCheckInCount }}
                    </span>
                </div>
            </div>

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
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span>
                        Thêm
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
                            <td class="headerTable-list_member">Năm sinh</td>
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
                            <td style="display: flex; align-items: center; justify-content: center">
                                <button @click="handleSeeUser(member)">
                                    <span class="tooltip-text">Xem thông tin</span>
                                    <i class="fa-solid fa-eye"></i>
                                    <router-view />
                                </button>
                                <button @click="handleUpdateUser(member)">
                                    <span class="tooltip-text">Cập nhật</span>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <router-view />
                                </button>
                                <button @click="handleDeleteUser(member)">
                                    <span class="tooltip-text">Xóa nhân viên</span>
                                    <i class="fa-solid fa-trash-can"></i>
                                    <router-view />
                                </button>
                                <!-- <button v-if="member.image && !member.isAccessImage" @click="handleApproveImage(member)">
                                    Duyệt ảnh
                                    <router-view />
                                </button> -->
                                <button @click="generateLink(member)">
                                    <span class="tooltip-text">Gửi link ảnh</span>
                                    <i class="fa-solid fa-image"></i>
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
                    <button
                        v-for="page in pagesToShow"
                        :key="page"
                        @click="changePage(page)"
                        :disabled="page === '...'"
                        :class="{ active: currentPage === page }"
                    >
                        {{ page }}
                    </button>

                    <!-- next page -->
                    <button @click="nextPage" :disabled="currentPage === totalPages">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
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
        <!-- <ModalApproveImage
            v-if="showModalApproveImage"
            :user="selectedUser"
            :token="token"
            @close="showModalApproveImage = false"
            @imageApproved="handleImageApproved"
        /> -->
    </div>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';
import * as XLSX from 'xlsx';
import saveAs from 'file-saver';

import ModalAddUser from '../modal/ModalAddUser.vue';
import ModalSeeUser from '../modal/ModalSeeUser.vue';
import ModalUpdateUser from '../modal/ModalUpdateUser.vue';
// import ModalApproveImage from '../modal/ModalApproveImage.vue';
import ModalLateUsers from '../modal/ModalLateUsers.vue';

import { getToken } from '../api/authToken.js';

const route = useRoute();
const router = useRouter();
const isMenuHidden = ref(false);

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
// const showModalApproveImage = ref(false);

// modal LaterUser
const showModalLateUsers = ref(false);

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
    checkinTime?: Date | string;
}
const members = ref<Member[]>([]);

// new state variables for check-in statistics
const checkedInCount = ref(0);
const notCheckedInCount = ref(0);
const lateCheckInCount = ref(0);

const calculateCheckinStats = () => {
    checkedInCount.value = members.value.filter((member) => member.isCheckin).length;
    notCheckedInCount.value = members.value.filter((member) => !member.isCheckin).length;

    // Cập nhật số nhân viên đến muộn dựa trên checkinTime
    lateCheckInCount.value = members.value.filter((member) => {
        if (member.isCheckin && member.checkinTime) {
            // Đảm bảo checkinTime là đối tượng Date nếu nó là chuỗi
            const checkinDateTime =
                typeof member.checkinTime === 'string' ? new Date(member.checkinTime) : member.checkinTime;
            return (
                checkinDateTime.getHours() > 7 || (checkinDateTime.getHours() === 7 && checkinDateTime.getMinutes() > 0)
            );
        }
        return false;
    }).length;
};

const openLateUsersModal = () => {
    showModalLateUsers.value = true;
};

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

        calculateCheckinStats();
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
            'Năm sinh': member.generation,
            'Số điện thoại': member.phoneNumber,
            Email: member.email,
            'Trạng thái': member.isCheckin ? 'Đã điểm danh' : 'Chưa điểm danh',
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

    toast.success('Đã xuất ra file Excel!', {
        autoClose: 2000,
    });
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

    toast.success('Đã tải lại trang!', {
        autoClose: 2000,
    });
};

// Filter checkin
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
    return filterByCheckStatus.value.filter((member) => {
        return member.fullName?.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
});

// Calculate total number of pages
const totalPages = computed(() => {
    return Math.ceil(filteredMembers.value.length / itemsPerPage);
});

const pagesToShow = computed(() => {
    const totalPagesArr = [];

    // Kiểm tra xem tổng số trang là nhỏ hơn hoặc bằng 5
    if (totalPages.value <= 5) {
        for (let i = 1; i <= totalPages.value; i++) {
            totalPagesArr.push(i);
        }
    } else {
        // Nếu số trang lớn hơn 5, ta tính toán các trang hiển thị dựa vào vị trí của trang hiện tại
        if (currentPage.value <= 3) {
            totalPagesArr.push(1, 2, 3, 4, '...', totalPages.value);
        } else if (currentPage.value >= totalPages.value - 2) {
            totalPagesArr.push(
                1,
                '...',
                totalPages.value - 3,
                totalPages.value - 2,
                totalPages.value - 1,
                totalPages.value,
            );
        } else {
            totalPagesArr.push(
                1,
                '...',
                currentPage.value - 1,
                currentPage.value,
                currentPage.value + 1,
                '...',
                totalPages.value,
            );
        }
    }

    return totalPagesArr;
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

    toast.success('Đã thêm nhân viên!', {
        autoClose: 2000,
    });

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
    toast.success('Đã cập nhật thông tin!', {
        autoClose: 2000,
    });
    fetchParticipants();
};

const handleDeleteUser = async (member: Member) => {
    const confirmed = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${member.fullName}?`);
    if (!confirmed) return;
    members.value = members.value.filter((m) => m.id !== member.id);

    try {
        const response = await axios.delete(`https://api.viphaui.com/api/v1/users/${member.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            toast.success('Đã xóa nhân viên', {
                autoClose: 3000,
            });
            // Cập nhật lại danh sách nhân viên sau khi xóa
            members.value = members.value.filter((m) => m.id !== member.id);
        } else {
            toast.error('Có lỗi khi xóa nhân viên!', {
                autoClose: 3000,
            });
        }
    } catch (error) {
        console.error('Có lỗi xảy ra khi xóa nhân viên:', error);
        toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.', {
            autoClose: 3000,
        });
    }
};

// Browse photos
// const handleApproveImage = (user: Member) => {
//     selectedUser.value = user;
//     showModalApproveImage.value = true;
// };

// ImageApproved
// const handleImageApproved = (updatedUser: any) => {
//     const index = members.value.findIndex((member) => member.id === updatedUser.id);
//     if (index !== -1) {
//         members.value[index] = updatedUser;
//     }
//     fetchParticipants();
// };

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
        const link = `${domain}/update-image?q=${linkToken}&id=${member.id}`;

        // Copy link vào clipboard
        await navigator.clipboard.writeText(link);
        toast.success('Đã copy link!', {
            autoClose: 3000,
        });
    } catch (error) {
        console.error('Lỗi khi tạo link:', error);
        toast.error('Lỗi khi tạo link!', {
            autoClose: 3000,
        });
    }
};

// Name's page
onMounted(() => {
    document.title = 'Trang chủ Admin';
});
</script>

<style lang="scss" scoped src="../assets/ListCheck.scss"></style>
