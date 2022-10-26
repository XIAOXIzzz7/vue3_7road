<template>
11
</template>
<script>
export default{
  data(){
    return{
      lis : [
        {
        a:1,
        b:2
      },
      {
        c:3,
        d:4
      }
      ]
    }
  },
  mounted(){
    console.log(this.lis);
    this.lis.pop()
    console.log(this.lis);
  }
}
</script>