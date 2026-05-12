import ManagedObject from "sap/ui/base/ManagedObject";
import Controller from "sap/ui/core/mvc/Controller";

// "sap/ui/core/mvc/Controller",
// 	"sap/ui/core/UIComponent",
// 	"sap/m/library",
// 	"sap/m/Dialog",
// 	"sap/m/Text",
// 	"sap/m/Button",
// 	"sap/ui/core/routing/History",
// 	"sap/m/MessageBox",
// 	"sap/ui/core/library"



/**
 * @namespace com.br.fiori.teaminsightplatform.utils
 */
export default class BaseController extends Controller {

    getRouter( event: string): any {

    // In your controller
    // const oRouter = this.getOwnerComponent().getRouter();
    // const sHash = oRouter.getHashChanger().getHash();
    // const oRouteInfo = oRouter.getRouteInfoByHash(sHash);

    // if (oRouteInfo) {
    //     const sRouteName = oRouteInfo.name; // Get the name
    //     const oRoute = oRouter.getRoute(sRouteName); // Get the route object
    //     console.log(sRouteName);
    // }

        return this.getOwnerComponent().getRouter(this).getRoute(event);
    }
    onInit(): void {
        console.log("BaseController initialized"); 
    }
}
