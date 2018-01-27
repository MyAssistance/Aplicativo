import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { registerElement } from "nativescript-angular";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);
registerElement("Ripple", () => require("nativescript-ripple").Ripple);

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    TNSFontIconModule.forRoot({
      'fa': './assets/font-awesome.css',
    })
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}