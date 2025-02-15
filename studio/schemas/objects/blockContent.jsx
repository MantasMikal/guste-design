import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaLine,
} from "react-icons/fa";
import React from "react";

const baseLargeFontRender = (props) => {
  return (
    <span style={{ fontSize: "20px", fontWeight: "normal" }}>
      {props.children}
    </span>
  );
};

const baseLargerFontRender = (props) => {
  return (
    <span style={{ fontSize: "24px", fontWeight: "normal" }}>
      {props.children}
    </span>
  );
};

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Small", value: "small" },
        { title: "Normal", value: "normal" },
        {
          title: "Large",
          value: "large",
          blockEditor: { render: baseLargeFontRender },
        },
        {
          title: "Larger",
          value: "larger",
          blockEditor: { render: baseLargerFontRender },
        },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Title", value: "title" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "Button",
            name: "button",
            type: "object",
            blockEditor: {
              icon: FaExternalLinkSquareAlt,
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
          {
            title: "External Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: FaExternalLinkAlt,
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "slideshow",
    },
    {
      type: "figure",
    },
    {
      type: "grid",
    },
    {
      type: "video",
    },
    {
      type: "line",
    },
    {
      type: "projectSlideshow",
    },
    {
      type: "newsletterSignup"
    },
    {
      type: "container"
    },
    {
      type: 'hero'
    },
    {
      type: 'customGrid'
    },
    {
      type: 'banner'
    },
  ],
};
