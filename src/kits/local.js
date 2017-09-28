export function setlocal(localObj) {
    var data = localStorage.getItem("goodsitem") || "[]";
    var arr = JSON.parse(data);
    if (arr.length === 0) {
        arr.push(localObj);
    }
    arr.forEach(function (e, i, a) {
        if (e.id === localObj.id) {
            e.count += localObj.count;
        } else {
            arr.push(localObj);
        }
    })
    localStorage.setItem("goodsitem", JSON.stringify(arr));
}

export function getlocal() {
    var data = localStorage.getItem("goodsitem");
}