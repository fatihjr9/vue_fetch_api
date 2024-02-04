<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-between">
      <h5 class="text-center mt-4">RESTAPI JSONPLACEHOLDER</h5>
      <div class="d-flex align-items-center">
        <RouterLink :to="{name: 'home'}" class="nav-link">Load More</RouterLink>
        <RouterLink :to="{name: 'lazy'}" class="nav-link mx-3">Lazy</RouterLink>
      </div>
    </div>
    <div class="my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: blue;
}
</style>