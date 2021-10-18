import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import  html2canvas from "html2canvas";

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  head = [['Fecha Asignación', 'Cantidad Asignada', 'Proveedor']]

  constructor() { }

  createPDF(data:any[0]){
    
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPDF.pdf');
    })

  }
}
