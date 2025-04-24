import { importProvidersFrom, ModuleWithProviders, NgModule } from "@angular/core";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../../environments/environment.prod";

const STATES: any[] = [];

export function provideStateManagement() {
    return [
        importProvidersFrom(
            NgxsModule.forRoot([...STATES], {
                developmentMode: !environment.production,
            }),
            NgxsLoggerPluginModule.forRoot()
        ),
    ];
}