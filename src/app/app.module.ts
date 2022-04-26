import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './common/config/config.service';
import { WordTypeSelectComponent } from './features/word-types/word-type-select/word-type-select.component';
import { WordListComponent } from './features/words/word-list/word-list.component';
import { WordDisplayComponent } from './features/words/word-display/word-display.component';
import { FilterPipe } from './features/filter.pipe';

export function initiliaseConfig(configService: ConfigService): Function {
    return () => configService.load();
}
@NgModule({
  declarations: [
    AppComponent,
    WordTypeSelectComponent,
    WordListComponent,
    WordDisplayComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initiliaseConfig, deps: [ConfigService], 'multi': true },
  ],
  bootstrap: [
    AppComponent,
    WordTypeSelectComponent
  ]
})
export class AppModule { }
