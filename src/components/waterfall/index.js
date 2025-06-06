import Waterfall from "./Waterfall.jsx";
import WaterfallSlot from "./WaterfallSlot.jsx";

// 具名导出（用户通过 import { Waterfall } 使用）
export { Waterfall, WaterfallSlot };

// 默认导出（用户通过 import Waterfall from "waterfall-v3" 使用）
export default {
  Waterfall: Waterfall,
  WaterfallSlot: WaterfallSlot,
};
