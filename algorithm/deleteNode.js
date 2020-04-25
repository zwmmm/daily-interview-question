function ListNode(value = '') {
  this.value = value;
  this.next = null;
}

const l = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

function deleteNode(node) {
  while (node && node.next) {
    if (node.value === node.next.value) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
}

deleteNode(l);
console.log(JSON.stringify(l));
