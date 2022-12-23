import { defineComponent } from "vue";
import { ElInput } from "element-plus";
export default defineComponent({
  name: "FtInput",
  components: { ElInput },
  setup(props, { slots }) {
    return () => {
      return <el-input>{{ ...slots }}</el-input>;
    };
  },
});
