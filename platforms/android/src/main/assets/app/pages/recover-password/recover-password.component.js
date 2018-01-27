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
        this.page.backgroundImage = "res://bg_login";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFDN0IsK0NBQThDO0FBQzlDLDBDQUF5QztBQU96QyxJQUFhLHdCQUF3QjtJQUlwQyxrQ0FBb0IsTUFBYyxFQUFFLElBQVU7UUFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVILDJDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSx3QkFBd0I7SUFMcEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ25CLFdBQVcsRUFBRSxnREFBZ0Q7UUFDM0QsU0FBUyxFQUFFLENBQUMsb0RBQW9ELEVBQUUsNkNBQTZDLENBQUM7S0FDbEgsQ0FBQztxQ0FLMkIsZUFBTSxFQUFRLFdBQUk7R0FKbEMsd0JBQXdCLENBa0JwQztBQWxCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5odG1sXCIsXHJcbiAgXHRzdHlsZVVybHM6IFtcInBhZ2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC1jb21tb24uY3NzXCIsIFwicGFnZXMvcmVjb3Zlci1wYXNzd29yZC9yZWNvdmVyLXBhc3N3b3JkLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjb3ZlclBhc3N3b3JkQ29tcG9uZW50IHtcclxuXHR1c2VyOiBVc2VyO1xyXG4gIHBhZ2U6IFBhZ2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZVxyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgfVxyXG59Il19