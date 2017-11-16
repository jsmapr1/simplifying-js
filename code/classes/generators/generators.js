// START:final
class FamilyTree {
  constructor() {
    this.family = {
      name: 'Doris',
      child: {
        name: 'Martha',
        child: {
          name: 'Dyan',
          child: {
            name: 'Bea',
          },
        },
      },
    };
  }
  * [Symbol.iterator]() {
    let node = this.family;
    while (node) {
      yield node.name;
      node = node.child;
    }
  }
}

const family = new FamilyTree();
[...family];
// ['Doris', 'Martha', 'Dyan', 'Bea'];
// END:final

export default FamilyTree;
