<script setup>
import { useAttrs } from 'vue';


defineOptions({
    // inheritAttrs: false // we can disable attribute inheritance by using this
});

const onClick = () => {
    console.log('Child Clicked');
}

const attrs= useAttrs();
console.log(attrs,'kjh');

</script>

<template>

    <button id="mybtn" class="btn" style="color: yellow; font-size: 20px;" @click="onClick">Sample Button</button>
    <button :="$attrs">Another Button</button>
</template>