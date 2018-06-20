let observer = {
    arr: [],
    $on(event, cb) {
        this.arr[event] = [cb]
    },
    $emit(event, ...msg) {
        this.arr[event].map(i => {
            i(...msg)
        })
    },
    $destory(event) {
        delete this.arr[event]
    }
}
export default observer;
// observer.$on("send", function(msg, msg1, msg2) {
//     console.log(msg, msg1, msg2)
// })
// observer.$emit("send", 123, 345, 567)
// observer.$destory("send")