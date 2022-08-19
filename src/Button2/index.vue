<template>
  <el-button @click="cilck">组件测试2</el-button>
</template>

<script>
import {ElButton} from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  name: "LButton2",
  components:{ElButton},
  mounted(){
    console.log(222)
  },
  methods:{
    cilck(){
      alert(2)
    }
  }
};

</script>