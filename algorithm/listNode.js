function ListNode(value = '') {
  this.value = value;
  this.next = null;
}

function mergeTwoLists(l1, l2) {
  const head = new ListNode();
  let cur = head;
  while (l1 && l2) {
    if (l1.value <= l2.value) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }

    cur = cur.next;
  }

  cur.next = l1 === null ? l2 : l1;

  return head.next;
}

const l1 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 5,
      next: null,
    },
  },
};

const l2 = {
  value: 2,
  next: {
    value: 4,
    next: {
      value: 6,
      next: null,
    },
  },
};
