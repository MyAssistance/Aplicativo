"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var WelcomeScreenComponent = (function () {
    function WelcomeScreenComponent(router, page) {
        var _this = this;
        this.router = router;
        page.actionBarHidden = true;
        var timer = require("timer");
        var id = timer.setTimeout(function () {
            _this.router.navigate(["/login"]);
        }, 1500);
    }
    return WelcomeScreenComponent;
}());
WelcomeScreenComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./pages/welcome-screen/welcome-screen.html",
        styleUrls: ["pages/welcome-screen/welcome-screen-common.css", "pages/welcome-screen/welcome-screen.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], WelcomeScreenComponent);
exports.WelcomeScreenComponent = WelcomeScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS1zY3JlZW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VsY29tZS1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFPekMsSUFBYSxzQkFBc0I7SUFFbEMsZ0NBQW9CLE1BQWMsRUFBRSxJQUFVO1FBQTlDLGlCQVFJO1FBUmdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUViLENBQUM7SUFHTCw2QkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksc0JBQXNCO0lBTGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsNENBQTRDO1FBQ3ZELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLHlDQUF5QyxDQUFDO0tBQzFHLENBQUM7cUNBRzJCLGVBQU0sRUFBUSxXQUFJO0dBRmxDLHNCQUFzQixDQWFsQztBQWJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy93ZWxjb21lLXNjcmVlbi93ZWxjb21lLXNjcmVlbi5odG1sXCIsXHJcbiAgXHRzdHlsZVVybHM6IFtcInBhZ2VzL3dlbGNvbWUtc2NyZWVuL3dlbGNvbWUtc2NyZWVuLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy93ZWxjb21lLXNjcmVlbi93ZWxjb21lLXNjcmVlbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlbGNvbWVTY3JlZW5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHZhciB0aW1lciA9IHJlcXVpcmUoXCJ0aW1lclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSB0aW1lci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==