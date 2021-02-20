import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// gráficas
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
