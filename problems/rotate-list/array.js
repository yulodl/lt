/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const arr = [];
    let cur = head;
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }
    const len = arr.length;
    k = k && (k % len);
    if (k === 0 || len === 0) return head;

    const nextHead = arr[len - k];
    arr[len - k - 1].next = null;
    arr[len - 1].next = head;

    return nextHead;
};
