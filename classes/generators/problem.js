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
  getMembers() {
    const family = [];
    let node = this.family;
    while (node) {
      family.push(node.name);
      node = node.child;
    }
    return family;
  }
}

const family = new FamilyTree();
family.getMembers();
// ['Doris', 'Martha', 'Dyan', 'Bea'];

export default FamilyTree;
