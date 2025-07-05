import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    // Destructure props
    const { title, description, urls, urlId, author, published, source } = this.props;

    return (
      <div className="col">
        <div className="card h-100 shadow-sm">
          <img 
            src={urls || "https://via.placeholder.com/300x200?text=No+Image"} 
            className="card-img-top img-fluid" 
            alt={title}
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 className="card-title mb-0">{title}</h5>
              <span className="badge bg-danger ms-2">{source}</span>
            </div>
            <p className="card-text flex-grow-1">{description}</p>
            <div className="mt-auto">
              <p className="card-text text-muted small">
                By {author || "Unknown"} • {new Date(published).toLocaleDateString()}
              </p>
              <a
                href={urlId}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm w-100"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;