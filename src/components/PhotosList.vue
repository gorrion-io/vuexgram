<template>
    <div>
        <img :src="makeUrl(photo.id)" @click="selectPhoto(photo)" :key="photo.id" v-for="photo in photos" />
    </div>
</template>

<script>

import { Component, Prop } from 'vue-property-decorator';
import { FETCH_PHOTOS, SELECT_PHOTO } from '../store'

@Component
export default class PhotosList {
    @Prop() photos
    @Prop() selectPhoto
    @Prop() fetchPhotos

    makeUrl(photoId) {
        return `https://picsum.photos/50?image=${photoId}`
    }

    async created() {
        await this.fetchPhotos()
        this.selectPhoto(this.photos[0])
    }
}
</script>

<style scoped>
    img { width: 50px; height: 50px; margin: 5px; cursor: pointer; }
    img:hover { opacity: 0.8 }
</style>

