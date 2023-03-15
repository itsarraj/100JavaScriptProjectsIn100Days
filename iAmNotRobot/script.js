const a = (text) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(text);
        });
    });
};

(async () => {
    let text = await a("hi");
    console.log(text);
    text = await a("baby");
    console.log(text);
})();
