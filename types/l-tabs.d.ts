// // 排列方向-枚举类型
// enum DirectionEnum {
//     horizontal = "HORIZONTAL",
//     vertical = "VERTICAL",
//   }

//   // 定位信息
//   type Position = {
//     top: string | number;
//     left: string | number;
//     zIndex: number;
//     width?: string | number;
//     height?: string | number;
//   };

//   // 详细配置信息
//   type DataNumberOptionsType = {
//     animate?: boolean;
//     thousandsCharacter?: boolean;
//     direction: DirectionEnum;
//     label: string;
//     suffix: string;
//   };

//   // 组件最终的数据类型
//   interface DataNumberType {
//     data: string | number;
//     position?: Position;
//     options?: DataNumberOptionsType;
//   }
export interface ILTabs {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}
