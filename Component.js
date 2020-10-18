sap.ui.define(["sap/ui/core/UIComponent",
        'sap/ui/model/resource/ResourceModel',
        'sap/ui/model/odata/ODataModel',
    ],

    function (UIComponent, ResourceModel, ODataModel) {
        "use strict";

        var Component = UIComponent.extend("app.Component", {

            metadata: {
                rootView: "app/views/App",
                routing: {
                    config: {
                        routerClass: "sap.m.routing.Router",
                        viewPath: "app.views",
                        controlId: "app",
                        controlAggregation: "pages",
                        viewType: "XML",
                        "async" : "true",
                        "clearTarget" : "true"
                    },
                    routes: [
                        {
                            name: "index",
                            // empty hash - normally the start page
                            pattern: "index",
                            target: "index"
                        },

                        {
                            name: "Table",
                            pattern: "Table",
                            target: "Table"
                        },

                        {
                            name: "Login",
                            pattern: "Login",
                            target: "Login"
                        }

                    ],
                    targets: {
                        "index": {
                            viewName: "App",
                        },
                        "Table": {
                            viewName: "Table",
                        },
                        "Login" :{
                            viewName : "Login",
                        }
                    }
                }
            },

            init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                this._router = this.getRouter();
                this._router.initialize();

                // Parse the current url and display the targets of the route that matches the hash
                this.getRouter().initialize();
            },


        });

        return Component;
    }, true);