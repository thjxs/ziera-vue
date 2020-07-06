<template>
<div class="fixed" :style="style">
    <div class="w-12 hover">
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['style']
}
</script>
<style scoped>
.slot {
    width: 0;
    opacity: 0.3;
}
.hover:hover .slot {
    display: block;
    width: 233px;
    opacity: 1;
    transition: all .3s ease-in;
}
</style>
