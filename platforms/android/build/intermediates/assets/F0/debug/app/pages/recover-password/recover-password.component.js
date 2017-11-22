"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var RecoverPasswordComponent = (function () {
    function RecoverPasswordComponent(router, page) {
        this.router = router;
        page.actionBarHidden = true;
        this.page = page;
        this.user = new user_1.User();
    }
    RecoverPasswordComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        //this.page.backgroundImage = "res://bg_login";
    };
    RecoverPasswordComponent.prototype.submit = function () {
        this.router.navigate(["/"]);
    };
    return RecoverPasswordComponent;
}());
RecoverPasswordComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./pages/recover-password/recover-password.html",
        styleUrls: ["pages/recover-password/recover-password-common.css", "pages/recover-password/recover-password.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], RecoverPasswordComponent);
exports.RecoverPasswordComponent = RecoverPasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFDN0IsK0NBQThDO0FBQzlDLDBDQUF5QztBQU96QyxJQUFhLHdCQUF3QjtJQUlwQyxrQ0FBb0IsTUFBYyxFQUFFLElBQVU7UUFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVILDJDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsK0NBQStDO0lBQ2pELENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksd0JBQXdCO0lBTHBDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsZ0RBQWdEO1FBQzNELFNBQVMsRUFBRSxDQUFDLG9EQUFvRCxFQUFFLDZDQUE2QyxDQUFDO0tBQ2xILENBQUM7cUNBSzJCLGVBQU0sRUFBUSxXQUFJO0dBSmxDLHdCQUF3QixDQWtCcEM7QUFsQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQuaHRtbFwiLFxyXG4gIFx0c3R5bGVVcmxzOiBbXCJwYWdlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY292ZXJQYXNzd29yZENvbXBvbmVudCB7XHJcblx0dXNlcjogVXNlcjtcclxuICBwYWdlOiBQYWdlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgLy90aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgfVxyXG59Il19