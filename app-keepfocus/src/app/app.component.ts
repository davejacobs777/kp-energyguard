import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          transform: "translate3d(0, 0, 0)"
        })
      ),
      state(
        "out",
        style({
          transform: "translate3d(-240px, 0, 0)"
        })
      ),
      transition("in => out", animate("4000ms ease-in-out")),
      transition("out => in", animate("4000ms ease-in-out"))
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app-keepfocus';

  menuState: string = "out";

  // For more than one observed breakpoint
  // isSmallerThan900: boolean;
  isLargerThan900: boolean;
  // isSmallerThan1200: boolean;
  // isLargerThan1200: boolean;

  isSidebarVisible = true;
  isRailVisible = false;
  isNoSidebarVisible = false;
  subscription: Subscription;

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
      .addSvgIcon('widget-settings', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/widget-settings.svg'));
  }


  ngOnInit(): void {
    // MEDIA QUERY MANAGER
    /*
    0 - 600px:      Phone
    600 - 900px:    Tablet portrait
    900 - 1200px:   Tablet landscape
    [1200 - 1800] is where our normal styles apply
    1800px + :      Big desktop

    $breakpoint arguement choices:
    - phone
    - tab-port
    - tab-land
    - big-desktop

    ORDER: Base + typography > general layout + grid > page layout > components

    1em = 16px
    */
    this.subscription = this.breakpointObserver
      .observe("(min-width: 900px)")
      .pipe(
        map(result => result.matches)
      )
      .subscribe(matches => {
        this.menuState = matches ? "in" : "out";
        // this.isDesktop = matches;
        console.log("Matches", matches, this.menuState);
      });
  }

  navigate() {

  }

  onToggleSidebar() {
    this.toggleMenuState();
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  private toggleMenuState() {
    this.menuState = this.menuState === "out" ? "in" : "out";
    console.log("Matches", this.menuState);
  }

  containerClasses() {
    return {
      'container--desk-sidebar': !(this.menuState === 'out'),
      'container--no-sidebar': this.menuState === 'out'
    }
  }

  // Do not delete
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
