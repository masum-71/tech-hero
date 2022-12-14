import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PdfFile from "../../PdfFile/PdfFile";

const Course = () => {
  const course = useLoaderData();

  const { id, name, img, description, price } = course;

  return (
    <>
      <div className="d-flex w-100 justify-content-center align-items-center mb-4">
        <h1 className="text-center me-2">{name}</h1>
        <PDFDownloadLink
          document={<PdfFile course={course}></PdfFile>}
          fileName="file"
        >
          <button className="btn btn-primary">Download PDF</button>
        </PDFDownloadLink>
      </div>
      <div className="card text-center">
        <div className="card-header">
          <img style={{ width: "100%" }} src={img} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/checkout/${id}`} className="btn btn-primary">Purchase</Link>
        </div>
        <div className="card-footer text-muted">
          <p>Price: ${price}</p>
        </div>
      </div>
    </>
  );
};

export default Course;
