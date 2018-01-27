"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var recover_password_component_1 = require("./pages/recover-password/recover-password.component");
var welcome_screen_component_1 = require("./pages/welcome-screen/welcome-screen.component");
var settings_component_1 = require("./pages/settings/settings.component");
exports.routes = [
    { path: "login", component: login_component_1.LoginComponent },
    { path: "recoverPassword", component: recover_password_component_1.RecoverPasswordComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "settings", component: settings_component_1.SettingsComponent },
    { path: "", component: welcome_screen_component_1.WelcomeScreenComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    recover_password_component_1.RecoverPasswordComponent,
    welcome_screen_component_1.WelcomeScreenComponent,
    settings_component_1.SettingsComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsa0dBQStGO0FBQy9GLDRGQUF5RjtBQUN6RiwwRUFBd0U7QUFFM0QsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO0NBQ2hELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYixxREFBd0I7SUFDeEIsaURBQXNCO0lBQ3RCLHNDQUFpQjtDQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVjb3ZlclBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcmVjb3Zlci1wYXNzd29yZC9yZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBXZWxjb21lU2NyZWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvd2VsY29tZS1zY3JlZW4vd2VsY29tZS1zY3JlZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcInJlY292ZXJQYXNzd29yZFwiLCBjb21wb25lbnQ6IFJlY292ZXJQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJsaXN0XCIsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFdlbGNvbWVTY3JlZW5Db21wb25lbnQgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICBMb2dpbkNvbXBvbmVudCxcclxuICBMaXN0Q29tcG9uZW50LFxyXG4gIFJlY292ZXJQYXNzd29yZENvbXBvbmVudCxcclxuICBXZWxjb21lU2NyZWVuQ29tcG9uZW50LFxyXG4gIFNldHRpbmdzQ29tcG9uZW50XHJcbl07Il19