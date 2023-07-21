<template>
    <div class="container">
        <HospitalTop />
        <div class="context">
            <RouterView></RouterView>
        </div>
        <HospitalBottom />
        <Login />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;

    .context {
        margin-top: 70px;
        width: 1200px;
        min-height: 700px;
        background-color: #fff;
    }
}
</style>