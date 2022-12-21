import { defineComponent } from "vue";
import { ElInput } from "element-plus";
const FtInput = defineComponent({
  name: "FtInput",
  components: { ElInput },
  setup(props, { slots }) {
    return () => {
      return <el-input>{{ ...slots }}</el-input>;
    };
  },
});
export default FtInput;
