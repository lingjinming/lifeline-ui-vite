import { ExtractPropTypes, PropType } from "vue-demi";

export interface ILTabs {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}

export const props = {
  tabs: {
    default: [{ label: "default label" }],
    type: Array as () => PropType<ILTabs>
  },
  activeName: {
    default: "",
    type: String,
  }
}

export type LTabsProps = ExtractPropTypes<typeof props>;
