<template>
    <div>
        <img class="loader" v-if="loading" src="https://m.popkey.co/fe4ba7/DYALX.gif" />
        <img class="photo" v-if="photo" :class="{hide: loading}" @load="load" :src="makeUrl(photo.id)" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false
            }
        },
        computed: {
            photo() { return this.$store.state.selectedPhoto }
        },
        watch: {
            photo() {
                this.loading = true
            }
        },
        methods: {
            makeUrl(photoId) {
                return `https://picsum.photos/350/200?image=${photoId}`
            },
            load() {
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    img.photo { width: 350px; height: 200px; }
    img.hide { display: none; }
    img.loader { width: 200px; height: 200px; }
</style>