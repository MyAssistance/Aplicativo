"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_angular_1 = require("nativescript-angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': './assets/font-awesome.css',
            })
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigatableComponents),
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLHVFQUE4RDtBQUM5RCw2REFBdUQ7QUFFdkQsaURBQStDO0FBQy9DLDZDQUE4RDtBQUU5RCxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFtQjdFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQWpCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1lBQ3hDLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDeEIsSUFBSSxFQUFFLDJCQUEyQjthQUNsQyxDQUFDO1NBQ0g7UUFDRCxZQUFZO1lBQ1YsNEJBQVk7aUJBQ1QsbUNBQXFCLENBQ3pCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcclxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcycsXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==