import { Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { AngularComponent } from "./topics/angular/angular.component";

export const appRoutes: Routes = [
  { path: 'app-category', component: CategoryComponent },
  { path: 'app-angular', component: AngularComponent }
];

