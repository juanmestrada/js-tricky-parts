function curriedAdd(total) {
    if (!total) return 0;

    return function add(num) {
        // no arguments passed
        if (!num) return total;

        // update total
        total += num;

        return add;
    };
}

module.exports = { curriedAdd };
