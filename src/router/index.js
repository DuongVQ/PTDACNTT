import { createRouter, createWebHistory } from 'vue-router';
import CheckinQR from '@/views/CheckinQR.vue';
// import CheckinFace from '@/views/CheckinFace.vue';
import CheckinEmail from '@/views/CheckinEmail.vue';
import ProvideQRcode from '@/views/ProvideQRcode.vue';
import Dashboard from '@/views/Dashboard.vue';
import Login from '@/views/Login.vue';
import UpdateImage from '@/views/UpdateImage.vue';
import SignUp from '@/views/SignUp.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/checkin-qr',
            name: 'checkin-qr',
            component: CheckinQR,
        },
        // {
        //     path: '/checkin-face',
        //     name: 'checkin-face',
        //     component: CheckinFace,
        // },
        {
            path: '/checkin-email',
            name: 'checkin-email',
            component: CheckinEmail,
        },
        {
            path: '/provide-qr',
            name: 'provide-qr',
            component: ProvideQRcode,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/update-image',
            name: 'update-image',
            component: UpdateImage,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,
        },
    ],
});

export default router;
