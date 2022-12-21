import { defineComponent } from "vue";
import { ElButton } from "element-plus";
const FtButton = defineComponent({
  name: "FtButton",
  components: { ElButton },
  setup(props, { slots }) {
    return () => {
      return <el-button>{{ ...slots }}</el-button>;
    };
  },
});
export default FtButton;
