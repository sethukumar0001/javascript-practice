import React, { Component } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

class PdfDownload extends Component {
  exportDataNew = (data) => {

    // here data should be an array json key value must equal to dataKey

    const doc = new jsPDF();
    // It can parse html:
    // <table id="my-table"><!-- ... --></table>
    doc.autoTable({ html: "#my-table" });

    // Or use javascript directly:
    doc.autoTable({
      columnStyles: { europe: { halign: "center" } }, // European countries centered
      body: data,
      columns: [
        { header: "Coupon Id", dataKey: "coupon_id" },
        { header: "Campaign Title", dataKey: "campaign_title" },
        { header: "Full Name", dataKey: "fullName" },
        { header: "Email", dataKey: "email" },
      ],
    });
    doc.save("table.pdf");
  };
  render() {
    return <div></div>;
  }
}

export default PdfDownload;
