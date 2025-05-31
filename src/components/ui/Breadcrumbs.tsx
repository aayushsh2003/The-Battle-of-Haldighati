import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  items: {
    label: string;
    path: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb\" className="py-2 px-4 md:px-0">
      <ol className="flex flex-wrap items-center text-sm">
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && (
              <li className="mx-2 text-goldenrod">
                <span aria-hidden="true">›</span>
              </li>
            )}
            <li>
              {index === items.length - 1 ? (
                <span aria-current="page\" className="font-semibold text-maroon">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-saddleBrown hover:text-maroon hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;