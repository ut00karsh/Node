const { createInvoice } = require("./createInvoice.js");

const invoice = {

  shipping: {
    name: "John Doe",
    address: "1234 Main Street",
    city: "San Francisco",
    state: "CA",
    country: "US",
    postal_code: 94111
  },

  items: [
    
    {
      item: "TC 100",
      description: "Toner Cartridge extender",
      quantity: 2,
      amount: 6000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extendersdxdfafcsffffafafrggtel;twtl;r;lrckmmdmkkmdfmkfkmsl;gdrskmdfsgkmdgkmgd,asdjnDLDSKAlnfjl",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    }
    
  ]

};

createInvoice(invoice, "invoice.pdf");
