<template>
  <el-button @click="cilck">组件测试</el-button>
</template>

<script>
import {ElButton} from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  name: "LButton",
  components:{ElButton},
  mounted(){
    console.log(111)
  },
  methods:{
    cilck(){
      alert(1)
    }
  }
};

</script>