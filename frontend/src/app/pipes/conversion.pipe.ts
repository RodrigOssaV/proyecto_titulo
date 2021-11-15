import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number): string {

    let ca = (value+'').split('');
    let caa = '';
    if(ca.length % 3 === 0){
        for(let i=0;i<ca.length; i++){
            (i%3==0 && i !== 0) ? (caa = caa.concat('.'), caa = caa.concat(ca[i])) : (caa = caa.concat(ca[i]));
        }
    }
    else{
        while(ca.length % 3 !== 0){
            ca.unshift('');
        }
        for(let i=0;i<ca.length; i++){
            (i%3==0 && i !== 0) ? (caa = caa.concat('.'), caa = caa.concat(ca[i])) : (caa = caa.concat(ca[i]));
        }
    }
    caa = '$'+caa;
    return caa;
  }

}
