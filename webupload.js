var object;

function ajax(file) {
    if (file != undefined) {
        var form = new FormData();
        form.append("file", file);
        $.ajax({
            type: "POST",
            url: "https://kurwa.club/",
            contentType: false,
            processData: false,
            data: form,
            xhr: function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener("progress", function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position;
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                            if (percent == 100) {
                                text = "processing..";
                            } else {
                                text = "uploading.. (" + percent + "%)";
                            }
                        }
                        document.getElementById("progress").innerHTML = text;
                    }, true);
                }
                return xhr;
            },
            success: function(response) {
                $("#select").val("");
                location.reload();
            }
        });
    }
}

function upload(file) {
    file.preventDefault();
    object = file.dataTransfer.files[0];
    ajax(object);
}

function explorer() {
    document.getElementById("select").click();
    document.getElementById("select").onchange = function() {
        object = document.getElementById("select").files[0];
        ajax(object);
    };
}
window.addEventListener("paste", function(e) {
    const item = e.clipboardData || window.clipboardData;
    const file = item.files[0];
    ajax(file);
});