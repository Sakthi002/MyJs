import { ref } from 'vue';
import { useListeners } from './eventListeners';

export function useMouse () {

    const x = ref(null);
    const y = ref(null);

    function updatePosition(event) {

        x.value = event.pageX;

        y.value = event.pageY;
    }

    useListeners(window, 'mousemove', updatePosition);

    return { x, y }
}