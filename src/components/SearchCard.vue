<template>
  <li class="search-card" v-for="element in list" :key="element.place_id">
    <div class="search-card__top">
      <h2 class="search-card__title">Place: {{ element.display_name }}</h2>
      <img
        class="search-card__ico"
        v-if="element.icon"
        :src="element.icon"
        alt="ico"
      />
    </div>
    <div class="search-card__bottom">
      <div class="search-card__bottom-block">
        <p class="bottom-block__title">Class</p>
        <p class="bottom-block__value">{{ element.class }}</p>
      </div>
      <div class="search-card__bottom-block">
        <p class="bottom-block__title">Type</p>
        <p class="bottom-block__value">{{ element.type }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

.search-card {
  font-family: $myFont;
  border-radius: 8px;
  background-color: rgb(196, 167, 200);
  box-shadow: 0px 1px 4px rgba(47, 71, 116, 0.05),
    0px 2px 15px 1px rgba(31, 76, 161, 0.12);
  margin: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-size: 30px;

    text-align: center;
  }
  &__ico {
    background-color: rgb(208, 223, 37);
    border-radius: 8px;
  }
  &__bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
}
.bottom-block__title {
  font-size: 20px;
}
.bottom-block__value {
  font-weight: 700;
  font-size: 24px;
}
</style>
