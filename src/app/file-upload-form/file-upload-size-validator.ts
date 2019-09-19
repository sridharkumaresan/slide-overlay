import { FormControl } from '@angular/forms';

export function requiredFileSize( maxSize: number ) {
  return function ( control: FormControl ) {
    const file = control.value;
    if ( file ) {
      const size = file.size/1024/1024;
      console.log('Size ', size, maxSize);
      if ( size > maxSize) {
        return {
          requiredFileSize: true
        };
      }
      return null;
    }
    return null;
  };
}
