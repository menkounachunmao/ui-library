import { ComponentInternalInstance, createVNode, render } from "vue";
import { IMessageProps } from ".";
import MessageDialogConstructor from "./MessageDialog.vue";
import { merge } from "lodash";
// 消息弹框实例
let instance: ComponentInternalInstance;

const genContainer = () => {
  return document.createElement("div");
};

const initInstance = (props: any, container: HTMLElement) => {
  const vnode = createVNode(MessageDialogConstructor, props);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);
  return vnode.component;
};

const showMessage = (options: IMessageProps) => {
  // 如果实例已经创建，直接修改 props
  if (instance) {
    merge(instance.props, options);
    instance.exposed?.showDialog();
    return;
  }
  const container = genContainer();
  instance = initInstance(options, container)!;
};

function MessageBox(options: IMessageProps): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const vm = showMessage({
      ...options,
      callback: (result: boolean) => {
        resolve(result);
      },
    });
  });
}
export default MessageBox;
