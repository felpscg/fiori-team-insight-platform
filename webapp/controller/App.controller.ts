import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import UIComponent from "sap/ui/core/UIComponent";
import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
/**
 * @namespace com.br.fiori.teaminsightplatform.controller
 */

BaseController.extend("com.br.fiori.teaminsightplatform.controller.App", {
    onInit: function () {
        console.log("App controller initialized");
        console.log(this);
        // this.getRouter("main").attachPatternMatched(this._onObjectMatched, this);
        
        try {
            this.getRouter("RouteMain").attachPatternMatched(this._onRouteMatched, this);
        } catch (error) {
        }
        
    },


    /*eslint-disable @typescript-eslint/no-empty-function*/

    _onObjectMatched(): void {
        console.log("Route 'app' matched");
    }   
});