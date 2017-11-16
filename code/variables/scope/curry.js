/* eslint-disable  vars-on-top, func-names, no-loop-func,
no-param-reassign, no-unused-vars, no-var */

// # START:scopeSolution
function addClick(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].onClick = (function (i) {
      return function () {
        return i;
      };
    }(i));
  }
  return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();
// # END:scopeSolution

export { addClick };
