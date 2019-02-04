window.onload = () => {
    MODULE.init();
};

var MODULE = (function ($, window, document) {

    if (!$) return;

    var SELF = {
        init: () => {
            $(".modal").modal();
            //$(".dropdown-buttom").dropdown();

            $('.dropdown-trigger').dropdown({
                inDuration: 300,
                outDuration: 225,
                hover: true, // Activate on hover
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'right' // Displays dropdown with edge aligned to the left of button
              }
            );
            
            SELF.actions.bind();

            SELF.actions.showContent("HOME");
        },
        actions: {
            bind: () => {
                $(".menu").click((event) => {
                    SELF.actions.showContent(event.target.id);
                });
            },
            showContent(page) {
                let color = this.getRandomColor();

                const html = `
                    <div class="row">
                        <div class="col s12 m12">
                            <div class="card" style="background-color: ${color}">
                                <div class="card-content">
                                    <span class="card-title">${page} page</span>

                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                document.querySelector("main").innerHTML = html;
            },
            getRandomColor() {
                var color = Math.floor(0x1000000 * Math.random()).toString(16);
                return "#" + ("000000" + color).slice(-6);
            },
            getBase64Image(img) {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL("image/png");

                return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            }
        }
    };

    return {
        init: SELF.init
    };

})(jQuery, window, document);

