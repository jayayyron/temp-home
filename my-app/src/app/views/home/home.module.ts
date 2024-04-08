import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }


/*import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./redirect/page-not-found/page-not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        MaterialModule,
        RouterModule,
    ],
    exports: [
        PageNotFoundComponent
    ],
    declarations: [
        PageNotFoundComponent
    ]
})
export class CoreModule {
    /*static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                //GLOBAL_ERROR_HANDLER_PROVIDER,
                //AUTH_INTERCEPTOR_PROVIDER,
                //APP_INITIALIZER_PROVIDER
            ]
        }
    }
}*/