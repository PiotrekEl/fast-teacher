<template>
  <div class="quest">
    <label class="quest__label" for="quest">{{ quest }}
    <input type="text" id="text">
    </label>
  </div>
</template>

<script>
export default {
  name: 'QuestItem',
  data() {
    return {
    };
  },
  props: {
    quest: String,
  },
};
</script>

<style lang="scss" scoped>
.quest {

  &__label {
    color: goldenrod;
    font-weight: 700;
    font-size: 1.5rem;
  }
}
</style>
