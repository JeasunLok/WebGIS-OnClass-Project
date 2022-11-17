// 定义Menu事件相应函数的模块
define(["app/dialogs/LoadMapService"], function (LoadMapService) {
    return {
        handle: function() {
            $("#load").click(function() {
                var loadMapService = new LoadMapService("LoadMapServiceModal");
                loadMapService.create();
                loadMapService.show();
            });
        }
    }
});

