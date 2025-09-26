import EditNoteView from "@/Views/EditNoteView.vue";
import NotesView from "@/Views/NotesView.vue";
import StatsView from "@/Views/StatsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: NotesView,
        name: 'notes'
    },
    {
        path: '/edit-note/:id',
        component: EditNoteView,
        name: 'edit-note',
        props: true
    },
    {
        path: '/stats',
        component: StatsView,
        name: 'stats'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;