import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {BreakpointObserver, MediaMatcher} from "@angular/cdk/layout";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {map} from "rxjs/operators";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isDesktop: boolean = true;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver) {

    iconRegistry
      .addSvgIcon('admin', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/admin.svg'))
      .addSvgIcon('alarm', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/alarm.svg'))
      .addSvgIcon('alarms', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/alarms.svg'))
      .addSvgIcon('analysis', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/analysis.svg'))
      .addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/close.svg'))
      .addSvgIcon('company', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/company.svg'))
      .addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/dashboard.svg'))
      .addSvgIcon('electricity', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/electricity.svg'))
      .addSvgIcon('heating', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/heating.svg'))
      .addSvgIcon('housing-block', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/housing-block.svg'))
      .addSvgIcon('housing-department', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/housing-department.svg'))
      .addSvgIcon('housing-door', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/housing-door.svg'))
      .addSvgIcon('info', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/info.svg'))
      .addSvgIcon('installation', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/installation.svg'))
      .addSvgIcon('installations', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/installations.svg'))
      .addSvgIcon('listing', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/listing.svg'))
      .addSvgIcon('map', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/map.svg'))
      .addSvgIcon('measurements', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/measurements.svg'))
      .addSvgIcon('reports', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/reports.svg'))
      .addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/search.svg'))
      .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/settings.svg'))
      .addSvgIcon('water', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/water.svg'))
      .addSvgIcon('widget-close', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/widget-close.svg'))
      .addSvgIcon('widget-list', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/widget-list.svg'))
      .addSvgIcon('widget-move', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/widget-move.svg'))
      .addSvgIcon('widget-settings', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/widget-settings.svg'))
      .addSvgIcon('company-28px', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/company-28px.svg'));
  }


  ngOnInit(): void {
    this.breakpointObserver
      .observe("(min-width: 900px)")
      .pipe(
        untilDestroyed(this),
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.isDesktop = matches;
        console.log("Matches", matches, this.isDesktop);
      });
  }


  // Do not delete
  ngOnDestroy() {

  }

  navigate() {

  }

}
