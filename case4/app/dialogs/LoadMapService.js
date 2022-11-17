// 定义LoadMapService对象，并放在模块中，动态生成一个LoadMapService的网页对话框(dialog).
define(["dojo/_base/declare"], function(declare) {
    return declare("LoadMapService", null,  {
        constructor : function(id) {
            this._id = id;
            this._viewModel = null;
        },

        getID: function() {
            return this._id;
        },

        getViewModel: function() {
            return this._viewModel;
        },

        show: function() {
            this._viewModel.show();        
        },

        hide: function() {
            this._viewModel.hide();
        },

        remove: function() {
            this._viewModel.dispose();
            $("#" + this._id).remove();
        },

        create: function() {
            createUI(this._id);
            this._viewModel = new bootstrap.Modal(document.getElementById(this._id));
            return this._viewModel;

            // 利用jQuery动态创建dom元素，完成modal对话框
            function createUI(id) {
                var body = $('body');
                var div = $('<div class="modal" ' + 'id="' + id + '"' + '></div>');
    
                var div1 = $('\
                <div class="modal-dialog modal-dialog-centered">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <h5 class="modal-title">装载地图服务</h5>\
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\
                        </div>\
                        <div class="modal-body">\
                            <form>\
                                <div class="mb-2 mt-2">\
                                    <label for="可选服务" class="form-label">已有服务:</label>\
                                    <select class="form-select" aria-label="" id="serviceOptional">\
                                        <option value="1">https://\
                                    </select>\
                                </div>\
                                <div class="mb-2">\
                                    <label class="form-label">地图服务URL:</label>\
                                    <input type="text" class="form-control" id="serviceUrl" placeholder="URL">\
                                </div>\
                                <div class="mb-2">\
                                    <label for="服务类型" class="form-label">服务类型:</label>\
                                    <select class="form-select" aria-label="" id="serviceSelect">\
                                        <option value="0" selected>选择地图服务类型</option>\
                                        <option value="1">MapImageLayer</option>\
                                        <option value="2">TileLayer</option>\
                                        <option value="3">VectorTileLayer</option>\
                                        <option value="4">ImageryLayer<</option>\
                                        <option value="5">ImageryTileLayer</option>\
                                        <option value="6">FeatureLayer</option>\
                                        <option value="7">KMLLayer</option>\
                                        <option value="8">WMSLayer</option>\
                                        <option value="9">WFSLayer</option>\
                                        <option value="10">OpenStreetMapLayer</option>\
                                        <option value="11">SceneLayer</option>\
                                    </select>\
                                </div>\
                                <button type="submit" class="btn btn-primary" id="load">装载</button>\
                            </form>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">关闭</button>\
                        </div>\
                    <\div>\
                </div>');
                div.append(div1);
                body.append(div);
            }
        }
    });
});
