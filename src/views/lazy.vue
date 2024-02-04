<script setup>
    //import
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import api from '../api/index'

    // state
    const data = ref([]);

    // Lazy
    const lazyLoad = ref(null);

    //fetching
    const fetchDataPosts = async () => {
        //fetch data 
        await api.get('/posts')
        .then(response => {
            data.value = response.data
        });
    }
    // Lazy Logic
    const scrollData = async () => {
        const lazy = lazyLoad.value;
        if(lazy) {
            const scrollPosition = lazy.scrollTop + lazy.clientHeight;
            const totalHeight = lazy.scrollHeight;

            const distance = totalHeight - scrollPosition;
            const threshold = 100;

            if (distance < threshold) {
                fetchDataPosts();
            }
        }
    }

    // render -> similar to useEffect()
    onMounted(() => {
        const lazy = lazyLoad.value;
        if(lazy) {
            lazy.addEventListener('scroll', scrollData);
        }
        fetchDataPosts();
    });
</script>

<template>
  <div class="row gap-2 gap-lg-0">
    <h5 class="fs-4 text-center mb-4">Lazy</h5>
    <div ref="lazyLoad" @scroll="scrollData"  v-for="(post, index) in data" :key="index" class="col-12 col-lg-3">
      <div class="card p-2 mb-2">
        <h5 class="text-truncate">{{ post.title }}</h5>
        <p class="text-truncate">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>
