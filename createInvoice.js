const fs = require("fs");
const PDFDocument = require("pdfkit");

//const width = doc.widthOfString('test');
//const height = doc.heightOfString('test', { width });

function maxlen(doc,list)
{
var i=0;
var maxlen=0;
var width=125;
for(i=0;i<list.length;i++)
{
  if(doc.heightOfString(list[i])>maxlen)
  {
    maxlen=doc.heightOfString(list[i],{width});
  }
}
return maxlen;
}


function createInvoice(invoice, path) 
{
let doc = new PDFDocument({ size: "A4", margin: 50 });
generateCustomerInformation(doc, invoice);
generateInvoiceTable(doc, invoice);
doc.end();
doc.pipe(fs.createWriteStream(path));
}

function generateCustomerInformation(doc, invoice) 
{
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Header Deatils", 50, 100);

  generateHr(doc, 125);
  const customerInformationTop = 130;
  generateTableRow
  (
    doc,
    customerInformationTop,
    "Name",
    "Address",
    "city",
    "state",
    "Country"
  );
  callVr(doc,customerInformationTop-5,25);
  generateHr(doc, customerInformationTop + 20);

  generateTableRow
  (
    doc,
    customerInformationTop+25,
    invoice.shipping.name,
    invoice.shipping.address,
    invoice.shipping.city,
    invoice.shipping.state,
    invoice.shipping.country
  );

callVr(doc,customerInformationTop+20,20);
generateHr(doc, customerInformationTop + 40);


}




function generateInvoiceTable(doc, invoice) 
{
  let i;
  const invoiceTableTop = 330;

  doc.font("Helvetica-Bold");



  generateHr(doc, invoiceTableTop-5);

  generateTableRow
  (
    doc,
    invoiceTableTop,
    "Item",
    "Description",
    "Unit Cost",
    "Quantity",
    "Line Total"
  );



  callVr(doc,invoiceTableTop-5,30);

  generateHr(doc, invoiceTableTop + 25);


  doc.font("Helvetica");

  var height=30;
  var position=invoiceTableTop;

  

  for (i = 0; i < invoice.items.length; i++) 
  {

    const item = invoice.items[i];

    var list=[item.item,
      item.description,
      item.amount,
      item.quantity,
      item.amount];

      var len=maxlen(doc,list);
     console.log(len);

   


position=position+height;

   
  generateTableRow
    (
      doc,
      position,
      item.item,
      item.description,
      item.amount,
      item.quantity,
      item.amount
    );

    
generateHr(doc, position + len);
callVr(doc, position-5,len+5);
height=len+4;

}


  doc.font("Helvetica");

}

/*

doc.fontSize(8);
doc.text(`This text is left aligned. ${lorem}`, {
  width: 410,
  align: 'left'
}
);

*/

function generateTableRow
(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) 

{
  doc
    .fontSize(10)
    .text(item, 50, y, {width:96,align: 'left'})
    .text(description, 150, y, {width:126,align: 'left'})
    .text(unitCost, 280, y, {width:126,align: 'left'})
    .text(quantity, 370, y, {width:86,align: 'left'})
    .text(lineTotal, 460, y, {width:86,align: 'left'});
    
}

function generateHr(doc, y) 
{
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(48, y)
    .lineTo(525, y)
    .stroke();
}

function callVr(doc,y,z)
{
generateVr(doc,48,y,z);
generateVr(doc,145,y,z);
generateVr(doc,275,y,z);
generateVr(doc,365,y,z);
generateVr(doc,455,y,z);
generateVr(doc,525,y,z);
}

function generateVr(doc, x,y,z) 
{
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(x, y)
    .lineTo(x, y+z)
    .stroke();
}



function formatCurrency(cents) 
{
  return "$" + (cents / 100).toFixed(2);
}


function formatDate(date) 
{
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}


module.exports = 
{
  createInvoice
};
