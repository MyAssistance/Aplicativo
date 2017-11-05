import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { RecoverPasswordComponent } from "./pages/recover-password/recover-password.component";
import { WelcomeScreenComponent } from "./pages/welcome-screen/welcome-screen.component";

export const routes = [
  { path: "login", component: LoginComponent },
  { path: "recoverPassword", component: RecoverPasswordComponent },
  { path: "list", component: ListComponent },
  { path: "", component: WelcomeScreenComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  RecoverPasswordComponent,
  WelcomeScreenComponent
];