"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var SettingsComponent = (function () {
    function SettingsComponent(router, page, fonticon) {
        this.router = router;
        this.fonticon = fonticon;
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
    __metadata("design:paramtypes", [router_1.Router, page_1.Page, nativescript_ngx_fonticon_1.TNSFontIconService])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QiwrQ0FBOEM7QUFDOUMsMENBQXlDO0FBRXpDLHVFQUErRDtBQU8vRCxJQUFhLGlCQUFpQjtJQUk3QiwyQkFBb0IsTUFBYyxFQUFFLElBQVUsRUFBVSxRQUE0QjtRQUFoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXNCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUU3QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSw2QkFBNkIsQ0FBQztLQUNsRixDQUFDO3FDQUsyQixlQUFNLEVBQVEsV0FBSSxFQUFvQiw4Q0FBa0I7R0FKeEUsaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5odG1sXCIsXHJcbiAgXHRzdHlsZVVybHM6IFtcInBhZ2VzL3NldHRpbmdzL3NldHRpbmdzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIHBhZ2U6IFBhZ2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxufSJdfQ==