export function setlocal(localObj) {
    var data = localStorage.getItem("goodsitem") || "{}";
    var obj = JSON.parse(data);
    for (var k in localObj) {
        if (!obj[k]) {
            obj[k] = localObj[k];
        } else {
            obj[k] += localObj[k];
        }
    }
    localStorage.setItem("goodsitem", JSON.stringify(obj));
}

export function getlocal() {
    var data = localStorage.getItem("goodsitem");
}

export function concatid(obj) {
    var idarr = "";
    for (var k in obj) {
        idarr += k + ",";
    }
    idarr = idarr.substring(0, idarr.length - 1);
    return idarr;
}