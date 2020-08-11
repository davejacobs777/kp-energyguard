import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'kf-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  imageBackgroundStyle: SafeStyle | undefined;

  @Input() name: string = "Anonymous";
  @Input() title: string | undefined;
  @Input()
  set picture(value: string) {
    this.imageBackgroundStyle = value
      ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`)
      : undefined;
  }

  /**
   * Color of the area shown when no picture specified
   *
   */
  @Input() color: string | undefined;
  @Input() size: "small" | "medium" | "large" = "medium";

  @Input()
  get showName(): boolean {
    return this._showName;
  }
  set showName(val: boolean) {
    this._showName = coerceBooleanProperty(val);
  }
  private _showName: boolean = true;

  @Input()
  get showTitle(): boolean {
    return this._showTitle;
  }
  set showTitle(val: boolean) {
    this._showTitle = coerceBooleanProperty(val);
  }
  private _showTitle: boolean = true;

  @Input()
  get showInitials(): boolean {
    return this._showInitials;
  }
  set showInitials(val: boolean) {
    this._showInitials = coerceBooleanProperty(val);
  }
  private _showInitials: boolean = true;

  @Input()
  get onlyPicture(): boolean {
    return !this.showName && !this.showTitle;
  }
  set onlyPicture(val: boolean) {
    this.showName = this.showTitle = !coerceBooleanProperty(val);
  }

  @HostBinding("class.size-small")
  get small(): boolean {
    return this.size === "small";
  }

  @HostBinding("class.size-medium")
  get medium(): boolean {
    return this.size === "medium";
  }

  @HostBinding("class.size-large")
  get large(): boolean {
    return this.size === "large";
  }

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getInitials(): string {
    if (this.name) {
      const names = this.name.split(" ");

      return names
        .map((n) => n.charAt(0))
        .splice(0, 2)
        .join("")
        .toUpperCase();
    }

    return "";
  }

}
