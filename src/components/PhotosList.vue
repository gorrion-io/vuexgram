<template>
    <div>
        <img :src="makeUrl(photo.id)" @click="selectPhoto(photo)" :key="photo.id" v-for="photo in photos" />
    </div>
</template>

<script>

import { FETCH_PHOTOS, SELECT_PHOTO } from '../store'

export default {
    computed: {
        photos() { return this.$store.state.photos }
    },
    methods: {
        makeUrl(photoId) {
            return `https://picsum.photos/50?image=${photoId}`
        },
        selectPhoto(photo) {
            this.$store.commit(SELECT_PHOTO, photo)
        }
    },
    async created() {
        await this.$store.dispatch(FETCH_PHOTOS)
        this.$store.commit(SELECT_PHOTO, this.$store.state.photos[0])
    }
}
</script>

<style scoped>
    img { width: 50px; height: 50px; margin: 5px; cursor: pointer; }
    img:hover { opacity: 0.8 }
</style>

