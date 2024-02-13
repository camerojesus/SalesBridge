<template>
    <MenuLateralExpandible v-if="true" />  
</template>

<script>
import MenuLateralExpandible from "@/components/MenuLateralExpandible.vue";
export default {
  components: {
    MenuLateralExpandible,
  },
  name: "menu-lateral-expandible",
  created() {
    console.log("Home creado");
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
