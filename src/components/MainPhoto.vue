<template>
    <div>
        <img class="loader" v-if="loading" src="https://m.popkey.co/fe4ba7/DYALX.gif" />
        <img class="photo" v-if="photo" :class="{hide: loading}" @load="load" :src="makeUrl(photo.id)" />
    </div>
</template>

<script>
    import { Component, Watch, Prop } from 'vue-property-decorator'

    @Component()
    export default class MainPhoto {
        loading = false

        @Prop() photo

        makeUrl(photoId) {
            return `https://picsum.photos/350/200?image=${photoId}`
        }
        
        load() {
            this.loading = false
        }

        @Watch('photo')
        ponPhotoChanged() {
            this.loading = true
        }
    }
</script>

<style scoped>
    img.photo { width: 350px; height: 200px; }
    img.hide { display: none; }
    img.loader { width: 200px; height: 200px; }
</style>