import React from "react";
import ImageElement from "@/components/ImageElement";

const textSize = {
  2: "4xl",
  3: "3xl",
  4: "2xl",
  5: "xl",
  6: "lg",
};

// Helper function to decode HTML entities
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

// Recursive function to render list items, supporting nested lists
const renderListItems = (items, isOrdered = false) =>
  isOrdered ? (
    <ol className="list-decimal list-inside my-4">
      {items.map((item, index) => (
        <li key={index} className="my-1">
          {item.content ? (
            <span dangerouslySetInnerHTML={{ __html: item.content }} />
          ) : (
            item.content // Use plain text if no HTML
          )}
          {item.items?.length > 0 && renderListItems(item.items, isOrdered)}
        </li>
      ))}
    </ol>
  ) : (
    <ul className="list-disc list-inside my-4">
      {items.map((item, index) => (
        <li key={index} className="my-1">
          {item.content ? (
            <span dangerouslySetInnerHTML={{ __html: item.content }} />
          ) : (
            item.content // Use plain text if no HTML
          )}
          {item.items?.length > 0 && renderListItems(item.items, isOrdered)}
        </li>
      ))}
    </ul>
  );

// Component to render individual blocks
const RenderBlock = ({ block }) => {
  const { type, data } = block;

  switch (type) {
    case "header": {
      const { level, text } = data;

      // Apply a special style if the 'textVariant' is set to 'call-out'
      const variantClass =
        block.tunes?.textVariant === "call-out"
          ? "bg-yellow-100 p-2 rounded"
          : "";

      return React.createElement(`h${level}`, {
        className: `font-bold my-4 text-${textSize[level]} ${variantClass}`,
        dangerouslySetInnerHTML: { __html: decodeHtml(text) },
      });
    }

    case "paragraph":
      return (
        <p
          className="my-4"
          dangerouslySetInnerHTML={{ __html: decodeHtml(data.text) }}
        ></p>
      );

    case "List":
      return (
        <div className="my-4">
          {renderListItems(data.items, data.style === "ordered")}
        </div>
      );

    case "embed":
      return (
        <div className="my-4">
          <iframe
            className="w-full h-64"
            src={data.embed}
            title={data.caption}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          {data.caption && <p className="text-sm mt-2">{data.caption}</p>}
        </div>
      );

    case "image":
      return (
        <div className="my-4">
          <ImageElement
            className="w-full rounded"
            src={data.file.url}
            alt={data.caption || "Image"}
          />
          {data.caption && <p className="text-sm mt-2">{data.caption}</p>}
        </div>
      );

    default:
      return null;
  }
};

// Component to render the content
const RenderContent = ({ content }) =>
  content?.blocks ? (
    <div className="prose lg:prose-lg">
      {content.blocks.map((block, index) => (
        <RenderBlock block={block} key={index} />
      ))}
    </div>
  ) : null;

export default RenderContent;
