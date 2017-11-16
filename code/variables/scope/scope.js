/* eslint-disable func-names, no-param-reassign */

// # START:scopeLet
function addClick(items) {
  for (let i = 0; i < items.length; i++) { // <label id="scope.let"/>
    items[i].onClick = function () { return i; };
  }
  return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();
// # END:scopeLet

export { addClick };
