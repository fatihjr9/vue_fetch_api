<script setup>
  // import
  import { ref, onMounted } from 'vue';
  import api from '../api/index';

  // state
  const data = ref([]);
  const dataLimitation = ref(12);

  // fetching
  const fetchDataPosts = async () => {
    // fetch data 
    await api.get('/posts').then((response) => {
      data.value = response.data;
    });
  };

  // Load More
  const loadMore = async () => {
    await fetchDataPosts();
    dataLimitation.value += 4;
  };

  // render -> similar to useEffect()
  onMounted(() => {
    fetchDataPosts();
  });
</script>

<template>
  <div class="row gap-2 gap-lg-0">
    <h5 class="fs-4 text-center mb-4">Load More</h5>
    <div v-for="(post, index) in data.slice(0, dataLimitation)" :key="index" class="col-12 col-lg-3">
      <div class="card p-2 mb-2">
        <h5 class="text-truncate">{{ post.title }}</h5>
        <p class="text-truncate">{{ post.body }}</p>
      </div>
    </div>
    <button v-if="dataLimitation < data.length" class="mx-auto btn btn-primary w-auto mt-2" @click="loadMore">Load More</button>
  </div>
</template>
