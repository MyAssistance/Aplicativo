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
        this.user = new user_1.User();
    }
    RecoverPasswordComponent.prototype.submit = function () {
        alert("Email enviado paraa: " + this.user.email);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFDN0IsK0NBQThDO0FBQzlDLDBDQUF5QztBQU96QyxJQUFhLHdCQUF3QjtJQUdwQyxrQ0FBb0IsTUFBYyxFQUFFLElBQVU7UUFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVILHlDQUFNLEdBQU47UUFDRSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSx3QkFBd0I7SUFMcEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ25CLFdBQVcsRUFBRSxnREFBZ0Q7UUFDM0QsU0FBUyxFQUFFLENBQUMsb0RBQW9ELEVBQUUsNkNBQTZDLENBQUM7S0FDbEgsQ0FBQztxQ0FJMkIsZUFBTSxFQUFRLFdBQUk7R0FIbEMsd0JBQXdCLENBWXBDO0FBWlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQuaHRtbFwiLFxyXG4gIFx0c3R5bGVVcmxzOiBbXCJwYWdlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY292ZXJQYXNzd29yZENvbXBvbmVudCB7XHJcblx0dXNlcjogVXNlcjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBhbGVydChcIkVtYWlsIGVudmlhZG8gcGFyYWE6IFwiICsgdGhpcy51c2VyLmVtYWlsKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xyXG4gIH1cclxufSJdfQ==