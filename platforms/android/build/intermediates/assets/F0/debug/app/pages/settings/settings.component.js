"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var SettingsComponent = (function () {
    function SettingsComponent(router, page) {
        this.router = router;
        this.page = page;
        this.user = new user_1.User();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./pages/settings/settings.html",
        styleUrls: ["pages/settings/settings-common.css", "pages/settings/settings.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QiwrQ0FBOEM7QUFDOUMsMENBQXlDO0FBT3pDLElBQWEsaUJBQWlCO0lBSTdCLDJCQUFvQixNQUFjLEVBQUUsSUFBVTtRQUExQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUU3QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSw2QkFBNkIsQ0FBQztLQUNsRixDQUFDO3FDQUsyQixlQUFNLEVBQVEsV0FBSTtHQUpsQyxpQkFBaUIsQ0FjN0I7QUFkWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuaHRtbFwiLFxyXG4gIFx0c3R5bGVVcmxzOiBbXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy1jb21tb24uY3NzXCIsIFwicGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXNlcjogVXNlcjtcclxuICBwYWdlOiBQYWdlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG59Il19