"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//假定这个num,来自一个,明确的接口
const nums = [100, 110, 120, 119, 112];
const res = nums.find(i => i > 0);
/**我们一目了然的知道那个数大于零,知道数组值得类型,
 * 但是typescript不知道,
 * 它只知道这个地方的返回值是const res: number | undefined,
 * 有可能找不到,此时我们就不能把这个值当成一个数字去使用,
 * 这种情况下我们就可以去断言这个数字是number类型的,
 * 断言的 意思是明确告诉typescript,
 * 相信我,这个值明确是number类型的
 * */
// const square = res*res
// 断言的两种方式
// 1.使用as关键词,此时我们的编辑器就能明确知道它是一个数字了
const nums1 = res;
// 2.在变量的前面使用<>去断言,但是由于与jsx的标签有冲突不建议使用
const nums2 = res;
//# sourceMappingURL=11-type-assertion.js.map