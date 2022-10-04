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
    let len = 0;
    let cur = head;
    while (cur) {
        cur = cur.next;
        len += 1;
    }
    k = k && k % len;
    if (k === 0 || len === 0) return head;

    let idx = 0;
    cur = head;
    let nextHead = null;
    while (cur) {
        const nextCur = cur.next;
        if (idx === len - k -1) {
            cur.next = null;
        }

        if (idx === len - k) {
            nextHead = cur;
        }

        if (idx === len - 1) {
            cur.next = head;
        }

        idx += 1;
        cur = nextCur;
    }

    return nextHead;
};
