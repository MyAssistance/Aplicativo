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
    SettingsComponent.prototype.goList = function () {
        this.router.navigate(["/list"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QiwrQ0FBOEM7QUFDOUMsMENBQXlDO0FBRXpDLHVFQUErRDtBQU8vRCxJQUFhLGlCQUFpQjtJQUk3QiwyQkFBb0IsTUFBYyxFQUFFLElBQVUsRUFBVSxRQUE0QjtRQUFoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXNCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUc3QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUEsa0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSw2QkFBNkIsQ0FBQztLQUNsRixDQUFDO3FDQUsyQixlQUFNLEVBQVEsV0FBSSxFQUFvQiw4Q0FBa0I7R0FKeEUsaUJBQWlCLENBbUI3QjtBQW5CWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmh0bWxcIixcclxuICBcdHN0eWxlVXJsczogW1wicGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgcGFnZTogUGFnZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcGFnZTogUGFnZSwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG5cclxuICAgICAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAgZ29MaXN0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xyXG4gIH1cclxuXHJcbn0iXX0=