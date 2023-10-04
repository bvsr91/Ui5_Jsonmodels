sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.act.testprjjson.controller.Home", {
            onInit: function () {
                // set data model on view
                let oData = {};
                let oModel = new JSONModel();
                this.getView().setModel(oModel, "oUserModel");
            },
            onPressSave: function (oEvent) {
                let oBtn = oEvent.getSource(),
                    sBtnText = oBtn.getText(),
                    oBtnEdit = this.getView().byId("idBtnEdit"),
                    oBtnSave = this.getView().byId("idBtnSave"),
                    oBtnDisplay = this.getView().byId("idBtnDisplay"),
                    oVboxEdit = this.getView().byId("idVboxEdit"),
                    oVboxDisplay = this.getView().byId("idVboxDisplay");
                if (sBtnText === "Edit") {
                    oBtnSave.setVisible(true);
                    oBtnDisplay.setVisible(true);
                    oBtnEdit.setVisible(false);
                    oVboxEdit.setVisible(true);
                    oVboxDisplay.setVisible(false);
                } else {
                    oBtnSave.setVisible(false);
                    oBtnDisplay.setVisible(false);
                    oBtnEdit.setVisible(true);
                    oVboxEdit.setVisible(false);
                    oVboxDisplay.setVisible(true);
                }
            }
        });
    });
