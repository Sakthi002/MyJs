import { onMounted, onUnmounted } from 'vue';

export function useListeners(target, eventType, callback) {
 
    onMounted(() => {
        target.addEventListener(eventType, callback)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', updatePosition)
    })
}