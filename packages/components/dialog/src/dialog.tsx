import { defineComponent } from "vue";
import { ElDialog } from "element-plus";
export default defineComponent({
  name: "FtDialog",
  props: {
    closeOnClickModal: Boolean,
    title: {
      type: String,
      default: " ",
    },
  },
  components: { ElDialog },
  setup(props, { slots }) {
    return () => {
      return (
        <el-dialog
          close-on-click-modal={props.closeOnClickModal}
          title={props.title}
        >
          {{ ...slots }}
        </el-dialog>
      );
    };
  },
});
