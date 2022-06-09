function copy(that) {
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value = that.textContent;
    input.select();
    document.execCommand("copy", false);
    input.remove();
}

function copyHidden(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}