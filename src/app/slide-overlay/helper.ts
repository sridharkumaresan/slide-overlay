export class Helper {
  public static zindex: number = 1000;

  public static addClass(element: any, className: string): void {
    if (element.classList)
      element.classList.add(className);
    else
      element.className += ' ' + className;
  }

  public static addMultipleClasses(element: any, className: string): void {
    if (element.classList) {
      let styles: string[] = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.classList.add(styles[i]);
      }

    }
    else {
      let styles: string[] = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.className += ' ' + styles[i];
      }
    }
  }

  public static removeClass(element: any, className: string): void {
    if (element.classList)
      element.classList.remove(className);
    else
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  public static appendChild(element: any, target: any) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw 'Cannot append ' + target + ' to ' + element;
  }

  public static isElement(obj: any) {
    return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
      obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string"
    );
  }
}
