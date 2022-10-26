<template>1</template>
<script>
export default {
//   data() {
//     return {
//       fromPage: "",
//     };
//   },
//   created() {
//     let _this = this;
//     console.log(_this.fromPage,"created");
//   },
//   mounted() {
//     let _this = this;
//     console.log(_this.fromPage,"mounted");
//     if ("/home" === _this.fromPage) { 
//       window.location.href = "https://www.baidu.com"; // 跳转对应地址
//     } else { 
//       _this.$router.push({name: "HomeIndex"});
//     }
//   },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    // next(vm => {
    //   // vm相当于上面的this
    //   vm.fromPage = from.path;
    // });
  },
  methods: {}
};
</script>